import React, { useState } from "react";
import "./AddressData.css";
import { Dropdown } from "semantic-ui-react";
import {
  getAddresses,
  getUser,
  deleteAddress,
  editAddress,
} from "../reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";
import OpenEditAddModal from "../userModals/EditAddressForm";

const addressDropdownOptions = [
  {
    key: "edit",
    text: "edit",
    value: "edit",
  },
  {
    key: "shipping",
    text: "use as shipping address",
    value: "shipping",
  },
  {
    key: "billing",
    text: "use as billing address",
    value: "billing",
  },
  {
    key: "seller",
    text: "use as seller address",
    value: "seller",
  },
  { key: "delete", text: "delete", value: "delete" },
];

const AddressData = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [address, setAddress] = useState({});
  const addresses = useSelector(getAddresses);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const addressShipping = Object.values(addresses).find(
    (address) => address.userId === user.id && address.status === "shipping"
  );
  console.log(addressShipping, "shiping");

  const addressSeller = Object.values(addresses).find(
    (address) => address.userId === user.id && address.status === "seller"
  );

  const addressBilling = Object.values(addresses).find(
    (address) => address.userId === user.id && address.status === "billing"
  );

  const noSellerDrop = addressDropdownOptions.filter(
    (add) => add.key !== "seller"
  );

  const noShippingDrop = addressDropdownOptions.filter(
    (add) => add.key !== "shipping"
  );
  const noBillingDrop = addressDropdownOptions.filter(
    (add) => add.key !== "billing"
  );

  return (
    <div className="addressDataCont">
      <div style={{ flex: 1 }}>
        <label className="addressDataLabel">Seller Address</label>
        <div className="addressDataBorder ">
          <div className="addressData">
            <div className="actualAddress">
              {addressSeller?.nameF} {""}
              {addressSeller?.nameL} {""}
            </div>
            <div className="actualAddress">{addressSeller?.bisName}</div>
            <div className="actualAddress">{addressSeller?.add}</div>
            <div className="actualAddress">
              {addressSeller?.addT} {""}
              {addressSeller?.city} {""}
              {addressSeller?.state} {""}
              {addressSeller?.zip}
            </div>
            {addressSeller?.phone}
          </div>
          <Dropdown
            selection
            placeholder="OPTIONS"
            value=""
            options={noSellerDrop}
            className="dropdownAddress"
            onChange={(e, { value }) => {
              console.log(value);
              if (value === "edit") {
                setIsVisible(true);
                setAddress(addressSeller);
              } else if (value === "delete") {
                dispatch(deleteAddress({ id: addressSeller.id }));
              } else if (value === "shipping") {
                dispatch(
                  editAddress({
                    ...addressSeller,
                    status: "shipping",
                  })
                );
                dispatch(
                  editAddress({
                    ...addressShipping,
                    status: "seller",
                  })
                );
              } else if (value === "billing") {
                dispatch(
                  editAddress({
                    ...addressSeller,
                    status: "billing",
                  })
                );
                dispatch(
                  editAddress({
                    ...addressBilling,
                    status: "seller",
                  })
                );
              }
            }}
          ></Dropdown>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <label className="addressDataLabel">Shipping Address</label>
        <div className="addressDataBorder ">
          <div className="addressData">
            <div className="actualAddress">
              {addressShipping?.nameF} {""}
              {addressShipping?.nameL} {""}
            </div>
            <div className="actualAddress">{addressShipping?.bisName}</div>
            <div className="actualAddress">{addressShipping?.add}</div>
            <div className="actualAddress">
              {addressShipping?.addT} {""}
              {addressShipping?.city} {""}
              {addressShipping?.state} {""}
              {addressShipping?.zip}
            </div>
            {addressShipping?.phone}
          </div>
          <Dropdown
            selection
            placeholder="OPTIONS"
            value=""
            options={noShippingDrop}
            className="dropdownAddress"
            onChange={(e, { value }) => {
              if (value === "edit") {
                setIsVisible(true);
                setAddress(addressShipping);
              } else if (value === "delete") {
                dispatch(deleteAddress({ id: addressShipping.id }));
              } else if (value === "billing") {
                dispatch(
                  editAddress({
                    ...addressShipping,
                    status: addressBilling.status,
                  })
                );
                dispatch(
                  editAddress({
                    ...addressBilling,
                    status: addressShipping.status,
                  })
                );
              } else if (value === "seller") {
                dispatch(
                  editAddress({
                    ...addressShipping,
                    status: addressSeller.status,
                  })
                );
                dispatch(
                  editAddress({
                    ...addressSeller,
                    status: addressShipping.status,
                  })
                );
              }
            }}
          ></Dropdown>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <label className="addressDataLabel">Billing Address</label>
        <div className="addressDataBorder ">
          <div className="addressData">
            <div className="actualAddress">
              {addressBilling?.nameF} {""}
              {addressBilling?.nameL} {""}
            </div>
            <div className="actualAddress">{addressBilling?.bisName}</div>
            <div className="actualAddress">{addressBilling?.add}</div>
            <div className="actualAddress">
              {addressBilling?.addT} {""}
              {addressBilling?.city} {""}
              {addressBilling?.state} {""}
              {addressBilling?.zip}
            </div>
            {addressBilling?.phone}
          </div>
          <Dropdown
            selection
            placeholder="OPTIONS"
            value=""
            options={noBillingDrop}
            className="dropdownAddress"
            onChange={(e, { value }) => {
              if (value === "edit") {
                setIsVisible(true);
                setAddress(addressBilling);
              } else if (value === "delete") {
                dispatch(deleteAddress({ id: addressBilling.id }));
              } else if (value === "shipping") {
                dispatch(
                  editAddress({
                    ...addressBilling,
                    status: addressShipping.status,
                  })
                );
                dispatch(
                  editAddress({
                    ...addressShipping,
                    status: addressBilling.status,
                  })
                );
              } else if (value === "seller") {
                dispatch(
                  editAddress({
                    ...addressBilling,
                    status: addressSeller.status,
                  })
                );
                dispatch(
                  editAddress({
                    ...addressSeller,
                    status: addressBilling.status,
                  })
                );
              }
            }}
          ></Dropdown>
        </div>
      </div>

      <OpenEditAddModal
        address={address}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};

export default AddressData;

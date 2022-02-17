import React, { useState } from "react";
import "./AddressForm.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addAddress } from "../reducer/userSlice";
import { getUser } from "../reducer/userSlice";
import { Checkbox } from "semantic-ui-react";

const OpenModal = ({ isVisible, setIsVisible }) => {
  if (!isVisible) {
    return <></>;
  }
  return <AddressForm setIsVisible={setIsVisible} />;
};

export default OpenModal;

const AddressForm = ({ setIsVisible }) => {
  const [fName, setFname] = useState("first");
  const [lName, setLname] = useState("last");
  const [bisName, setBisName] = useState("none");
  const [addressOne, setAddressOne] = useState("28112 newport");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("laguna");
  const [state, setState] = useState("ca");
  const [zipCode, setZipCode] = useState("92677");
  const [phone, setPhone] = useState("6193922583");
  const dispatch = useDispatch();

  const [addressStatus, setAddressStatus] = useState("");

  const user = useSelector(getUser);
  console.log("user here", user);

  const onCreateAddress = (e) => {
    e.preventDefault();
    if (
      !fName ||
      !lName ||
      !addressOne ||
      !city ||
      !state ||
      !zipCode ||
      !phone ||
      !user.id ||
      !addressStatus
    ) {
      return;
    }

    dispatch(
      addAddress({
        id: uuidv4(),
        nameF: fName,
        nameL: lName,
        bisName: bisName,
        add: addressOne,
        addT: addressTwo,
        city: city,
        state: state,
        zip: zipCode,
        phone: phone,
        userId: user.id,
        status: addressStatus,
      })
    );

    // fName("");
    // lName("");
    // bisName("");
    // addressOne("");
    // addressTwo("");
    // city("");
    // state("");
    // zipCode("");
    // phone("");

    setIsVisible(false);
  };
  return (
    <div className="modalBackground">
      <form className="addFormModal" onSubmit={onCreateAddress}>
        <label className="modalMainLabel">CREATE NEW ADDRESS</label>
        <div className="fnLnCont">
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <label className="modalLabelN">FIRST NAME</label>
            <input
              className="modalInputN"
              type="text"
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <label className="modalLabelN">LAST NAME</label>
            <input
              className="modalInputN"
              type="text"
              value={lName}
              onChange={(e) => setLname(e.target.value)}
            ></input>
          </div>
        </div>
        <label className="modalLabel">BUSINESS NAME</label>
        <input
          className="modalInput"
          type="text"
          value={bisName}
          onChange={(e) => setBisName(e.target.value)}
        ></input>
        <label className="modalLabel">ADDRESS 1</label>
        <input
          className="modalInput"
          type="text"
          value={addressOne}
          onChange={(e) => setAddressOne(e.target.value)}
        ></input>
        <label className="modalLabel">ADDRESS 2</label>
        <input
          className="modalInput"
          type="text"
          value={addressTwo}
          onChange={(e) => setAddressTwo(e.target.value)}
        ></input>
        <label className="modalLabel">CITY</label>
        <input
          className="modalInput"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <label className="modalLabel">STATE</label>
        <input
          className="modalInput"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        <label className="modalLabel">ZIP CODE</label>
        <input
          className="modalInput"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
        <label className="modalLabel">PHONE</label>
        <input
          style={{ marginBottom: "20px" }}
          className="modalInput"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <div className="checkboxCont">
          <Checkbox
            label="Make Seller Address"
            onChange={() => setAddressStatus("seller")}
            checked={addressStatus === "seller"}
          />
          <br />
          <Checkbox
            label="Make Shipping Address"
            onChange={() => setAddressStatus("shipping")}
            checked={addressStatus === "shipping"}
          />
          <br />
          <Checkbox
            label="Make Billing Address"
            onChange={() => setAddressStatus("billing")}
            checked={addressStatus === "billing"}
          />
        </div>
        <button
          className="modalBtn"
          disabled={
            !fName.length ||
            !lName.length ||
            !addressOne.length ||
            !city.length ||
            !state.length ||
            !phone.length
          }
        >
          CREATE
        </button>
      </form>
    </div>
  );
};

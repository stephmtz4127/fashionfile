import React, { useState } from "react";
import "./AddressForm.css";
import { useDispatch } from "react-redux";
import { editAddress } from "../reducer/userSlice";
import { Button, Icon } from "semantic-ui-react";
const OpenEditAddModal = ({ isVisible, setIsVisible, address }) => {
  if (!isVisible) {
    return <></>;
  }
  return <EditAddressForm setIsVisible={setIsVisible} address={address} />;
};

export default OpenEditAddModal;

const EditAddressForm = ({ address, setIsVisible }) => {
  const [editFname, setEditFname] = useState(address.nameF);
  const [editLname, setEditLname] = useState(address.nameL);
  const [editBisName, setEditBisName] = useState(address.bisName);
  const [editAddressOne, setEditAddressOne] = useState(address.add);
  const [editAddressTwo, setEditAddressTwo] = useState(address.addT);
  const [editCity, setEditCity] = useState(address.city);
  const [editState, setEditState] = useState(address.state);
  const [editZipCode, setEditZipCode] = useState(address.zip);
  const [editPhone, setEditPhone] = useState(address.phone);
  const dispatch = useDispatch();

  const onEditAddress = (e) => {
    e.preventDefault();

    dispatch(
      editAddress({
        id: address.id,
        nameF: editFname,
        nameL: editLname,
        bisName: editBisName,
        add: editAddressOne,
        addT: editAddressTwo,
        city: editCity,
        state: editState,
        zip: editZipCode,
        phone: editPhone,
        userId: address.userId,
        status: address.status,
      })
    );

    setIsVisible(false);
  };
  return (
    <div className="modalBackground" onSubmit={onEditAddress}>
      <form className="addFormModal">
        <div className="closeBtn">
          <Button className="closeBtnIcon" onClick={() => setIsVisible(false)}>
            <Icon className="close" name="close" />
          </Button>
        </div>
        <label className="modalMainLabel">EDIT ADDRESS</label>
        <div className="fnLnCont">
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <label className="modalLabelN">FIRST NAME</label>
            <input
              className="modalInputN"
              type="text"
              value={editFname}
              onChange={(e) => setEditFname(e.target.value)}
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <label className="modalLabelN">LAST NAME</label>
            <input
              className="modalInputN"
              type="text"
              value={editLname}
              onChange={(e) => setEditLname(e.target.value)}
            ></input>
          </div>
        </div>
        <label className="modalLabel">BUSINESS NAME</label>
        <input
          className="modalInput"
          type="text"
          value={editBisName}
          onChange={(e) => setEditBisName(e.target.value)}
        ></input>
        <label className="modalLabel">ADDRESS 1</label>
        <input
          className="modalInput"
          type="text"
          value={editAddressOne}
          onChange={(e) => setEditAddressOne(e.target.value)}
        ></input>
        <label className="modalLabel">ADDRESS 2</label>
        <input
          className="modalInput"
          type="text"
          value={editAddressTwo}
          onChange={(e) => setEditAddressTwo(e.target.value)}
        ></input>
        <label className="modalLabel">CITY</label>
        <input
          className="modalInput"
          type="text"
          value={editCity}
          onChange={(e) => setEditCity(e.target.value)}
        ></input>
        <label className="modalLabel">STATE</label>
        <input
          className="modalInput"
          type="text"
          value={editState}
          onChange={(e) => setEditState(e.target.value)}
        ></input>
        <label className="modalLabel">ZIP CODE</label>
        <input
          className="modalInput"
          type="text"
          value={editZipCode}
          onChange={(e) => setEditZipCode(e.target.value)}
        ></input>
        <label className="modalLabel">PHONE</label>
        <input
          className="modalInput"
          type="text"
          value={editPhone}
          onChange={(e) => setEditPhone(e.target.value)}
        ></input>
        <button className="modalBtn">CREATE</button>
      </form>
    </div>
  );
};

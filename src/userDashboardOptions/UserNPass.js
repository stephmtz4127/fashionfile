import React, { useState } from "react";
import DashHeaderStyle from "./DashHeader";
import "./UserNPass.css";
import {
  getUsers,
  getUser,
  updatePass,
  getLoggedIn,
} from "../reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";

const UserNPass = () => {
  const classes = DashHeaderStyle();
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getLoggedIn);

  const loggedInUser = users[user.id];
  console.log(loggedInUser);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      return;
    }

    if (loggedInUser.password !== oldPass) {
      return;
    }

    if (
      // regex testing
      !/[A-Z]/.test(newPass) ||
      !/[a-z]/.test(newPass) ||
      !/\W+/.test(newPass)
    ) {
      console.log("DOES NOT PASS REGEX TEST");
      return;
    }
    if (newPass.length < 8) {
      return;
    }
    if (newPass !== confirmPass) {
      return;
    }
    console.log("EVERYTHING ABOVE HAS PASSED");

    dispatch(updatePass({ id: loggedInUser.id, password: newPass }));
  };

  return (
    <div className={classes.dashDataCont}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Account Credentials:</label>
        <div className={classes.pinkLabelTwo}>Update your password.</div>
      </div>
      <div className="changePassCont">
        <form className="changePassForm" onSubmit={onSubmitForm}>
          <label className="changePassLabel">Old Password</label>
          <input
            className="changePassInput"
            type="text"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          ></input>
          <label className="changePassLabel">New Password</label>
          <input
            className="changePassInput"
            type="text"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          ></input>
          <label className="changePassLabel">Confirm New Password</label>
          <input
            className="changePassInput"
            type="text"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          ></input>
          <button className="changePassBtn">UPDATE</button>
        </form>
        <div className="reqCont">
          <div className="requirementsLabel">Password Requirements:</div>
          <div className="reqLabels">At least 8 characters</div>
          <div className="reqLabels">Upper and Lower case characters</div>
          <div className="reqLabels">At least one number or symbol</div>
        </div>
      </div>
    </div>
  );
};

export default UserNPass;

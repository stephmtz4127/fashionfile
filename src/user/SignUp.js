import React, { useState } from "react";
import { SignInUPCss } from "./SignInUpCss";
import { useDispatch } from "react-redux";
import { addUser } from "../reducer/userSlice";
import { v4 as uuidv4 } from "uuid";

const SignUpForm = () => {
  const classes = SignInUPCss();
  const [firstName, setFirstName] = useState("STEPH");
  const [lastName, setLastName] = useState("MTZ");
  const [email, setEmail] = useState("STEPH@GMAIL.COM");
  const [password, setPassword] = useState("PASS1234");
  const dispatch = useDispatch();

  const SubmitSignIn = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        id: uuidv4(),
        nameF: firstName,
        nameL: lastName,
        email: email,
        password: password,
      })
    );
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <div className={classes.signInUpCont}>
      <form onSubmit={SubmitSignIn} className={classes.signInUpForm}>
        <label className={classes.singInUpLabels}>FIRST NAME</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={classes.inputForm}
        ></input>
        <label className={classes.singInUpLabels}>LAST NAME</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={classes.inputForm}
        ></input>
        <label className={classes.singInUpLabels}>EMAIL</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.inputForm}
        ></input>
        <label className={classes.singInUpLabels}>PASSWORD</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.inputForm}
        ></input>
        <button
          disabled={
            !firstName.length ||
            !lastName.length ||
            !email.length ||
            (!password.length && "ALL FIELDS REQUIRED")
          }
          className={classes.signInUpBtn}
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

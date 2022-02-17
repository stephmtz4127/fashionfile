import React, { useState } from "react";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import "./ComboSignUpIn.css";

const ComboSignInUp = () => {
  const [toggleForm, setToggleForm] = useState(true);

  return (
    <>
      <div className="formBtnCont">
        <button
          onClick={(e) => setToggleForm(true)}
          className="formsMainBtn"
          style={{ paddingRight: "40px" }}
        >
          LOGIN
        </button>
        <button
          onClick={(e) => setToggleForm(false)}
          className="formsMainBtn"
          style={{ paddingLeft: "40px" }}
        >
          SIGN UP
        </button>
      </div>
      <div className="bothFormsContainer">
        {toggleForm && (
          <div className="forms">
            <LoginForm />
          </div>
        )}
        {!toggleForm && (
          <div className="forms">
            <SignUpForm />
          </div>
        )}
      </div>
    </>
  );
};

export default ComboSignInUp;

import React, { useState } from "react";
import { SignInUPCss } from "./SignInUpCss";
import { useSelector, useDispatch } from "react-redux";
import CheckedBox from "../components/CheckedBox";
import FacebookIcon from "@mui/icons-material/Facebook";
import { getUsers, Login } from "../reducer/userSlice";
import { useNavigate } from "react-router-dom";

const signedInURL = "/user/dashboard/mysettings";

const LoginForm = () => {
  const classes = SignInUPCss();
  const [logEmail, setLogEmail] = useState("STEPH@GMAIL.COM");
  const [logPass, setLogPass] = useState("PASS1234");
  const [error, setError] = useState("");
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(users);
  const submitLogin = (e) => {
    e.preventDefault();

    const foundUser = Object.values(users).find((user) => {
      return user.email === logEmail && user.password === logPass;
    });

    if (foundUser) {
      dispatch(Login({ id: foundUser.id }));
      navigate(signedInURL);
    } else {
      setError("email or password is incorrect");
    }

    // logEmail("");
    // logPass("");
  };
  return (
    <>
      <div className={classes.signInUpCont}>
        {error}
        <form onSubmit={submitLogin} className={classes.signInUpForm}>
          <label className={classes.singInUpLabels}>EMAIL</label>
          <input
            type="email"
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
            className={classes.inputForm}
          ></input>
          <label className={classes.singInUpLabels}>PASSWORD</label>
          <input
            type="password"
            value={logPass}
            onChange={(e) => setLogPass(e.target.value)}
            className={classes.inputForm}
          ></input>
          <div className={classes.CheckForgotContainer}>
            <div style={{ flex: 1 }}>
              <CheckedBox />
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <a
                style={{
                  color: "black",
                }}
                href="forgotpass"
              >
                Forgot Password
              </a>
            </div>
          </div>
          <button
            disabled={!logEmail.length || !logPass.length}
            className={classes.signInUpBtn}
          >
            LOG IN
          </button>
        </form>
        <div>
          <div>
            Or continue with <FacebookIcon className="footerTextSocial" />
          </div>
          <div>By signing in you agree to our</div>
          <div>
            <a href="privary">Privacy Policy</a> and{" "}
            <a href="terms"> Terms of Use</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

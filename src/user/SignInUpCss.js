import { makeStyles } from "@mui/styles";

export const SignInUPCss = makeStyles({
  signInUpCont: {
    height: "600px",
    display: "flex",
    backgroundColor: "rgb(240, 240, 240)",
    flexDirection: "column",
    alignItems: "center",
  },
  signInUpForm: {
    height: "300px",
    width: "380px",
  },
  singInUpLabels: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "left",
    fontSize: "13px",
    paddingTop: "10px",
    paddingBottom: "2px",
    fontWeight: "lighter",
  },
  inputForm: {
    width: "100%",
    height: "40px",
    borderStyle: "none",
    marginBottom: "20px",
  },
  signInUpBtn: {
    width: "100%",
    height: "50px",
    backgroundColor: "black",
    color: "white",
    letterSpacing: "1px",
    wordSpacing: "2px",
    fontWeight: "lighter",
    "&:active": {
      width: "95%",
      height: "48px",
    },
  },
  CheckForgotContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: "13px",
    fontWeight: "lighter",
  },
});

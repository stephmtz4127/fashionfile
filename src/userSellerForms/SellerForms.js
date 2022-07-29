import { makeStyles } from "@material-ui/core";

export const SellerFormStyles = makeStyles({
  sellerFormSelection: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    textAlign: "left",
    marginBottom: "10px",
  },
  sellerFormLabel: {
    fontWeight: "bolder",
    fontSize: "17px",
    marginBottom: "5px",
  },
  sellerFormInput: {
    height: "40px",
    width: "60%",
    border: "solid rgb(202, 200, 200) 1px",
    marginBottom: "10px",
    outline: "none",
  },
  sellerFormBtn: {
    height: "35px",
    width: "110px",
    backgroundColor: "#f49",
    border: "none",
    color: "white",
  },
  storeCredCheckMSG: {
    height: "40px",
    width: "50%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5px",
    color: "gray",
    border: "solid 1px rgb(211, 211, 211)",
    backgroundColor: "rgb(235, 231, 231)",
  },
});

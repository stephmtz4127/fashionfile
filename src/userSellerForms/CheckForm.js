import React from "react";
import { SellerFormStyles } from "./SellerForms";
import { getUser, addPaymentOption } from "../reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";

const CheckForm = () => {
  const classes = SellerFormStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const submitCheckForm = (e) => {
    e.preventDefault();

    dispatch(
      addPaymentOption({
        paymentType: "check",
        user: user.id,
      })
    );
  };
  return (
    <form onSubmit={submitCheckForm} className={classes.sellerFormSelection}>
      <div className={classes.storeCredCheckMSG}>Mail to my address.</div>
      <button style={{ marginTop: "10px" }} className={classes.sellerFormBtn}>
        SUBMIT
      </button>
    </form>
  );
};

export default CheckForm;

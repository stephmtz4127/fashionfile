import React, { useState } from "react";
import { SellerFormStyles } from "./SellerForms";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducer/userSlice";

import { addPaymentOption } from "../reducer/userSlice";

const PaypalForm = () => {
  const classes = SellerFormStyles();
  const [paypalEmail, setPaypalEmail] = useState("stephani4127@gmail.com");
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const submitPaypalOption = (e) => {
    e.preventDefault();
    if (!paypalEmail) {
      return;
    }

    dispatch(
      addPaymentOption({
        paymentType: "paypal",
        // paymenttype as sort of unique id
        email: paypalEmail,
        user: user.id,
      })
    );
  };

  return (
    <form onSubmit={submitPaypalOption} className={classes.sellerFormSelection}>
      <label className={classes.sellerFormLabel}>PAYPAL EMAIL ADDRESS</label>
      <input
        className={classes.sellerFormInput}
        placeholder="Enter Paypal Email"
        type="email"
        value={paypalEmail}
        onChange={(e) => setPaypalEmail(e.target.value)}
      ></input>
      <button type="submit" className={classes.sellerFormBtn}>
        SUBMIT
      </button>
    </form>
  );
};

export default PaypalForm;

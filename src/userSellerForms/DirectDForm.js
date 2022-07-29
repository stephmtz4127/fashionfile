import React, { useState } from "react";
import { SellerFormStyles } from "./SellerForms";
import { useDispatch, useSelector } from "react-redux";
import { getUser, addPaymentOption } from "../reducer/userSlice";

const DirectDepositForm = () => {
  const classes = SellerFormStyles();
  const [bankName, setBankName] = useState("");
  const [acctNumber, setAcctNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const submitDirectDForm = (e) => {
    e.preventDefault();

    if (!bankName || !acctNumber || !routingNumber) {
      return;
    }

    dispatch(
      addPaymentOption({
        paymentType: "directDeposit",
        bank: bankName,
        account: acctNumber,
        routing: routingNumber,
        user: user.id,
      })
    );
  };

  return (
    <form onSubmit={submitDirectDForm} className={classes.sellerFormSelection}>
      <label className={classes.sellerFormLabel}>BANK NAME</label>
      <input
        className={classes.sellerFormInput}
        placeholder="Enter your bank's name."
        type="text"
        value={bankName}
        onChange={(e) => setBankName(e.target.value)}
      ></input>
      <label className={classes.sellerFormLabel}>ACCOUNT NUMBER</label>
      <input
        className={classes.sellerFormInput}
        placeholder="Enter your bank account number."
        type="text"
        value={acctNumber}
        onChange={(e) => setAcctNumber(e.target.value)}
      ></input>
      <label className={classes.sellerFormLabel}>ROUTING NUMBER</label>
      <input
        className={classes.sellerFormInput}
        placeholder="Enter your bank account routing number."
        type="text"
        value={routingNumber}
        onChange={(e) => setRoutingNumber(e.target.value)}
      ></input>
      <button type="submit" className={classes.sellerFormBtn}>
        SUBMIT
      </button>
    </form>
  );
};

export default DirectDepositForm;

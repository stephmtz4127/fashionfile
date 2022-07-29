import React from "react";
import { SellerFormStyles } from "./SellerForms";
import { useSelector, useDispatch } from "react-redux";
import { getUser, addPaymentOption } from "../reducer/userSlice";

const StoreCredForm = () => {
  const classes = SellerFormStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const submitStoreCForm = (e) => {
    e.preventDefault();

    dispatch(
      addPaymentOption({
        paymentType: "storeCredit",
        user: user.id,
      })
    );
  };
  return (
    <form onSubmit={submitStoreCForm} className={classes.sellerFormSelection}>
      <div className={classes.storeCredCheckMSG}>
        Use payment towards purchases.
      </div>
      <button
        type="submit"
        style={{ marginTop: "10px" }}
        className={classes.sellerFormBtn}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default StoreCredForm;

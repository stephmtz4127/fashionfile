import React from "react";
import DashHeaderStyle from "./DashHeader";

const PaymentOptions = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataCont}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Payment Options:</label>
      </div>
    </div>
  );
};

export default PaymentOptions;

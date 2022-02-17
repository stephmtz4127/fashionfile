import React from "react";
import DashHeaderStyle from "../userDashboardOptions/DashHeader";

const MyPurchases = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataContTwo}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>My Purchases:</label>
        <div className={classes.pinkLabelTwo}>
          Organize your billing, shipping and seller addresses.
        </div>
      </div>
    </div>
  );
};

export default MyPurchases;

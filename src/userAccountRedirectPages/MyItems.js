import React from "react";
import DashHeaderStyle from "../userDashboardOptions/DashHeader";

const MyItems = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataContTwo}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>My Items:</label>
        <div className={classes.pinkLabelTwo}>
          Organize your billing, shipping and seller addresses.
        </div>
      </div>
    </div>
  );
};

export default MyItems;

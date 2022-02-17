import React from "react";
import DashHeaderStyle from "../userDashboardOptions/DashHeader";

const Alerts = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataContTwo}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Alerts:</label>
        <div className={classes.pinkLabelTwo}>
          Organize your billing, shipping and seller addresses.
        </div>
      </div>
    </div>
  );
};

export default Alerts;

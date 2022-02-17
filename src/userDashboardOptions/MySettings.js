import React from "react";
import DashHeaderStyle from "./DashHeader";

const MySettings = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataCont}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Fashionphile Dashboard:</label>
        <label className={classes.pinkLabelTwo}>
          View and manage all the items you buy and sell from us.
        </label>
      </div>
    </div>
  );
};

export default MySettings;

import React from "react";
import DashHeaderStyle from "./DashHeader";

const ActiveQuotes = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataCont}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Active Quotes </label>
      </div>
    </div>
  );
};

export default ActiveQuotes;

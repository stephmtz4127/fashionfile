import React from "react";
import DashHeaderStyle from "./DashHeader";

const EmailPreferences = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataCont}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Email Preferences:</label>
      </div>
    </div>
  );
};

export default EmailPreferences;

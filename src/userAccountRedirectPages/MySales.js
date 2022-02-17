import React from "react";
import DashHeaderStyle from "../userDashboardOptions/DashHeader";

const MySales = () => {
  const classes = DashHeaderStyle();
  return (
    <div className={classes.dashDataContTwo}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>My Sales:</label>
        <div className={classes.pinkLabelTwo}>
          Organize your billing, shipping and seller addresses.
        </div>
      </div>
    </div>
  );
};

export default MySales;

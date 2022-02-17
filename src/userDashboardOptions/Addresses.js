import React, { useState } from "react";
import "./Addresses.css";
import OpenModal from "../userModals/AddressForm";
import DashHeaderStyle from "./DashHeader";
import AddressData from "../userModals/AddressData";
import DeleteBtn from "../deleteBtn/DeleteBtn";

const Addresses = () => {
  const classes = DashHeaderStyle();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className={classes.dashDataCont}>
        <div className={classes.dashPinkHeader}>
          <label className={classes.pinkLabel}>Addresses:</label>
          <div className={classes.pinkLabelTwo}>
            Organize your billing, shipping and seller addresses.
          </div>
        </div>
        <div className="btnDataCont">
          <button className="createAddBtn" onClick={() => setIsVisible(true)}>
            CREATE NEW
          </button>
          <DeleteBtn />
          <div>
            <AddressData />
          </div>
        </div>
      </div>

      <OpenModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  );
};

export default Addresses;

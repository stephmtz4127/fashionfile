import React from "react";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="loggedInUserDashCont">
      <div style={{ width: 250 }}>
        <div className="dashOptionsCont">
          <Link to="mysettings" className="userDashlabels">
            My Settings
          </Link>
          <Link to="userNPass" className="userDashlabels">
            Username/ Password
          </Link>
          <Link to="addresses" className="userDashlabels">
            Addresses
          </Link>
          <Link to="paymentOptions" className="userDashlabels">
            Payment Options
          </Link>
          <Link
            to="emailPreferences"
            className="userDashlabels"
            style={{ borderBottom: "none" }}
          >
            Email Preferences
          </Link>
        </div>
        <div
          className="dashOptionsCont"
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          <label
            className="userDashlabels"
            style={{ backgroundColor: "rgb(245, 245, 245)" }}
          >
            Seller Stats
          </label>
          <Link
            to="activeQuotes"
            className="userDashlabels"
            style={{ borderBottom: "none" }}
          >
            Active Quotes
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="loginDashCont">
      <div style={{ width: 250 }}>
        <div className="dashOptionsCont">
          <Link to="mysettings" className="loginDashlabels">
            My Settings
          </Link>
          <Link to="userNPass" className="loginDashlabels">
            Username/ Password
          </Link>
          <Link to="addresses" className="loginDashlabels">
            Addresses
          </Link>
          <Link to="paymentOptions" className="loginDashlabels">
            Payment Options
          </Link>
          <Link
            to="emailPreferences"
            className="loginDashlabels"
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
            className="loginDashlabels"
            style={{ backgroundColor: "rgb(245, 245, 245)" }}
          >
            Seller Stats
          </label>
          <Link
            to="activeQuotes"
            className="loginDashlabels"
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

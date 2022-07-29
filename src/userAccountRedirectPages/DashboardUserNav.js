import React from "react";
import "./DashboardUserNav.css";
import { Link, useLocation } from "react-router-dom";

const DashboardUserNav = () => {
  const location = useLocation();

  const isActive = (url) => {
    return location.pathname.startsWith(url) ? "userNavTabOptionsActive" : "";
  };
  return (
    <div className="iner">
      <div className="borderdiv">
        <div className="userNavTabs">
          <Link
            to="/user/dashboard/mysettings"
            className={`userNavTabOptions ${isActive("/user/dashboard")}`}
          >
            Dashboard
          </Link>
          <Link
            to="/user/items"
            className={`userNavTabOptions ${isActive("/user/items")}`}
          >
            My Items
          </Link>
          <Link
            to="/user/purchases"
            className={`userNavTabOptions ${isActive("/user/purchases")}`}
          >
            My Purchases
          </Link>
          <Link
            to="/user/alerts"
            className={`userNavTabOptions ${isActive("/user/alerts")}`}
          >
            Alerts
          </Link>
          <Link
            to="/user/sales"
            className={`userNavTabOptions ${isActive("/user/sales")}`}
          >
            My Sales
          </Link>
          {/* <div className="extraDivBorderBottom"></div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardUserNav;

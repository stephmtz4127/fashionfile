import React from "react";
import { Outlet } from "react-router-dom";
import DashboardUserNav from "./userAccountRedirectPages/DashboardUserNav";
import { useLocation } from "react-router-dom";

const dontshowUserNav = ["dashboardNav"];

const UserRouter = () => {
  const location = useLocation();

  return (
    <div>
      {!dontshowUserNav.includes(location.pathname) && <DashboardUserNav />}
      <Outlet />
    </div>
  );
};

export default UserRouter;

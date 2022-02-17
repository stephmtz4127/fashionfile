import React from "react";
import "./NavTwo.css";
import DropDownMenu from "./DropDownMenuComp";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Logout, getLoggedIn } from "../reducer/userSlice";
import { DesignerDropdown } from "./DesignerDropdown";

const formsToggle = "login";

const NavTwo = () => {
  const preventDefault = (e) => e.preventDefault();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getLoggedIn);

  const logoutBtn = () => {
    dispatch(Logout({ loggedIn: false }));
    navigate(formsToggle);
  };
  return (
    <div className="navContainer">
      <div className="userNav">
        <DropDownMenu
          id="sell-drop-button"
          menuList={
            <MenuList style={{ outline: "none" }} onClick={preventDefault}>
              <MenuItem>
                <Link className="dropDownItems" to="/submit-quote">
                  Submit Item for Quote
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="dropDownItems" to="/virtualAppointment">
                  Schedule a Virtual Appointment
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="dropDownItems" to="/white-glove">
                  White Glove Pick Up
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="dropDownItems" to="/sellLoc">
                  Find a Selling Location
                </Link>
              </MenuItem>
            </MenuList>
          }
        >
          <Link className="userLinks" to="/sell">
            Sell
          </Link>
        </DropDownMenu>

        <Link className="userLinks" to="/following">
          Following
        </Link>
        {isLoggedIn && (
          <DropDownMenu
            id="account-drop-button"
            menuList={
              <MenuList style={{ outline: "none" }}>
                <MenuItem>
                  <Link
                    to="/user/dashboard/mysettings"
                    className="dropDownItems"
                  >
                    Dashboard
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/user/alerts" className="dropDownItems">
                    Alerts
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/user/purchases" className="dropDownItems">
                    My Purchases
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/user/sales" className="dropDownItems">
                    My Sales
                  </Link>
                </MenuItem>
                <MenuItem onClick={logoutBtn} className="dropDownItems">
                  Sign Out
                </MenuItem>
              </MenuList>
            }
          >
            <label className="userLinks"> My Account</label>
          </DropDownMenu>
        )}
        {!isLoggedIn && (
          <Link className="userLinks" to="login">
            Sign In
          </Link>
        )}
        <Link className="userLinks" to="/shoppingBag">
          Shopping Bag
        </Link>
      </div>
      <div className="bisNameSearchBarCont">
        <Link to="/" className="bissName">
          FASHIONPHILE
        </Link>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="emtCont">
        <div className="homeNav">
          <Link
            to="/newArrivals"
            className="navLinks"
            style={{ marginLeft: 0 }}
          >
            New Arrivals
          </Link>
          <DesignerDropdown />

          <Link to="/bags" className="navLinks">
            Bags
          </Link>
          <Link to="/sale" className="navLinks">
            Sale
          </Link>
        </div>
        <div className="emtDiv"></div>
      </div>
    </div>
  );
};

export default NavTwo;

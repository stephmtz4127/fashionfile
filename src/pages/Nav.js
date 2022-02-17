// import React, { useState } from "react";
// import "./Nav.css";
// import SearchBar from "../components/SearchBar";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { MenuList } from "@mui/material";

// const Nav = () => {
//   const [anchorEl, setAnchorEl] = useState(false);
//   const open = Boolean(anchorEl);

//   console.log("anchorEl", anchorEl);

//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget);
//   };

//   const handleClose = () => {
//     console.log("handleClose");
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <div className="navContainer">
//         <div className="userNav">
//           <Button
//             id="demo-positioned-button"
//             aria-controls="demo-positioned-menu"
//             aria-haspopup="true"
//             aria-expanded={
//               open && anchorEl.id === "demo-positioned-button"
//                 ? "true"
//                 : undefined
//             }
//             onMouseEnter={handleClick}
//           >
//             <Link className="userLinks" to="/sell">
//               Sell
//             </Link>
//           </Button>
//           <Menu
//             id="demo-positioned-menu"
//             aria-labelledby="demo-positioned-button"
//             anchorEl={anchorEl}
//             open={open && anchorEl.id === "demo-positioned-button"}
//             onClose={handleClose}
//             MenuListProps={{
//               onMouseLeave: handleClose,
//             }}
//           >
//             <MenuList>
//               <MenuItem>Submit Item for Quote</MenuItem>
//               <MenuItem>Schedule a Virtual Appointment</MenuItem>
//               <MenuItem>White Glove Pick Up</MenuItem>
//               <MenuItem>Find a Selling Location</MenuItem>
//             </MenuList>
//           </Menu>

//           <Link
//             className="userLinks"
//             to="/following"
//             onMouseEnter={handleClose}
//           >
//             Following
//           </Link>

//           <Button
//             id="demo-positioned-button1"
//             aria-controls="demo-positioned-menu1"
//             aria-haspopup="true"
//             aria-expanded={
//               open && anchorEl.id === "demo-positioned-button1"
//                 ? "true"
//                 : undefined
//             }
//             onMouseEnter={handleClick}
//           >
//             <Link className="userLinks" to="/account">
//               My Account
//             </Link>
//           </Button>
//           <Menu
//             id="demo-positioned-menu1"
//             aria-labelledby="demo-positioned-button1"
//             anchorEl={anchorEl}
//             open={open && anchorEl.id === "demo-positioned-button1"}
//             onClose={handleClose}
//             MenuListProps={{
//               onMouseLeave: handleClose,
//             }}
//           >
//             <MenuList>
//               <MenuItem>Dashboard</MenuItem>
//               <MenuItem>Alerts</MenuItem>
//               <MenuItem>My Purchases</MenuItem>
//               <MenuItem>My Sales</MenuItem>
//               <MenuItem>Sign Out</MenuItem>
//             </MenuList>
//           </Menu>

//           <Link className="userLinks" to="/shoppingBag">
//             Shopping Bag
//           </Link>
//         </div>
//         <div className="bisNameSearchBarCont">
//           <Link to="/" className="bissName">
//             FASHIONPHILE
//           </Link>
//           <div>
//             <SearchBar />
//           </div>
//         </div>
//         <div className="emtCont">
//           <div className="homeNav">
//             <Link
//               to="/newArrivals"
//               className="navLinks"
//               style={{ marginLeft: 0 }}
//             >
//               New Arrivals
//             </Link>
//             <Link to="/designers" className="navLinks">
//               Designers
//             </Link>
//             <Link to="/bags" className="navLinks">
//               Bags
//             </Link>
//             <Link to="/sale" className="navLinks">
//               Sale
//             </Link>
//           </div>
//           <div className="emtDiv"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;

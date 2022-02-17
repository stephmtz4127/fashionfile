import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

const DropDownMenu = ({ id, menuList, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id={id}
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={handleClick}
      >
        {children}
      </Button>
      <Menu
        id={id}
        onClick={handleClose}
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        {menuList}
      </Menu>
    </>
  );
};

export default DropDownMenu;

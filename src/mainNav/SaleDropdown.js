import React from "react";
import { DropdownMainCss } from "./DropdownMainCss";
import { Dropdown, Menu } from "semantic-ui-react";
import { saleAmount } from "../data/Data";
import { useNavigate } from "react-router-dom";

export const SaleDropdown = () => {
  const classes = DropdownMainCss();
  const navigate = useNavigate();
  const options = [];

  saleAmount.forEach((sale, index) => {
    options.push({
      key: index,
      text: sale.text,
      value: sale.route,
    });
  });
  return (
    <>
      <Menu
        compact
        style={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <Dropdown
          simple
          text="Sale"
          value={""}
          className={classes.navLinks}
          options={options.sort((a, b) => a.text - b.text)}
          onChange={(e, data) => {
            navigate(data.value);
            console.log(data.value, "data.value");
          }}
          icon="none"
        />
      </Menu>
    </>
  );
};

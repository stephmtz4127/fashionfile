import React from "react";
import { DropdownMainCss } from "./DropdownMainCss";
import { Dropdown, Menu } from "semantic-ui-react";
import { brands } from "../data/Data";

export const DesignerDropdown = () => {
  const classes = DropdownMainCss();

  const options = [];

  brands.forEach((brand, index) => {
    options.push({
      key: index,
      text: brand,
      value: index,
    });
  });

  console.log("options", options);
  return (
    <>
      <Menu
        compact
        style={{
          border: "none",
          boxShadow: "none",
          // marginTop: 6,
        }}
      >
        <Dropdown
          simple
          text="Designers"
          className={classes.navLinks}
          options={options}
          icon="none"
        />
      </Menu>
    </>
  );
};

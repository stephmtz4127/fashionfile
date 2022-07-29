import React from "react";
import { DropdownMainCss } from "./DropdownMainCss";
import { Dropdown, Menu } from "semantic-ui-react";
import { brands } from "../data/Data";
import { useNavigate } from "react-router-dom";

export const DesignerDropdown = () => {
  const classes = DropdownMainCss();
  const navigate = useNavigate();

  const options = [];

  brands.forEach((brand, index) => {
    options.push({
      key: index,
      text: brand.text,
      value: brand.route,
      // content?
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
        }}
      >
        <Dropdown
          className={classes.navLinks}
          simple
          text="Designers"
          value={""}
          options={options.sort((a, b) => a.text.localeCompare(b.text))}
          onChange={(e, data) => {
            navigate(data.value);
            console.log(data.value, "designer drop down value");
          }}
          icon="none"
        />
      </Menu>
    </>
  );
};

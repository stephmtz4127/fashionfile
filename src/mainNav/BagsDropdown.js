import React from "react";
import { DropdownMainCss } from "./DropdownMainCss";
import { Dropdown, Menu } from "semantic-ui-react";
import { bagStyles } from "../data/Data";
import { useNavigate } from "react-router-dom";

export const BagsDropdown = () => {
  const classes = DropdownMainCss();
  const navigate = useNavigate();

  const options = [];
  bagStyles.forEach((bag, index) => {
    options.push({
      key: index,
      text: bag.text,
      value: bag.route,
    });
  });
  console.log(options, "opvalue");

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
          text="Bags"
          className={classes.navLinks}
          value={""}
          options={options.sort((a, b) => a.text.localeCompare(b.text))}
          onChange={(e, data) => {
            navigate(data.value);
            console.log(data.value, "value");
          }}
          icon="none"
        />
      </Menu>
    </>
  );
};

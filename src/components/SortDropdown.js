import React from "react";
import "./SortDropdown.css";

const SortDropdown = ({ setDropValue }) => {
  return (
    <div className="sortDropCont">
      Sort by
      <select
        onChange={(e) => {
          setDropValue(e.target.value);
          console.log(e.target.value, "e");
        }}
        style={{ flex: 1, marginLeft: "6px" }}
        className="sortDropSelect"
      >
        <option>Most Popular</option>
        <option>High to low</option>
        <option>Low to high</option>
        <option>Alphabetical (a-z)</option>
        <option>Alphabetical (z-a)</option>
      </select>
    </div>
  );
};
export default SortDropdown;

import React from "react";
import { useSelector } from "react-redux";
import { getSearchTerms } from "../reducer/searchSlice";
import { brands, itemListing } from "../data/Data";

const Designers = () => {
  const terms = useSelector(getSearchTerms);

  return (
    <>
      <h1>HERE IS THE designers PAGE</h1>
      {brands
        .filter((item) =>
          item.toLocaleLowerCase().includes(terms.toLocaleLowerCase())
        )
        .map((item) => {
          return (
            <div style={{ marginTop: "40px" }}>
              <div>{item}</div>
            </div>
          );
        })}
    </>
  );
};
export default Designers;

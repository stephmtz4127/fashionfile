import React, { useState } from "react";
import "../pages/Bags.css";
import { Button, Icon } from "semantic-ui-react";
import { mensProducts } from "../data/Data";
import SortDropdown from "../components/SortDropdown";

const MensPage = () => {
  const [dropValue, setDropValue] = useState("");
  let mensBags = Object.values(mensProducts);
  // sorting
  if (dropValue === "Alphabetical (a-z)") {
    mensBags.sort((a, b) => a.brand.localeCompare(b.brand));
  } else if (dropValue === "Alphabetical (z-a)") {
    mensBags.sort((a, b) => a.brand.localeCompare(b.brand)).reverse();
  } else if (dropValue === "Low to high") {
    mensBags.sort((a, b) => a.price - b.price);
  } else if (dropValue === "High to low") {
    mensBags.sort((a, b) => a.price - b.price).reverse();
  }

  return (
    <>
      <div className="bagsHeader">Mens </div>
      <>
        <SortDropdown setDropValue={setDropValue} />
      </>
      <div className="bagsCont">
        {mensBags.map((item) => {
          return (
            <>
              <div className="bagSquare">
                <div className="heartCont">
                  <Button className="heartBtn">
                    <Icon
                      name="heart outline"
                      className="heartIcon"
                      size="large"
                    />
                  </Button>
                </div>
                <img
                  style={{ height: "300px", width: "300px" }}
                  alt="bagpics"
                  src={item.image}
                />
                <div className="brandName">{item.brand}</div>
                <div>{item.label}</div>
                <div className="bagPrice">
                  {"$"}
                  {item.price}
                </div>
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  {item.discountText}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MensPage;

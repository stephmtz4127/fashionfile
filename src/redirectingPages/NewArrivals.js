import React, { useState } from "react";
import "../pages/Bags.css";
import SortDropdown from "../components/SortDropdown";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { newBagProducts } from "../data/Data";

const NewArrivalsPage = () => {
  const [dropValue, setDropValue] = useState("");
  const products = Object.values(newBagProducts);

  // sort dropdown
  if (dropValue === "Alphabetical (a-z)") {
    products.sort((a, b) => a.brand.localeCompare(b.brand));
  } else if (dropValue === "Alphabetical (z-)") {
    products.sort((a, b) => a.brand.localeCompare(b.brand).reverse());
  } else if (dropValue === "Low to high") {
    products.sort((a, b) => a.price - b.price);
  } else if (dropValue === "High to low") {
    products.sort((a, b) => a.price - b.price).reverse();
  }
  return (
    <>
      <div className="bagsHeader">New Arrivals</div>
      <>
        <SortDropdown setDropValue={setDropValue} />
      </>
      <div className="bagsCont">
        {products.map((item) => {
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
                <Link to={`/bag/${item.labelText}`} style={{ color: "black" }}>
                  <img
                    style={{ height: "300px", width: "300px" }}
                    alt="bagpics"
                    src={item.image}
                  />
                  <div className="brandName">{item.brand}</div>
                  <div style={{ width: "370px" }}>{item.label}</div>
                </Link>
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
export default NewArrivalsPage;

import React from "react";
import "./Bags.css";
import { itemListing } from "../data/Data";
import { Button, Icon } from "semantic-ui-react";
const Bags = () => {
  return (
    <>
      <div className="bagsCont">
        {Object.values(itemListing).map((item) => {
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
                <div className="bagPrice">{item.price}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Bags;

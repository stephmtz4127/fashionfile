import React from "react";
import DashHeaderStyle from "../userDashboardOptions/DashHeader";
import { useSelector, useDispatch } from "react-redux";
import "../pages/Bags.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { getItems, removeFavoriteItem } from "../reducer/itemSlice";

const MyItems = () => {
  const classes = DashHeaderStyle();
  const bag = useSelector(getItems);
  const items = Object.values(bag);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeFavoriteItem(item.labelText));
  };

  return (
    <div className={classes.dashDataContTwo}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>My Items:</label>
        <div className={classes.pinkLabelTwo}>
          Organize your billing, shipping and seller addresses.
        </div>
      </div>
      <br />
      <div className="bagsCont">
        {items.map((item) => {
          return (
            <>
              <div className="bagSquare">
                <div className="heartCont">
                  <button className="heartBtn" onClick={() => removeItem(item)}>
                    <Icon
                      name="heart outline"
                      className="heartIcon"
                      size="large"
                    />
                  </button>
                </div>
                <Link to={`/bag/${item.labelText}`} style={{ color: "black" }}>
                  <img
                    style={{ height: "300px", width: "300px" }}
                    alt="bagpics"
                    src={item.image}
                  />
                  <div className="brandName">{item.brand}</div>
                  <div>{item.label}</div>
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
    </div>
  );
};

export default MyItems;

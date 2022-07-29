import React, { useState } from "react";
import "./Bags.css";
import { itemListing } from "../data/Data";
import { Icon } from "semantic-ui-react";
import SortDropdown from "../components/SortDropdown";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSearchTerms } from "../reducer/searchSlice";
import {
  addFavoriteItem,
  removeFavoriteItem,
  getItems,
} from "../reducer/itemSlice";

const Bags = () => {
  const [dropValue, setDropValue] = useState("");
  const { id, group } = useParams();
  console.log(id, "id", group, "group");
  const terms = useSelector(getSearchTerms);
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  let products = Object.values(itemListing);

  // FILTERING
  if (id) {
    if (group === "styles") {
      products = products.filter((bag) => {
        return bag.type === id;
      });
    }
    if (group === "designers") {
      products = products.filter((brand) => {
        return brand.brandText === id;
      });
    }
    if (group === "discount") {
      if (id === "all") {
        products = products.filter((item) => {
          return item.discount;
        });
      } else {
        products = products.filter((item) => {
          return item.discount === Number(id);
        });
      }
    }
  }

  // search bar filter
  if (terms) {
    products = products.filter((product) => {
      return (
        product.brand.toLocaleLowerCase().includes(terms.toLocaleLowerCase()) ||
        product.type.toLowerCase().includes(terms.toLowerCase())
      );
    });
  }
  // sort dropdown
  if (dropValue === "Alphabetical (a-z)") {
    products.sort((a, b) => a.brand.localeCompare(b.brand));
  } else if (dropValue === "Alphabetical (z-a)") {
    products.sort((a, b) => a.brand.localeCompare(b.brand)).reverse();
  } else if (dropValue === "Low to high") {
    products.sort((a, b) => a.price - b.price);
  } else if (dropValue === "High to low") {
    products.sort((a, b) => a.price - b.price).reverse();
  }

  const addToMyItems = (item) => {
    if (items[item.labelText]) {
      dispatch(removeFavoriteItem(item.labelText));
    } else {
      dispatch(addFavoriteItem(item));
    }
  };

  return (
    <>
      <div className="bagsHeader">Bags</div>
      <>
        <SortDropdown setDropValue={setDropValue} />
      </>
      <div className="bagsCont">
        {products.map((item) => {
          return (
            <>
              <div className="bagSquare">
                <div className="heartCont">
                  <button
                    className="heartBtn"
                    onClick={() => addToMyItems(item)}
                  >
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
    </>
  );
};

export default Bags;

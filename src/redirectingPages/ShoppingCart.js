import React from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import { getBags, removeBag } from "../reducer/cartSlice";
import LockIcon from "@mui/icons-material/Lock";
import numeral from "numeral";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const bags = useSelector(getBags);
  console.log(bags, "bags ids or what");

  const product = Object.values(bags);

  const deleteBag = (labelText) => {
    dispatch(removeBag(labelText));
  };

  //   subtotal math
  let subtotal = 0;
  product.forEach((bag) => {
    subtotal += bag.price;
  });

  // tax math
  let taxTotal = subtotal * 0.085;

  // discount math
  let discountTotal = 0;
  product.forEach((bag) => {
    if (bag.discount) {
      const discount = bag.price * (bag.discount / 100);
      discountTotal += discount;
    }
  });
  //   total math
  let finalTotal = subtotal - discountTotal + taxTotal;

  return (
    <div className="cartCont">
      <div className="shoppingBag">
        <div className="shoppingText">Shopping Bag</div>
        {product.map((bag) => {
          return (
            <div className="bagImgTextCont">
              <div className="bagImage">
                <img
                  alt="bagImg"
                  src={bag.image}
                  style={{ height: "200px", width: "200px" }}
                ></img>
              </div>
              <div className="bagText">
                <div className="bagBrand">{bag.brand}</div>
                <div>{bag.label}</div>
                <div className="bagPrice">${bag.price}</div>
                <div className="bagDiscount">{bag.discountText}</div>
                <button
                  className="removeBagBtn"
                  onClick={() => {
                    deleteBag(bag.labelText);
                  }}
                >
                  Remove item
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="orderSummary">
        <div className="summaryCont">
          <div className="summary">Order Summary</div>
          <div style={{ display: "flex", marginTop: "40px" }}>
            <div style={{ flex: 3 }}>Subtotal:</div>{" "}
            <div style={{ flex: 1 }}></div>{" "}
            <div style={{ flex: 1 }}>{numeral(subtotal).format("$0,0.00")}</div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ flex: 3 }}>Discounts: </div>{" "}
            <div style={{ flex: 1 }}></div>
            <div style={{ flex: 1 }}>
              {numeral(discountTotal).format("$0,0.00")}
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ flex: 3 }}>Estimated Tax:</div>{" "}
            <div
              style={{
                flex: 1,
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              8.5%
            </div>
            {/* <div style={{ flex: 1 }}> </div> */}
            <div style={{ flex: 1 }}>{numeral(taxTotal).format("$0,0.00")}</div>
          </div>
          <div style={{ display: "flex", marginTop: "0px" }}>
            <div
              style={{
                flex: 1,
                marginTop: "40px",
                borderBottom: "solid black 1px",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ flex: 3 }}>Estimated Total: </div>{" "}
            <div style={{ flex: 1 }}></div>{" "}
            <div style={{ flex: 1 }}>
              {numeral(finalTotal).format("$0,0.00")}
            </div>
          </div>
          <button className="checkoutBtn">CHECKOUT</button>
          <div className="shippingSalesText">
            Final shipping fees and sales tax are calculated at the time of
            checkout.
          </div>
          <div className="layawayCheckoutText">
            Pay over 60 days with Reserve Luxury Layaway at checkout.
          </div>
          <div className="securePayment">
            Secure payment <LockIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

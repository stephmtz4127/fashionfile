import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="MainContainer">
      <img className="homeImg" src="homeImg.jpg" alt="homeimg"></img>
      <div className="textBtnCont">
        <div className="text1Img">ULTRA - LUXURY</div>
        <div className="text2Img">Gift Guides</div>
        <div className="btnCss">
          <Link
            to="bags"
            style={{ marginRight: "10px" }}
            className="mainImgBtn"
          >
            SHOP WOMENS
          </Link>
          <Link
            to="/gift-guide-for-him"
            className="mainImgBtn"
            style={{ paddingRight: "60px", paddingLeft: "60px" }}
          >
            SHOP MENS
          </Link>
        </div>
      </div>
      <h2 className="ftLabel">Featured Items</h2>
      <div className="featureImgCont">
        <img
          className="ft2Img"
          src="main2.jpg"
          alt="2ndImg"
          style={{ marginRight: "20px" }}
        ></img>
        <img
          className="ft2Img"
          src="main3.jpg"
          alt="3rdImg"
          style={{ marginLeftt: "20px" }}
        ></img>
      </div>
      <div className="ftLabel2">
        <div style={{ flex: 1 }}>
          <span className="ftText">The Ultra-Luxe Edit</span>
        </div>
        <div style={{ flex: 1 }}>
          <span className="ftText">The Most Popular</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

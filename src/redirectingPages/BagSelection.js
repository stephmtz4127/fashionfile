import React, { useState } from "react";
import "./BagSelection.css";
import { useParams, useNavigate } from "react-router-dom";
import { itemListing } from "../data/Data";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch } from "react-redux";
import { addBagIdText } from "../reducer/cartSlice";

const BagSelection = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = Object.values(itemListing);

  let bagSelection;

  if (id) {
    bagSelection = products.find((bag) => {
      return bag.labelText === id;
    });
  }

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addToCartRoute = () => {
    navigate("/shoppingCart");
    dispatch(addBagIdText(bagSelection));
    console.log(bagSelection, "here is add to cart id");
  };
  return (
    <>
      <div className="bagSelectCont">
        <div className="bagImgCont">
          <img
            style={{ height: "600px", width: "600px" }}
            alt="bagpics"
            src={bagSelection.image}
          ></img>
          <div className="certificationCont">
            <div className="checkIcon">
              <AssignmentTurnedInIcon fontSize="large" />
            </div>

            <div className="certText">Certified Authentic</div>
            <div className="guaranteeText">
              We guarantee this is an authentic Prada item or 100% of your money
              back.
              <div style={{ textDecoration: "underline" }}>
                Learn more about our authentication process.
              </div>
            </div>
          </div>
          <div className="sellLuxCont">
            <div className="sellBackText">
              <div style={{ fontWeight: "bolder" }}>Sell it back</div>
              <div>Sell it back to us for 75%+</div>
              <div style={{ textDecoration: "underline" }}>Learn More</div>
            </div>
            <div className="layawayText">
              <div style={{ fontWeight: "bolder" }}>
                Reserve Luxury layaway{" "}
              </div>
              <div>Sell it back to us for 75%+</div>
              <div style={{ textDecoration: "underline" }}>Learn More</div>
            </div>
          </div>
        </div>
        <div className="bagDescriptionCont">
          <div className="brandText">{bagSelection.brand}</div>
          <div className="labelText">{bagSelection.label}</div>
          <div className="priceText">
            ${bagSelection.price}
            {/* {bagSelection.discount} */}
          </div>
          <button className="addBagBtn" onClick={addToCartRoute}>
            ADD TO BAG
          </button>
          <div className="shipping">Free Shipping on Domestic Orders</div>
          <div className="accordionText">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel1" ? (
                    <RemoveOutlinedIcon />
                  ) : (
                    <AddOutlinedIcon />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Condition: Very Good
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary" }}>
                  Handle: Wear at resin glazing, missing adjustable strap
                  <div style={{ marginBottom: "20px" }}></div>
                  Interior: Creases, scuffs, marks Hardware: Plating wear, faint
                  scratch(es) <div style={{ marginBottom: "20px" }}></div>
                  Exterior: Marks <div style={{ marginBottom: "20px" }}></div>
                  Please remember that most of the items that we carry have been
                  previously owned. Unless otherwise stated, they may not be in
                  absolutely flawless condition. We include very detailed
                  pictures and give accurate written descriptions... so check
                  them carefully. Please pay particular attention to the sizes
                  and measurements.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<AddOutlinedIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary" }}>
                  Designer ID: 239A <br />
                  Item #: 860469
                  <div style={{ marginBottom: "20px" }}></div>
                  Size Base <br />
                  length: 14 in <br />
                  Height: 10.75 in <br /> Width: 7 in <br />
                  Drop: 6.25 in Drop: 18.5 in{" "}
                  <div style={{ marginBottom: "20px" }}></div>
                  Comes With
                  <br /> Luggage loop <br /> Not included strap
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<AddOutlinedIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Description
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary" }}>
                  This is an authentic {bagSelection.brand} {bagSelection.label}
                  . This bold tote is crafted of {bagSelection.brand}{" "}
                  cross-grain leather in red with a black interior. The bag
                  features rolled leather top handles and gold hardware. There
                  is a partitioned interior and snaps at the side for expansion,
                  lined with black leather.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<AddOutlinedIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Shipping & Returns
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary" }}>
                  Standard US domestic shipping is FREE. Express & International
                  shipping prices are determined by item size & destination so
                  please add this to your cart and refer to our shipping page
                  for a specific price quote.
                  <div style={{ marginBottom: "20px" }}></div> Shipping
                  includes: Insurance, signature confirmation, and top quality
                  packaging. All items will be shipped generally within 1
                  business day from the receipt of payment. Delivery times are
                  based on business days (Mon-Fri except Holidays). <br />
                  Taxes: Sales tax will be charged on all items shipped to AL,
                  AR, AZ, CA, CO, CT, DC, FL, GA, HI, IA, ID, IL, IN, KY, LA,
                  MA, MD, ME, MI, MN, MS, NC, NE, ND, NJ, NM, NV, NY, OH, OK,
                  PA, RI, SC, TN, TX, UT, VA, WA, WI and WV.
                  <div style={{ marginBottom: "20px" }}></div>
                  RETURNS: Yes! We want you to be happy with your purchase. All
                  item(s) must be returned to FASHIONPHILE within thirty (30)
                  days of the purchase date with tags attached and in the
                  original condition in order to receive a full refund. Item(s)
                  must be postmarked within thirty (30) days of the purchase
                  date. View full Return Policy here.
                  <div style={{ marginBottom: "20px" }}></div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            Do you just love this but it's not the right price for you?
            <br /> Sign up for a discount alert and we'll email you if this item
            goes on discount.
          </div>
          <div className="trademarkInfo">
            {bagSelection.brand} is a registered trademark of{" "}
            {bagSelection.brand}. FASHIONPHILE is not affiliated with{" "}
            {bagSelection.brand}.
          </div>
        </div>
      </div>
    </>
  );
};

export default BagSelection;

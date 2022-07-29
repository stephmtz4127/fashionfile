import React, { useState } from "react";
import DashHeaderStyle from "./DashHeader";
import "./PaymentOptCss.css";
import { Dropdown } from "semantic-ui-react";
import PaypalForm from "../userSellerForms/PaypalForm";
import DirectDepositForm from "../userSellerForms/DirectDForm";
import StoreCredForm from "../userSellerForms/StoreCredForm";
import CheckForm from "../userSellerForms/CheckForm";
const PaymentOptions = () => {
  const classes = DashHeaderStyle();
  const options = [
    {
      key: "storeCredit",
      text: "STORE CREDIT (+ 10% Bonus!)",
      value: "storeCredit",
      forms: <StoreCredForm />,
    },
    {
      key: "check",
      text: "CHECK",
      value: "check",
      forms: <CheckForm />,
    },
    {
      key: "paypal",
      text: "PAYPAL",
      value: "paypal",
      message: (
        <div className="sellerMSG">
          *Payment subject to PayPal processing fees.
        </div>
      ),
      forms: <PaypalForm />,
    },
    {
      key: "directDeposit",
      text: "DIRECT DEPOSIT",
      value: "directDeposit",
      message: (
        <div className="sellerMSG">
          <b>Get paid quicker through ACH.</b> <br />
          ACH, or Automated Clearing House, is basically what we all know as
          "Direct Deposit".
          <div style={{ color: "#f49", fontWeight: "bolder" }}>
            Only available for banks within the US.
          </div>
        </div>
      ),
      forms: <DirectDepositForm />,
    },
  ];

  const [selectedOption, setSelectedOption] = useState();
  console.log(selectedOption, "selected");

  const optionDropdown = options.find((opt) => {
    return opt.value === selectedOption;
  });

  console.log(optionDropdown, "opts");

  return (
    <div className={classes.dashDataCont}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Payment Options:</label>
      </div>
      <div className="sellerInfoCont">
        <div className="sellerTitle">Seller Payment Method</div>
        <div>
          Thank you for submitting your payment information. We show that you
          are currently set to be paid via Check.
          <br />
          You may change back by toggling the method from the drop down.
        </div>
        <div
          style={{
            fontWeight: "bolder",
            margin: "25px 0 25px 0",
            fontSize: "15px",
          }}
        >
          SELECT YOUR PREFERRED PAYMENT METHOD.
        </div>
        <div style={{ marginBottom: "15px" }}>
          <b>*Now Available:</b> Earn an additional <b>10% BONUS</b> when you
          apply your <br /> payment to Store Credit or a Neiman Marcus Gift
          Card!
        </div>
        <Dropdown
          className="seller button icon"
          placeholder="Select"
          floating
          fluid
          options={options}
          onChange={(event, { value }) => setSelectedOption(value)}
        />
        <div>{optionDropdown?.message}</div>
        <div style={{ marginTop: "20px", paddingBottom: "30px" }}>
          Your payment method can be changed at any time, but will <br />
          only apply to future payments.{" "}
          <b>
            Payment method cannot be changed for <br />
            payments that have already been processed.
          </b>
        </div>
      </div>
      {optionDropdown?.forms}
    </div>
  );
};

export default PaymentOptions;

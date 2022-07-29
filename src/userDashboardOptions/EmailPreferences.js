import React, { useState } from "react";
import DashHeaderStyle from "./DashHeader";
import "./EmailPref.css";
import { Icon } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, newsletterBlogOption } from "../reducer/userSlice";

const EmailPreferences = () => {
  const classes = DashHeaderStyle();
  const [newsletterCheckbox, setNewsletterCheckbox] = useState(false);
  const [blogCheckbox, setBlogCheckbox] = useState(false);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const submitNewsletterBlog = (e) => {
    e.preventDefault();

    dispatch(
      newsletterBlogOption({
        newsletter: newsletterCheckbox,
        blog: blogCheckbox,
        user: user.id,
      })
    );
  };

  console.log(newsletterCheckbox, "newsletter");
  console.log(blogCheckbox, "blog");
  return (
    <div className={classes.dashDataCont}>
      <div className={classes.dashPinkHeader}>
        <label className={classes.pinkLabel}>Email Preferences:</label>
      </div>
      <div className="emailSubCont">
        <div className="emailSentenceOne">
          Please manage your email subscription for{" "}
          <b>stephani4127@gmail.com</b>
        </div>
        <form className="newsletterForm" onSubmit={submitNewsletterBlog}>
          <Checkbox
            value={newsletterCheckbox}
            onChange={(e, data) => setNewsletterCheckbox(data.checked)}
            label={
              <label className="checkboxText">FASHIONPHILE Newsletter</label>
            }
          />
          <br />
          <Checkbox
            value={blogCheckbox}
            onChange={(e, data) => setBlogCheckbox(data.checked)}
            label={<label className="checkboxText">Blog Updates</label>}
          />
          <br />
          <button className="emailSubBtn">
            UPDATE SUBSCRIPTION
            <Icon style={{ marginLeft: "3px" }} name="mail outline" />
          </button>
        </form>
        <div className="emailSentence">
          To manage your subscriptions, please check/uncheck the appropriate box
          and click "update subscription".
        </div>
        <div className="emailSentence">
          There is also a link to unsubscribe at the bottom of the FASHIONPHILE
          newsletter email.
        </div>
      </div>
    </div>
  );
};

export default EmailPreferences;

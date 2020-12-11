import React from "react";
import { Link } from "react-router-dom";

//-- Stylesheet
import "./cookieConsent.scss";

const CookieConsent = () => {
  const RemoveFromScreen = () => {
    document.querySelector(".cc-banner").classList.add("remove");
  };

  return (
    <div className="cc-banner">
      <span className="cc-message">
        VICENCO® asks you to accept cookies for performance, social media and
        advertising purposes. To get more information about these cookies and
        the processing of your personal data, check our Privacy Policy. Do you
        accept these cookies?
        <Link className="cc-link" to="/terms-and-service">
          Privacy Policy
        </Link>
      </span>
      <div className="cc-compliance" onClick={RemoveFromScreen}>
        <span className="cc-btn cc-dismiss dismissCookie">Yes, I Accept</span>
      </div>
    </div>
  );
};

export default CookieConsent;

import React from "react";
import "./cookieConsent.scss";

const CookieConsent = () => {
  return (
    <div class="cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override--732197953 ">
      <span id="cookieconsent:desc" class="cc-message">
        VICENCO® asks you to accept cookies for performance, social media and
        advertising purposes. To get more information about these cookies and
        the processing of your personal data, check our Privacy Policy. Do you
        accept these cookies?
        <a
          class="cc-link"
          href="https://uk.ghostlifestyle.com/pages/terms-and-service"
          target="_blank"
        >
          Privacy Policy
        </a>
      </span>
      <div class="cc-compliance">
        <span class="cc-btn cc-dismiss dismissCookie">Yes, I Accept</span>
      </div>
    </div>
  );
};

export default CookieConsent;

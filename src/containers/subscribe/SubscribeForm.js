import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import "./subscribeForm.scss";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="join_vicenco">
      <div className="container">
        <a href="/" className="subscribe_logo">
          <img
            data-src="/assets/footer_logo.png"
            className="lozad sm-down--hide"
            src="/assets/footer_logo.png"
            alt="Logo"
          />
        </a>

        <h1 className="sm-down--hide">BE A LEGEND. JOIN vicenco.</h1>
        <h1 className="sm-down--show hide">
          BE A LEGEND.
          <br />
          JOIN vicenco.
        </h1>

        <div className="subscribe-form one-quarter auto">
          <p>Subscribe for latest news, events and promotions.</p>
          <p className="zaius-msg text-center" style={{ padding: 0 }} />

          <div className="input-group">
            <input
              type="email"
              name="EMAIL"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              placeholder="Enter your e-mail here"
              className="input-group-field"
              aria-label="email@example.com"
            />
            <span className="input-group-btn">
              <button
                type="submit"
                name="subscribe"
                id="subscribe"
                className="fas fa-paper-plane"
                aria-label="Click to subscribe"
              >
                <FaPaperPlane />
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;

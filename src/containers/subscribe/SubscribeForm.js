import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import "./subscribeForm.scss";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="join_vicenco">
      <div class="container">
        <a href="/" class="subscribe_logo">
          <img
            data-src="/assets/footer_logo.png"
            class="lozad sm-down--hide"
            src="/assets/footer_logo.png"
          />
        </a>

        <h1 class="sm-down--hide">BE A LEGEND. JOIN vicenco.</h1>
        <h1 class="sm-down--show hide">
          BE A LEGEND.
          <br />
          JOIN vicenco.
        </h1>

        <div class="subscribe-form one-quarter auto">
          <p>Subscribe for latest news, events and promotions.</p>
          <p class="zaius-msg text-center" style={{ padding: 0 }} />

          <div class="input-group">
            <input
              type="email"
              name="EMAIL"
              value=""
              placeholder="Enter your e-mail here"
              class="input-group-field"
              aria-label="email@example.com"
            />
            <span class="input-group-btn">
              <button
                type="submit"
                name="subscribe"
                id="subscribe"
                class="fas fa-paper-plane"
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

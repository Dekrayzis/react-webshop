import React from "react";
import "./promos.scss";

const PromoType_A = () => {
  return (
    <div class="promo-section">
      <div class="container--fluid">
        <div class="family_slider" data-section="family-slider">
          <div class="flex-grid">
            <div
              class="flex-grid__col--lg-5 flex-grid__col--xs-12 lockup lozad"
              data-background-image="/assets/Graffiti_Black_2048x.png"
              data-loaded="true"
              style={{
                backgroundImage: `url(/assets/Graffiti_Black_2048x.png)`,
              }}
            >
              <div class="famili_lockup">
                <div class="lockup_header">
                  <div class="logo">
                    <img
                      data-src="/assets/logo.svg"
                      class="lozad"
                      src="/assets/logo.svg"
                      data-loaded="true"
                    />
                  </div>
                </div>

                <div class="lockup_body">
                  <h1>
                    meet
                    <br />
                    the vicenco
                    <br /> Family
                  </h1>
                </div>

                <div class="lockup_footer">
                  <a href="/blogs/meet-the-family" class="btn--secondary">
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div class="flex-grid__col--lg-7 flex-grid__col--xs-12">
              <ul class="famili_img">
                <li data-family="">
                  <img
                    class="lozad"
                    data-src="/assets/MeetTheFam_CG.png"
                    id="familyImage"
                    alt="action"
                    src="/assets/MeetTheFam_CG.png"
                    data-loaded="true"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoType_A;

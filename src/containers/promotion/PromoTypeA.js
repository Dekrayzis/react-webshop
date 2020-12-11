import React from "react";
import "./promos.scss";

const PromoTypeA = () => {
  return (
    <div className="promo-section">
      <div className="container--fluid">
        <div className="family_slider" data-section="family-slider">
          <div className="flex-grid">
            <div
              className="flex-grid__col--lg-5 flex-grid__col--xs-12 lockup lozad"
              data-background-image="/assets/Graffiti_Black_2048x.png"
              data-loaded="true"
              style={{
                backgroundImage: `url(/assets/Graffiti_Black_2048x.png)`,
              }}
            >
              <div className="famili_lockup">
                <div className="lockup_header">
                  <div className="logo">
                    <img
                      data-src="/assets/logo.svg"
                      className="lozad"
                      src="/assets/logo.svg"
                      data-loaded="true"
                      alt="some"
                    />
                  </div>
                </div>

                <div className="lockup_body">
                  <h1>
                    meet the <br />
                    Vicenco
                    <br /> Family
                  </h1>
                </div>

                <div className="lockup_footer">
                  <a href="/blogs/meet-the-family" className="btn--secondary">
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-grid__col--lg-7 flex-grid__col--xs-12">
              <ul className="family_img">
                <li data-family="">
                  <img
                    className="lozad"
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

export default PromoTypeA;

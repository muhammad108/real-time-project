import React from "react";
import "./solution.css";

function Solution() {
  return (
    <div id="solution">
      <div className="container section" >
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-head">iot squared solutions</h2>
            <p className="paragraph-text">
              Drive cost efficiency, improve customer experience and promote
              sustainability <br /> with innovative IoT solutions that are tailored to
              your organization’s unique needs.
            </p>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <i className="fa fa-anchor" />
              <h3>
                Industrial
                <br />
                Solutions
              </h3>
              <p>
              Optimize costs with Intelligent Warehouse Operations solutions that drive automation and transparency across the organization


              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <i className="fa fa-anchor" />
              <h3>
                Logistics
                <br />
                Solutions
              </h3>
              <p>
                Enhance organizational connectivity and efficiency with Fleet
                Management solutions that elevate hardware, platform and
                analytics capabilities
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <i className="fa fa-anchor" />
              <h3>
                Public Sector
                <br />& Smart City Solutions
              </h3>
              <p>
                Augment sustainability and mobility through Connected Workforce
                and Smart City solutions that are both customizable and secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;

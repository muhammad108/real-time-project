import React from "react";
import "./about.css";
import heroimg from "../../../src/assets/heroimg.avif";
import heroimg2 from "../../assets/heroimg2.avif";
import heroimg3 from "../../assets/heroimg3.avif";
function About() {
  return (
    <>
      <div className="full-screen-container" id="about">
        <img className="full-screen-image" src={heroimg} alt="" />
        <div className="left-text">
          <h5>About iot squared</h5>
          <h3>
            We unlock the <br /> potential of things
          </h3>
          <p>
            A joint venture between Saudi Arabia’s Public Investment Fund (PIF)
            and stc Group, iot squared delivers industry-leading IoT solutions
            and provides real time insights in the Kingdom of Saudi Arabia.{" "}
            <br />
            <span>
              iot squared aims to champion IoT adoption in the region by being a
              technology-neutral service provider with solutions elevating the
              smart industrial manufacturing sector, smart logistics
              transportation industry, and smart cities.
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="first-content">
            <h2>
              Our <span>vision</span>
            </h2>
            <p>To unlock the value of connected things</p>
          </div>
        </div>
        <div className="col-md-6">
          <img className="heroimg" src={heroimg2} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img className="heroimg" src={heroimg3} alt="" />
        </div>
        <div className="col-md-6">
          <div className="second-content">
            <h2>
              Our <span>mission</span>
            </h2>
            <p>
              To provide organizations with real-time insights for critical
              decision making and intelligent operations
            </p>
          </div>
        </div>
      </div>

      <div className="head">
        <div className="row">
          <div className="col-md-6">
            <section className="values-section">
              <h3>Values that enrich our value</h3>
            </section>
          </div>
          <div className="col-md-6">
            <div className="values-description">
              <h6>
                <span className="yes-icon icon">&#10003;</span>Drive
              </h6>
              <p>
                We are "restless," looking for the best possible solutions for
                our clients and our employees. <br /> Proactive – Inventive -
                Inquisitive
              </p>

              <h6>
                <span className=".yes-icon icon">&#10003;</span>Devotion
              </h6>
              <p>
                The desire to become a "customer-centric" company for our
                clients and our employees. <br />
                Caring – Committed - Trustworthy
              </p>

              <h6>
                <span className=".yes-icon icon ">&#10003;</span>Dynamism
              </h6>
              <p>
                How we become a company that is continuously looking to improve
                and adopt new and better ways of doing things, with a fresh and
                ingenious view. <br /> Agile - Collaborative – Fresh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

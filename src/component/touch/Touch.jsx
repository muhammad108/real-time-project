import React from "react";
import logo from "../../assets/freelogo.avif";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import "./touch.css";
import { MdOutlineMailOutline } from "react-icons/md";
function Touch() {
  return (
    <>
      <div className="footer-container">
  <div className="grid-item">
    <div className="head-logo">
      <img src={logo} alt="" />
    </div>
  </div>
  <div className="grid-item">
    <div className="get-in-touch">
      <h4>Get in Touch</h4>
    </div>
    <div className="right-text-section">
      <h4>Procurements inquiries</h4>
      <a href="mailto:pss@iotsquared.com.sa"><span className="email-icons"><MdOutlineMailOutline /></span>pss@iotsquared.com.sa</a>
      <div className="supplier"><a href="">Supplier Rejisteration</a></div>
    </div>
    <div className="left-text-section">
      <h4>General inquiries</h4>
      <a href="mailto:info@iotsquared.com.sa"><span className="email-icons"><MdOutlineMailOutline /></span>info@iotsquared.com.sa</a>
    </div>
    <div className="left-text-section">
      <h4>Sales inquiries</h4>
      <a href="mailto:sales@iotsquared.com.sa"><span className="email-icons"><MdOutlineMailOutline /></span>sales@iotsquared.com.sa</a>
    </div>
    <div className="mid-text">
      <h3>Follow us</h3>
      <div className="footer-icons">
        <div className="twitter-icons">
          <RiTwitterXLine />
        </div>
        <div className="linkedin-icons">
          <FaLinkedinIn />
        </div>
      </div>
    </div>
    <div className="footer-section">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <h6 className="right-heading">STC</h6>
      </div>

      <div className="footer">
      <p>© 2023 iot squared. All rights reserved. <span>Terms & Condition</span><span>Privacy Policy</span></p>
      </div>
    </div>
    
  </div>
</div>

    </>
  );
}

export default Touch;

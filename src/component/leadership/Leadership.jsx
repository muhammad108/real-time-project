import React from "react";
import "./leadership.css";
import insideImg from "../../assets/person1.avif";

function Leadership() {
  return (
    <>
      <div className="text-section">
        <h2>Board Members</h2>
        <p>Inspiring possibilities</p>
      </div>
      <div className="container" id="leadership">
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h4>Riyadh Muawad</h4>
            <p>Chairman</p>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Abdullah Alowaini</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Shahad Attar</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Mohammed Alassaf</h5>
            <h6>Board Member</h6>
          </div>
        </div>
      </div>

      <div className="header-text">
        <h2>Our Leadership</h2>
        <p>Inspiring possibilities</p>
      </div>

      <div className="container" id="leadership">
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h4>Othman Dahash Othman Aldahash</h4>
            <p>CEO</p>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Khaled Abdulrahman Ibrahim Alsubeaee</h5>
            <h6>Chief Business Excellence Officer</h6>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Ibrahim Mahmoud Mohammad Ibrahim</h5>
            <h6>Chief Technology Officer</h6>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Shabbab Hamed Said Alghamdi</h5>
            <h6>Public - IoT Solutions VP</h6>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Mohammad Yahya Hamad Alsogih</h5>
            <h6>Chief Financial Officer</h6>
          </div>
        </div>
        <div className="box">
          <img src={insideImg} alt="" />
          <div className="text-over-image">
            <h5>Saleh Abdullah Almekbel</h5>
            <h6>Chief Strategy Officer</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;

import React from "react";
import "./Footer.css";
import arrow from "../assets/arrow.png";

export default function Footer() {
    
    
  return (
   

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#232f3e",
        flexWrap: "wrap",
        paddin: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#232f3e",
          flexWrap: "wrap",
          padding: "5px",
        }}
      >
        <div className="main" >
          <ul>
            <li>
              <h3>Subscribe to Aesop communications</h3>
              <hr style={{ color: "white" }} />
            </li>
            <li>
              <button
                style={{
                  width: "300px",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  border: "none",
                }}
              >
                Read more
                <img
                  style={{ width: 25, height: 25, marginLeft: "190px" }}
                  src={arrow}
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="main" >
          <ul>
            <h3>
              <li>orders and support</li>
            </h3>
            <hr style={{ color: "white" }} />
            <li>
              <a href="#">Contact us </a>
            </li>
            <li>
              <a href="#">FAQs </a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Order history</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
          </ul>
        </div>
        <div className="main">
          <ul>
            <h3>
              <li>Services</li>
            </h3>
            <hr style={{ color: "white" }} />
            <li>
              <a href="#"> Live assistance</a>
            </li>
            <li>
              <a href="#">Corporate gifts </a>
            </li>
            <li>
              <a href="#">Facial Appointments</a>
            </li>
            <li>
              <a href="#">Click and Collect</a>
            </li>
            <li>
              <a href="#">Video consultation</a>
            </li>
          </ul>
        </div>
        <div className="main">
          <ul>
            <h3>
              <li>Location preferences</li>
            </h3>
            <hr style={{ color: "white" }} />
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Hong Kong SAR, China </a>
            </li>
            <li>Language:</li>
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">Video consultation</a>
            </li>
          </ul>
        </div>
      </div>
       <hr style={{ color: "white" }} /> 

      <div
        style={{
          display: "flex",
          //justifyContent: "space-evenly",
          backgroundColor: "#232f3e",
          flexWrap: "wrap",
          padding: "5px",
          alignItems:"center",
         
          
        }}
      >
        
        <div>
          <ul>
            <h3>
              <li>About</li>
            </h3>
            <hr style={{ color: "white" }} />
            <li>
              <a href="#">Our story </a>
            </li>
            <li>
              <a href="#">Foundation </a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>
              <li>Social Media</li>
            </h3>
            <hr style={{ color: "white" }} />
            <li>
              <a href="#">Instagram </a>
            </li>
            <li>
              <a href="#">Twitter </a>
            </li>
            <li>
              <a href="#">LinkedIn </a>
            </li>
            <li>
              <a href="#">WeChat</a>
            </li>
            <li>
              <a href="#">Weibo </a>
            </li>
            <li>
              <a href="#">Whatsup </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

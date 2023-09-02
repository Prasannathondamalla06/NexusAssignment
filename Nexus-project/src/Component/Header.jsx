import React from "react";
import "./Header.css";

import soap from "../assets/soap.avif";
import arrow from "../assets/arrow.png";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
import Aesop_Article from "../assets/Aesop_Article.jpg";
import post from "../assets/post.avif";

export default function Header() {
  return (
    <div>
      <div className="nav1">
        Trained Aesop consultations are available to provide bespoke skin care
        advise.
        <a href="">Book a video consultation</a>
      </div>
      {/* ========================================== */}
      <div className="nav2">
        <div>
          <a href="">
            Click and Collect is now available at Hong Kong stores. Enjoy
            complimentary shipping on orders over HK$400
          </a>
        </div>
        <div>
          <button>+</button>
        </div>
      </div>
      {/* =========================================== */}
      <div className="header">
        <div className="header1">
          <button>Skin Care</button>
          <button>Body & Hand</button>

          <button>Hair</button>

          <button>Fragrance</button>

          <button>Home</button>

          <button>Kits & Travel</button>

          <button>Gifts</button>

          <button>Read</button>

          <button>Stores</button>

          <button>Facial Appointments</button>
        </div>
        <div className="header2">
          <button>Cart</button>
          <button>Cabinet</button>
          <button>Log in</button>
        </div>
      </div>
      {/* ================================ */}
      <div className="first">
        <div className="text">
          <img src={soap} alt="soap" />
          <div className="im1">
            <h4>Bar Soaps</h4>
            <p style={{ fontSize: 25 }}>A body care classic, reimagined </p>
            <p>
              Breathing new life into the humble bar soap are Nurture, Polish
              and Refresh three additions to the range, each imparting a unique
              constellation of benefits. 
            </p>
             
             <button style={{ width: "300px", whiteSpace: "nowrap",display:"flex",padding:"10px"}}>
             Discover Bar Soaps
              <img
                style={{ width: 25, height: 25,marginLeft:"120px" }}
                src={arrow}
              />
              
            </button>
            
             
           
          </div>
        </div>
      </div>
      {/* ================================================================== */}
      <Banner1 />

      <div className="pic1">
        <div className="pic11" style={{ paddingLeft: "30px" }}>
          <h6 style={{ fontSize: "20px" }}>The Athenaeum</h6>
          <p style={{ fontStyle: "italic", fontSize: "30px" }}>The warm-up</p>
          <p style={{ width: "70%" }}>
            In The Athenaeum, our digital reading room: a guide to ensuring a
            healthy complexion through the warmer months.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ width: "300px", whiteSpace: "nowrap",display:"flex",alignItems:"center",padding:"4px",border:'none'}} >
            Read more
            <img
              style={{ width: 25, height: 25, marginLeft: "180px",padding:"5px" }}
              src={arrow}
            />
          </button>
          </div>
        
        </div>
        <img src={Aesop_Article} />
      </div>
      {/* ===================================== */}

      <Banner2 />

      <div className="pic2">
        <img src={post} />

        <div className="pic22">
          <p style={{fontSize: "20px",fontStyle:"italic"}}>Post-Poo Drops has returned</p>
          <p style={{ width: "70%" }}>
            Here to make the malodorous melodious once again. Dispense this
            favoured formulation into the toilet bowl after flushing to
            effectively mask disagreeable odours.
          </p>
          <button style={{ width: "300px", whiteSpace: "nowrap",display:"flex",alignItems:"center",padding:"5px",border:'none'}}>
            Read more
            <img
              style={{ width: 25, height: 25, marginLeft: "190px" }}
              src={arrow}
            />
          </button>
        </div>
      </div>
      <Banner3  />
      <Banner4 />
    </div>
  );
}

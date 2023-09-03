import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from "../assets/arrow.png";

import nature from "../assets/nature.jpg";
import nature2 from "../assets/nature2.webp";
import nature1 from "../assets/nature1.webp";
import nature3 from "../assets/nature3.webp";
import nature4 from "../assets/nature4.webp";
export default function Banner1() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 0, min:464 },
      items: 1,
    },
  };
  const ban = {
    //width: "600px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "100px",
  };
  const ban1 = {
    height: "18rem",
    width: "18rem",
    paddingTop: 300,
    objectFit: "contain",
    paddingRight: "30",
  };

  return (
    <div >
      <Carousel responsive={responsive}>
        <div style={{ width: "600" }}>
          <div style={ban}>
            <h5 style={{ marginLeft: 50, fontSize: "20px" }}>For the body</h5>
            <p
              style={{ fontFamily: "sans-serif", marginLeft: 50, fontSize: 30 }}
            >
              An expression of care
            </p>
            <p
              style={{
                width: 300,

                textAlign: "justify",
                marginLeft: 50,
                color:"black"
              }}
            >
              Aesop formulations offer the body deserving care, to cleanse,
              replenish, and nourish skin. Each product is a sensory pleasure to
              use with its own delightful aroma.
            </p>
            <button
              style={{
                width: "250px",
                marginLeft: "50px",
                whiteSpace: "nowrap",
                display: "flex",
                padding: "10px",
                boder: "none",
                alignItems: "center",
              }}
            >
              See all Body Care{" "}
              <img
                style={{ width: 25, height: 25, marginLeft: "100px" }}
                src={arrow}
              />
            </button>
          </div>
        </div>
        
          <div className="card" style={{ width: 600 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img style={ban1} src={nature} />
              <a href="" style={{ textDecoration: "none",color:"black" }}>
                Nurture Bar Soap
              </a>
              <p style={{color:"black"}}>Offers a mild yet effective cleanse</p>
            </div>
          </div>
          <div className="card" style={{ width: 600 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img style={ban1} className="image" src={nature1} />
              <a href="" style={{ textDecoration: "none",color:"black" }}>
                Polish Bar Soap
              </a>
              <p style={{color:"black"}}>Offers a mild yet effective cleanse</p>
            </div>
          </div>
          <div className="card" style={{ width: 600 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img style={ban1} className="image" src={nature2} />
              <a href="" style={{ textDecoration: "none",color:"black" }}>
                Refresh Bar Soap
              </a>
              <p style={{color:"black"}}>Offers a mild yet effective cleanse</p>
            </div>
          </div>
          <div className="card" style={{ width: 600 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img style={ban1} className="image" src={nature3} />
              <a href="" style={{ textDecoration: "none",color:"black" }}>
                Polish Bar Soap
              </a>
              <p style={{color:"black"}}>Offers a mild yet effective cleanse</p>
            </div>
          </div>
          <div className="card" style={{ width: 600 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img style={ban1} className="image" src={nature4} />
              <a href="" style={{ textDecoration: "none",color:"black" }}>
                Refresh Bar Soap
              </a>
              <p style={{color:"black"}}>Offers a mild yet effective cleanse</p>
            </div>
          </div>
       
      </Carousel>
    </div>
  );
}

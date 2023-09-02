import React from "react";
import Fashion1 from "../assets/Fashion1.webp";
import Fashion2 from "../assets/Fashion2.webp";
import Fashion from "../assets/Fashion.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from "../assets/arrow.png";
import "./Banner4.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Banner4() {
  return (
    <div
      className="banner4"
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "auto",
        paddingTop: "100px",
      }}
    >
      <div
        className="banner44"
        style={{ width: "40%", height: "500px", paddingLeft: "50px" }}
      >
        <p style={{ fontFamily: "cursive", fontSize: "25px" }}>Store locator</p>
        <p style={{ width: "70%" }}>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.{" "}
        </p>
        <button
          style={{
            width: "300px",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            padding: "8px",
            border: "none",
          }}
        >
          See all skin Care{" "}
          <img
            style={{ width: 25, height: 25, marginLeft: "150px" }}
            src={arrow}
          />
        </button>
      </div>
      <div className="banner444" style={{ width: "60%", height: "500px" }}>
        <Carousel responsive={responsive}  >
          <div  style={{ maxWidth: "100%" }}>
            <img  className="car"src={Fashion1} style={{ maxWidth: "100%", width:"100%", height: "auto" }} />
          </div>
          <div  style={{ maxWidth: "100%" }}>
            <img  className="car"src={Fashion2} style={{ maxWidth: "100%", width:"100%", height: "auto" }} />
          </div>
          <div   style={{ maxWidth: "100%" }}>
            <img  className="car"src={Fashion} style={{ maxWidth: "100%", height: "auto",width:"100%" }} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

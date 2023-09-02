import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bronze from "../assets/bronze.webp";
import candle from "../assets/candle.webp";
import drops from "../assets/drops.avif";
import muraski from "../assets/muraski.webp";
import arrow from "../assets/arrow.png";

export default function Banner3() {
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
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ban1 = {
    height: "20rem",
    width: "20rem",
    paddingTop: 200,
    objectFit: "contain",
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <div style={{ width: "600" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "50px",
            }}
          >
            <h5 style={{ marginLeft: 50, fontSize: "25px" }}>For the home</h5>
            <p
              style={{ fontFamily: "sans-serif", marginLeft: 50, fontSize: 30 }}
            >
              Domestic pleasures
            </p>
            <p
              style={{
                width: 300,

                textAlign: "justify",
                marginLeft: 50,
              }}
            >
              Our range of aromatic formulations for the home are practical and
              pleasing in equal measure.
            </p>
            <button  style={{ width: "300px", whiteSpace: "nowrap",display:"flex",alignItems:"center",padding:"8px",border:'none',marginLeft:"50px"}}>
              See all Home
              <img style={{ width: 25, height: 25,marginLeft:"180px" }} src={arrow} />
            </button>
          </div>
        </div>
        <div style={{ width: 600 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={ban1} src={drops} />
            <a href="" style={{ textDecoration: "none", paddinLeft: "30" }}>
              Post-Poo Drops
            </a>
            <p style={{ paddingLeft: "30" }}>A botanical bathroom deodoriser</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={ban1} src={candle} />
            <a href="" style={{ textDecoration: "none" }}>
              Aganice Aromatique Candle
            </a>{" "}
            <p>Cardamom, Mimosa, Tobacco</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={ban1} src={candle} />
            <a href="" style={{ textDecoration: "none" }}>
              Ptolemy Aromatique Candle
            </a>
            <p>A hydrating serum bolster skin</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={ban1} src={bronze} />
            <a href="" style={{ textDecoration: "none" }}>
              Bronze Incense Holder
            </a>
            <p>Suited to any interior</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={ban1} src={muraski} />
            <a href="" style={{ textDecoration: "none" }}>
              Murasaki Aromatique Incense
            </a>
            <p>For those who favours aromas of warm spice</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={ban1} src={muraski} />
            <a href="" style={{ textDecoration: "none" }}>
              Kagerou Aromatique Incense
            </a>
            <p>For those particularly partial to view</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

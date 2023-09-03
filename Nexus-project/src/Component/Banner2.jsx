import React from "react";
import cream from "../assets/cream.webp";
//import hydrating from "../assets/ hydrating.webp";
//import lucent from "../assets/lucent.webp";
import Mandarin from "../assets/Mandarin.webp";
import oxident from "../assets/oxident.webp";
import parsely from "../assets/parsely.webp";
import seed from "../assets/seed.webp";
import triple from "../assets/triple.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from "../assets/arrow.png";

export default function Banner2() {
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

  return (
    <div>
      <Carousel responsive={responsive}>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" ,paddingTop:"50px"}}>
            <h5 style={{ marginLeft: 50  ,fontSize:"25px"}}>For the skin</h5>
            <p
              style={{ fontFamily: "sans-serif", marginLeft: 50, fontSize: 30 }}
            >
              Attention for all types
            </p>
            <p
              style={{
                width: 300,

                textAlign: "justify",
                marginLeft: 50,
                color:"black"
              }}
            >
              The well-being of your skin is the product of hydration,
              nourishment, and protection through discerning rituals. Explore
              requisite skin care for all skin types.
            </p>
            <button style={{ width: "300px", whiteSpace: "nowrap",display:"flex",alignItems:"center",padding:"8px",border:'none',marginLeft:"50px"}}>
              See all skin Care{" "}
              <img style={{ width: 25, height: 25,marginLeft:"160px" }} src={arrow} />
            </button>
          </div>
        </div>
        <div style={{ width: 600 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "20rem",
                width: "20rem",
                paddingTop: 200,
                objectFit: "contain",
                // paddingRight: "30",
              }}
              src={cream}
            />
            <a href="" style={{ textDecoration: "none", paddinLeft: "30" ,color:"black"}}>
              Purifying Facial Cream Cleanser
            </a>
            <p style={{ paddingLeft: "30",color:"black" }}>
              A daily cream Cleanser for dry skin
            </p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "20rem",
                width: "20rem",
                paddingTop: 200,
                objectFit: "contain",
                paddingRight: "30",
              }}
              src={Mandarin}
            />
            <a href="" style={{ textDecoration: "none",color:"black" }}>
              Mandarin Facial Hydrating Cream
            </a>{" "}
            <p style={{color:"black"}}>Rapidly absorbed lightly hydrating</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "20rem",
                width: "20rem",
                paddingTop: 200,
                objectFit: "contain",
                paddingRight: "30",
              }}
              src={oxident}
            />
            <a href="" style={{ textDecoration: "none",color:"black" }}>
              Parsley Seed Anti-Oxidant Intense Serum
            </a>
            <p style={{color:"black"}}>A hydrating serum bolster skin</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "20rem",
                width: "20rem",
                paddingTop: 200,
                objectFit: "contain",
                paddingRight: "30",
              }}
              src={parsely}
            />
            <a href="" style={{ textDecoration: "none",color:"black" }}>
              Parsley Seed Anti-Oxidant Eye Cream
            </a>
            <p style={{color:"black"}}>Nourishes delicate skin around the eyes</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "20rem",
                width: "20rem",
                paddingTop: 200,
                objectFit: "contain",
                paddingRight: "30",
              }}
              src={seed}
            />
            <a href="" style={{ textDecoration: "none",color:"black" }}>
              Parsley Seed Facial Cleanser
            </a>
            <p style={{color:"black"}}>For those in polluted urban environments</p>
          </div>
        </div>
        <div style={{ width: "600" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                height: "20rem",
                width: "20rem",
                paddingTop: 200,
                objectFit: "contain",
                paddingRight: "30",
              }}
              src={triple}
            />
            <a href="" style={{ textDecoration: "none",color:"black" }}>
              B Triple C Facial Balancing Gel
            </a>
            <p style={{color:"black"}}>Anti-oxident gel infused with Vitamin B and C</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

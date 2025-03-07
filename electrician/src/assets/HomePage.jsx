import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/Button";
import heroImage from "./images/hero-image.jpg";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";

export default function HomePage() {
  return (
    <>
    <div
      className="min-vh-100 text-center d-flex flex-column align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Blurred Background Overlay */}
      <div
        className="position-absolute top-0 left-0 w-100 h-100"
        style={{
          background: "rgba(0, 0, 0, 0.8)", 
          filter: "blur(10px)",              
          zIndex: -1,                      
        }}
      ></div>

      <div className="container text-center position-relative z-index-1 p-3"
      style={{
         zIndex: 1
      }}>
        <h1
          className="font-weight-bold text-white "
          style={{
            fontSize: "calc(1.5rem + 2vw)",
          }}
        >
          Welcome to Kueps
        </h1>
        <p
          className="text-white mt-3 mx-auto h"
        >
          From Power Outages To PC Glitches - We Fix It All!
        </p>
        <Link to="/contact">
          <Button className="mt-4 btn btn-primary px-4 py-2 rounded">Get a Quote</Button>
        </Link>
      </div>
    </div>
    <ServicesPage />
    <ContactPage />
    </>
  );
}

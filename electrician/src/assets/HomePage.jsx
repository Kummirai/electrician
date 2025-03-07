import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/Button";
import heroImage from "./images/hero-image.webp"; 

export default function HomePage() {
  return (
    <div
      className="min-vh-100 bg-light text-center d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${heroImage})`,  
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundAttachment: "fixed",  
      }}
    >
      <div className="container text-center">
        <h1 className="fs-1 font-weight-bold text-white">Welcome to Kueps</h1>
        <p className="text-white-50 mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          From Power Outages To PC Glitches - We Fix It Al!.
        </p>
        <Link to="/contact">
          <Button className="mt-4 btn btn-primary px-4 py-2 rounded">Get a Quote</Button>
        </Link>
      </div>
    </div>
  );
}


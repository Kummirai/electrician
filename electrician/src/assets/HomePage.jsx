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
        backgroundPosition: "center",
        backgroundAttachment: "fixed",  
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 font-weight-bold text-white">Welcome to Reliable Electrician Services</h1>
        <p className="text-white-50 mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          Professional, fast, and reliable electrical services for homes and businesses.
        </p>
        <Link to="/contact">
          <Button className="mt-4 btn btn-primary px-4 py-2 rounded">Get a Quote</Button>
        </Link>
      </div>
    </div>
  );
}


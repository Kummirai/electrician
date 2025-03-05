import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/Button";

export default function HomePage() {
  return (
    <div className="min-vh-100 bg-light p-4 text-center d-flex flex-column align-items-center">
      <img 
        src="/images/homepage.jpg" 
        alt="Electrician at work" 
        className="w-100 max-w-4xl h-80 object-cover rounded-lg mb-4" 
      />
      <h1 className="display-4 font-weight-bold">Welcome to Reliable Electrician Services</h1>
      <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '600px' }}>
        Professional, fast, and reliable electrical services for homes and businesses.
      </p>
      <Link to="/contact">
        <Button className="mt-4 btn btn-primary px-4 py-2 rounded">Get a Quote</Button>
      </Link>
    </div>
  );
}

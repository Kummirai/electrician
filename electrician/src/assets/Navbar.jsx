import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 text-center flex flex-wrap justify-center gap-4">
      <Link to="/" className="px-4">Home</Link>
      <Link to="/about" className="px-4">About</Link>
      <Link to="/services" className="px-4">Services</Link>
      <Link to="/contact" className="px-4">Contact</Link>
    </nav>
  );
}

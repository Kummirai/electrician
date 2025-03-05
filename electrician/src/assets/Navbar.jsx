import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Reliable Electrician Services</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto p-2">
        <li className="nav-item px-3">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</header>

  );
}



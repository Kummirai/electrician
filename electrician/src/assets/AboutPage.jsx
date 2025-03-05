import React from "react";

export default function AboutPage() {
  return (
    <div className="min-vh-100 bg-light p-4 text-center d-flex flex-column align-items-center">
      <h2 className="display-4 font-weight-bold">About Us</h2>
      <p className="text-secondary mt-4 mx-auto" style={{ maxWidth: '600px' }}>
        With over 10 years of experience, we provide top-quality electrical services tailored to your needs.
      </p>
    </div>
  );
}

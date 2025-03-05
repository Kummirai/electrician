import React from "react";

export default function ContactPage() {
  return (
    <div className="min-vh-100 bg-light p-4 text-center d-flex flex-column align-items-center">
      <h2 className="display-4 font-weight-bold">Contact Us</h2>
      <p className="text-secondary mt-4 mx-auto" style={{ maxWidth: '600px' }}>
        Call us at <span className="font-weight-semibold">(123) 456-7890</span> or email us at <span className="font-weight-semibold">info@electricalservices.com</span>
      </p>
    </div>
  );
}

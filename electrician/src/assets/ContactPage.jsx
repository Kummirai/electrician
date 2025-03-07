import React from "react";

export default function ContactPage() {
  return (
    <div className="min-vh-100 bg-light p-5 d-flex flex-column align-items-center justify-content-center">
      <h2 className="display-4 font-weight-bold text-center text-primary mb-4">Contact Us</h2>

      <p className="text-secondary mb-5" style={{ maxWidth: '600px', textAlign: 'center' }}>
        Need assistance? Reach us at <span className="fw-semibold">(+27) 63 591 2894 / (+27) 78 267 7436</span> or send an email to <span className="fw-semibold">ajaxmilton@hotmail.com</span>.
      </p>

      <div className="container">
        <h3 className="h4 mb-4 text-center text-muted">Business Hours</h3>
        <ul className="list-unstyled text-center" style={{ lineHeight: '2' }}>
          <li className="text-dark"><strong>Sunday - Thursday:</strong> 24hrs</li>
          <li className="text-dark"><strong>Friday:</strong> Open till 3pm</li>
          <li className="text-dark"><strong>Saturday:</strong> Closed</li>
        </ul>
      </div>
    </div>
  );
}


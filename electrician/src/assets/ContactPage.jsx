import React from "react";

export default function ContactPage() {
  return (
    <div className="min-vh-100 bg-light p-4 d-flex flex-column align-items-center">
      <h2 className="display-4 font-weight-bold text-center mb-4">Contact Us</h2>
      <p className="text-secondary mb-4" style={{ maxWidth: '600px' }}>
        Call us at <span className="fw-semibold">(123) 456-7890</span> or email us at <span className="fw-semibold">info@electricalservices.com</span>
      </p>

      <div className="container">
        <h3 className="h4 mb-3">Visit Our Office</h3>
        <p className="text-secondary mb-4">
          We are located at: <br />
          123 Electric Avenue, <br />
          Cityville, ST 12345
        </p>

        <h3 className="h4 mb-3">Business Hours</h3>
        <ul className="list-unstyled">
          <li>Monday - Friday: 6:00 AM - 6:00 PM</li>
          <li>Saturday: Closed</li>
          <li>Sunday: 6:00 AM - 4:00 PM</li>
        </ul>

        <h3 className="h4 mb-3">Send Us a Message</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}


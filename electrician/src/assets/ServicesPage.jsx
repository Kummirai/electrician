import React from "react";
import { Card, CardContent } from "./components/ui/Card";
import { FaBolt, FaPhoneAlt, FaTools } from "react-icons/fa";
import serviceImage from "./images/service-image.webp";
import inspectImage from "./images/inspect-image.webp";
import fixImage from "./images/fix-image.webp";
import Footer from "./Footer";

export default function ServicesPage() {
  return (
    <div className="min-vh-100 bg-light p-4">
      <h2 className="display-4 font-weight-bold text-center mb-5">Our Services</h2>
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Emergency Repairs */}
        <div className="col">
          <Card className="h-100">
            <CardContent className="p-4 text-center">
              <img src={serviceImage} alt="Emergency Repairs" className="w-100 h-40 object-cover rounded-lg" />
              <FaBolt className="text-primary display-4 mt-4" />
              <h2 className="h5 font-weight-semibold mt-4">Emergency Repairs</h2>
              <p className="text-muted mt-2">Fast and reliable emergency electrical repairs available 24/7.</p>
              <p className="text-muted mt-3">
                We provide immediate response to electrical emergencies such as power outages, circuit failures, or any
                dangerous electrical issues. Our team is ready to tackle emergencies anytime, ensuring your safety and peace
                of mind.
              </p>
              <ul className="text-left text-muted">
                <li>24/7 service</li>
                <li>Quick response time</li>
                <li>Trained professionals</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Installations & Upgrades */}
        <div className="col">
          <Card className="h-100">
            <CardContent className="p-4 text-center">
              <img src={fixImage} alt="Installations & Upgrades" className="w-100 h-40 object-cover rounded-lg" />
              <FaTools className="text-primary display-4 mt-4" />
              <h2 className="h5 font-weight-semibold mt-4">Installations & Upgrades</h2>
              <p className="text-muted mt-2">Professional installation of wiring, panels, and more.</p>
              <p className="text-muted mt-3">
                Whether you're building a new home or renovating an existing one, our expert electricians ensure proper
                installation of electrical wiring, panels, outlets, and fixtures. We also offer upgrade services to meet
                modern electrical demands.
              </p>
              <ul className="text-left text-muted">
                <li>New construction wiring</li>
                <li>Panel upgrades</li>
                <li>Electrical safety checks</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Free Consultation */}
        <div className="col">
          <Card className="h-100">
            <CardContent className="p-4 text-center">
              <img src={inspectImage} alt="Free Consultation" className="w-100 h-40 object-cover rounded-lg" />
              <FaPhoneAlt className="text-primary display-4 mt-4" />
              <h2 className="h5 font-weight-semibold mt-4">Free Consultation</h2>
              <p className="text-muted mt-2">Contact us today for a free quote and expert advice.</p>
              <p className="text-muted mt-3">
                Get in touch with our team for a no-obligation consultation. We'll assess your electrical needs and provide
                a detailed quote, ensuring you understand the scope of the work and the associated costs before we begin.
              </p>
              <ul className="text-left text-muted">
                <li>Free on-site evaluation</li>
                <li>Detailed, transparent pricing</li>
                <li>Expert advice on electrical safety and efficiency</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="text-center mt-5">
</div>

<section className="container mt-5">
  <h2 className="text-center display-4 font-weight-bold mb-5">What Our Clients Say</h2>
  <div className="row g-4">
    <div className="col-md-4">
      <Card className="p-4 text-center shadow-sm border-light rounded">
        <blockquote className="blockquote display-1 fs-6 p-2">
          <p className="mb-0">"Reliable Electrician Services did an amazing job. Quick response and professional service!"</p>
          <footer className="blockquote-footer mt-3">John Doe, Homeowner</footer>
        </blockquote>
      </Card>
    </div>
    <div className="col-md-4">
      <Card className="p-4 text-center shadow-sm border-light rounded">
        <blockquote className="blockquote display-1 fs-6 p-2">
          <p className="mb-0">"We highly recommend them for any commercial electrical work. Very efficient!"</p>
          <footer className="blockquote-footer mt-3">Jane Smith, Business Owner</footer>
        </blockquote>
      </Card>
    </div>
    <div className="col-md-4">
      <Card className="p-4 text-center shadow-sm border-light rounded">
        <blockquote className="blockquote display-1 fs-6 p-2">
          <p className="mb-0">"The team handled our industrial electrical needs with great attention to detail. Highly professional."</p>
          <footer className="blockquote-footer mt-3">Mike Johnson, Industrial Facility Manager</footer>
        </blockquote>
      </Card>
    </div>
  </div>
</section>

<section className="container mt-5">
  <h2 className="text-center display-4 font-weight-bold">FAQs</h2>
  <div className="accordion mt-4" id="faqAccordion">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          What should I do in case of an electrical emergency?
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          In case of an electrical emergency, immediately call our 24/7 emergency line. Avoid any further electrical interference until the issue is handled.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Do you offer free estimates?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Yes, we offer free on-site evaluations and estimates for all electrical services.
        </div>
      </div>
    </div>
  </div>
</section>
<section className="container mt-5">
  <h2 className="text-center display-4 font-weight-bold">Why Choose Us?</h2>
  <div className="row mt-4">
    <div className="col-md-4">
      <div className="card p-4 text-center mb-3">
        <i className="bi bi-award display-4 text-primary mb-3"></i>
        <h3>Certified Professionals</h3>
        <p>Our team is fully licensed and certified to handle any electrical job, large or small.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-4 text-center mb-3">
        <i className="bi bi-leaf display-4 text-primary mb-3"></i>
        <h3>Eco-friendly Solutions</h3>
        <p>We offer green energy solutions to make your home or business more energy-efficient.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-4 text-center mb-3">
        <i className="bi bi-clock display-4 text-primary mb-3"></i>
        <h3>Timely Service</h3>
        <p>We pride ourselves on being punctual and completing projects on time, every time.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

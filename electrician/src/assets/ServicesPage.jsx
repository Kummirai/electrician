import React from "react";
import { Card, CardContent } from "./components/ui/Card";
import { FaBolt, FaPhoneAlt, FaTools } from "react-icons/fa";
import serviceImage from "./images/service-image.webp";
import inspectImage from "./images/inspect-image.webp";
import fixImage from "./images/fix-image.webp";

export default function ServicesPage() {
  return (
    <div className="min-vh-100 bg-light p-4">
      <h2 className="display-4 font-weight-bold text-center mb-5">Our Services</h2>
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Emergency Repairs */}
        <div className="col">
          <Card className="h-100">
            <CardContent className="p-4 text-center">
              <img src={serviceImage} alt="Emergency Repairs" className="w-100  object-cover rounded-lg" style={{height: "272px", objectFit : "cover" }} />
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
              <img src={fixImage} alt="Installations & Upgrades" className="w-100 h-40 object-cover rounded-lg" style={{height: "272px", objectFit : "cover" }} />
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
              <img src={inspectImage} alt="Free Consultation" className="w-100 h-40 object-cover rounded-lg" style={{height: "272px", objectFit : "cover" }} />
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
  <h2 className="text-center display-4 font-weight-bold">FAQs</h2>
  <div className="accordion mt-4" id="faqAccordion">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        1. What types of electrical services do you offer?
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
        We offer a wide range of electrical services, including residential, commercial, such as installations, repairs, wiring, lighting, and emergency services.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2. Do you offer emergency electrical services?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
        Yes, we offer 24/7 emergency electrical services to help with any urgent issues you may face, whether it's a power outage, faulty wiring, or electrical hazards.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        3. How much do your services cost?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
        Our pricing is transparent and competitive. We offer free estimates and will provide you with a detailed quote before starting any work. There are no hidden fees.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        4. Are you available for both residential and commercial work?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
        Yes, we offer electrical services for both residential and commercial clients, including wiring, repairs, maintenance, and installation of electrical systems.
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
        <h3>Affordable & Transparent Pricing</h3>
        <p>No hidden fees—just honest, upfront pricing! We provide cost-effective solutions without compromising on quality, so you get the best value for your money.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-4 text-center mb-3">
        <i className="bi bi-leaf display-4 text-primary mb-3"></i>
        <h3> Experienced & Skilled Electricians</h3>
        <p>We have a team of highly trained, and skilled electricians who ensure all work meets safety and quality standards. Your safety and satisfaction are our top priorities..</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-4 text-center mb-3">
        <i className="bi bi-clock display-4 text-primary mb-3"></i>
        <h3>Reliable & 24/7 Emergency Service</h3>
        <p>We understand that electrical issues can happen anytime. That’s why we offer fast response times and 24/7 emergency services to keep your home or business</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

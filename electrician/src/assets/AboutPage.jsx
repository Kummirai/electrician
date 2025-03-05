import React from "react";
import teamImage from "./images/fix-image.webp"; // Replace with your actual image path
import missionImage from "./images/service-image.webp"; // Replace with your actual image path
import communityImage from "./images/service-image.webp"; // Replace with your actual image path
import sustainabilityImage from "./images/inspect-image.webp"; // Replace with your actual image path

export default function AboutPage() {
  return (
    <div className="min-vh-100 bg-light p-5 d-flex flex-column align-items-center">
      <h2 className="display-4 font-weight-bold text-center mb-5">About Us</h2>
      <p className="text-secondary mb-5" style={{ maxWidth: '800px' }}>
        With over 10 years of experience, we provide top-quality electrical services tailored to your needs. Our team is committed to delivering fast, reliable, and professional electrical solutions for residential, commercial, and industrial projects. We aim to be your go-to electrical experts, ensuring the best possible outcomes for every job.
      </p>

      {/* Mission Section */}
      <h3 className="h5 text-primary mb-4">Our Mission</h3>
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={missionImage} alt="Mission" className="img-fluid rounded shadow-lg mb-4" />
        </div>
        <div className="col-md-6">
          <p className="text-secondary" style={{ maxWidth: '700px' }}>
            Our mission is to deliver exceptional electrical services with a focus on safety, efficiency, and customer satisfaction. We aim to exceed client expectations while maintaining the highest standards in every job we take on. Our goal is to provide reliable, sustainable, and innovative electrical solutions that ensure your home or business runs smoothly.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <h3 className="h5 text-primary mb-4">Our Values</h3>
      <div className="row align-items-center mb-5">
        
        <div className="col-md-6">
          <p className="text-secondary" style={{ maxWidth: '700px' }}>
            We believe in professionalism, transparency, and accountability. Our team works with integrity and takes pride in our work. We value building long-term relationships with our clients based on trust, respect, and open communication. Our aim is not just to meet your expectations, but to exceed them every time.
          </p>
        </div>
        <div className="col-md-6">
          <img src={communityImage} alt="Our Values" className="img-fluid rounded shadow-lg mb-4" />
        </div>
      </div>

      {/* Our Team Section */}
      <h3 className="h5 text-primary mb-4">Our Team</h3>
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={teamImage} alt="Our Team" className="img-fluid rounded shadow-lg mb-4" />
        </div>
        <div className="col-md-6">
          <p className="text-secondary" style={{ maxWidth: '700px' }}>
            Our team consists of licensed, certified, and highly skilled electricians who are dedicated to providing exceptional services. We continuously invest in training and certification to ensure that our technicians stay up-to-date with the latest industry standards, tools, and techniques. We believe in fostering a collaborative work environment to deliver the best results for our clients.
          </p>
        </div>
      </div>

      {/* Community Involvement Section */}
      <h3 className="h5 text-primary mb-4">Community Involvement</h3>
      <div className="row align-items-center mb-5">
        
        <div className="col-md-6">
          <p className="text-secondary" style={{ maxWidth: '700px' }}>
            As a locally owned business, we believe in giving back to the community. We participate in various charitable events, support local organizations, and strive to make a positive impact on the neighborhoods we serve. We are proud to be an active part of the community and to help improve the lives of those around us through our work and contributions.
          </p>
        </div>
        <div className="col-md-6">
          <img src={communityImage} alt="Community Involvement" className="img-fluid rounded shadow-lg mb-4" />
        </div>
      </div>

      {/* Sustainability & Innovation Section */}
      <h3 className="h5 text-primary mb-4">Sustainability & Innovation</h3>
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={sustainabilityImage} alt="Sustainability & Innovation" className="img-fluid rounded shadow-lg mb-4" />
        </div>
        <div className="col-md-6">
          <p className="text-secondary" style={{ maxWidth: '700px' }}>
            We are committed to sustainability and energy efficiency. As technology continues to evolve, we embrace innovation in the electrical field to offer cutting-edge solutions for energy conservation, such as solar power, LED lighting, and smart home technology. Our goal is to help you save energy, reduce your carbon footprint, and lower your utility bills with modern, sustainable solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

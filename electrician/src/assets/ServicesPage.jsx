import React from "react";
import { Card, CardContent } from "./components/ui/Card";
import { FaBolt, FaPhoneAlt, FaTools } from "react-icons/fa";
import serviceImage from "./images/service-image.webp";
import inspectImage from "./images/inspect-image.webp";
import fixImage from "./images/fix-image.webp";

export default function ServicesPage() {
  return (
    <div className="min-vh-100 bg-light p-4">
      <h2 className="display-4 font-weight-bold text-center">Our Services</h2>
      <section className="mt-6 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <Card className="h-100">
            <CardContent className="p-4 text-center">
              <img src={serviceImage} alt="Emergency Repairs" className="w-100 h-40 object-cover rounded-lg" />
              <FaBolt className="text-primary display-4 mt-4" />
              <h2 className="h5 font-weight-semibold mt-4">Emergency Repairs</h2>
              <p className="text-muted mt-2">Fast and reliable emergency electrical repairs available 24/7.</p>
            </CardContent>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100">
            <CardContent className="p-4 text-center">
              <img src={fixImage} alt="Installations & Upgrades" className="w-100 h-40 object-cover rounded-lg" />
              <FaTools className="text-primary display-4 mt-4" />
              <h2 className="h5 font-weight-semibold mt-4">Installations & Upgrades</h2>
              <p className="text-muted mt-2">Professional installation of wiring, panels, and more.</p>
            </CardContent>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100">
            <CardContent className="p-4 text-center">
              <img src={inspectImage} alt="Free Consultation" className="w-100 h-40 object-cover rounded-lg" />
              <FaPhoneAlt className="text-primary display-4 mt-4" />
              <h2 className="h5 font-weight-semibold mt-4">Free Consultation</h2>
              <p className="text-muted mt-2">Contact us today for a free quote and expert advice.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Card, CardContent } from "./components/ui/Card"
import { FaBolt, FaPhoneAlt, FaTools } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <img src="/images/emergency.jpg" alt="Emergency Repairs" className="w-full h-40 object-cover rounded-lg" />
            <FaBolt className="text-blue-600 text-5xl mx-auto mt-4" />
            <h2 className="text-xl font-semibold mt-4">Emergency Repairs</h2>
            <p className="text-gray-600 mt-2">Fast and reliable emergency electrical repairs available 24/7.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <img src="/images/installations.jpg" alt="Installations & Upgrades" className="w-full h-40 object-cover rounded-lg" />
            <FaTools className="text-blue-600 text-5xl mx-auto mt-4" />
            <h2 className="text-xl font-semibold mt-4">Installations & Upgrades</h2>
            <p className="text-gray-600 mt-2">Professional installation of wiring, panels, and more.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <img src="/images/consultation.jpg" alt="Free Consultation" className="w-full h-40 object-cover rounded-lg" />
            <FaPhoneAlt className="text-blue-600 text-5xl mx-auto mt-4" />
            <h2 className="text-xl font-semibold mt-4">Free Consultation</h2>
            <p className="text-gray-600 mt-2">Contact us today for a free quote and expert advice.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

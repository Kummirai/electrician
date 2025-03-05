import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-gray-600 mt-4 max-w-lg">
        Call us at <span className="font-semibold">(123) 456-7890</span> or email us at <span className="font-semibold">info@electricalservices.com</span>
      </p>
    </div>
  );
}

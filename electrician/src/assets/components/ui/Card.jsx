import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">{children}</div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-6 ${className || ""}`}>
      {children}
    </div>
  );
}

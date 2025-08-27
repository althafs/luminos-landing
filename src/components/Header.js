import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-700">Luminos</h1>
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#performance" className="hover:text-indigo-600">Performance</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
}

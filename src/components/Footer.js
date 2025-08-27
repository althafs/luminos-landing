import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Luminos</h2>
          <p className="text-sm">
            Award-winning Claims Management Platform built for enterprises with security, scalability, and global reach.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#performance" className="hover:text-white">Performance</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Contact</h2>
          <p className="text-sm">info@luminos.com</p>
          <p className="text-sm">+1 (800) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Luminos. All rights reserved.
      </div>
    </footer>
  );
}

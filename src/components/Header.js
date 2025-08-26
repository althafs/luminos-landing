import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">Luminos</h1>
      <p className="mt-2 text-lg">Award-winning Claims Management Platform</p>
      <button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500">
        Book a Demo
      </button>
    </header>
  );
}
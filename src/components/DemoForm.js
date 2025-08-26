import React from 'react';

export default function DemoForm() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Book a Demo</h2>
      <form className="grid gap-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        <input type="text" placeholder="First Name" className="border p-2 rounded" required />
        <input type="text" placeholder="Last Name" className="border p-2 rounded" required />
        <input type="text" placeholder="Company Name" className="border p-2 rounded" required />
        <input type="text" placeholder="Job Title" className="border p-2 rounded" required />
        <input type="email" placeholder="Email" className="border p-2 rounded" required />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </section>
  );
}
import React from 'react';

export default function Highlights() {
  return (
    <section className="grid md:grid-cols-3 gap-6 p-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold text-xl mb-2">Multi-Country Support</h2>
        <p>Localized content, currencies, and compliance settings for global reach.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold text-xl mb-2">Seamless Integration</h2>
        <p>Integrates smoothly with third-party APIs for extended functionality.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold text-xl mb-2">Scalable & Secure</h2>
        <p>Built for enterprise performance with robust security standards.</p>
      </div>
    </section>
  );
}
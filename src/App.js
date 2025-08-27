import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Check,
  ArrowRight,
  Mail,
  Phone,
  Shield,
  BarChart3,
  Globe2,
} from "lucide-react";

// Brand palette
// Primary: Navy #0B2C4A, Accent: Teal #1FA89A, Light: #F4F7FA

const chartData = [
  { month: "Jan", Workers: 120, Auto: 90, Liability: 60 },
  { month: "Feb", Workers: 110, Auto: 100, Liability: 65 },
  { month: "Mar", Workers: 130, Auto: 95, Liability: 70 },
  { month: "Apr", Workers: 105, Auto: 85, Liability: 68 },
  { month: "May", Workers: 98, Auto: 80, Liability: 64 },
  { month: "Jun", Workers: 90, Auto: 75, Liability: 60 },
  { month: "Jul", Workers: 85, Auto: 70, Liability: 58 },
  { month: "Aug", Workers: 82, Auto: 65, Liability: 56 },
  { month: "Sep", Workers: 76, Auto: 62, Liability: 54 },
  { month: "Oct", Workers: 72, Auto: 58, Liability: 51 },
  { month: "Nov", Workers: 68, Auto: 56, Liability: 49 },
  { month: "Dec", Workers: 65, Auto: 54, Liability: 47 },
];

export default function App() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !form.firstName ||
      !form.lastName ||
      !form.company ||
      !form.jobTitle ||
      !form.email
    ) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Book a demo payload:", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-800">
      {/* Header */}
      <header className="bg-[#0B2C4A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 grid place-items-center font-bold">
              GB
            </div>
            <span className="font-semibold tracking-wide">
              Gallagher Bassett – Luminos
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#insight" className="hover:text-[#1FA89A]">
              Insights
            </a>
            <a href="#control" className="hover:text-[#1FA89A]">
              Control
            </a>
            <a href="#results" className="hover:text-[#1FA89A]">
              Results
            </a>
            <button
              onClick={scrollToForm}
              className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-[#1FA89A] px-4 py-2 font-medium text-[#0B2C4A] hover:opacity-90"
            >
              Book a demo <ArrowRight size={18} />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C4A] via-[#0B2C4A] to-[#114B7A]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Transform Claims Management with{" "}
              <span className="text-[#1FA89A]">Luminos</span>
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              GB’s award-winning platform delivering clarity, control, and
              better outcomes through real-time insights and configurable
              workflows.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToForm}
                className="rounded-2xl bg-[#1FA89A] px-6 py-3 text-[#0B2C4A] font-semibold inline-flex items-center gap-2 hover:opacity-90"
              >
                Book a demo <ArrowRight size={18} />
              </button>
              <a
                href="#learn-more"
                className="rounded-2xl border border-white/30 px-6 py-3 text-white font-semibold inline-flex items-center gap-2 hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <h3 className="text-lg font-semibold text-[#0B2C4A]">
              Interactive Claims Trends
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Hover or tap to explore categories.
            </p>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Workers"
                    stroke="#1FA89A"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Auto"
                    stroke="#0B2C4A"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Liability"
                    stroke="#7CB3E3"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section
        id="learn-more"
        className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-6"
      >
        <FeatureCard
          id="insight"
          icon={<BarChart3 />}
          title="Insight"
          desc="Real-time dashboards & benchmarking deliver the visibility you need to act fast."
          bullets={["Role-based views", "Drilldown analytics", "Export & API access"]}
        />
        <FeatureCard
          id="control"
          icon={<Shield />}
          title="Control"
          desc="Configurable workflows and rules keep every claim on track and compliant."
          bullets={["Automated tasks", "Rules engine", "Audit-ready"]}
        />
        <FeatureCard
          id="results"
          icon={<Globe2 />}
          title="Results"
          desc="Proven to reduce costs and accelerate resolution across regions and lines."
          bullets={["Lower loss costs", "Faster cycle time", "Improved outcomes"]}
        />
      </section>

      {/* Demo Form */}
      <section
        ref={formRef}
        className="max-w-7xl mx-auto px-6 py-14"
      >
        <div className="bg-white rounded-3xl p-8 shadow-xl grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2C4A]">
              Book a demo
            </h2>
            <p className="mt-2 text-slate-600">
              See how Luminos can streamline your claims program.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: <Mail size={18} />, text: "Automated confirmation" },
                { icon: <Phone size={18} />, text: "Follow-up within 1–2 days" },
                { icon: <Check size={18} />, text: "Custom walkthrough" },
              ].map((i, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-[#1FA89A]">{i.icon}</span>
                  {i.text}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Input
              label="First name"
              name="firstName"
              value={form.firstName}
              onChange={onChange}
            />
            <Input
              label="Last name"
              name="lastName"
              value={form.lastName}
              onChange={onChange}
            />
            <Input
              label="Company name"
              name="company"
              value={form.company}
              onChange={onChange}
              className="sm:col-span-2"
            />
            <Input
              label="Job title"
              name="jobTitle"
              value={form.jobTitle}
              onChange={onChange}
            />
            <Input
              label="Email address"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
            />
            <div className="sm:col-span-2 mt-2 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded border-slate-300" required /> I agree to
                be contacted.
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#1FA89A] px-6 py-3 font-semibold text-[#0B2C4A] hover:opacity-90"
              >
                {submitted ? "Submitted" : "Submit"} <ArrowRight size={18} />
              </button>
            </div>
            {submitted && (
              <p className="sm:col-span-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl p-3">
                Thanks! Your request has been received.
              </p>
            )}
          </form>
        </div>
      </section>

            {/* Footer */}
      <footer className="bg-[#0B2C4A] text-[#F4F7FA] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Luminos</h2>
            <p className="text-sm text-[#F4F7FA]/80">
              Award-winning Claims Management Platform built for enterprises with
              security, scalability, and global reach.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#insight" className="hover:text-[#1FA89A] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-[#1FA89A] transition-colors">
                  Performance
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1FA89A] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Contact</h2>
            <p className="text-sm text-[#F4F7FA]/80">info@luminos.com</p>
            <p className="text-sm text-[#F4F7FA]/80">+1 (800) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-[#1FA89A]/40 text-center py-4 text-sm text-[#F4F7FA]/70">
          © {new Date().getFullYear()} Luminos. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

function FeatureCard({ id, icon, title, desc, bullets }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
    >
      <div className="w-11 h-11 rounded-2xl bg-[#E8F7F5] text-[#0B2C4A] grid place-items-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#0B2C4A]">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="text-[#1FA89A]" size={18} /> {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Input({ label, className = "", ...props }) {
  return (
    <label className={`text-sm ${className}`}>
      <span className="block mb-1 text-slate-700 font-medium">{label}</span>
      <input
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-[#1FA89A] focus:ring-2 focus:ring-[#1FA89A]/20 transition"
        {...props}
        required
      />
    </label>
  );
}

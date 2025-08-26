import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', claims: 30 },
  { month: 'Feb', claims: 45 },
  { month: 'Mar', claims: 60 },
  { month: 'Apr', claims: 80 },
];

export default function ChartSection() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Claims Performance</h2>
      <div className="flex justify-center">
        <LineChart width={500} height={300} data={data}>
          <Line type="monotone" dataKey="claims" stroke="#2563eb" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </section>
  );
}
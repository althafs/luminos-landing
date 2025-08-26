import React from 'react';
import Header from './components/Header';
import Highlights from './components/Highlights';
import DemoForm from './components/DemoForm';
import ChartSection from './components/ChartSection';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Highlights />
      <ChartSection />
      <DemoForm />
    </div>
  );
}

export default App;
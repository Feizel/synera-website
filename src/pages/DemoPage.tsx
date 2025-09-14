import React from 'react';
import DemoHero from '../components/DemoHero';
import LeadCaptureForm from '../components/LeadCaptureForm';
import FAQ from '../components/FAQ';

const DemoPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <DemoHero />
      <LeadCaptureForm />
      <FAQ />
    </div>
  );
};

export default DemoPage;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeoIntelligence from './components/SeoIntelligence';
import Offerings from './components/Offerings';
import Amenities from './components/Amenities';
import LocationAdvantage from './components/LocationAdvantage';
import Investment from './components/Investment';
import FaqSection from './components/FaqSection';
import InquiryModal from './components/InquiryModal';
import Footer from './components/Footer';

export default function App() {
  // Inquiry form states
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState<'site_visit' | 'pricing' | 'brochure' | 'general'>('general');
  const [modalSpace, setModalSpace] = useState<'office' | 'retail' | 'both' | ''>('');

  const handleOpenInquiry = (
    interest: 'site_visit' | 'pricing' | 'brochure' | 'general' = 'general',
    space: 'office' | 'retail' | 'both' | '' = ''
  ) => {
    setModalInterest(interest);
    setModalSpace(space);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div className="bg-neutral-50 text-neutral-900 min-h-screen font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Premium Header / Sticky Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Sections */}
      <main>
        {/* Luxury Hero Showcase with Custom Renderings and Pointers */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Dynamic SEO Insights strip / Corridor Overview */}
        <SeoIntelligence />

        {/* Commercial Configurations Selector & Interactive Budget Calculator */}
        <Offerings onOpenInquiry={handleOpenInquiry} />

        {/* Bento Grid Amenities overview */}
        <Amenities />

        {/* Vector schematic Corridor Roadmap & travel connectivity advisor */}
        <LocationAdvantage />

        {/* Capital & Cashflow statistics & ROI Yield Estimator */}
        <Investment />

        {/* Clean Accordion list for RERA & neighborhood queries */}
        <FaqSection />
      </main>

      {/* Corporate Address & Toll-free callback service */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Central Booking Engine Overlay / Brochure direct downloader */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        initialInterestType={modalInterest}
        initialSpaceType={modalSpace}
      />

    </div>
  );
}

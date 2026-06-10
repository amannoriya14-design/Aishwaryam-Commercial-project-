/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Store, Check, ArrowRight, Calculator, FileCheck, Layers, Expand, Sparkles } from 'lucide-react';

interface OfferingsProps {
  onOpenInquiry: (interest: 'site_visit' | 'pricing' | 'brochure' | 'general', space: 'office' | 'retail' | 'both' | '') => void;
}

export default function Offerings({ onOpenInquiry }: OfferingsProps) {
  const [activeTab, setActiveTab] = useState<'office' | 'retail'>('office');
  const [unitSize, setUnitSize] = useState<number>(1200); // default sq ft size

  const officeImage = '/src/assets/images/office_spaces_1781074912114.png';
  const retailImage = '/src/assets/images/retail_spaces_1781074927315.png';

  // Constants for pricing
  const OFFICE_RATE = 7800; // INR per sq ft
  const RETAIL_RATE = 13500; // INR per sq ft

  const currentRate = activeTab === 'office' ? OFFICE_RATE : RETAIL_RATE;
  const rawValue = unitSize * currentRate;

  // Format currency
  const formatINR = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(value / 100000).toFixed(2)} Lakhs`;
  };

  const officeFeatures = [
    'Flexible Size Options: Small, Mid & Large Office Configurations',
    'Modern Architecture with High-Rise Visibility',
    '24x7 Security & Power Backup',
    'Dedicated Parking for Owners & Visitors',
    'High-Speed Elevator Access',
  ];

  const retailFeatures = [
    'Ground Floor & Podium-Level Retail Units',
    'High Footfall — Residential & Transit Catchment',
    'Ideal for F&B, Pharmacy, Banking, Retail Brands',
    'Ample Display Frontage',
  ];

  const sizeRanges = {
    office: { min: 450, max: 12000, step: 50, label: 'Professional Office Suite' },
    retail: { min: 300, max: 6500, step: 50, label: 'Prime High-Street Shop' },
  };

  return (
    <section id="offerings" className="bg-white py-24 relative overflow-hidden">
      {/* Background vector circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-850 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Commercial Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Explore Aishwaryam Group's range of commercial configurations in Moshi and Chikhali — tailored for businesses of all sizes and sectors.
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mt-4" />
        </div>

        {/* Dual Column grid for core products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">
          
          {/* Office Spaces Offering */}
          <div className="flex flex-col rounded-2xl bg-white border border-neutral-200 hover:border-amber-500/30 transition-all overflow-hidden group shadow-md hover:shadow-lg">
            <div className="relative h-64 md:h-80 overflow-hidden shrink-0">
              <img
                src={officeImage}
                alt="Premium Office Spaces"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-xs font-extrabold uppercase rounded-full tracking-wider flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" /> Premium Offices
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                  Office Spaces
                </h3>
                 <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">Recommended Configurations</p>
                
                {/* List features natively */}
                <div className="space-y-3">
                  {officeFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <button
                  id="explore-offices-btn"
                  onClick={() => {
                    setActiveTab('office');
                    onOpenInquiry('pricing', 'office');
                  }}
                  className="flex-1 py-3 bg-neutral-50 hover:bg-neutral-100 text-amber-800 hover:text-amber-900 border border-neutral-200 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Explore Office Spaces</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Retail & Shop Spaces Offering */}
          <div className="flex flex-col rounded-2xl bg-white border border-neutral-200 hover:border-amber-500/30 transition-all overflow-hidden group shadow-md hover:shadow-lg">
            <div className="relative h-64 md:h-80 overflow-hidden shrink-0">
              <img
                src={retailImage}
                alt="Prime Retail Fields"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-xs font-extrabold uppercase rounded-full tracking-wider flex items-center gap-1">
                <Store className="w-3.5 h-3.5" /> High-Street Shops
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                  Retail & Shop Spaces
                </h3>
                <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">High Footfall Catchment Features</p>
                
                {/* List features natively */}
                <div className="space-y-3">
                  {retailFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <button
                  id="view-retail-btn"
                  onClick={() => {
                    setActiveTab('retail');
                    onOpenInquiry('pricing', 'retail');
                  }}
                  className="flex-1 py-3 bg-neutral-50 hover:bg-neutral-100 text-amber-800 hover:text-amber-900 border border-neutral-200 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>View Retail Options</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* INTERACTIVE INTEGRATED SIZE CONFIGURATION CALCULATOR */}
        <div className="p-6 md:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-4 right-4 text-neutral-300 pointer-events-none">
            <Calculator className="w-32 h-32 opacity-15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Control Column */}
            <div className="md:col-span-7 space-y-6 font-sans">
              <div className="space-y-2">
                <span className="text-[10px] text-amber-800 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Interactive Configuration Simulator
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                  Simulate Business Size & Budget Value
                </h3>
                <p className="text-neutral-600 text-xs md:text-sm font-medium">
                  Click to switch between configurations and slide the size metrics to estimate the primary investment footprint.
                </p>
              </div>

              {/* Toggles */}
              <div className="flex gap-3">
                <button
                  id="config-office-tab"
                  onClick={() => {
                    setActiveTab('office');
                    setUnitSize(1200);
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl border font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'office'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-900 shadow shadow-amber-500/5'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Building2 className="w-4 h-4" /> Professional Office
                </button>
                
                <button
                  id="config-retail-tab"
                  onClick={() => {
                    setActiveTab('retail');
                    setUnitSize(750);
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl border font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'retail'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-900 shadow shadow-amber-500/5'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Store className="w-4 h-4" /> High-Street Shop
                </button>
              </div>

              {/* Size Slider metric */}
              <div className="space-y-3 bg-white p-5 rounded-xl border border-neutral-200">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-700 font-bold uppercase tracking-wider">
                    {activeTab === 'office' ? sizeRanges.office.label : sizeRanges.retail.label}
                  </span>
                  <span className="font-mono text-lg text-amber-900 font-extrabold flex items-center gap-1 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    <Expand className="w-4 h-4 text-amber-600" />
                    {unitSize} <span className="text-xs uppercase font-sans text-neutral-700 font-semibold">sq ft</span>
                  </span>
                </div>

                <input
                  id="config-slider"
                  type="range"
                  min={activeTab === 'office' ? sizeRanges.office.min : sizeRanges.retail.min}
                  max={activeTab === 'office' ? sizeRanges.office.max : sizeRanges.retail.max}
                  step={activeTab === 'office' ? sizeRanges.office.step : sizeRanges.retail.step}
                  value={unitSize}
                  onChange={e => setUnitSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                />

                <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono font-bold">
                  <span>Min: {activeTab === 'office' ? sizeRanges.office.min : sizeRanges.retail.min} Sq.Ft.</span>
                  <span>Max: {activeTab === 'office' ? sizeRanges.office.max : sizeRanges.retail.max} Sq.Ft.</span>
                </div>
              </div>

            </div>

            {/* Price Output panel */}
            <div className="md:col-span-5 p-5 bg-white rounded-xl border border-neutral-200 self-stretch flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="text-[10px] text-amber-800 font-bold uppercase tracking-widest block">
                  Estimated Pricing footprint
                </span>

                <div className="space-y-3 pt-1">
                  <div className="flex justify-between text-xs text-neutral-600">
                    <span>Rate Per Sq. Ft:</span>
                    <span className="font-mono text-neutral-900 font-bold">₹{currentRate.toLocaleString('en-IN')}/sq ft</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-600 border-b border-neutral-100 pb-2.5">
                    <span>RERA Carpet Space:</span>
                    <span className="font-mono text-neutral-900 font-bold">{unitSize} Sq. Ft.</span>
                  </div>

                  <div className="py-2">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-tight block font-semibold">
                      Estimated Indicative Value
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-neutral-950 block tracking-tighter">
                      {formatINR(rawValue)}
                    </span>
                    <span className="text-[10px] text-neutral-400 block leading-none mt-1 font-medium">
                      *Exclusive of statutory registration duties, stamp paper, GST.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-100">
                <button
                  id="request-quote-sim-btn"
                  onClick={() => onOpenInquiry('pricing', activeTab)}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-extrabold text-xs uppercase tracking-wider rounded-lg cursor-pointer flex items-center justify-center gap-1.5 shadow shadow-amber-500/10"
                >
                  <FileCheck className="w-4.5 h-4.5" />
                  <span>Request Instant PDF Quotation</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

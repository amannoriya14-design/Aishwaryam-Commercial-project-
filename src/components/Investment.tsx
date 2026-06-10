/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Coins, PiggyBank, ArrowUpRight, BarChart3, TrendingUp, Sparkles, HelpCircle } from 'lucide-react';

export default function Investment() {
  const [propertyValue, setPropertyValue] = useState<number>(12000000); // 1.2 Crore default
  const [expectedRent, setExpectedRent] = useState<number>(65); // 65 INR per sq ft default
  const [propertySize, setPropertySize] = useState<number>(1500); // 1500 sq ft office default

  // Simple Financial formula derivations
  const totalCost = propertyValue; 
  const monthlyRentalIncome = propertySize * expectedRent;
  const annualRentalIncome = monthlyRentalIncome * 12;
  const grossRentalYield = (annualRentalIncome / totalCost) * 100;
  
  // Custom appreciation formula (7.5% per annum for North Pune commercial average)
  const estimatedValueIn5Years = totalCost * Math.pow(1 + 0.075, 5);
  const capitalAppreciationGain = estimatedValueIn5Years - totalCost;

  const investmentHighlights = [
    {
      title: 'High Rental Yield from Commercial Tenants',
      description: 'Unlike residential yields of 2-3%, Moshi-Chikhali commercial assets consistently secure 6.5% to 8.5% annual yields.',
    },
    {
      title: 'Growing Catchment of Residential Consumers',
      description: 'Over 50,000 middle-to-high income families reside in a 4km radius, driving heavy retail footfalls and corporate consumer demand.',
    },
    {
      title: 'Proximity to Chakan & Industrial Zones',
      description: 'Positioned perfect to host massive automotive supply vendors, manufacturing consultation lines, and corporate corporate cells.',
    },
    {
      title: 'Infrastructure-Led Appreciation',
      description: 'Enjoy healthy equity gains driven by Pune-Nashik highway widenings and the upcoming rapid transit Metro line expansions.',
    },
    {
      title: 'Limited Commercial Supply — High Demand',
      description: 'Stringent town planning keeps high-visibility retail plots scarce, locking in strong occupant demand and rent escalation rights.',
    },
  ];

  // Helper to format currency
  const formatINR = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(value / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <section id="investment" className="bg-neutral-50 py-24 relative overflow-hidden text-neutral-900 font-sans">
      {/* Absolute glow points */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-850 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Investment Thesis
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Why Invest in Commercial Property in Moshi & Chikhali?
          </h2>
          <p className="text-neutral-600 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Commercial real estate in Moshi and Chikhali delivers exceptional returns, driven by high demand from retail brands, professional offices, and service businesses catering to North Pune's rapidly growing residential population.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mt-4" />
        </div>

        {/* Highlight bullets & interactive visual calculator layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Highlights Left */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-lg font-bold text-neutral-850 uppercase tracking-wide mb-8 flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-600" /> Capital & Cashflow Safety Indicators
            </h3>

            <div className="space-y-4">
              {investmentHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-amber-500/15 hover:bg-neutral-50/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-750 font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5 font-mono">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm md:text-base text-neutral-900">{hl.title}</h4>
                      <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-medium">
                        {hl.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Simulator Right */}
          <div className="lg:col-span-6">
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-neutral-200 shadow-2xl space-y-6">
              
              <div className="border-b border-neutral-200 pb-4">
                <span className="text-[9px] text-amber-700 font-bold uppercase tracking-widest block mb-1">
                  Financial Modeler
                </span>
                <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-1.5">
                  <BarChart3 className="w-4.5 h-4.5 text-amber-650" /> Real Estate Yield & Capital Estimator
                </h3>
              </div>

              {/* Silder 1: Commercial Asset Premium Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-700">
                  <span>Commercial Asset Value</span>
                  <span className="font-mono text-amber-750 text-sm">{formatINR(propertyValue)}</span>
                </div>
                <input
                  id="investment-val-slider"
                  type="range"
                  min="5000000" // 50 Lakhs
                  max="100000000" // 10 Crores
                  step="1000000" // 10 Lakh steps
                  value={propertyValue}
                  onChange={e => setPropertyValue(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
                  <span>Min: ₹50 Lakhs</span>
                  <span>Max: ₹10 Crores</span>
                </div>
              </div>

              {/* Slider 2: Rental Space Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-700">
                  <span>Unit Size Selection</span>
                  <span className="font-mono text-amber-750 text-sm">{propertySize} Sq. Ft.</span>
                </div>
                <input
                  id="investment-size-slider"
                  type="range"
                  min="300"
                  max="8000"
                  step="100"
                  value={propertySize}
                  onChange={e => setPropertySize(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
                  <span>Min: 300 Sq.Ft</span>
                  <span>Max: 8,000 Sq.Ft</span>
                </div>
              </div>

              {/* Slider 3: Expected monthly rent per sq ft */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-700">
                  <span>Estimated Rent Per Sq. Ft</span>
                  <span className="font-mono text-emerald-700 text-sm">₹{expectedRent}/sq ft pm</span>
                </div>
                <input
                  id="investment-rent-slider"
                  type="range"
                  min="35"
                  max="150"
                  step="5"
                  value={expectedRent}
                  onChange={e => setExpectedRent(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
                  <span>Min: ₹35 (Offices)</span>
                  <span>Max: ₹150 (Premium high-street retail)</span>
                </div>
              </div>

              {/* Yield Output grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                
                {/* Result 1: Rental Yield */}
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-left">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold block mb-1">
                    Estimated Gross Yield
                  </span>
                  <strong className="text-xl md:text-2xl font-mono font-extrabold text-emerald-700 block">
                    {grossRentalYield.toFixed(2)}%
                  </strong>
                  <span className="text-[9px] text-neutral-500 leading-none block mt-1 font-sans">
                    *PVM benchmark average: 4.5%
                  </span>
                </div>

                {/* Result 2: Annual income */}
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-left">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold block mb-1">
                    Annual Gross Rent
                  </span>
                  <strong className="text-xl md:text-2xl font-mono font-extrabold text-neutral-900 block">
                    {formatINR(annualRentalIncome)}
                  </strong>
                  <span className="text-[9px] text-emerald-750 font-bold block mt-1 font-sans">
                    ₹{(monthlyRentalIncome / 1000).toFixed(0)}k Monthly cashflow
                  </span>
                </div>

                {/* Result 3: Appreciation 5-Yr Forecast */}
                <div className="col-span-2 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-left flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-amber-900 font-extrabold uppercase tracking-widest block mb-0.5 font-mono">
                      North Pune 5-Year Capital Gains Projection
                    </span>
                    <span className="text-sm font-bold text-neutral-800">
                      Asset Appreciation Value Target:
                    </span>
                    <strong className="text-base md:text-lg text-neutral-900 block font-mono font-extrabold mt-0.5">
                      {formatINR(estimatedValueIn5Years)}
                    </strong>
                  </div>
                  <div className="text-right">
                    <span className="bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded flex items-center gap-1">
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      <span>{((capitalAppreciationGain / totalCost) * 100).toFixed(0)}% Growth</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Route, Compass, Landmark, Link, Check, Bus, Train } from 'lucide-react';

export default function LocationAdvantage() {
  const [selectedDestination, setSelectedDestination] = useState<number>(0);

  const locationHighlights = [
    {
      name: 'Pune-Nashik Highway (NH-60)',
      time: 'Direct Access',
      distance: '0.2 km',
      importance: 'Major arterial highway connecting North India catchments securely.',
      icon: <Route className="w-5 h-5 text-amber-500" />,
      detail: 'Direct access from Aishwaryam Group’s project entrance ensures that heavy vehicles and logistics have seamless access without entering heavy domestic residential paths.',
    },
    {
      name: 'Chakan Industrial Belt',
      time: '15 Minutes',
      distance: '8.5 km',
      importance: 'Asia’s premier automotive, manufacturing and logistics epicenter.',
      icon: <Landmark className="w-5 h-5 text-amber-500" />,
      detail: 'Perfect for engineering headquarters, suppliers, and service consultants looking to capture the massive automotive corporate portfolio (Mercedes, Volkswagen, Bajaj, Mahindra nearby).',
    },
    {
      name: 'Pune City Centre',
      time: '20 Minutes',
      distance: '16.2 km',
      importance: 'Core historic and corporate district of Pune.',
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      detail: 'Swift connections via the bypass highway guarantee your teams are in touch with central banks, municipal chambers, and core business zones under half an hour.',
    },
    {
      name: 'Proposed Metro Connectivity',
      time: 'Nearby (5-7 Mins)',
      distance: '2.1 km',
      importance: 'Upcoming mass rapid transit system linking PCMC to Swargate.',
      icon: <Train className="w-5 h-5 text-amber-500" />,
      detail: 'The proposed corridor extension guarantees consistent appreciation of commercial asset values and heavy, reliable employee footfall from all across the metro transit grid.',
    },
    {
      name: 'High-Density Residential Catchment',
      time: 'Immediate Circle',
      distance: '0.1 km',
      importance: 'Expanding consumer market of high-earning industrial families.',
      icon: <UsersIcon className="w-5 h-5 text-amber-500" />,
      detail: 'Surrounded by 10,000+ newly delivered modern residential apartments inside Moshi & Chikhali, ensuring retail outlets gain heavy weekend traffic immediately from day one.',
    },
  ];

  return (
    <section id="location" className="bg-white py-24 relative overflow-hidden">
      {/* Background vector visual aids */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-850 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Location Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Prime Locations in North Pune's Commercial Belt
          </h2>
          <p className="text-neutral-600 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Moshi and Chikhali offer unmatched commercial advantages — high residential density, proximity to industrial zones, major highway access, and daily high footfall from the resident community.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mt-4" />
        </div>

        {/* Location layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* List of Landmarks (Toggles) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-neutral-800 uppercase tracking-wider mb-6 flex items-center gap-2">
              <MapPin className="text-amber-600 w-5 h-5" /> Tap Destinations To Check Travel Intel
            </h3>

            <div className="space-y-3">
              {locationHighlights.map((dest, i) => (
                <button
                  key={i}
                  id={`dest-selector-${i}`}
                  onClick={() => setSelectedDestination(i)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-4 cursor-pointer ${
                    selectedDestination === i
                      ? 'bg-neutral-50 border-amber-500 text-neutral-900 shadow-md shadow-amber-500/5'
                      : 'bg-white border-neutral-200 text-neutral-500 hover:border-neutral-350 hover:text-neutral-800'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border shrink-0 transition-colors ${
                    selectedDestination === i ? 'bg-amber-500/10 border-amber-500/20 text-amber-750' : 'bg-neutral-50 border-neutral-250 text-neutral-500'
                  }`}>
                    {dest.icon}
                  </div>

                  <div className="space-y-1 w-full">
                    <div className="flex justify-between items-center gap-2">
                      <h4 className="font-extrabold text-sm md:text-base text-neutral-900">{dest.name}</h4>
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        selectedDestination === i ? 'bg-amber-500/20 text-amber-900' : 'bg-neutral-100 text-neutral-550'
                      }`}>
                        {dest.time}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 font-medium truncate max-w-sm md:max-w-md">
                      {dest.importance}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Map Vector Visualization and Details */}
          <div className="lg:col-span-6">
            <div className="p-6 md:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Detailed panel for active destination */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="p-1 px-2.5 rounded bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider">
                    Selected Destination Advantage
                  </span>
                  <span className="font-mono text-xs text-neutral-500 font-bold">{locationHighlights[selectedDestination].distance} Distance</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  {locationHighlights[selectedDestination].name}
                </h3>

                <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium">
                  {locationHighlights[selectedDestination].detail}
                </p>

                <div className="p-3.5 rounded-lg bg-white border border-neutral-200 text-xs text-amber-900 flex items-center gap-2 font-bold shadow-sm">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Connectivity Factor: <strong className="text-neutral-950 font-extrabold">{locationHighlights[selectedDestination].time}</strong> average transit window.</span>
                </div>
              </div>

              {/* Vector schematic of local roads map */}
              <div className="relative border border-neutral-200 bg-white rounded-xl p-4 h-52 flex items-center justify-center overflow-hidden shadow-inner">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Decorative background lines */}
                  <line x1="0" y1="50" x2="400" y2="250" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="100" y1="0" x2="100" y2="300" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="300" y1="0" x2="300" y2="300" stroke="#E2E8F0" strokeWidth="1" />

                  {/* NH-60 Pune-Nashik highway route line */}
                  <path d="M 50 200 C 150 150, 250 80, 380 50" fill="transparent" stroke="#D97706" strokeWidth="3" strokeDasharray="6" />
                  
                  {/* Moshi-Chikhali link road line */}
                  <path d="M 200 40 L 200 240" fill="transparent" stroke="#94A3B8" strokeWidth="2" />

                  {/* Destination connectors */}
                  <line x1="200" y1="130" x2="320" y2="80" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3" />
                  <line x1="200" y1="130" x2="90" y2="90" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3" />
                  <line x1="200" y1="130" x2="200" y2="220" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3" />
                </svg>

                {/* Hotspot overlays */}
                <div className="absolute left-[50%] top-[45%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-amber-500 ring-4 ring-amber-500/10 flex items-center justify-center animate-pulse z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <span className="bg-amber-500 text-neutral-950 text-[9px] font-extrabold px-1.5 py-0.2 rounded mt-1.5 uppercase shadow-md leading-none border border-amber-400">
                    Site Location
                  </span>
                </div>

                {/* Chakan node label */}
                <div className="absolute top-[20%] left-[10%] text-center">
                  <span className="text-[10px] bg-white text-neutral-700 px-2 py-0.5 rounded border border-neutral-200 block font-bold shadow-sm">
                    Chakan MIDC
                  </span>
                  <span className="text-[9px] text-amber-700 font-mono font-bold block">15 Mins</span>
                </div>

                {/* City node label */}
                <div className="absolute bottom-[20%] left-[45%] text-center">
                  <span className="text-[10px] bg-white text-neutral-700 px-2 py-0.5 rounded border border-neutral-200 block font-bold shadow-sm">
                    Pune City Center
                  </span>
                  <span className="text-[9px] text-amber-700 font-mono font-bold block">20 Mins</span>
                </div>

                {/* NH-60 track label */}
                <div className="absolute top-[15%] right-[10%] text-center rotate-[-15deg]">
                  <span className="text-[9px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-500/20 font-bold tracking-wider">
                    Pune-Nashik Highway
                  </span>
                </div>

                {/* Proposed Metro */}
                <div className="absolute bottom-[30%] right-[15%] text-center">
                  <span className="text-[10px] bg-white text-neutral-700 px-2 py-0.5 rounded border border-neutral-200 block font-bold shadow-sm">
                    Metro Station
                  </span>
                  <span className="text-[9px] text-emerald-600 font-bold block">Proposed Route</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Simple internal icon to replace modular dependency overlap
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

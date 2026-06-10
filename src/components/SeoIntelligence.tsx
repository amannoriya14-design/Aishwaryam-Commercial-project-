/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TrendingUp, Car, Users, LayoutDashboard, Database } from 'lucide-react';

export default function SeoIntelligence() {
  const analyticCards = [
    {
      icon: <Users className="w-5 h-5 text-amber-500" />,
      value: '300,000+',
      label: 'Residential Catchment',
      description: 'Prosperous families in Moshi-Chikhali link corridor',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
      value: '15.4%',
      label: 'Annual Capital Growth',
      description: 'Consistently outpacing standard Pune municipal rates',
    },
    {
      icon: <Car className="w-5 h-5 text-amber-500" />,
      value: '10 Mins',
      label: 'To Chakan MIDC Hub',
      description: 'Quick gateway to Asia’s biggest automotive zone',
    },
  ];

  return (
    <section id="seo-intelligence-strip" className="relative bg-gradient-to-b from-white to-neutral-100 border-y border-neutral-200 py-12">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(197,168,128,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 text-amber-800 border border-amber-500/15 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span>North Pune's Most Promising Commercial Zone</span>
            </div>

            <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-light">
              Moshi and Chikhali are emerging as North Pune's commercial powerhouses, driven by rapid residential growth, highway connectivity, and expanding industrial catchment. Investing in commercial space here today means securing a high-yield asset in tomorrow's commercial hotspot.
            </p>

          </div>

          {/* Micro Analytic metric grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {analyticCards.map((card, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl bg-white border border-neutral-200 hover:border-amber-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-500 group-hover:text-amber-800 group-hover:border-amber-500/20 transition-colors">
                    {card.icon}
                  </div>
                  {/* Subtle decorative graph bars */}
                  <div className="flex items-end gap-0.5 h-4">
                    <span className="w-1 bg-amber-500/10 h-2 group-hover:h-3 transition-all duration-500" />
                    <span className="w-1 bg-amber-500/20 h-4 group-hover:h-2 transition-all duration-500" />
                    <span className="w-1 bg-amber-500/50 h-3 group-hover:h-4 transition-all duration-500" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold font-mono text-neutral-900 group-hover:text-amber-800 transition-colors">
                    {card.value}
                  </h4>
                  <p className="text-xs font-bold text-neutral-800">{card.label}</p>
                  <p className="text-[10px] text-neutral-500 leading-normal font-medium">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Zap, ArrowUpDown, Eye, ShieldAlert, Car, Wifi, Sofa, Power, HeartHandshake } from 'lucide-react';

export default function Amenities() {
  const amenitiesList = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: '24x7 Power Backup',
      description: 'Dual grid automatic change-over ensures operational continuity for files and servers.',
    },
    {
      icon: <ArrowUpDown className="w-6 h-6 text-amber-500" />,
      title: 'High-Speed Elevators',
      description: 'Zoned high-speed passenger & dedicated secure freight service elevators.',
    },
    {
      icon: <Eye className="w-6 h-6 text-amber-500" />,
      title: 'CCTV Surveillance & Security',
      description: 'Precision physical guard details coupled with high-definition digital surveillance.',
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-500" />,
      title: 'Fire Safety Systems',
      description: 'Integrated smoke detectors, high-volume fire sprinklers, and escape pathways.',
    },
    {
      icon: <Car className="w-6 h-6 text-amber-500" />,
      title: 'Ample Parking — Owned & Visitor',
      description: 'Multi-level parking allocation for business owners and dedicated drop-offs for clients.',
    },
    {
      icon: <Wifi className="w-6 h-6 text-amber-500" />,
      title: 'Fibre Optic Internet Ready',
      description: 'Pre-piped multi-service high-speed data trunks pre-connected to Tier-1 ISPs.',
    },
    {
      icon: <Sofa className="w-6 h-6 text-amber-500" />,
      title: 'Modern Lobbies',
      description: 'Double-height entrance lobby decorated in premium Italian marble and warm lighting.',
    },
    {
      icon: <Power className="w-6 h-6 text-amber-500" />,
      title: 'DG Power Backup',
      description: 'Heavy duty diesel generators supporting entire commercial workspace loads natively.',
    },
  ];

  return (
    <section id="amenities" className="bg-neutral-50 py-24 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-850 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Amenities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Infrastructure Built for Business Success
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Our commercial developments are equipped with everything a modern business needs to thrive and grow in North Pune.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mt-4" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-amber-600 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-neutral-900 group-hover:text-amber-805 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-6 flex justify-between items-center text-[10px] text-neutral-500 font-mono font-bold">
                <span>RERA VERIFIED</span>
                <span className="text-amber-600 group-hover:text-amber-750 transition-colors">★ SPECIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust Strip */}
        <div className="mt-14 p-4 rounded-xl bg-white border border-neutral-200 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center shadow-sm">
          <div className="p-2 bg-amber-500/10 rounded-full text-amber-700 shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <p className="text-xs text-neutral-600 font-medium">
            Every amenity and core utility system is fully engineered to meet global standards before customer occupancy.
          </p>
        </div>

      </div>
    </section>
  );
}

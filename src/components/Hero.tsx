/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldAlert, ArrowRight, CornerDownRight, Gem, Download, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (interest: 'site_visit' | 'pricing' | 'brochure' | 'general', space: 'office' | 'retail' | 'both' | '') => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  // Highlight pointers provided in instructions
  const highlightPointers = [
    'Premium Commercial Office & Retail Spaces',
    'Strategic Location — Moshi & Chikhali, North Pune',
    'High Footfall & Visibility Zones',
    'Ideal for Offices, Retail, Showrooms & F&B Brands',
    'Excellent Connectivity to Pune-Nashik Highway',
    'MahaRERA Approved',
  ];

  // Specific SEO Keywords from prompt to display as styled hot tags
  const seoKeywords = [
    'commercial property Moshi Pune',
    'office space Chikhali Pune',
    'commercial shops Moshi',
    'retail space North Pune',
    'commercial units Chikhali',
    'buy commercial property Pune',
    'investment in commercial real estate Pune',
    'office space near Pune Nashik Highway',
  ];

  // Referencing the generated image from generate_image outcome
  const heroImage = '/src/assets/images/commercial_hero_1781074893970.png';

  return (
    <section id="hero-section" className="relative min-h-screen bg-neutral-50 flex flex-col justify-center pt-28 pb-12 overflow-hidden">
      {/* Background Graphic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/95 to-neutral-100/70 z-10" />
        <img
          src={heroImage}
          alt="Aishwaryam Commercial Hub Rendering"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
        />
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main content column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-850 border border-amber-500/20 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
              <span>Prime Commercial Real Estate | Moshi & Chikhali, North Pune</span>
            </div>

            {/* Main Heading styled for supreme design metrics */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-tight md:leading-none">
              Premium Commercial Spaces in{' '}
              <span className="bg-gradient-to-r from-amber-600 via-amber-800 to-amber-950 bg-clip-text text-transparent">
                Moshi & Chikhali
              </span>{' '}
              — Your Business Deserves the Best Address
            </h1>

            {/* Structured Subheading with outstanding spacing */}
            <p className="text-neutral-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              <strong className="text-amber-800 font-semibold">Aishwaryam Group</strong> presents thoughtfully developed commercial spaces in Moshi and Chikhali — North Pune's fastest-growing commercial corridors. Office spaces, retail units, and business hubs designed for entrepreneurs, enterprises, and retail brands looking for strategic commercial real estate.
            </p>

            {/* Interactive check pointers side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlightPointers.map((pointer, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 bg-white/95 backdrop-blur-sm border border-neutral-200/80 p-3 rounded-lg hover:border-amber-500/40 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-neutral-800 font-bold">{pointer}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero-visit-btn"
                onClick={() => onOpenInquiry('site_visit', 'both')}
                className="px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-neutral-950 font-bold rounded-lg text-sm uppercase tracking-wider shadow-lg shadow-amber-600/15 cursor-pointer flex items-center justify-center gap-2.5 transition-all"
              >
                <span>Schedule a Site Visit</span>
                <ArrowRight className="w-4.5 h-4.5 text-neutral-950" />
              </button>
              
              <button
                id="hero-brochure-btn"
                onClick={() => onOpenInquiry('brochure', 'both')}
                className="px-6 py-4 bg-white hover:bg-neutral-50 text-amber-800 hover:text-amber-900 border border-amber-600/30 text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm cursor-pointer flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4.5 h-4.5 text-amber-700 shrink-0" />
                <span>Download Commercial Brochure</span>
              </button>
            </div>

          </div>

          {/* Right interactive floating widget - quick statistics and preview */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 xl:p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl rounded-full" />
            <div className="relative border border-neutral-200 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-6">
              
              <div className="border-b border-neutral-200 pb-4">
                <span className="text-[10px] text-amber-700 font-bold uppercase tracking-widest block mb-1">
                  Corporate Snapshot
                </span>
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-1.5">
                  <Gem className="w-4 h-4 text-amber-600" /> High-Performance Catchment
                </h3>
              </div>

              {/* Little interactive showcase statistics */}
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-neutral-50/80 p-3 rounded-lg border border-neutral-100">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-semibold">Growth Potential</span>
                    <strong className="text-neutral-900 block font-mono text-base">North Pune Corridor</strong>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">
                    +24% YoY Appraisal
                  </span>
                </div>

                <div className="flex justify-between items-center bg-neutral-50/80 p-3 rounded-lg border border-neutral-100">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-semibold">Highway Connectivity</span>
                    <strong className="text-neutral-900 block font-mono text-base">Pune-Nashik NH-60</strong>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">
                    Direct Gateway
                  </span>
                </div>

                <div className="flex justify-between items-center bg-neutral-50/80 p-3 rounded-lg border border-neutral-100">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-semibold">Surrounding Population</span>
                    <strong className="text-neutral-900 block font-mono text-base">High Density Catchment</strong>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded">
                    300K+ Residents
                  </span>
                </div>
              </div>

              {/* Mini CTA for pricing */}
              <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-4 rounded-xl border border-neutral-200 text-center">
                <p className="text-xs text-neutral-600 font-medium">Looking for custom unit sizes & pricing slabs?</p>
                <button
                  id="hero-snapshot-pricing-btn"
                  onClick={() => onOpenInquiry('pricing', '')}
                  className="mt-2.5 text-xs text-amber-850 hover:text-amber-900 font-extrabold uppercase tracking-wider flex items-center justify-center gap-1 mx-auto transition-colors cursor-pointer"
                >
                  <span className="text-amber-800 hover:text-amber-900">Request Full Price Sheet</span>
                  <CornerDownRight className="w-3.5 h-3.5 text-amber-700" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM SEO Intelligent Tag Cloud Strip (Displays requested SEO terms) */}
        <div className="mt-14 pt-6 border-t border-neutral-200">
          <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-3 text-center">
            Trending Real Estate Searches in North Pune:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {seoKeywords.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-bold text-neutral-600 bg-white hover:text-amber-800 hover:bg-neutral-50 hover:border-neutral-300 px-3 py-1 rounded-full border border-neutral-200 transition-all cursor-pointer shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

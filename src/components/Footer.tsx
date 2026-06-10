/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: (interest: 'site_visit' | 'pricing' | 'brochure' | 'general', space: 'office' | 'retail' | 'both' | '') => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [callbackEmail, setCallbackEmail] = useState('');
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackEmail) return;
    setCallbackSuccess(true);
    setTimeout(() => {
      onOpenInquiry('general', '');
    }, 1500);
  };

  return (
    <footer id="footer" className="relative bg-neutral-100 text-neutral-600 border-t border-neutral-200 pt-16 pb-8 overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-neutral-200 pb-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-neutral-950 font-extrabold text-lg">
                A
              </div>
              <div>
                <span className="font-extrabold text-neutral-900 tracking-wider uppercase block">
                  Aishwaryam Group
                </span>
                <span className="text-[8px] text-amber-700 uppercase tracking-widest font-extrabold block">
                  Commercial Developers
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-neutral-650 leading-relaxed font-semibold">
              Thoughtfully engineered office spaces and high-traffic high-street retail storefronts in Moshi and Chikhali. Helping modern Pune businesses step up with high-visibility corporate landmarks.
            </p>

            {/* RERA Approval declaration */}
            <div className="p-3.5 rounded-lg bg-white border border-neutral-200 space-y-1 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-extrabold uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-emerald-650" />
                <span>MahaRERA Approved Status</span>
              </div>
              <p className="text-[10px] text-neutral-600 font-medium">
                The project has been registered under MahaRERA registration number: <strong className="text-neutral-800 font-mono font-bold">P52100063248</strong> and is fully open for public file inspection.
              </p>
            </div>
          </div>

          {/* Quick links to sections */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-neutral-900 text-xs font-bold uppercase tracking-widest">
              Quick Portals
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-bold">
              <a href="#hero-section" className="hover:text-amber-800 transition-colors">Hero Overview</a>
              <a href="#offerings" className="hover:text-amber-800 transition-colors">Office & Retail Units</a>
              <a href="#amenities" className="hover:text-amber-800 transition-colors">Amenities Grid</a>
              <a href="#location" className="hover:text-amber-800 transition-colors">Location advantage</a>
              <a href="#investment" className="hover:text-amber-800 transition-colors">Investment Estimates</a>
              <a href="#faqs" className="hover:text-amber-800 transition-colors">Support FAQ</a>
            </div>
          </div>

          {/* Contacts details list */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-neutral-900 text-xs font-bold uppercase tracking-widest block">
              Commercial Sales Office
            </h4>
            <div className="space-y-3 text-xs font-semibold">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Aishwaryam Commercial Hub, Sector 12, Moshi-Chikhali Link Road, Pimpri-Chinchwad, Pune - 411062</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="tel:18002474927" className="hover:text-neutral-900 font-mono font-bold text-xs">1800-AISHWARYAM (Toll Free)</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="mailto:commercesales@aishwaryamgroup.co.in" className="hover:text-neutral-900 font-mono font-bold text-xs">commercesales@aishwaryam.co.in</a>
              </div>
            </div>
          </div>

          {/* Call back newsletter input */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-neutral-900 text-xs font-bold uppercase tracking-widest">
              Priority Callback Service
            </h4>
            <p className="text-xs text-neutral-600 font-medium leading-relaxed">
              Drop your email address below, and our commercial investment analyst will schedule a callback within 4 hours.
            </p>
            
            {callbackSuccess ? (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 animate-pulse" />
                <span>Callback registered! We will contact you soon.</span>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="flex gap-1.5">
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  value={callbackEmail}
                  onChange={e => setCallbackEmail(e.target.value)}
                  placeholder="Gmail / corporate email"
                  className="flex-1 min-w-0 bg-white border border-neutral-300 px-3 py-2 text-xs rounded text-neutral-900 focus:outline-none focus:border-amber-600"
                />
                <button
                  id="footer-submit-btn"
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded transition-colors cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-bold">
          <p>© {currentYear} Aishwaryam Group. All rights reserved. Designed to suit global businesses in Moshi & Chikhali.</p>
          
          <div className="flex items-center gap-4">
            <button
              id="back-to-top-btn"
              onClick={handleScrollTop}
              className="px-2.5 py-1 rounded bg-white hover:bg-neutral-50 text-neutral-600 border border-neutral-200 flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

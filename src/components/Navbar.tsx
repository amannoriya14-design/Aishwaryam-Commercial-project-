/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Building2, ShieldCheck, Download } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (interest: 'site_visit' | 'pricing' | 'brochure' | 'general', space: 'office' | 'retail' | 'both' | '') => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-md text-neutral-900'
          : 'bg-white/80 backdrop-blur-md border-b border-neutral-200/40 py-5 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Slogan Column */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-neutral-950 font-bold text-xl shadow-md border border-amber-400/20 shadow-amber-500/10">
              A
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wider bg-gradient-to-r from-neutral-950 via-amber-800 to-amber-600 bg-clip-text text-transparent uppercase block">
                Aishwaryam
              </span>
              <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold block -mt-1">
                Commercial Group
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <a
              href="#offerings"
              onClick={e => handleNavClick(e, 'offerings')}
              className="text-xs font-bold text-neutral-700 hover:text-amber-600 transition-colors uppercase tracking-wider"
            >
              Offerings
            </a>
            <a
              href="#amenities"
              onClick={e => handleNavClick(e, 'amenities')}
              className="text-xs font-bold text-neutral-700 hover:text-amber-600 transition-colors uppercase tracking-wider"
            >
              Amenities
            </a>
            <a
              href="#location"
              onClick={e => handleNavClick(e, 'location')}
              className="text-xs font-bold text-neutral-700 hover:text-amber-600 transition-colors uppercase tracking-wider"
            >
              Location Advantages
            </a>
            <a
              href="#investment"
              onClick={e => handleNavClick(e, 'investment')}
              className="text-xs font-bold text-neutral-700 hover:text-amber-600 transition-colors uppercase tracking-wider"
            >
              Investment ROI
            </a>
            <a
              href="#faqs"
              onClick={e => handleNavClick(e, 'faqs')}
              className="text-xs font-bold text-neutral-700 hover:text-amber-600 transition-colors uppercase tracking-wider"
            >
              FAQs
            </a>
          </div>

          {/* MahaRERA badge & Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* RERA badge */}
            <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>MahaRERA Approved</span>
            </div>

            {/* Quick Call */}
            <a
              href="tel:18002474927"
              className="flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-amber-600 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span className="font-mono text-xs text-neutral-800">1800-AISHWARYAM</span>
            </a>

            {/* Site Visit */}
            <button
              id="nav-visit-btn"
              onClick={() => onOpenInquiry('site_visit', '')}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 text-xs font-bold rounded uppercase tracking-wider shadow shadow-amber-500/10 transition-all cursor-pointer"
            >
              Schedule Visit
            </button>
          </div>

          {/* Hamburger Menu Trigger */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-750 px-2 py-0.5 rounded text-[9px] font-bold uppercase">
              <ShieldCheck className="w-3 h-3" />
              <span>RERA Approved</span>
            </div>
            
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden bg-white border-b border-neutral-200 py-4 px-4 space-y-3.5 animate-slide-down shadow-lg">
          <div className="flex flex-col gap-3">
            <a
              href="#offerings"
              onClick={e => handleNavClick(e, 'offerings')}
              className="text-xs font-bold text-neutral-800 hover:text-amber-600 uppercase tracking-wide py-1 border-b border-neutral-100"
            >
              Offerings
            </a>
            <a
              href="#amenities"
              onClick={e => handleNavClick(e, 'amenities')}
              className="text-xs font-bold text-neutral-800 hover:text-amber-600 uppercase tracking-wide py-1 border-b border-neutral-100"
            >
              Amenities
            </a>
            <a
              href="#location"
              onClick={e => handleNavClick(e, 'location')}
              className="text-xs font-bold text-neutral-800 hover:text-amber-600 uppercase tracking-wide py-1 border-b border-neutral-100"
            >
              Location Advantages
            </a>
            <a
              href="#investment"
              onClick={e => handleNavClick(e, 'investment')}
              className="text-xs font-bold text-neutral-800 hover:text-amber-600 uppercase tracking-wide py-1 border-b border-neutral-100"
            >
              Investment ROI
            </a>
            <a
              href="#faqs"
              onClick={e => handleNavClick(e, 'faqs')}
              className="text-xs font-bold text-neutral-800 hover:text-amber-600 uppercase tracking-wide py-1"
            >
              FAQs
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-150 flex flex-col gap-2.5">
            <a
              href="tel:18002474927"
              className="flex items-center justify-center gap-2 p-2.5 rounded bg-neutral-50 text-neutral-800 border border-neutral-200 text-xs font-bold font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>1800-AISHWARYAM</span>
            </a>
            
            <button
              id="mobile-nav-visit-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('site_visit', '');
              }}
              className="py-2.5 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 text-xs font-bold rounded uppercase tracking-wider text-center cursor-pointer"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

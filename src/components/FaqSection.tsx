/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquareCode } from 'lucide-react';

interface FaqItemConfig {
  q: string;
  a: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItemConfig[] = [
    {
      q: 'What types of commercial spaces are available?',
      a: "Office spaces, retail units, showrooms, and F&B spaces are available across Aishwaryam Group's commercial developments in Moshi and Chikhali.",
    },
    {
      q: 'Are commercial properties in Moshi a good investment?',
      a: "Yes. Moshi's rapidly growing residential population and proximity to Chakan industrial belt create strong demand for commercial and retail spaces, ensuring healthy rental yields.",
    },
    {
      q: 'Is the project MahaRERA registered?',
      a: 'Yes, the project is MahaRERA registered for complete buyer protection and regulatory compliance.',
    },
    {
      q: 'What is the connectivity like from Moshi & Chikhali?',
      a: 'Both locations are well connected to Pune city, Chakan, and major employment hubs via the Pune-Nashik Highway and proposed metro routes.',
    },
  ];

  return (
    <section id="faqs" className="bg-white py-24 relative overflow-hidden">
      {/* Background vector line art */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-50/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-850 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            FAQ Desk
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm font-medium">
            Have questions about our Moshi & Chikhali developments? Find direct regulatory and commercial answers below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mt-4" />
        </div>

        {/* Faq Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-neutral-900 hover:bg-neutral-50/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-amber-600' : 'text-neutral-400'}`} />
                    <span className="font-bold text-sm md:text-base pr-2">{faq.q}</span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 transition-all ${isOpen ? 'rotate-180 text-amber-700 border-amber-500/20 bg-amber-50' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 pt-0 border-t border-neutral-100 text-xs md:text-sm text-neutral-700 leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center text-sm text-neutral-600 bg-neutral-50 p-4 rounded-xl border border-neutral-200 max-w-xl mx-auto flex items-center justify-center gap-2">
          <MessageSquareCode className="w-4 h-4 text-amber-600 animate-bounce" />
          <span>Have more specific investment or RERA queries?</span>
          <a
            href="#footer"
            onClick={e => {
              e.preventDefault();
              document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-amber-700 hover:text-amber-850 font-extrabold underline cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, FileText, CheckCircle, ArrowRight, Loader2, PhoneCall, Building2, TicketCheck, AlertCircle } from 'lucide-react';
import { InquiryForm } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterestType?: 'site_visit' | 'pricing' | 'brochure' | 'general';
  initialSpaceType?: 'office' | 'retail' | 'both' | '';
}

export default function InquiryModal({
  isOpen,
  onClose,
  initialInterestType = 'general',
  initialSpaceType = '',
}: InquiryModalProps) {
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    spaceType: initialSpaceType,
    interestType: initialInterestType,
    preferredDate: '',
    preferredTime: '11:00',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [formError, setFormError] = useState('');

  // Sync state if initial props change when modal is opened
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        interestType: initialInterestType,
        spaceType: initialSpaceType || prev.spaceType,
      }));
      setIsSuccess(false);
      setDownloadTriggered(false);
      setFormError('');
    }
  }, [isOpen, initialInterestType, initialSpaceType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill out all required name, email and mobile fields.');
      return;
    }
    setFormError('');

    setIsSubmitting(true);
    // Simulate real database insertion and notification setup with robust timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto-trigger pseudo-download if they wanted the brochure
      if (formData.interestType === 'brochure') {
        handleDownloadBrochure(formData.name);
        setDownloadTriggered(true);
      }
    }, 1500);
  };

  const handleDownloadBrochure = (userName: string) => {
    const brochureText = `
=========================================
AISHWARYAM GROUP - PREMIUM COMMERCIAL PORTFOLIO
Locations: Moshi & Chikhali, North Pune
MahaRERA Registration Approved
Prepared for: ${userName || 'Valued Partner'}
Date: ${new Date().toLocaleDateString()}
=========================================

Thank you for downloading our commercial spaces brochure.

PROJECT OVERVIEW:
North Pune's fastest growing commercial corridors. Strategically built along 
the Pune-Nashik highway, close to the industrial engineering hub of Chakan.

OFFERINGS:
1. Premium Commercial Offices
   - Flexible Size Configurations: 500 to 12,000+ sq ft
   - Excellent natural lighting & state-of-the-art floor heights
   - Perfect for professional consultants, corporate HQs & start-ups

2. High-Street Retail & Ground Floor Shops
   - Maximum road visibility & prominent display frontages
   - Ready infrastructure for F&B (vessel shafts, high power loads)
   - Heavy pedestrian catchment from surrounding residential developments

INFRASTRUCTURE STANDARDS:
- 100% DG backup for common and internal spaces
- High-speed automatic elevators
- Advanced surveillance and fire suppression systems
- Fiber-optic high-bandwidth trunk lines

CONTACT OUR SALES CELL DIRECTLY:
📞 1800-AISHWARYAM (Toll Free)
✉️ commercesales@aishwaryamgroup.co.in
📍 Site Address: Moshi-Chikhali Link Road, Sector 12, Pune 411062
=========================================
`;

    const blob = new Blob([brochureText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Aishwaryam_Group_Commercial_Brochure_${userName.replace(/\s+/g, '_') || 'Guest'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/40 backdrop-blur-xs"
        />

        {/* Modal Main Panel */}
        <motion.div
          id="modal-panel"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-205 bg-white text-neutral-800 shadow-2xl z-10"
        >
          {/* Top aesthetic accent line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800" />

          {/* Close button */}
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-800 border border-amber-500/20 mb-2">
                  Aishwaryam Group Premium
                </span>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                  {formData.interestType === 'site_visit' && 'Schedule a VIP Site Visit'}
                  {formData.interestType === 'pricing' && 'Request Detailed Pricing Sheet'}
                  {formData.interestType === 'brochure' && 'Download Digital Brochure'}
                  {formData.interestType === 'general' && 'Exclusive Inquiry Desk'}
                </h3>
                <p className="text-neutral-600 text-sm mt-1 font-medium">
                  Moshi & Chikhali Premium Real Estate. Secure your spot in North Pune's fastest growing hub.
                </p>
              </div>

              {formError && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-amber-700">*</span>
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Rajesh Kumar"
                    className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors text-sm font-medium"
                  />
                </div>

                {/* Grid for Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Gmail / Email <span className="text-amber-700">*</span>
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., rajesh@gmail.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Contact Number <span className="text-amber-700">*</span>
                    </label>
                    <input
                      id="input-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Space Type Selector */}
                <div>
                  <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Commercial Configuration Choice
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { key: 'office', label: 'Office Unit' },
                      { key: 'retail', label: 'Retail Shop' },
                      { key: 'both', label: 'Both' },
                    ].map(item => (
                      <button
                        key={item.key}
                        id={`btn-space-${item.key}`}
                        type="button"
                        onClick={() => setFormData({ ...formData, spaceType: item.key as any })}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center cursor-pointer ${
                          formData.spaceType === item.key
                            ? 'bg-amber-500/10 border-amber-600 text-amber-900'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interest Type Dynamic Toggle */}
                <div>
                  <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-1.5">
                    What is your key requirement?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: 'brochure', label: 'Download Brochure' },
                      { key: 'site_visit', label: 'Schedule Site Visit' },
                      { key: 'pricing', label: 'Get Pricing sheet' },
                      { key: 'general', label: 'Quick Callback' },
                    ].map(item => (
                      <button
                        key={item.key}
                        id={`btn-interest-${item.key}`}
                        type="button"
                        onClick={() => setFormData({ ...formData, interestType: item.key as any })}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border text-left flex items-center justify-between cursor-pointer transition-all ${
                          formData.interestType === item.key
                            ? 'bg-amber-500/15 border-amber-600 text-amber-900'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-900'
                        }`}
                      >
                        <span>{item.label}</span>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            formData.interestType === item.key ? 'bg-amber-600 animate-pulse' : 'bg-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Site Visit Specific Schedule Selection */}
                {formData.interestType === 'site_visit' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200 space-y-3"
                  >
                    <p className="text-amber-800 font-extrabold text-xs flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Book Your Preferred Site Visit slot
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-neutral-500 uppercase tracking-tight block mb-1 font-bold">
                          Preferred Date
                        </label>
                        <input
                          id="visit-date-input"
                          type="date"
                          value={formData.preferredDate || new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                          onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-white border border-neutral-200 text-neutral-850 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-amber-650 focus:outline-none font-medium"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-neutral-500 uppercase tracking-tight block mb-1 font-bold">
                          Preferred Time Frame
                        </label>
                        <select
                          id="visit-time-select"
                          value={formData.preferredTime}
                          onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-white border border-neutral-200 text-neutral-850 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-amber-650 focus:outline-none font-medium"
                        >
                          <option value="10:00">10:00 AM - 12:00 PM</option>
                          <option value="12:00">12:00 PM - 02:00 PM</option>
                          <option value="14:00">02:00 PM - 04:00 PM</option>
                          <option value="16:00">04:00 PM - 06:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Textarea Comments */}
                <div>
                  <label className="block text-xs font-extrabold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Special notes / requests (Optional)
                  </label>
                  <textarea
                    id="input-comments"
                    rows={2}
                    value={formData.comments}
                    onChange={e => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Any specific office size or retail preferences..."
                    className="w-full px-4 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors text-sm font-medium"
                  />
                </div>

                {/* Consent check */}
                <div className="text-[11px] text-neutral-600 flex gap-2 font-medium">
                  <input id="chk-consent" type="checkbox" required defaultChecked className="mt-0.5 accent-amber-600" />
                  <p>
                    I authorize Aishwaryam Group to send digital brochures, RERA information, pricing catalogs, and update schedules via phone, Email, or WhatsApp.
                  </p>
                </div>

                {/* Call to action button */}
                <button
                  id="submit-inquiry-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg active:scale-[0.99] disabled:opacity-55"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5.5 h-5.5 animate-spin" />
                      <span>Sending Secured Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit High-Priority Invitation Request</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* SUCCESS PANEL */
            <motion.div
              id="success-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center space-y-6"
            >
              <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-800 border border-emerald-350 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-emerald-650" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">
                  Inquiry Registered Profitably!
                </h4>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto font-medium">
                  Greetings, <span className="font-extrabold text-neutral-900">{formData.name}</span>. Aishwaryam Group's Senior Portfolio executive has assigned a high-priority ticket for you.
                </p>
              </div>

              {/* Dynamic card based on selection */}
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-left space-y-3 mx-auto max-w-sm">
                <div className="flex items-center gap-2.5 text-xs text-amber-800 font-extrabold uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>Aishwaryam Commercial Spaces Link</span>
                </div>

                <div className="space-y-2 text-xs text-neutral-600 leading-relaxed border-t border-neutral-250 pt-2.5 font-medium">
                  <p>
                    <span className="text-neutral-500 font-bold">Selected Offering:</span>{' '}
                    {formData.spaceType === 'office' ? 'Corporate Office Units' : ''}
                    {formData.spaceType === 'retail' ? 'Commercial high-street Retail Units' : ''}
                    {formData.spaceType === 'both' ? 'Hybrid Retail & Office Units' : ''}
                    {formData.spaceType === '' ? 'General Commercial Portfolio' : ''}
                  </p>
                  
                  {formData.interestType === 'site_visit' ? (
                    <div className="bg-amber-500/10 text-amber-900 p-2 text-[11px] rounded flex gap-1.5 items-center mt-2 border border-amber-500/20 font-bold">
                      <TicketCheck className="w-4 h-4 shrink-0 text-amber-700" />
                      <span>
                        VIP Site Tour Scheduled on <strong className="text-neutral-900">{formData.preferredDate || 'Tomorrow'}</strong> around{' '}
                        <strong className="text-neutral-900">{formData.preferredTime === '10:00' ? '11 AM' : '2 PM'}</strong>.
                      </span>
                    </div>
                  ) : (
                    <p>
                      <span className="text-neutral-500 font-bold">Request Type:</span>{' '}
                      {formData.interestType === 'pricing' ? 'Priority Premium Pricing catalogs & Floor plans' : ''}
                      {formData.interestType === 'brochure' ? 'PDF Brochure & RERA filings' : ''}
                      {formData.interestType === 'general' ? 'Prompt Phone consultation callback' : ''}
                    </p>
                  )}

                  <p className="flex items-center gap-1 text-[11px] text-emerald-800 font-bold pt-1">
                    <PhoneCall className="w-3 h-3 text-emerald-600" /> Contact verified: {formData.phone}
                    <span className="bg-emerald-150 text-emerald-800 px-1.5 py-0.2 rounded text-[9px] font-bold">SMS Active</span>
                  </p>
                </div>
              </div>

              {/* Brochure actions */}
              {formData.interestType === 'brochure' && downloadTriggered && (
                <p className="text-xs text-neutral-500 italic font-medium">
                  *Your premium PDF.txt brochure should have finished downloading. If not, click below.
                </p>
              )}

              <div className="flex flex-col gap-2.5 justify-center max-w-sm mx-auto">
                <button
                  id="re-download-btn"
                  onClick={() => handleDownloadBrochure(formData.name)}
                  className="py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-amber-800 hover:text-amber-900 border border-neutral-250 font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4" /> Download Commercial Brochure Again
                </button>
                <button
                  id="close-success-btn"
                  onClick={onClose}
                  className="py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-lg uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Done, Return and Browse Site
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

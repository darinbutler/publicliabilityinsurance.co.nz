'use client';

import { useState } from 'react';

interface QuoteFormProps {
  variant?: 'default' | 'sidebar';
}

export default function QuoteForm({ variant = 'default' }: QuoteFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    // Form will submit to FormSubmit.co via the form action
    // No need to prevent default - let the form submit naturally
  };

  if (variant === 'sidebar') {
    return (
      <div className="bg-emerald-600 rounded-2xl p-5 text-white">
        <h3 className="font-bold text-base mb-1">Get Your Quote</h3>
        <p className="text-emerald-100 text-xs mb-4">No obligation. Same-day response from a licensed NZ broker.</p>
        <form
          action="https://shiny-bush-41cd.darinbutler.workers.dev"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-white outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-white outline-none"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone number"
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-white outline-none"
          />
          <select
            name="business_type"
            required
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-900 bg-white border-0 focus:ring-2 focus:ring-white outline-none"
          >
            <option value="">Business type...</option>
            <option value="Trade/Construction">Trade/Construction</option>
            <option value="Retail/Hospitality">Retail/Hospitality</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Education">Education</option>
            <option value="Public Venue/Events">Public Venue/Events</option>
            <option value="Other">Other</option>
          </select>

          {/* Hidden Fields */}
          <input type="hidden" name="_subject" value="New Quote Request - PublicLiabilityInsurance.co.nz" />
          <input type="hidden" name="_next" value="https://publicliabilityinsurance.co.nz/thank-you" />
          

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-white hover:bg-emerald-50 disabled:opacity-60 text-emerald-700 font-bold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              'Get My Quote →'
            )}
          </button>
          <p className="text-xs text-emerald-200 text-center">No obligation. 100% secure.</p>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Trust Badge Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {[
          { icon: '🔒', label: 'Secure & Confidential' },
          { icon: '✓', label: 'Licensed NZ Brokers' },
          { icon: '⚡', label: 'Same-Day Response' },
          { icon: '★', label: 'No Obligation' },
        ].map((badge) => (
          <span
            key={badge.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
          >
            <span>{badge.icon}</span>
            {badge.label}
          </span>
        ))}
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl p-8">
        <form
          action="https://shiny-bush-41cd.darinbutler.workers.dev"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Full Name <span className="text-emerald-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-colors text-slate-900 placeholder-slate-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Email Address <span className="text-emerald-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-colors text-slate-900 placeholder-slate-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Phone Number <span className="text-emerald-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-colors text-slate-900 placeholder-slate-400"
              placeholder="+64 (0)2 1234 5678"
            />
          </div>

          {/* Business Type + Coverage row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="businessType" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Business Type <span className="text-emerald-600">*</span>
              </label>
              <select
                id="businessType"
                name="business_type"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-colors bg-white text-slate-900"
              >
                <option value="">Select type...</option>
                <option value="Retail/Hospitality">Retail/Hospitality</option>
                <option value="Trade/Construction">Trade/Construction</option>
                <option value="Education">Education</option>
                <option value="Public Venue/Events">Public Venue/Events</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="coverage" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Coverage Level <span className="text-emerald-600">*</span>
              </label>
              <select
                id="coverage"
                name="coverage_level"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-colors bg-white text-slate-900"
              >
                <option value="">Select level...</option>
                <option value="$1M">$1 Million</option>
                <option value="$2M">$2 Million</option>
                <option value="$5M">$5 Million</option>
                <option value="$10M">$10 Million</option>
                <option value="$20M">$20 Million</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Additional Details <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-colors resize-none text-slate-900 placeholder-slate-400"
              placeholder="Tell us more about your business, specific risks, or questions..."
            />
          </div>

          {/* Hidden Fields */}
          <input type="hidden" name="_subject" value="New Quote Request - PublicLiabilityInsurance.co.nz" />
          <input type="hidden" name="_next" value="https://publicliabilityinsurance.co.nz/thank-you" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-base rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending your request...
              </>
            ) : (
              <>Get My Quote →</>
            )}
          </button>

          <div className="flex items-center justify-center gap-6 pt-1">
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
              Your data is secure
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              No spam, ever
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              No fees
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

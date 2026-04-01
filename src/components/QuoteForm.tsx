'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    // Form will submit to FormSubmit.co via the form action
    // No need to prevent default - let the form submit naturally
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-slate-900">Free, No-Obligation Quote</p>
            <p className="text-sm text-slate-500">Takes less than 2 minutes</p>
          </div>
        </div>
      <form
        action="https://formsubmit.co/hello@cover4you.co.nz"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="Full Name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="Phone"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
            placeholder="+64 (0)2 1234 5678"
          />
        </div>

        {/* Business Type */}
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-2">
            Business Type *
          </label>
          <select
            id="businessType"
            name="Business Type"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors bg-white"
          >
            <option value="">Select a business type</option>
            <option value="Retail/Hospitality">Retail/Hospitality</option>
            <option value="Trade/Construction">Trade/Construction</option>
            <option value="Education">Education</option>
            <option value="Public Venue/Events">Public Venue/Events</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Coverage Level */}
        <div>
          <label htmlFor="coverage" className="block text-sm font-medium text-slate-700 mb-2">
            Coverage Level *
          </label>
          <select
            id="coverage"
            name="Coverage Level"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors bg-white"
          >
            <option value="">Select coverage level</option>
            <option value="$1M">$1 Million</option>
            <option value="$2M">$2 Million</option>
            <option value="$5M">$5 Million</option>
            <option value="$10M">$10 Million</option>
            <option value="$20M">$20 Million</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Additional Details
          </label>
          <textarea
            id="message"
            name="Message"
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors resize-none"
            placeholder="Tell us more about your business (optional)"
          />
        </div>

        {/* Hidden Fields */}
        <input type="hidden" name="_subject" value="New Quote Request - PublicLiabilityInsurance.co.nz" />
        <input type="hidden" name="_next" value="https://publicliabilityinsurance.co.nz/thank-you" />
        <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            'Get My Free Quote →'
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p>Your information is secure and will only be used to provide you with insurance quotes.</p>
        </div>
      </form>
      </div>
    </div>
  );
}

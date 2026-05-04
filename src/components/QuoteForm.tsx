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
        <h3 className="font-bold text-base mb-1">Get Your Free Quote</h3>
        <p className="text-emerald-100 text-xs mb-4">No obligation. Same-day response from a licensed NZ broker.</p>
        <form
          action="https://shiny-bush-41cd.darinbutler.workers.dev"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input
            type="text"
            name="Full Name"
            required
            placeholder="Your full name"
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-white outline-none"
          />
          <input
            type="email"
            name="Email"
            required
            placeholder="Email address"
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-white outline-none"
          />
          <input
            type="tel"
            name="Phone"
            required
            placeholder="Phone number"
            className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-white outline-none"
          />
          <select
            name="Business Type"
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
              'Get My Free Quote →'
            )}
          </button>
          <p className="text-xs text-emerald-200 text-center">Free. No obligation. 100% secure.</p>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form
        action="https://shiny-bush-41cd.darinbutler.workers.dev"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
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
        

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
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
            'Get My Free Quote'
          )}
        </button>

        <p className="text-xs text-slate-500 text-center">
          We respect your privacy. Your information is secure and will only be used to provide you with insurance quotes.
        </p>
      </form>
    </div>
  );
}

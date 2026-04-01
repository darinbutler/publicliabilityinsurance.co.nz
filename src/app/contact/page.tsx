import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Contact Public Liability Insurance NZ',
  description:
    'Get a free public liability insurance quote in minutes. Contact us by phone, email, or use our quick online form to receive personalised coverage options from NZ insurers.',
  openGraph: {
    title: 'Contact Public Liability Insurance — Get Your Free Quote',
    description: 'Get your free public liability insurance quote today.',
    type: 'website',
  },
};

export default function ContactPage() {
  const quoteProcessFaqs = faqs.filter((faq) => faq.category === 'Quote & Comparison');

  const steps = [
    {
      time: 'Immediate',
      action: 'You submit your details',
      description: 'Simple online form — takes about 2 minutes.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      time: 'Within 30 minutes',
      action: 'Initial quote comparison',
      description: 'See preliminary quotes from multiple insurers.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      time: 'Within 2 hours',
      action: 'Detailed comparison delivered',
      description: 'Full quotes with coverage details and pricing.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      time: 'Same day',
      action: 'Choose & get covered',
      description: 'Select your insurer — policy active immediately.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section — full-width background image */}
      <section className="relative w-full min-h-[40vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=900&fit=crop&q=80"
          alt="People in a bright, modern co-working space"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 px-4 py-16 md:py-20">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Get Your Free Quote Today
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
            Fill out the quick form below and we&apos;ll compare quotes from multiple NZ insurers.
            No obligation, no spam — just the best cover at the right price.
          </p>
        </div>
      </section>

      <main className="w-full">
        {/* Form + What Happens Next — side by side */}
        <section id="quote-form" className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Form — takes 3 of 5 columns */}
            <div className="lg:col-span-3">
              <QuoteForm compact />
            </div>

            {/* What Happens Next — takes 2 of 5 columns */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What Happens Next
                </h3>

                <div className="space-y-5">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
                          {step.icon}
                        </div>
                        {idx < steps.length - 1 && (
                          <div className="w-px h-full min-h-[20px] bg-gradient-to-b from-emerald-300 to-sky-300 mt-1"></div>
                        )}
                      </div>
                      <div className="pb-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                          {step.time}
                        </p>
                        <p className="text-sm font-bold text-slate-900 mt-0.5">{step.action}</p>
                        <p className="text-sm text-slate-600 mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact alternatives */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Prefer to talk?
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:098859549"
                      className="flex items-center gap-3 text-sm text-slate-700 hover:text-emerald-600 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">09 885 9549</span>
                        <span className="block text-xs text-slate-400 italic">Quote PLI for best prices</span>
                      </div>
                    </a>
                    <a
                      href="mailto:hello@cover4you.co.nz"
                      className="flex items-center gap-3 text-sm text-slate-700 hover:text-emerald-600 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">hello@cover4you.co.nz</span>
                        <span className="block text-xs text-slate-400">Response within 2 hours</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="w-full bg-slate-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  hello@cover4you.co.nz
                </a>
                <p className="text-sm text-slate-500 mt-2">Response within 2 business hours</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
                <a href="tel:098859549" className="text-sky-600 hover:text-sky-700 font-semibold">
                  09 885 9549
                </a>
                <p className="text-xs text-slate-400 italic mt-1">Quote PLI for best prices</p>
                <p className="text-sm text-slate-500 mt-2">Mon–Fri 9am–5pm NZT</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-700 font-semibold">Auckland, New Zealand</p>
                <p className="text-sm text-slate-500 mt-2">Serving all of NZ via phone &amp; online</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {quoteProcessFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-slate-200 hover:border-emerald-200 transition-colors"
              >
                <summary className="cursor-pointer p-5 font-bold text-slate-900 flex justify-between items-center">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-emerald-600 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop&q=80"
              alt="Modern office interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
            <div className="relative z-10 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Get Covered Today?
              </h2>
              <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                Scroll back up to fill out the quick form, or give us a call — we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#quote-form"
                  className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors shadow-lg"
                >
                  Get Your Quote Now
                </a>
                <a
                  href="tel:098859549"
                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border-2 border-white/30"
                >
                  Call 09 885 9549
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Contact Cover4You | Get Public Liability Insurance Quote | NZ',
  description: 'Get a free public liability insurance quote from Cover4You. Contact us or use our quote form to get personalised coverage options from NZ insurers.',
  openGraph: {
    title: 'Contact Cover4You',
    description: 'Get your free public liability insurance quote today.',
    type: 'website',
  },
};

export default function ContactPage() {
  // Filter FAQs to show "Quote & Comparison" and "Claims Process" categories
  const quoteProcessFaqs = faqs.filter((faq) => faq.category === 'Quote & Comparison');

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-blue-100">
            The primary way to get covered. Answer a few questions and we'll compare quotes from multiple NZ insurers.
          </p>
        </div>
      </section>

      <main className="w-full">
        {/* Main Quote Form - Above The Fold */}
        <section id="quote-form" className="w-full py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Context & Trust */}
              <div className="lg:pt-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Free Referral Service</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Your Personalised Quote</h2>
                <p className="text-lg text-slate-600 mb-8">
                  It takes just 5 minutes to get quotes from multiple NZ insurance providers. No obligation. No spam.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: '✓', title: 'Compare 15+ NZ insurers', desc: 'We shop the whole market so you don\'t have to' },
                    { icon: '✓', title: 'Licensed insurance brokers', desc: 'IBANZ-accredited advisers manage your query' },
                    { icon: '✓', title: 'Same-day response', desc: 'Quotes back within hours, not days' },
                    { icon: '✓', title: 'Completely free service', desc: 'No fees to you — brokers are paid by insurers' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-600 italic">&ldquo;Fast, professional service. Got three quotes in my inbox the same afternoon I submitted the form.&rdquo;</p>
                  <p className="text-xs font-semibold text-slate-500 mt-2">— Wellington business owner</p>
                </div>
              </div>
              {/* Right: Form */}
              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Response Timeline */}
        <section className="w-full bg-slate-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">What Happens Next?</h3>
            <div className="space-y-4">
              {[
                {
                  time: 'Immediate',
                  action: 'You submit your details',
                  description: 'Simple online form takes about 5 minutes',
                },
                {
                  time: 'Within 30 minutes',
                  action: 'Initial quote comparison',
                  description: 'See preliminary quotes from multiple insurers',
                },
                {
                  time: 'Within 2 hours',
                  action: 'Detailed comparison delivered',
                  description: 'Full quotes with coverage details and pricing breakdown',
                },
                {
                  time: 'Same day',
                  action: 'You choose and get covered',
                  description: 'Select your preferred insurer and your policy can be active',
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 bg-white p-6 rounded-lg border border-slate-200">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase">{step.time}</p>
                    <h4 className="text-lg font-bold text-slate-900 mt-1">{step.action}</h4>
                    <p className="text-slate-700 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email</h3>
              <a
                href="mailto:hello@cover4you.co.nz"
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                hello@cover4you.co.nz
              </a>
              <p className="text-slate-600 mt-4 text-sm">Response within 2 business hours</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Response Time</h3>
              <p className="text-slate-900 font-semibold text-lg">Same Business Day</p>
              <p className="text-slate-600 mt-4 text-sm">A licensed NZ broker will follow up directly with your personalised options</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Office Hours</h3>
              <p className="text-slate-900 font-semibold">Monday - Friday</p>
              <p className="text-slate-700">9:00 AM - 5:00 PM (NZ Time)</p>
              <p className="text-slate-600 text-sm mt-4">Closed weekends & public holidays</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-slate-600 font-semibold">Office Location</p>
              <p className="text-slate-500">Auckland, New Zealand</p>
              <p className="text-slate-500 text-sm mt-2">
                (Serving all of New Zealand via our online enquiry service)
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions About Quotes</h2>

            <div className="space-y-6">
              {quoteProcessFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Process Works */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Our Process Works</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">For Businesses</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Compare multiple quotes easily</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Save time and frustration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Get expert advice on coverage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Transparent pricing, no surprises</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">For Insurers</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Qualified leads from genuine customers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Competitive quoting opportunities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Direct customer relationships</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Reduced friction in sales process</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What We Need From You */}
        <section className="w-full bg-blue-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What Information Do We Need?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Your Business',
                  items: [
                    'Business name and type',
                    'Annual turnover',
                    'Industry/sector',
                    'Number of employees',
                  ],
                },
                {
                  title: 'Your Coverage Needs',
                  items: [
                    'Desired coverage level',
                    'Specific risks you face',
                    'Any current coverage',
                    'Claims history (if any)',
                  ],
                },
                {
                  title: 'Your Contact Details',
                  items: [
                    'Email address',
                    'Phone number',
                    'Location',
                    'Preferred contact method',
                  ],
                },
                {
                  title: 'Safety Information',
                  items: [
                    'Safety procedures in place',
                    'Training programs',
                    'Industry certifications',
                    'Safety record',
                  ],
                },
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-slate-900 mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-slate-700">
                        <span className="text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 border border-blue-200">
              <p className="text-slate-700">
                <strong>Note:</strong> The more accurate information you provide, the more accurate your quotes will be. You can always refine your requirements after seeing initial options.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Covered Today?</h2>
            <p className="mb-6 text-blue-100">
              Don't wait. Scroll back up, fill out the quick form, and get your personalised quotes within minutes.
            </p>
            <a
              href="#quote-form"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Your Quote Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance NZ | Compare & Save | PublicLiability.co.nz',
  description:
    'Compare public liability insurance from 15+ NZ insurers. Get free quotes for your business, trade, school, or venue. No broker fees. Fast, transparent, trusted.',
  keywords:
    'public liability insurance, NZ, compare quotes, business insurance, trade insurance',
  openGraph: {
    title: 'Public Liability Insurance NZ | Compare & Save',
    description:
      'Compare public liability insurance from leading NZ providers. Get tailored quotes instantly.',
    type: 'website',
    locale: 'en_NZ',
    images: [
      {
        url: 'https://publicliability.co.nz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Public Liability Insurance Comparison',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'PublicLiability.co.nz',
            description: 'NZ Public Liability Insurance Comparison Service',
            url: 'https://publicliability.co.nz',
            areaServed: 'NZ',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '500',
            },
          }),
        }}
      />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-600 px-4 py-20 flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Protect Your Business with the Right Public Liability Cover
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Compare personalized public liability insurance quotes from New Zealand's leading insurers in minutes. No hidden fees. No broker commissions. Just transparent pricing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    href="#quote-form"
                    className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="#sectors"
                    className="px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center border-2 border-white"
                  >
                    Explore by Sector
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 text-white">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <p className="text-sm text-blue-100">Businesses Protected</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <p className="text-sm text-blue-100">Top Insurers</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$0</div>
                    <p className="text-sm text-blue-100">Broker Fees</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=675&fit=crop&q=80"
                      alt="Professional insurance protection for New Zealand businesses"
                      className="w-full h-64 object-cover rounded-lg"
                      loading="eager"
                    />
                    <p className="text-sm text-blue-100 mt-4">Professional insurance advisory service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Getting the right public liability insurance for your NZ business is simpler than you think.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: '1',
                  title: 'Tell Us About Your Business',
                  description:
                    'Share your business type, location, turnover, and coverage needs. Takes just 5 minutes.',
                  icon: '📝',
                },
                {
                  step: '2',
                  title: 'Compare Tailored Quotes',
                  description:
                    'We instantly match you with 15+ insurers. Review coverage options and pricing side-by-side.',
                  icon: '📊',
                },
                {
                  step: '3',
                  title: 'Get Covered Today',
                  description:
                    'Choose your policy, bind coverage immediately, and receive your certificate online within hours.',
                  icon: '✅',
                },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="text-center p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors h-full">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-3">Step {item.step}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-3xl text-slate-300">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section id="sectors" className="w-full py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Public Liability Insurance by Sector</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Every industry has unique risks. We tailor coverage recommendations for your specific sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Businesses & Retail',
                  description: 'Retail shops, cafes, restaurants, salons, and other customer-facing businesses.',
                  href: '/sectors/businesses',
                  gradient: 'from-pink-500 to-rose-500',
                  icon: '🏪',
                },
                {
                  name: 'Trade Contractors',
                  description: 'Builders, plumbers, electricians, painters, landscapers, and construction firms.',
                  href: '/sectors/trade-contractors',
                  gradient: 'from-orange-500 to-amber-500',
                  icon: '🔨',
                },
                {
                  name: 'Schools & Education',
                  description: 'ECE centres, primary and secondary schools, tertiary providers, and after-school programs.',
                  href: '/sectors/schools-education',
                  gradient: 'from-purple-500 to-indigo-500',
                  icon: '🎓',
                },
                {
                  name: 'Public Venues & Events',
                  description: 'Concert venues, sports grounds, community halls, markets, and adventure recreation.',
                  href: '/sectors/public-venues',
                  gradient: 'from-cyan-500 to-blue-500',
                  icon: '🎪',
                },
              ].map((sector, idx) => (
                <Link key={idx} href={sector.href}>
                  <div className="group cursor-pointer h-full">
                    <div className={`bg-gradient-to-br ${sector.gradient} rounded-xl p-8 text-white mb-4 min-h-48 flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-300`}>
                      <div>
                        <div className="text-5xl mb-4">{sector.icon}</div>
                        <h3 className="text-2xl font-bold mb-3">{sector.name}</h3>
                        <p className="text-lg opacity-90">{sector.description}</p>
                      </div>
                      <div className="font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Public Liability Insurance */}
        <section className="w-full py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Public Liability Insurance is Essential for Your NZ Business
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: 'Legal Protection',
                  description:
                    'Under NZ law, businesses can be held liable for injury or property damage caused to customers or the public. A claim can cost tens of thousands of dollars or more.',
                },
                {
                  title: 'Business Reputation',
                  description:
                    'A single incident can damage your reputation. Insurance ensures you can respond professionally and handle costs without impacting your business operations.',
                },
                {
                  title: 'Client Requirements',
                  description:
                    'Many clients, especially large organizations and councils, require proof of public liability insurance before working with you. It\'s often a contract requirement.',
                },
                {
                  title: 'Peace of Mind',
                  description:
                    'Know that you\'re protected against unexpected claims. Focus on growing your business instead of worrying about financial risks.',
                },
                {
                  title: 'Compliance',
                  description:
                    'While not always mandatory by law, insurance is often required by site access requirements, health and safety regulations, and tenancy agreements.',
                },
                {
                  title: 'Affordable',
                  description:
                    'Premiums vary widely by industry and risk profile, but quality coverage is often far cheaper than the potential cost of a single claim.',
                },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="text-slate-700 leading-relaxed">
                <strong>Key Fact:</strong> The Health and Safety at Work Act 2015 doesn't mandate public liability insurance, but businesses can be prosecuted for breaches. Insurance helps manage the financial risks if something goes wrong.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Trusted by NZ Business Owners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Mitchell',
                  business: 'Café Owner, Auckland',
                  quote:
                    'I was worried about slip-and-fall claims from customers. PublicLiability.co.nz helped me find affordable coverage in minutes. The comparison was clear and honest.',
                  stars: 5,
                },
                {
                  name: 'James Chen',
                  business: 'Builder, Christchurch',
                  quote:
                    'As a contractor, I need high limits for site work. The form understood my needs, and I got quotes from insurers who actually know construction risks. Saved me hours.',
                  stars: 5,
                },
                {
                  name: 'Emma Thompson',
                  business: 'School Principal, Wellington',
                  quote:
                    'Our school needed updated coverage. The team understood duty of care in education. Great service, and no pressure to buy.',
                  stars: 5,
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-slate-600 text-sm">{testimonial.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'What does public liability insurance cover?',
                  a: 'Public liability insurance covers legal costs and compensation if you\'re found responsible for accidentally injuring someone or damaging their property. This includes claims from customers, clients, visitors, and members of the public.',
                },
                {
                  q: 'How much coverage do I need?',
                  a: 'Coverage limits typically range from $1M to $10M or more, depending on your industry, business size, and risk profile. Higher-risk activities (construction, events) usually need higher limits. Your insurer can recommend appropriate levels.',
                },
                {
                  q: 'How long does it take to get a quote?',
                  a: 'Quotes are instant through our online form. You\'ll see available options within seconds. If you prefer to speak with someone, our team can provide personalized advice within 2 business hours.',
                },
                {
                  q: 'Do you charge broker fees?',
                  a: 'No. PublicLiability.co.nz doesn\'t charge broker fees or commissions. We\'re funded by insurers, but this doesn\'t affect your premium. You get the same price as if you went directly to the insurer.',
                },
                {
                  q: 'Can I buy online immediately?',
                  a: 'Yes, you can complete the application and purchase online for most policies. Coverage can bind immediately. Your certificate will be emailed to you, often within hours.',
                },
                {
                  q: 'Do I need public liability insurance by law?',
                  a: 'It\'s not always legally mandatory, but it\'s often required by clients, councils, and landlords as a condition of work. The Health and Safety at Work Act 2015 also requires managing risks, which insurance helps with.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="group border border-slate-200 rounded-lg p-6 hover:bg-slate-50 transition-colors">
                  <summary className="cursor-pointer font-bold text-slate-900 flex justify-between items-center">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="w-full py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Get Your Free Quote</h2>
              <p className="text-xl text-slate-600">
                Answer a few quick questions and compare personalized quotes from NZ's top insurers.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* Final CTA */}
        <CTABanner
          heading="Ready to Get Protected?"
          subtext="Join 500+ NZ businesses that trust us to find them the right public liability coverage."
        />
      </main>
    </>
  );
}

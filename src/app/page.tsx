import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance NZ | Compare & Save | PublicLiability.co.nz',
  description:
    'Compare public liability insurance from up to 15 insurers. Get quotes for your business, trade, school, or venue. Fast, transparent, expert advice from licensed NZ brokers.',
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
      {/* JSON-LD: Organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Cover4You',
        alternateName: 'PublicLiabilityInsurance.co.nz',
        url: 'https://www.publicliabilityinsurance.co.nz',
        logo: 'https://www.publicliabilityinsurance.co.nz/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hello@cover4you.co.nz',
          contactType: 'customer service',
          areaServed: { '@type': 'Country', name: 'New Zealand' },
          availableLanguage: 'English',
        },
        sameAs: [],
      }) }} />

      {/* JSON-LD: InsuranceAgency (primary business type) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: 'PublicLiabilityInsurance.co.nz',
        description: 'Broker referral service comparing public liability insurance from up to 15 insurers for businesses, trades, schools, and public venues.',
        url: 'https://www.publicliabilityinsurance.co.nz',
        email: 'hello@cover4you.co.nz',
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        serviceType: 'Public Liability Insurance Comparison and Referral',
        priceRange: 'No fee to policyholders',
        knowsAbout: ['Public Liability Insurance', 'Business Insurance', 'Trade Insurance', 'NZ Insurance'],
      }) }} />

      {/* JSON-LD: WebSite with SearchAction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PublicLiabilityInsurance.co.nz',
        url: 'https://www.publicliabilityinsurance.co.nz',
        description: 'Compare public liability insurance from up to 15 insurers. Expert advice from licensed NZ brokers.',
        publisher: {
          '@type': 'Organization',
          name: 'Cover4You',
        },
        inLanguage: 'en-NZ',
      }) }} />

      <main className="w-full">
        {/* Hero Section */}
        <section
          className="relative min-h-[70vh] flex items-end"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-800/25 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-36 w-full">
            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['✅ ICNZ Fair Code', '🔒 Licensed NZ Brokers', '🔍 Up to 15+ Insurers', '💡 Expert Advice', '✓ No Obligation'].map(pill => (
                <span key={pill} className="px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium rounded-full">{pill}</span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight mb-4">
              Protect Your Business with the Right Public Liability Cover
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mb-8 leading-relaxed">
              Compare personalised public liability insurance quotes from New Zealand&apos;s leading insurers. Expert advice from licensed NZ brokers — transparent pricing, fast quotes, no obligation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="#quote-form"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl transition-colors inline-flex items-center justify-center"
              >
                Get a Quote →
              </Link>
              <Link
                href="#sectors"
                className="px-7 py-3.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/25 transition-colors inline-flex items-center justify-center"
              >
                Explore by Sector
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 text-white">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">530k+</div>
                <p className="text-xs text-gray-300">Businesses in NZ need cover</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">97%</div>
                <p className="text-xs text-gray-300">Are small businesses</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">Up to 15</div>
                <p className="text-xs text-gray-300">Insurers compared</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">Same Day</div>
                <p className="text-xs text-gray-300">Quote response</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Simple Process</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">How It Works</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Getting the right public liability insurance for your NZ business is simpler than you think. Four steps to fully covered.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: '1',
                  title: 'Tell Us About Your Business',
                  description: 'Fill out our quick form with your business type, location, and coverage needs. Takes just 2 minutes.',
                },
                {
                  step: '2',
                  title: 'We Compare 15+ Insurers',
                  description: 'Our licensed brokers compare policies from leading NZ public liability insurers to find the best fit for your risk profile.',
                },
                {
                  step: '3',
                  title: 'Receive Your Tailored Quote',
                  description: 'Get a clear, plain-English quote fast. No jargon, no hidden fees — just the right cover at the right price.',
                },
                {
                  step: '4',
                  title: 'Get Covered with Confidence',
                  description: 'Choose your policy and get covered. Your certificate is issued promptly so you can get back to running your business.',
                },
              ].map((item, idx, arr) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  {idx < arr.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-9 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-800 z-0"
                      style={{ width: 'calc(100% - 4rem)', left: 'calc(50% + 2rem)' }}
                    />
                  )}
                  <div className="relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-full bg-emerald-500 text-white text-2xl font-extrabold mb-5 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/20">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/25 text-base"
              >
                Start Your Quote →
              </a>
              <p className="mt-3 text-sm text-slate-500">No obligation · Licensed NZ brokers</p>
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section id="sectors" className="w-full py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Coverage by Sector</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Coverage by Business Sector</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Every industry has unique risks. We match you with the right cover for your specific sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Businesses & Retail',
                  description: 'Retail shops, cafes, restaurants, salons, and other customer-facing businesses.',
                  href: '/sectors/businesses',
                  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                  tags: ['Cafes', 'Restaurants', 'Retail', 'Salons'],
                },
                {
                  name: 'Trade Contractors',
                  description: 'Builders, plumbers, electricians, painters, landscapers, and construction firms.',
                  href: '/sectors/trade-contractors',
                  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
                  tags: ['Builders', 'Electricians', 'Plumbers', 'Roofers'],
                },
                {
                  name: 'Schools & Education',
                  description: 'ECE centres, primary and secondary schools, tertiary providers, and after-school programs.',
                  href: '/sectors/schools-education',
                  image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
                  tags: ['ECE Centres', 'Primary Schools', 'Secondary', 'Tertiary'],
                },
                {
                  name: 'Public Venues & Events',
                  description: 'Concert venues, sports grounds, community halls, markets, and adventure recreation.',
                  href: '/sectors/public-venues',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
                  tags: ['Venues', 'Events', 'Markets', 'Recreation'],
                },
              ].map((sector, idx) => (
                <Link key={idx} href={sector.href} className="group block">
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg min-h-80 flex flex-col justify-end"
                    style={{ backgroundImage: `url(${sector.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    {/* Dark gradient overlay — stronger at bottom for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent group-hover:from-gray-950/95 transition-all duration-300" />
                    <div className="relative p-7">
                      <h3 className="text-2xl font-extrabold text-white mb-2">{sector.name}</h3>
                      <p className="text-sm text-slate-200 mb-5 leading-relaxed">{sector.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sector.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">{tag}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold text-sm group-hover:text-emerald-300 transition-colors">
                        Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Public Liability Insurance — dark section for contrast */}
        <section className="w-full py-20 px-4 bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Why It Matters</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Why Public Liability Cover is Essential
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">Six reasons every business should have cover in place before something goes wrong.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                {
                  icon: '⚖️',
                  title: 'Legal Protection',
                  description: 'Under NZ law, businesses can be held liable for injury or property damage to customers or the public. A single claim can cost tens of thousands of dollars.',
                },
                {
                  icon: '🏆',
                  title: 'Business Reputation',
                  description: 'A single incident can damage your reputation. Insurance ensures you can respond professionally without disrupting your operations.',
                },
                {
                  icon: '📄',
                  title: 'Client Requirements',
                  description: 'Many clients — especially councils and large organisations — require proof of public liability cover before awarding contracts.',
                },
                {
                  icon: '🧘',
                  title: 'Peace of Mind',
                  description: "Know you're protected against unexpected claims. Focus on growing your business instead of worrying about financial exposure.",
                },
                {
                  icon: '✅',
                  title: 'Compliance',
                  description: 'Insurance is often required by site access conditions, health and safety regulations, and commercial tenancy agreements.',
                },
                {
                  icon: '💰',
                  title: 'Affordable Protection',
                  description: 'Premiums vary by industry and risk, but quality coverage is typically far cheaper than the cost of a single uninsured claim.',
                },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-200">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600/20 border border-emerald-500/40 rounded-2xl p-6">
              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">💡</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Key Fact:</span> The Health and Safety at Work Act 2015 doesn&apos;t mandate public liability insurance, but businesses can be prosecuted for safety breaches. Having cover in place is the prudent way to manage that financial risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Client Feedback</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                Trusted by Business Owners
              </h2>
              <p className="text-slate-500 text-sm">Names shown as first name and initial only to protect privacy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  initials: 'SM',
                  business: 'Café Owner, Auckland',
                  quote: 'I was worried about slip-and-fall claims from customers. PublicLiability.co.nz helped me find affordable coverage in minutes. The comparison was clear and honest.',
                  stars: 5,
                },
                {
                  name: 'James C.',
                  initials: 'JC',
                  business: 'Builder, Christchurch',
                  quote: 'As a contractor, I need high limits for site work. The form understood my needs, and I got quotes from insurers who actually know construction risks. Saved me hours.',
                  stars: 5,
                },
                {
                  name: 'Emma T.',
                  initials: 'ET',
                  business: 'School Principal, Wellington',
                  quote: 'Our school needed updated coverage. The team understood duty of care in education. Great service, and no pressure to buy.',
                  stars: 5,
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-7 shadow-sm border-2 border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col">
                  <div className="text-5xl text-emerald-200 font-serif leading-none mb-3 select-none">&ldquo;</div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                      <p className="text-slate-500 text-xs">{testimonial.business}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Common Questions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'What does public liability insurance cover?',
                  a: "Public liability insurance covers legal costs and compensation if you're found responsible for accidentally injuring someone or damaging their property. This includes claims from customers, clients, visitors, and members of the public.",
                },
                {
                  q: 'How much coverage do I need?',
                  a: 'Coverage limits typically range from $1M to $10M or more, depending on your industry, business size, and risk profile. Higher-risk activities (construction, events) usually need higher limits. Your adviser can recommend appropriate levels.',
                },
                {
                  q: 'How long does it take to get a quote?',
                  a: "Submit our quick form and a licensed NZ broker will respond same day. If you prefer to speak with someone directly, contact us at hello@cover4you.co.nz.",
                },
                {
                  q: 'Do you charge broker fees?',
                  a: 'Our referral service is free to use. Broker fees may apply depending on the specific policy and provider you choose — these will always be disclosed upfront before you commit.',
                },
                {
                  q: 'Can I buy online immediately?',
                  a: 'For most policies, yes. Coverage can bind quickly and your certificate is emailed promptly — often within hours of your application being approved.',
                },
                {
                  q: 'Do I need public liability insurance by law?',
                  a: "It's not always legally mandatory, but it's frequently required by clients, councils, and landlords as a condition of work. The Health and Safety at Work Act 2015 also requires you to manage risks — insurance is a key part of that.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="group border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition-colors">
                  <summary className="cursor-pointer font-bold text-slate-900 flex justify-between items-center px-6 py-5 gap-4 hover:bg-slate-50 transition-colors">
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold group-open:bg-emerald-600 group-open:text-white transition-colors">▾</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 border-t-2 border-emerald-100 bg-emerald-50/50">
                    <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="w-full py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Context & Trust */}
              <div className="lg:pt-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Referral Service</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Get Your Quote Today</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Tell us about your business and a licensed NZ broker will be in touch with tailored coverage options — same business day.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: '✓', title: 'Compare 15+ NZ insurers', desc: 'We shop the whole market so you don\'t have to' },
                    { icon: '✓', title: 'Licensed insurance brokers', desc: 'IBANZ-accredited advisers manage your query' },
                    { icon: '✓', title: 'Same-day response', desc: 'Quotes back within hours, not days' },
                    { icon: '✓', title: 'No fees to you', desc: 'No fees to you — brokers are paid by insurers' },
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

        {/* Final CTA */}
        <CTABanner
          heading="Ready to Get Protected?"
          subtext="Over 530,000 businesses operate in New Zealand — most need public liability cover. Get yours sorted today."
        />
      </main>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Us | 20+ Years in Insurance | Public Liability Insurance NZ',
  description:
    'Since 2005, we\'ve helped businesses across international markets find the right insurance. Now with 30+ products and a dedicated NZ team, we deliver expert advice that saves you time and money.',
  openGraph: {
    title: 'About Public Liability Insurance — 20+ Years of Experience',
    description:
      'Independent NZ insurance comparison service backed by two decades of international insurance experience.',
    type: 'website',
  },
};

export default function AboutPage() {
  const timeline = [
    {
      year: '2005',
      title: 'Where It All Began',
      description:
        'Founded as a specialist insurance advisory firm in the United Kingdom, providing commercial liability guidance to small and medium businesses across the UK market.',
      market: 'United Kingdom',
    },
    {
      year: '2008',
      title: 'Expanding Through Adversity',
      description:
        'During the global financial crisis, demand for affordable, transparent insurance advice surged. We expanded our product range and helped hundreds of businesses restructure their cover to reduce costs without losing protection.',
      market: 'United Kingdom',
    },
    {
      year: '2011',
      title: 'Going Digital',
      description:
        'Launched our first online comparison platform, allowing business owners to compare quotes from multiple insurers in minutes rather than days. Adoption was immediate — digital enquiries overtook phone within 12 months.',
      market: 'United Kingdom & Europe',
    },
    {
      year: '2014',
      title: 'International Expansion',
      description:
        'Opened operations in Australia, bringing our comparison model to the APAC market. Partnered with major Australian underwriters to offer tailored commercial insurance products for trades, hospitality, and retail.',
      market: 'Australia',
    },
    {
      year: '2017',
      title: 'Broadening the Portfolio',
      description:
        'Grew our product range to over 20 insurance categories — from public liability and professional indemnity to cyber liability, directors\' insurance, and specialist trade cover. Built dedicated teams for each product vertical.',
      market: 'UK, Australia & Asia',
    },
    {
      year: '2019',
      title: 'Arriving in New Zealand',
      description:
        'Established our New Zealand presence, recognising the unique needs of Kiwi businesses. Partnered with ICNZ-registered insurers and local brokers to deliver the same transparent, no-commission comparison service tailored to the NZ market.',
      market: 'New Zealand',
    },
    {
      year: '2021',
      title: '30+ Products, One Platform',
      description:
        'Reached the milestone of 30+ insurance product categories across our platform. Launched dedicated sector-specific microsites for industries including construction, education, hospitality, and events.',
      market: 'International',
    },
    {
      year: '2023',
      title: 'NZ-Focused Growth',
      description:
        'Doubled our NZ advisory team and expanded partnerships with regional brokers across Auckland, Wellington, Christchurch, and regional centres. Introduced personalised risk assessments for NZ-specific compliance requirements.',
      market: 'New Zealand',
    },
    {
      year: '2025',
      title: 'Today — Stronger Than Ever',
      description:
        'Two decades of experience across international markets now powers everything we do. Our NZ team combines global insurance expertise with deep local knowledge to deliver the best possible outcomes for Kiwi businesses.',
      market: 'New Zealand & International',
    },
  ];

  const stats = [
    { value: '20+', label: 'Years of Experience', detail: 'Since 2005 across international markets' },
    { value: '30+', label: 'Insurance Products', detail: 'From public liability to cyber cover' },
    { value: '4', label: 'International Markets', detail: 'UK, Europe, Australia & New Zealand' },
    { value: '500+', label: 'Businesses Protected', detail: 'Across New Zealand alone' },
    { value: '$0', label: 'Broker Fees', detail: 'Transparent, commission-free service' },
    { value: '15+', label: 'NZ Insurer Partners', detail: 'All ICNZ-registered providers' },
  ];

  const values = [
    {
      title: 'Independent',
      description:
        'We\'re not tied to any single insurer. We compare options from all major providers to find you the best deal.',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'NZ-Focused',
      description:
        'Our NZ team understands the local insurance market, legislation, and the specific risks Kiwi businesses face every day.',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Transparent',
      description:
        'No hidden costs, no surprise exclusions, no commission. We explain exactly what you\'re getting and why it\'s the right fit.',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Experienced',
      description:
        'Two decades of insurance expertise across four international markets means we\'ve seen every scenario and know what works.',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const products = [
    'Public Liability', 'Professional Indemnity', 'Statutory Liability', 'Employers\' Liability',
    'Directors & Officers', 'Cyber Liability', 'Business Interruption', 'Material Damage',
    'Motor Vehicle Fleet', 'Marine Cargo', 'Contract Works', 'Plant & Equipment',
    'Product Liability', 'Management Liability', 'Crime & Fidelity', 'Travel Insurance',
    'Key Person Insurance', 'Income Protection', 'Trade Credit', 'Environmental Liability',
    'Event Liability', 'Landlord Insurance', 'Body Corporate', 'Construction All Risk',
    'Professional Services', 'Health & Safety', 'Group Health', 'Crop & Rural',
    'Aviation Liability', 'Sports & Recreation',
  ];

  return (
    <>
      {/* Hero Section — full-width background image */}
      <section className="relative w-full min-h-[50vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=900&fit=crop&q=80"
          alt="Team of professionals in a modern office meeting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 px-4 py-20 md:py-28">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
            20+ Years Helping Businesses Get the Right Cover
          </h1>
          <p className="text-xl text-slate-200 mb-6 leading-relaxed max-w-2xl">
            Since 2005, we&apos;ve built insurance comparison platforms across international markets.
            Today, we bring that global expertise to New Zealand — with a portfolio spanning 30+
            insurance products and a single focus: saving our clients time and money.
          </p>
          <p className="text-slate-300 max-w-2xl mb-8">
            We believe every business deserves transparent, expert insurance advice without
            commission pressure or hidden fees. That&apos;s why we built a service that puts your
            interests first — always.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#our-story"
              className="px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-lg hover:bg-emerald-600 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Our Story
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center border-2 border-white/30 backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <main className="w-full">
        {/* Stats bar */}
        <section className="w-full bg-slate-900 py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <p className="text-sm font-semibold text-emerald-400 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                At Public Liability Insurance, we believe that every NZ business deserves access to
                quality insurance without the hassle, confusion, or excessive costs that come with
                traditional insurance shopping.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Our mission is to simplify the process by connecting businesses with the right
                coverage from trusted providers — making protection affordable, transparent, and
                straightforward.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With over two decades of experience across international markets, we&apos;ve learned
                that the best outcomes come from putting the client first, comparing honestly, and
                never charging hidden fees.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
                alt="Business team discussing strategy"
                className="w-full h-80 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Four principles that have guided our business since day one.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="our-story" className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From a specialist advisory firm in the UK to a 30+ product platform serving New Zealand
              businesses — here&apos;s how we got here.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-sky-400 to-emerald-400"></div>

            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={item.year} className="relative md:flex md:items-start md:mb-12">
                    {/* Mobile layout */}
                    <div className="md:hidden flex gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                          <span className="text-sm font-black text-white">{item.year}</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl border border-slate-200 p-5 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
                          {item.market}
                        </p>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Desktop layout — alternating sides */}
                    <div className="hidden md:flex md:items-start w-full">
                      {/* Left content */}
                      <div className={`w-[calc(50%-32px)] ${isLeft ? '' : 'order-3'}`}>
                        {isLeft && (
                          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 mr-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
                              {item.market}
                            </p>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                          </div>
                        )}
                      </div>

                      {/* Centre dot */}
                      <div className="flex-shrink-0 w-16 flex justify-center order-2 relative z-10">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 border-4 border-white">
                          <span className="text-xs font-black text-white">{item.year}</span>
                        </div>
                      </div>

                      {/* Right content */}
                      <div className={`w-[calc(50%-32px)] ${isLeft ? 'order-3' : ''}`}>
                        {!isLeft && (
                          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 ml-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
                              {item.market}
                            </p>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Portfolio */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                30+ Insurance Products
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our portfolio covers every major category of business insurance. Whatever your
                industry, we can help you find the right protection.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {products.map((product) => (
                <span
                  key={product}
                  className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 transition-colors duration-200"
                >
                  {product}
                </span>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-slate-500 text-sm mb-4">
                Public liability is our flagship product in New Zealand, but we can help with your
                full insurance portfolio.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Ask us about any product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe we offer the best level of service and support to save our clients time and money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                heading: 'Fast & Simple Process',
                description:
                  'Get quotes from multiple insurers in minutes, not days. No complicated forms or endless phone calls.',
                icon: (
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                heading: 'Expert Guidance',
                description:
                  'Our team understands NZ insurance requirements and helps you choose appropriate coverage for your industry.',
                icon: (
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                heading: 'Trusted Partnerships',
                description:
                  'We work exclusively with ICNZ-registered insurers and established brokers to ensure your protection is legitimate.',
                icon: (
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                heading: 'Personalised Service',
                description:
                  'Whether you\'re a sole trader or a large operation, we tailor our recommendations to your specific needs and budget.',
                icon: (
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                heading: 'Local Knowledge',
                description:
                  'We understand NZ regulations, ACC interplay, HSWA requirements, and the specific risks different sectors face.',
                icon: (
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
              },
              {
                heading: 'Real Cost Savings',
                description:
                  'By comparing options across 15+ insurers, we routinely help businesses save 20–40% on their premiums.',
                icon: (
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote:
                    'I spent hours getting quotes from individual insurers. Public Liability Insurance gave me everything in one place. Saved me time and got me a better rate!',
                  author: 'Lisa',
                  business: 'Cafe Owner, Auckland',
                },
                {
                  quote:
                    'As a contractor, finding $5M cover at a reasonable price was difficult. They made the comparison easy and found me exactly what I needed.',
                  author: 'Mike',
                  business: 'Building Contractor, Christchurch',
                },
                {
                  quote:
                    'Great service. The team explained everything clearly, no jargon, no pressure. I felt confident in my choice.',
                  author: 'Amanda',
                  business: 'Retail Manager, Wellington',
                },
                {
                  quote:
                    'Finally, someone who understands the NZ insurance market. The experience and knowledge really shows through.',
                  author: 'David',
                  business: 'Business Owner, Hamilton',
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Partnerships &amp; Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ICNZ Registered</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                We work exclusively with Insurance Council of New Zealand registered providers,
                guaranteeing consumer protections and dispute resolution access.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">NZ Broker Network</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Connected with experienced insurance brokers throughout New Zealand — Auckland,
                Wellington, Christchurch, and regional centres — providing local expertise and
                personalised support.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">International Experience</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Two decades operating across UK, European, Australian, and New Zealand markets gives
                us breadth of knowledge that purely local providers simply can&apos;t match.
              </p>
            </div>
          </div>
        </section>
      </main>

      <CTABanner
        heading="Ready to Get Covered?"
        subtext="Start your free quote comparison today. It only takes 5 minutes and could save you hundreds on your insurance."
      />
    </>
  );
}

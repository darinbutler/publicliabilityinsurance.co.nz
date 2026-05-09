import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { businessTypes, getBusinessBySlug } from '@/data/business-types';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return businessTypes.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) return {};
  return {
    title: business.metaTitle,
    description: business.metaDescription,
    alternates: { canonical: `https://publicliabilityinsurance.co.nz/businesses/${business.slug}/` },
    openGraph: {
      title: business.metaTitle,
      description: business.metaDescription,
      images: [{ url: business.heroImage }],
    },
  };
}

export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) notFound();

  const related = business.relatedSlugs
    .map(s => getBusinessBySlug(s))
    .filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Public Liability Insurance for ${business.name}`,
    description: business.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Cover4You',
      url: 'https://publicliabilityinsurance.co.nz',
    },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    serviceType: 'Public Liability Insurance',
    url: `https://publicliabilityinsurance.co.nz/businesses/${business.slug}/`,
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://publicliabilityinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://publicliabilityinsurance.co.nz/businesses/' },
      { '@type': 'ListItem', position: 3, name: business.name, item: `https://publicliabilityinsurance.co.nz/businesses/${business.slug}/` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: business.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-end"
        style={{ backgroundImage: `url(${business.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className={`absolute inset-0 bg-gradient-to-t ${business.heroGradient.replace('from-', 'from-').replace('to-', 'to-')}/90 via-transparent to-transparent opacity-90`} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-800/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <nav className="flex items-center gap-2 text-xs text-emerald-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/businesses/" className="hover:text-white transition-colors">Businesses</Link>
            <span>/</span>
            <span className="text-white">{business.name}</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">{business.icon}</span>
            <span className="px-3 py-1 bg-emerald-600/80 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              {business.category === 'trades' ? 'Trades & Contractors' : business.category === 'service' ? 'Service & Mobile' : business.category === 'food' ? 'Food & Hospitality' : 'Retail & Other'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl leading-tight mb-4">{business.headline}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-6">{business.intro}</p>
          <div className="flex flex-wrap gap-3">
            {['✅ ICNZ Fair Code', '🔒 Licensed NZ Brokers', `💰 From ${business.typicalPremium.split('–')[0].trim()}`, '💡 Free Expert Advice', '✓ No Obligation'].map(b => (
              <span key={b} className="px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium rounded-full">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main column */}
            <div className="lg:col-span-2 space-y-10">

              {/* Coverage first */}
              <div className="bg-white rounded-2xl border-2 border-emerald-500 shadow-sm overflow-hidden">
                <div className="bg-emerald-600 px-6 py-4">
                  <h2 className="text-lg font-bold text-white">✅ What's Covered for {business.name} in NZ</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {business.whatsCovered.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-emerald-900">Typical NZ Premium</p>
                      <p className="text-lg font-extrabold text-emerald-700">{business.typicalPremium}</p>
                      <p className="text-xs text-emerald-600">Cover limits: {business.minimumCover}</p>
                    </div>
                    <Link href="/contact/" className="flex-shrink-0 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors">
                      Get My Quote →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Key Risks */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-amber-500 px-6 py-4">
                  <h2 className="text-lg font-bold text-white">⚠️ Key Risks Facing {business.name} in NZ</h2>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">Without public liability insurance, a single claim could threaten your livelihood. These are the risks most commonly faced by {business.name.toLowerCase()} in New Zealand:</p>
                  <div className="space-y-3">
                    {business.keyRisks.map((risk, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <span className="text-amber-500 font-bold text-sm flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-sm text-gray-700">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {business.faqs.map((faq, i) => (
                    <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-900 text-sm hover:bg-gray-50 transition-colors list-none">
                        {faq.q}
                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Related business types */}
              {related.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Related Business Types</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map(r => r && (
                      <Link key={r.slug} href={`/businesses/${r.slug}/`} className="group bg-white rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all p-5 flex items-center gap-3">
                        <span className="text-2xl">{r.icon}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm group-hover:text-emerald-700 transition-colors">{r.name}</p>
                          <p className="text-xs text-gray-400">{r.typicalPremium}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-5">

                {/* Quote form */}
                <QuoteForm variant="sidebar" />

                {/* Trust block */}
                <div className="bg-emerald-900 rounded-2xl p-5 text-white">
                  <h3 className="font-bold text-sm mb-3 text-emerald-200 uppercase tracking-wider">Why Use Our Service?</h3>
                  <div className="space-y-2.5">
                    {[
                      { icon: '✅', text: 'ICNZ Fair Insurance Code' },
                      { icon: '🔒', text: 'Licensed NZ Brokers' },
                      { icon: '🔍', text: 'Up to 15+ Insurers' },
                      { icon: '💡', text: 'Free Expert Advice' },
                      { icon: '✓', text: 'No Obligation' },
                      { icon: '⚡', text: 'Same-Day Response' },
                    ].map(b => (
                      <div key={b.text} className="flex items-center gap-2 text-sm text-emerald-100">
                        <span>{b.icon}</span><span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links to other business types */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Other Business Types</h3>
                  <div className="space-y-1.5">
                    {businessTypes.filter(b => b.slug !== business.slug).slice(0, 8).map(b => (
                      <Link key={b.slug} href={`/businesses/${b.slug}/`} className="block text-sm text-emerald-700 hover:text-emerald-900 hover:underline transition-colors">
                        → {b.name}
                      </Link>
                    ))}
                    <Link href="/businesses/" className="block text-sm font-semibold text-emerald-700 hover:text-emerald-900 mt-2 transition-colors">
                      View all 30 business types →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { businessTypes } from '@/data/business-types';

export const metadata: Metadata = {
  title: 'Public Liability Insurance by Business Type NZ | Cover4You',
  description: 'Find public liability insurance tailored to your profession in New Zealand. Builders, dog walkers, cafes, retailers, cleaners and 25+ more business types covered.',
  alternates: { canonical: 'https://www.publicliabilityinsurance.co.nz/businesses/' },
};

const categories = [
  { key: 'trades', label: 'Trades & Contractors', icon: '🔧', description: 'Builders, electricians, plumbers and other trade professionals' },
  { key: 'service', label: 'Service & Mobile', icon: '🤝', description: 'Dog walkers, cleaners, trainers and professional services' },
  { key: 'food', label: 'Food & Hospitality', icon: '🍽️', description: 'Cafes, restaurants, takeaways, caterers and food businesses' },
  { key: 'retail', label: 'Retail & Other', icon: '🏪', description: 'Shops, rideshare drivers, consultants and other businesses' },
] as const;

export default function BusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-emerald-800 to-teal-700 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-emerald-100 text-xs font-semibold rounded-full uppercase tracking-wider mb-5">
            30 Business Types Covered
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Public Liability Insurance<br />for Every Business
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            Whether you're a sole trader dog walker or a busy café owner, find specialist public liability cover designed for your profession. Quotes with no obligation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['✅ ICNZ Fair Code', '🔒 Licensed NZ Brokers', '💰 No Fees', '⚡ Same-Day Quotes'].map(b => (
              <span key={b} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Business type grid by category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {categories.map(cat => {
            const catBusinesses = businessTypes.filter(b => b.category === cat.key);
            return (
              <div key={cat.key} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{cat.label}</h2>
                    <p className="text-sm text-gray-500">{cat.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {catBusinesses.map(b => (
                    <Link
                      key={b.slug}
                      href={`/businesses/${b.slug}/`}
                      className="group bg-white rounded-2xl p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center"
                    >
                      <span className="text-3xl mb-3">{b.icon}</span>
                      <span className="font-bold text-gray-900 text-sm group-hover:text-emerald-700 transition-colors leading-snug">{b.name}</span>
                      <span className="text-xs text-gray-400 mt-1">{b.typicalPremium}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Bottom CTA */}
          <div className="bg-emerald-900 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">Not sure what cover you need?</h2>
            <p className="text-emerald-200 mb-6 max-w-xl mx-auto">Our specialist brokers will match you to the right policy for your profession and business size. No obligation.</p>
            <Link href="/contact/" className="inline-block px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-colors text-sm shadow-lg">
              Get My Quote →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

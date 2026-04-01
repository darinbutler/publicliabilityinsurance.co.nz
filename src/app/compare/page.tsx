import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { insurers, coverageFeatures, industryPremiums } from '@/data/insurers';

export const metadata: Metadata = {
  title: 'Compare NZ Public Liability Insurance Providers | Side-by-Side',
  description:
    'Compare public liability insurance providers in New Zealand side-by-side. See coverage limits, premiums, features, and ratings for Vero, NZI, AIG, Crombie Lockwood, and Delta Insurance.',
  openGraph: {
    title: 'Compare NZ Public Liability Insurance Providers',
    description:
      'Find and compare public liability insurance from leading NZ insurers — Vero, NZI, AIG, Crombie Lockwood, and Delta.',
    type: 'article',
  },
};

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < fullStars ? 'text-yellow-400' : i === fullStars && hasHalf ? 'text-yellow-300' : 'text-slate-300'}`}
        >
          ★
        </span>
      ))}
      <span className="text-xs text-slate-500 ml-1">{rating}</span>
    </div>
  );
}

export default function ComparePage() {
  return (
    <>
      {/* Hero Section — full-width background image */}
      <section className="relative w-full min-h-[50vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=900&fit=crop&q=80"
          alt="Modern commercial buildings in a New Zealand city centre"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 px-4 py-20 md:py-28">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Independent Comparison
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
            Compare NZ&apos;s Top Public Liability Insurers
          </h1>
          <p className="text-xl text-slate-200 mb-6 leading-relaxed max-w-2xl">
            Not all policies are created equal. We&apos;ve analysed coverage limits, premium ranges,
            claims speed, and customer service across New Zealand&apos;s leading providers so you
            can make an informed decision — without the jargon.
          </p>
          <p className="text-slate-300 mb-8 max-w-2xl">
            Whether you&apos;re a sole trader needing basic cover or a large contractor requiring $10M+
            limits, the right insurer depends on your industry, risk profile, and budget. Scroll down
            to see how the top five stack up side-by-side.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#insurer-table"
              className="px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-lg hover:bg-emerald-600 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              View Comparison Table
            </a>
            <Link
              href="#quote-form"
              className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center border-2 border-white/30 backdrop-blur-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <main className="w-full">
        {/* Trust indicators */}
        <section className="w-full bg-slate-900 py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              All ICNZ-registered providers
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No broker fees or commissions
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Updated April 2026
            </span>
          </div>
        </section>

        {/* 5-Column Insurer Comparison Table */}
        <section id="insurer-table" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Major NZ Insurers at a Glance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Five of New Zealand&apos;s most trusted public liability insurance providers, compared across the metrics that matter most.
            </p>
          </div>

          {/* Desktop table — 5 columns */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wider border-b-2 border-slate-200 w-44">
                    &nbsp;
                  </th>
                  {insurers.map((ins) => (
                    <th key={ins.name} className="p-4 text-center border-b-2 border-slate-200">
                      <div className="text-lg font-bold text-slate-900">{ins.name}</div>
                      <div className="text-xs text-slate-500 mt-1">Est. {ins.established}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Rating */}
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Rating</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center border-b border-slate-100">
                      <div className="flex justify-center">
                        <StarRating rating={ins.rating} />
                      </div>
                    </td>
                  ))}
                </tr>
                {/* Best For */}
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Best For</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center border-b border-slate-100">
                      <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {ins.bestFor}
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Premium Range */}
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Premium Range</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center font-semibold text-emerald-600 border-b border-slate-100">
                      {ins.premiumRange}
                    </td>
                  ))}
                </tr>
                {/* Coverage Limits */}
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Min Cover</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center text-slate-700 border-b border-slate-100">
                      {ins.minCover}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Max Cover</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center text-slate-700 border-b border-slate-100">
                      {ins.maxCover}
                    </td>
                  ))}
                </tr>
                {/* Excess */}
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Excess From</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center text-slate-700 border-b border-slate-100">
                      {ins.excessFrom}
                    </td>
                  ))}
                </tr>
                {/* Online Quote */}
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Online Quote</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center border-b border-slate-100">
                      {ins.onlineQuote ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-100 text-slate-400 rounded-full font-bold text-sm">—</span>
                      )}
                    </td>
                  ))}
                </tr>
                {/* NZ Owned */}
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">NZ-Owned</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center border-b border-slate-100">
                      {ins.nzOwned ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-blue-50 text-blue-600 rounded-full font-bold text-xs">Intl</span>
                      )}
                    </td>
                  ))}
                </tr>
                {/* Claims Speed */}
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Claims Speed</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center text-xs text-slate-600 border-b border-slate-100">
                      {ins.claimsSpeed}
                    </td>
                  ))}
                </tr>
                {/* Customer Service */}
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-200">Support</td>
                  {insurers.map((ins) => (
                    <td key={ins.name} className="p-4 text-center text-xs text-slate-600 border-b border-slate-200">
                      {ins.customerService}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards — stacked */}
          <div className="lg:hidden space-y-6">
            {insurers.map((ins) => (
              <div
                key={ins.name}
                className="border-2 border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{ins.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-slate-500">Est. {ins.established}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          ins.nzOwned
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {ins.nzOwned ? 'NZ-Owned' : 'International'}
                      </span>
                    </div>
                  </div>
                  <StarRating rating={ins.rating} />
                </div>

                <div className="bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1.5 rounded-lg inline-block mb-4">
                  {ins.bestFor}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Premium Range</p>
                    <p className="font-semibold text-emerald-600">{ins.premiumRange}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Excess From</p>
                    <p className="font-semibold text-slate-900">{ins.excessFrom}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Cover Range</p>
                    <p className="font-semibold text-slate-900">
                      {ins.minCover} – {ins.maxCover}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Online Quote</p>
                    <p className="font-semibold text-slate-900">{ins.onlineQuote ? 'Yes' : 'Via broker'}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-1.5">
                    {ins.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-6 text-center">
            Information is indicative and may change. Always confirm details directly with the provider.
          </p>
        </section>

        {/* Coverage Features Matrix */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Coverage Features Comparison
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See which coverage types are included as standard with each provider.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                    <th className="p-4 text-left font-semibold text-sm">Coverage Feature</th>
                    {insurers.map((insurer) => (
                      <th
                        key={insurer.name}
                        className="p-4 text-center font-semibold text-sm"
                      >
                        {insurer.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {coverageFeatures.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-emerald-50/40 transition-colors`}
                    >
                      <td className="p-4 font-medium text-slate-900 text-sm border-b border-slate-100">
                        {row.feature}
                      </td>
                      {row.included.map((included, i) => (
                        <td
                          key={i}
                          className="p-4 text-center border-b border-slate-100"
                        >
                          {included ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">
                              ✓
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-100 text-slate-400 rounded-full text-sm">
                              ✗
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industry Premium Ranges */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Premium Ranges by Industry
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Indicative annual premiums for public liability insurance across common NZ industries.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <th className="p-4 text-left font-semibold text-sm">Industry</th>
                  <th className="p-4 text-center font-semibold text-sm">Coverage Level</th>
                  <th className="p-4 text-center font-semibold text-sm">Annual Cost Range</th>
                  <th className="p-4 text-left font-semibold text-sm">Notes</th>
                </tr>
              </thead>
              <tbody>
                {industryPremiums.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-emerald-50/40 transition-colors`}
                  >
                    <td className="p-4 font-medium text-slate-900 text-sm border-b border-slate-100">
                      {row.industry}
                    </td>
                    <td className="p-4 text-center text-slate-700 text-sm border-b border-slate-100">
                      {row.coverage}
                    </td>
                    <td className="p-4 text-center font-semibold text-emerald-600 text-sm border-b border-slate-100">
                      ${row.rangeMin.toLocaleString()} – ${row.rangeMax.toLocaleString()}
                    </td>
                    <td className="p-4 text-sm text-slate-600 border-b border-slate-100">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-3">Understanding Premium Ranges</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-slate-900">Price variations</p>
                  <p>Premiums within the same industry can vary 30–50% between insurers</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-slate-900">Your specific profile</p>
                  <p>Claims history, safety record, and exact business operations affect your quote</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-slate-900">Always compare</p>
                  <p>Get quotes from multiple providers to ensure you&apos;re getting the best value</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-slate-900">Excess matters</p>
                  <p>Higher excess reduces your premium but increases your out-of-pocket cost</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing an Insurer */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How to Choose the Right Insurer
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Key factors and red flags to consider when selecting your public liability provider.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Key Considerations</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-slate-900">Coverage Adequacy</p>
                      <p className="text-sm text-slate-600">Does it cover the risks relevant to your industry?</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-slate-900">Premium Cost</p>
                      <p className="text-sm text-slate-600">Get multiple quotes and compare total cost of ownership</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-slate-900">Customer Service</p>
                      <p className="text-sm text-slate-600">Will they support you when you need help?</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-slate-900">Claims Reputation</p>
                      <p className="text-sm text-slate-600">How quickly and fairly do they settle claims?</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Red Flags to Avoid</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    <div>
                      <p className="font-semibold text-slate-900">Unregistered Insurers</p>
                      <p className="text-sm text-slate-600">Always use ICNZ-registered insurance companies</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    <div>
                      <p className="font-semibold text-slate-900">Suspiciously Low Prices</p>
                      <p className="text-sm text-slate-600">If it seems too good to be true, check the coverage carefully</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    <div>
                      <p className="font-semibold text-slate-900">Unclear Exclusions</p>
                      <p className="text-sm text-slate-600">Make sure you understand what&apos;s NOT covered</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    <div>
                      <p className="font-semibold text-slate-900">Poor Customer Reviews</p>
                      <p className="text-sm text-slate-600">Check independent reviews, especially about claims handling</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="quote-form" className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get Your Personalised Comparison
            </h2>
            <p className="text-lg text-slate-600">
              Answer a few simple questions about your business and we&apos;ll compare quotes from
              leading NZ insurers to find you the best coverage at the right price.
            </p>
          </div>
          <QuoteForm />
        </section>
      </main>

      <CTABanner
        heading="Find Your Perfect Insurance Provider"
        subtext="Stop guessing about insurance. Compare real quotes from multiple insurers and get exactly the coverage you need."
      />
    </>
  );
}

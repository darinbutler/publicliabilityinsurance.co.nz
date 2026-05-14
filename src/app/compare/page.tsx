import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { insurers, coverageFeatures, industryPremiums } from '@/data/insurers';

export const metadata: Metadata = {
  title: 'Compare NZ Insurance Providers | Public Liability Insurance | Cover4You',
  description: 'Compare public liability insurance providers in New Zealand. See coverage features, premium ranges by industry, and choose the best insurer for your business.',
  openGraph: {
    title: 'Compare NZ Insurance Providers',
    description: 'Find and compare public liability insurance from leading NZ insurers.',
    type: 'article',
  },
};

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compare Insurance Providers
          </h1>
          <p className="text-xl text-blue-100">
            Side-by-side comparison of leading public liability insurers to find the best coverage and price for your business.
          </p>
        </div>
      </section>

      <main className="w-full">

        {/* Coverage Features Matrix — FIRST */}
        <section className="w-full bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Coverage Features Comparison</h2>
            <p className="text-slate-600 mb-8">How leading NZ public liability insurers compare across key coverage features.</p>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-800 shadow-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border-r border-slate-600 p-4 text-left font-semibold min-w-[200px]">Coverage Feature</th>
                    {insurers.map((insurer) => (
                      <th key={insurer.name} className="border-r border-slate-600 last:border-r-0 p-4 text-center font-semibold min-w-[120px]">
                        <div>{insurer.name}</div>
                        <div className="text-xs font-normal text-slate-300 mt-0.5">{insurer.spRating} S&amp;P</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {coverageFeatures.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border-t border-r border-slate-300 p-4">
                        <div className="font-medium text-slate-900">{row.feature}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{row.notes}</div>
                      </td>
                      {row.included.map((included, i) => (
                        <td key={i} className="border-t border-r border-slate-300 last:border-r-0 p-4 text-center">
                          {included ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">✓</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-100 text-slate-400 rounded-full font-bold text-sm">✗</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-500 italic">
              This comparison is based on publicly available information and our own expert analysis of each provider&apos;s standard policy wording as at the date of publication. Coverage features may vary by policy type, endorsement, and individual underwriting. If any listed provider believes this information is inaccurate or outdated, please contact us at{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline">hello@cover4you.co.nz</a> and we will review promptly.
            </p>
          </div>
        </section>

        {/* Industry Premium Ranges — SECOND */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Premium Ranges by Industry</h2>
            <p className="text-slate-600 mb-8">Indicative annual premiums across common NZ business types.</p>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-800 shadow-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border-r border-slate-600 p-4 text-left font-semibold">Industry</th>
                    <th className="border-r border-slate-600 p-4 text-center font-semibold">Coverage Level</th>
                    <th className="border-r border-slate-600 p-4 text-center font-semibold">Annual Cost Range</th>
                    <th className="p-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {industryPremiums.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border-t border-r border-slate-300 p-4 font-medium text-slate-900">{row.industry}</td>
                      <td className="border-t border-r border-slate-300 p-4 text-center text-slate-700">{row.coverage}</td>
                      <td className="border-t border-r border-slate-300 p-4 text-center font-semibold text-emerald-700">
                        ${row.rangeMin} – ${row.rangeMax}
                      </td>
                      <td className="border-t border-slate-300 p-4 text-sm text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              Premium ranges shown are indicative estimates based on publicly available data and our own expert analysis. Actual premiums will vary based on your specific risk profile, claims history, excess selected, and insurer underwriting criteria. If any listed provider believes this information is inaccurate, please contact{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline">hello@cover4you.co.nz</a>.
            </p>

            <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">Understanding Premium Ranges</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li><strong>Price variations:</strong> Premiums within the same industry can vary 30–50% between insurers</li>
                <li><strong>Your specific profile:</strong> Your claims history, safety record, and exact business operations affect your quote</li>
                <li><strong>Always compare:</strong> Get quotes from multiple providers to ensure you're getting the best value</li>
                <li><strong>Excess matters:</strong> Higher excess reduces your premium but increases your out-of-pocket cost when claiming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Provider Comparison — THIRD */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Major NZ Insurers</h2>
          <p className="text-slate-600 mb-8">Detailed profiles of the leading public liability insurance providers in New Zealand.</p>

          <div className="grid lg:grid-cols-2 gap-6">
            {insurers.map((insurer) => (
              <div key={insurer.name} className="border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{insurer.name}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">{insurer.parent}</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 whitespace-nowrap">{insurer.spRating} S&P</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <span className="text-xs text-slate-500">Est. {insurer.established}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${insurer.nzOwned ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                      {insurer.nzOwned ? 'NZ-Owned' : 'International'}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                      {insurer.distributionModel}
                    </span>
                  </div>
                </div>

                <div className="mb-4 bg-emerald-50 rounded-lg px-4 py-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Indicative Premium Range</p>
                  <p className="text-lg font-bold text-emerald-700">{insurer.premiumRange}</p>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Best For</p>
                  <p className="text-sm text-slate-700 italic">{insurer.bestFor}</p>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Claims Speed</p>
                  <p className="text-sm text-slate-700">{insurer.claimsSpeed}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Key Features</p>
                  <ul className="space-y-1.5">
                    {insurer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={insurer.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Visit {insurer.websiteLabel} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Choosing an Insurer */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Choose the Right Insurer</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1</span>
                    <div>
                      <p className="font-semibold text-slate-900">Coverage Adequacy</p>
                      <p className="text-sm text-slate-600">Does it cover the risks relevant to your industry?</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2</span>
                    <div>
                      <p className="font-semibold text-slate-900">Premium Cost</p>
                      <p className="text-sm text-slate-600">Get multiple quotes and compare total cost of ownership</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3</span>
                    <div>
                      <p className="font-semibold text-slate-900">Customer Service</p>
                      <p className="text-sm text-slate-600">Will they support you when you need help?</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">4</span>
                    <div>
                      <p className="font-semibold text-slate-900">Claims Reputation</p>
                      <p className="text-sm text-slate-600">How quickly and fairly do they settle claims?</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Red Flags to Avoid</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-slate-900">Unregistered Insurers</p>
                      <p className="text-sm text-slate-600">Always use ICNZ-registered insurance companies</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-slate-900">Suspiciously Low Prices</p>
                      <p className="text-sm text-slate-600">If it seems too good to be true, check the coverage carefully</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-slate-900">Unclear Exclusions</p>
                      <p className="text-sm text-slate-600">Make sure you understand what's NOT covered</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
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
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Your Personalised Comparison</h2>
            <p className="text-lg text-slate-600">
              Answer a few simple questions about your business and we'll compare quotes from leading NZ insurers to find you the best coverage at the right price.
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

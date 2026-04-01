import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { insurers, coverageFeatures, industryPremiums } from '@/data/insurers';

export const metadata: Metadata = {
  title: 'Compare NZ Insurance Providers | Public Liability Insurance | Public Liability Insurance',
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
            Compare NZ Insurance Providers
          </h1>
          <p className="text-xl text-blue-100">
            Side-by-side comparison of leading public liability insurers to find the best coverage and price for your business.
          </p>
        </div>
      </section>

      <main className="w-full">
        {/* Provider Comparison */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Major NZ Insurers</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {insurers.map((insurer) => (
              <div key={insurer.name} className="border-2 border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{insurer.name}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                    <span>Established {insurer.established}</span>
                    <span className={`px-2 py-1 rounded ${insurer.nzOwned ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {insurer.nzOwned ? 'NZ-Owned' : 'International'}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Premium Range:</p>
                  <p className="text-lg font-semibold text-emerald-600">{insurer.premiumRange}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Customer Service:</p>
                  <p className="text-slate-700 text-sm">{insurer.customerService}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Claims Processing:</p>
                  <p className="text-slate-700 text-sm">{insurer.claimsSpeed}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {insurer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Features Matrix */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage Features Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-slate-300 p-4 text-left font-semibold">Coverage Feature</th>
                    {insurers.map((insurer) => (
                      <th key={insurer.name} className="border border-slate-300 p-4 text-center font-semibold">
                        {insurer.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {coverageFeatures.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
                      <td className="border border-slate-300 p-4 font-medium text-slate-900">{row.feature}</td>
                      {row.included.map((included, i) => (
                        <td key={i} className="border border-slate-300 p-4 text-center">
                          {included ? (
                            <span className="inline-block w-6 h-6 bg-emerald-100 text-emerald-700 rounded font-bold flex items-center justify-center">
                              ✓
                            </span>
                          ) : (
                            <span className="inline-block w-6 h-6 bg-slate-200 text-slate-500 rounded font-bold flex items-center justify-center">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Premium Ranges by Industry</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-slate-300 p-4 text-left font-semibold">Industry</th>
                  <th className="border border-slate-300 p-4 text-center font-semibold">Coverage Level</th>
                  <th className="border border-slate-300 p-4 text-center font-semibold">Annual Cost Range</th>
                  <th className="border border-slate-300 p-4 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {industryPremiums.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="border border-slate-300 p-4 font-medium text-slate-900">{row.industry}</td>
                    <td className="border border-slate-300 p-4 text-center text-slate-700">{row.coverage}</td>
                    <td className="border border-slate-300 p-4 text-center font-semibold text-emerald-600">
                      ${row.rangeMin} - ${row.rangeMax}
                    </td>
                    <td className="border border-slate-300 p-4 text-sm text-slate-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">Understanding Premium Ranges</h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Price variations:</strong> Premiums within the same industry can vary 30-50% between insurers
              </li>
              <li>
                <strong>Your specific profile:</strong> Your claims history, safety record, and exact business operations affect your quote
              </li>
              <li>
                <strong>Always compare:</strong> Get quotes from multiple providers to ensure you're getting the best value
              </li>
              <li>
                <strong>Excess matters:</strong> Higher excess/deductible reduces your premium but increases your out-of-pocket cost
              </li>
            </ul>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Your Personalized Comparison</h2>
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

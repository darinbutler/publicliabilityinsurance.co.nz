import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance for Businesses & Retail | NZ',
  description:
    'Get public liability insurance for retail shops, cafes, restaurants, salons, and professional services. Compare quotes from NZ insurers.',
  openGraph: {
    title: 'Public Liability Insurance for Businesses & Retail',
    description:
      'Protect your retail business with affordable public liability insurance. Compare quotes instantly.',
  },
};

export default function BusinessesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://publicliability.co.nz',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Sectors',
                item: 'https://publicliability.co.nz/sectors',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Businesses & Retail',
                item: 'https://publicliability.co.nz/sectors/businesses',
              },
            ],
          }),
        }}
      />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-pink-600 to-rose-600 px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Public Liability Insurance for Retail & Business
                </h1>
                <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                  Protect your business from liability claims. Whether you run a café, shop, salon, or professional service, we'll find you affordable coverage tailored to your risks.
                </p>
                <Link
                  href="#quote-form"
                  className="inline-block px-8 py-4 bg-white text-rose-600 font-bold text-lg rounded-lg hover:bg-pink-50 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/images/sector-retail.jpg"
                  alt="Business and retail public liability insurance coverage"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-sectors */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Industries We Cover</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Retail & Hospitality',
                  description: 'Shops, cafes, restaurants, bars, hotels, and takeaway businesses.',
                  risks: ['Customer slip and falls', 'Product liability', 'Damage to customer property', 'Food/beverage incidents'],
                },
                {
                  name: 'Professional Services',
                  description: 'Accountants, lawyers, consultants, real estate agents, and business advisors.',
                  risks: ['Professional errors', 'Negligence claims', 'Advice-related liability', 'Workplace injuries'],
                },
                {
                  name: 'Personal Services',
                  description: 'Hairdressers, beauty salons, gyms, personal training, and wellness providers.',
                  risks: ['Chemical/product reactions', 'Injury during service', 'Allergic reactions', 'Equipment damage'],
                },
                {
                  name: 'Home-Based Businesses',
                  description: 'Online retail, consultancy, tutoring, and services operated from home.',
                  risks: ['Visitor injuries', 'Product liability (if applicable)', 'Delivery-related claims', 'Client incidents'],
                },
              ].map((subsector, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{subsector.name}</h3>
                  <p className="text-slate-600 mb-4">{subsector.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-700">Common Risks:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {subsector.risks.map((risk, ridx) => (
                        <li key={ridx} className="flex items-center gap-2">
                          <span className="text-rose-600">•</span> {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real NZ Scenarios */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Real NZ Scenarios - Why Cover Matters</h2>

            <div className="space-y-8">
              {[
                {
                  scenario: 'Slip and Fall in Your Café',
                  details:
                    'A customer slips on a wet floor and breaks their wrist. They claim $45,000 in medical costs and lost income. Without insurance, this comes directly from your business.',
                  coverage: 'Public liability covers legal defense and compensation costs up to your policy limit.',
                },
                {
                  scenario: 'Product Damage Claim',
                  details:
                    'A customer is injured by a faulty product you sold. They pursue a claim alleging negligence. Legal costs alone could reach $20,000+.',
                  coverage: 'Your policy covers legal representation and settlement amounts.',
                },
                {
                  scenario: 'Professional Error',
                  details:
                    'A consultant gives incorrect advice that costs a client $30,000. The client sues for professional negligence.',
                  coverage: 'Coverage extends to professional liability claims, protecting your business.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg border-l-4 border-rose-600">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.scenario}</h3>
                  <p className="text-slate-600 mb-4">{item.details}</p>
                  <div className="bg-rose-50 p-4 rounded">
                    <p className="text-sm font-semibold text-rose-900">How Insurance Helps:</p>
                    <p className="text-slate-700 mt-2">{item.coverage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Guide */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Coverage Comparison for Retail Businesses</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300">
                    <th className="p-4 text-left font-bold text-slate-900">Coverage Aspect</th>
                    <th className="p-4 text-left font-bold text-slate-900">Typical Business Coverage</th>
                    <th className="p-4 text-left font-bold text-slate-900">What's Covered</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      aspect: 'Bodily Injury to Public',
                      coverage: '$1M - $5M',
                      details: 'Injury claims from customers, visitors, or members of the public',
                    },
                    {
                      aspect: 'Property Damage',
                      coverage: '$1M - $2M',
                      details: 'Damage to customer property caused by your negligence',
                    },
                    {
                      aspect: 'Legal Costs',
                      coverage: 'Included',
                      details: 'Defense costs and representation in legal proceedings',
                    },
                    {
                      aspect: 'Products Liability (if applicable)',
                      coverage: 'Add-on',
                      details: 'Injury or damage caused by products you sell or distribute',
                    },
                    {
                      aspect: 'Professional Indemnity (if applicable)',
                      coverage: 'Add-on',
                      details: 'Errors or omissions in professional advice (for advisors)',
                    },
                    {
                      aspect: 'Employer\'s Liability',
                      coverage: 'Check policy',
                      details: 'Covers workplace injuries to employees (sometimes separate)',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">
                        {row.aspect}
                      </td>
                      <td className="p-4 text-slate-600 border-b border-slate-200">{row.coverage}</td>
                      <td className="p-4 text-slate-600 border-b border-slate-200">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Public Liability FAQ for Retail & Businesses
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Is public liability insurance required by law for retail businesses?',
                  a: 'While not always legally mandatory, it\'s often required by landlords, councils, or clients. It\'s essential risk management, especially with customer-facing operations.',
                },
                {
                  q: 'What\'s a typical annual premium for a small retail business?',
                  a: 'Premiums vary widely by business type and location. A small café might pay $800-$1,500 annually for $2M coverage. Get a quote to see your specific rate.',
                },
                {
                  q: 'Does my policy cover employee injuries?',
                  a: 'Employee injuries are typically covered under Employers Liability, which is a separate add-on. Public liability covers public/customer injuries.',
                },
                {
                  q: 'Can I get coverage if I work from home?',
                  a: 'Yes. Home-based business coverage is available, though your home insurance policy might have restrictions. A dedicated public liability policy is best.',
                },
                {
                  q: 'Do I need separate cover for my product?',
                  a: 'If you sell products, you may need Products Liability as an add-on. This covers injury or damage caused by products you supply.',
                },
                {
                  q: 'What should I do if I have an incident?',
                  a: 'Notify your insurer immediately. Gather details, take photos, and collect witness information. Your insurer will guide you through the claims process.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="group border border-slate-300 rounded-lg p-6 hover:bg-white transition-colors">
                  <summary className="cursor-pointer font-bold text-slate-900 flex justify-between items-center">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-rose-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote-form" className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Get Your Retail Business Quote
              </h2>
              <p className="text-xl text-slate-600">
                Answer a few quick questions to see personalized quotes from top NZ insurers.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          heading="Protect Your Business Today"
          subtext="Join hundreds of NZ retail and business owners who trust us to find them the right coverage."
        />
      </main>
    </>
  );
}

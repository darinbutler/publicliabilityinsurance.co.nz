import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance for Trade Contractors | NZ Builders, Plumbers, Electricians',
  description:
    'Get public liability insurance for builders, plumbers, electricians, painters, landscapers, and HVAC contractors in New Zealand. Site-specific coverage available.',
  openGraph: {
    title: 'Public Liability Insurance for Trade Contractors',
    description:
      'Essential coverage for construction and trade work. Compare quotes from NZ insurers with experience in site safety.',
  },
};

export default function TradeContractorsPage() {
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
                item: 'https://publicliabilityinsurance.co.nz',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Sectors',
                item: 'https://publicliabilityinsurance.co.nz/sectors',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Trade Contractors',
                item: 'https://publicliabilityinsurance.co.nz/sectors/trade-contractors',
              },
            ],
          }),
        }}
      />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-orange-600 to-amber-600 px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Public Liability Insurance for Trade Contractors
                </h1>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Builders, plumbers, electricians, painters, and landscapers need high-limit coverage. Get quotes from insurers who understand construction and site-specific risks.
                </p>
                <Link
                  href="#quote-form"
                  className="inline-block px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=675&fit=crop&q=80"
                  alt="Trade and contractor public liability insurance coverage"
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trade Types */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Trades & Specializations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Builders & Developers',
                  description: 'Residential and commercial construction, renovations, extensions.',
                  typical: '$5M - $20M',
                  requirements: 'Most sites require $5M minimum; main contractors often need $10M+',
                },
                {
                  name: 'Plumbers',
                  description: 'Installation, maintenance, and emergency plumbing services.',
                  typical: '$2M - $5M',
                  requirements: 'Residential work: $2M-$5M. Commercial/new construction: $5M+',
                },
                {
                  name: 'Electricians',
                  description: 'Electrical installation, testing, repair, and maintenance.',
                  typical: '$2M - $5M',
                  requirements: 'Domestic: $2M. Commercial/industrial: $5M+. Some sites require $10M',
                },
                {
                  name: 'Painters & Decorators',
                  description: 'Interior and exterior painting, wallpapering, decorative finishes.',
                  typical: '$2M - $5M',
                  requirements: 'Standard coverage: $2M-$5M. High-rise/commercial: $5M+',
                },
                {
                  name: 'Landscapers & Grounds',
                  description: 'Garden design, landscaping, tree work, groundcare services.',
                  typical: '$2M - $10M',
                  requirements: 'Tree work and heavy equipment: often $5M-$10M',
                },
                {
                  name: 'HVAC & Refrigeration',
                  description: 'Heating, ventilation, air conditioning, refrigeration systems.',
                  typical: '$2M - $5M',
                  requirements: 'Commercial systems: $5M. High-rise/specialized: $10M+',
                },
              ].map((trade, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{trade.name}</h3>
                  <p className="text-slate-600 mb-4">{trade.description}</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700">Typical Coverage:</p>
                      <p className="text-slate-600">{trade.typical}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Site Requirements:</p>
                      <p className="text-slate-600">{trade.requirements}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Building Act & Site Safety */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              NZ Building & Safety Compliance
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Building Act 2004</h3>
                <p className="text-slate-600 mb-4">
                  The Building Act 2004 governs construction work in New Zealand. Key points for contractors:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Licensed Building Practitioners (LBP):</strong> Certain high-risk work requires licensed supervision. Insurance is a key risk management tool.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Code Compliance:</strong> All work must comply with the National Building Code. Insurance covers liability if non-compliance causes damage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Worksite Requirements:</strong> Main contractors typically mandate $5M+ coverage and require proof before site access.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Health and Safety at Work Act 2015 (HSWA)</h3>
                <p className="text-slate-600 mb-4">
                  The HSWA sets strict obligations for managing workplace hazards:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>
                      <strong>PCBU Duty:</strong> Person Conducting a Business or Undertaking (PCBU) must manage health and safety risks, including liability exposure.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Site-Specific Plans:</strong> Many sites require documented safety plans and proof of insurance before work begins.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Incident Investigation:</strong> If someone is injured, you may face investigation. Insurance covers legal representation and costs.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-300 p-6 rounded-lg">
                <p className="text-slate-900 font-semibold mb-2">Main Contractor Site Access Requirements:</p>
                <p className="text-slate-700">
                  Many NZ construction sites, particularly large residential and commercial projects, require subcontractors to hold minimum public liability coverage (often $5M or more) and provide proof via insurance certificates before access is granted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Comparison */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Trade Contractor Coverage Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300">
                    <th className="p-4 text-left font-bold text-slate-900">Coverage Type</th>
                    <th className="p-4 text-left font-bold text-slate-900">Standard</th>
                    <th className="p-4 text-left font-bold text-slate-900">Commercial/High-Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: 'Public Liability Limit',
                      standard: '$2M - $5M',
                      commercial: '$5M - $20M+',
                    },
                    {
                      type: 'Property Damage',
                      standard: 'Included',
                      commercial: 'Higher limits or separate policy',
                    },
                    {
                      type: 'Hired Equipment Damage',
                      standard: 'Usually excluded',
                      commercial: 'Can be added (higher premium)',
                    },
                    {
                      type: 'Employees\' Compensation Included',
                      standard: 'Check policy',
                      commercial: 'Usually separate requirement',
                    },
                    {
                      type: 'Site-Specific Cover',
                      standard: 'Can be arranged',
                      commercial: 'Standard requirement',
                    },
                    {
                      type: 'Defects Liability Extension',
                      standard: 'Optional add-on',
                      commercial: 'Often required by contracts',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">
                        {row.type}
                      </td>
                      <td className="p-4 text-slate-600 border-b border-slate-200">{row.standard}</td>
                      <td className="p-4 text-slate-600 border-b border-slate-200">{row.commercial}</td>
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
              Public Liability FAQ for Trade Contractors
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'What is the difference between public liability and employers liability?',
                  a: 'Public liability covers injury to members of the public or damage to their property. Employers liability covers injury to your employees. Most trades need both.',
                },
                {
                  q: 'Do I need $5M coverage if I\'m a small tradie working on residential homes?',
                  a: 'For smaller residential jobs, $2M-$5M is common. However, if you work on commercial sites or for main contractors, $5M+ is often mandatory. Check your contracts and client requirements.',
                },
                {
                  q: 'What if a claim exceeds my policy limit?',
                  a: 'You would be personally liable for amounts above your limit. This is why having adequate coverage is critical. Discuss appropriate limits with your broker.',
                },
                {
                  q: 'Does my policy cover defects found after completion?',
                  a: 'Basic public liability doesn\'t cover defects. You may need Defects Liability extension, particularly for commercial contracts requiring this.',
                },
                {
                  q: 'Can I get a certificate of currency quickly?',
                  a: 'Yes. Digital certificates are usually provided immediately after purchase. Most insurers email them within hours for online policies.',
                },
                {
                  q: 'What happens if I have a claim while uninsured?',
                  a: 'You would be personally liable for all costs. This could be financially devastating. Maintain continuous coverage, especially between jobs.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="group border border-slate-300 rounded-lg p-6 hover:bg-white transition-colors">
                  <summary className="cursor-pointer font-bold text-slate-900 flex justify-between items-center">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-orange-600 group-open:rotate-180 transition-transform">
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
                Get Your Trade Contractor Quote
              </h2>
              <p className="text-xl text-slate-600">
                Find competitive public liability insurance with coverage that meets NZ site requirements.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          heading="Get Site-Ready with the Right Coverage"
          subtext="Join thousands of NZ tradies who use us to find compliant, affordable public liability insurance."
        />
      </main>
    </>
  );
}

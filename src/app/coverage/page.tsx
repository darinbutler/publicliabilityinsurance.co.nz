import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Coverage Guide | Coverage Levels Explained | Public Liability Insurance',
  description: 'Complete guide to public liability insurance coverage levels ($1M-$20M) for NZ businesses. Understand what\'s covered, how premiums are calculated, and choose the right level for your business.',
  openGraph: {
    title: 'Public Liability Coverage Levels Guide',
    description: 'Learn about public liability coverage levels and how much cover your business needs.',
    type: 'article',
  },
};

export default function CoveragePage() {
  const coverageLevels = [
    {
      amount: '$1M',
      suitable: ['Small retail', 'Professional services', 'Low-risk office work'],
      premium: '$400-$800/year',
      description: 'Basic coverage for low-risk businesses with minimal public interaction.',
    },
    {
      amount: '$2M',
      suitable: ['Larger retail', 'Hospitality', 'Hairdressing', 'Beauty services'],
      premium: '$700-$1,500/year',
      description: 'Mid-range coverage suitable for customer-facing businesses with moderate risk.',
    },
    {
      amount: '$5M',
      suitable: ['Trade contractors', 'Builders', 'Plumbers', 'Schools', 'Event venues'],
      premium: '$1,500-$3,500/year',
      description: 'Comprehensive coverage for high-risk work. Industry standard for contractors.',
    },
    {
      amount: '$10M',
      suitable: ['Larger construction', 'Secondary schools', 'Large venues', 'Heavy plant operation'],
      premium: '$3,000-$5,500/year',
      description: 'Substantial protection for major projects and operations with significant risk exposure.',
    },
    {
      amount: '$20M',
      suitable: ['Complex projects', 'Large education institutions', 'Major venue operators'],
      premium: '$4,500-$7,000+/year',
      description: 'Maximum protection for extensive operations and high-value projects.',
    },
  ];

  const whatsCovered = [
    'Bodily injury to members of the public',
    'Property damage caused by your business',
    'Legal and court costs',
    'Medical expenses for injured parties',
    'Loss of earnings compensation',
    'Compensation for permanent disability',
  ];

  const notCovered = [
    'Injury to your own employees (covered by ACC)',
    'Professional errors (requires Professional Indemnity)',
    'Damage to your own property',
    'Intentional harm or criminal acts',
    'Contractual liability (unless endorsed)',
    'Asbestos-related claims',
  ];

  const premiumFactors = [
    {
      factor: 'Business Type & Industry',
      impact: 'Highest - High-risk industries pay significantly more',
      example: 'Trade work costs 2-3x more than office-based work',
    },
    {
      factor: 'Annual Turnover',
      impact: 'High - Larger revenue = higher exposure',
      example: 'Turnover over $5M may pay 1.5x more than under $1M',
    },
    {
      factor: 'Number of Employees',
      impact: 'Moderate - More employees = more potential claims',
      example: 'Each employee adds to overall risk profile',
    },
    {
      factor: 'Claims History',
      impact: 'Very High - Past claims significantly increase premiums',
      example: 'One major claim could increase next year\'s premium 20-50%',
    },
    {
      factor: 'Safety Measures',
      impact: 'Moderate - Good safety practices reduce premium',
      example: 'ISO 45001 certification can reduce premium 10-15%',
    },
    {
      factor: 'Coverage Limit',
      impact: 'High - Higher limits cost more but at lower per-dollar rate',
      example: '$5M might be only 50% more expensive than $1M',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Public Liability Coverage Guide
          </h1>
          <p className="text-xl text-blue-100">
            Understand coverage levels, what's included, and how to choose the right protection for your NZ business.
          </p>
        </div>
      </section>

      <main className="w-full">
        {/* Coverage Levels Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Coverage Levels Explained</h2>
          <p className="text-lg text-slate-600 mb-8">
            Choose the coverage level appropriate for your business size and industry risk profile.
          </p>

          <div className="grid gap-6">
            {coverageLevels.map((level) => (
              <div
                key={level.amount}
                className="border-2 border-slate-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{level.amount}</h3>
                    <p className="text-slate-600 mt-1">{level.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-sm text-slate-500">Typical Annual Cost</p>
                    <p className="text-xl font-semibold text-emerald-600">{level.premium}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Suitable for:</p>
                  <ul className="flex flex-wrap gap-2">
                    {level.suitable.map((category) => (
                      <li
                        key={category}
                        className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Coverage Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-slate-300 p-4 text-left font-semibold">Coverage Aspect</th>
                    <th className="border border-slate-300 p-4 text-left font-semibold">What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {whatsCovered.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-300 p-4 font-medium text-slate-900">✓ Covered</td>
                      <td className="border border-slate-300 p-4 text-slate-700">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Not Covered</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {notCovered.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Calculation */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">How Premiums Are Calculated</h2>
          <p className="text-lg text-slate-600 mb-8">
            Insurance premiums aren't arbitrary. They're calculated based on your specific risk profile.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {premiumFactors.map((item, idx) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.factor}</h3>
                <p className="text-slate-700 mb-2">
                  <span className="font-semibold">Impact:</span> {item.impact}
                </p>
                <p className="text-slate-600 text-sm">
                  <span className="font-semibold">Example:</span> {item.example}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-bold text-slate-900 mb-3">Premium Negotiation Tips</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• Get quotes from multiple insurers—prices vary significantly</li>
              <li>• Ask about discounts for good safety records or industry certifications</li>
              <li>• Consider bundling public liability with other business insurance</li>
              <li>• Increase your excess/deductible to lower your premium (if affordable)</li>
              <li>• Review your coverage annually—changing circumstances affect your needs</li>
            </ul>
          </div>
        </section>

        {/* NZ Regulatory Requirements */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">NZ-Specific Regulatory Requirements</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Health and Safety at Work Act 2015</h3>
                <p className="text-slate-700 mb-4">
                  The HSWA 2015 imposes strong duty of care obligations on all businesses. Key requirements:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Maintain safe premises and remove hazards</li>
                  <li>• Provide safe systems of work</li>
                  <li>• Ensure safe plant and equipment</li>
                  <li>• Provide necessary training and supervision</li>
                  <li>• Maintain health and safety standards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Insurance Council of NZ (ICNZ)</h3>
                <p className="text-slate-700 mb-4">
                  ICNZ regulates insurance companies and provides consumer protections:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Only use ICNZ-registered insurers</li>
                  <li>• Access to free dispute resolution</li>
                  <li>• Protection against insurer failure</li>
                  <li>• Professional conduct standards</li>
                  <li>• Consumer information requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Industry Specific Regulations</h3>
                <p className="text-slate-700 mb-4">
                  Certain industries have specific requirements:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Schools:</strong> High duty of care to minors</li>
                  <li>• <strong>Food:</strong> Food Safety regulations</li>
                  <li>• <strong>Construction:</strong> Health & Safety minimums</li>
                  <li>• <strong>Medical:</strong> Professional standards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">ACC and Public Liability</h3>
                <p className="text-slate-700 mb-4">
                  Important distinction in NZ's system:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• ACC covers your employee injuries</li>
                  <li>• Public Liability covers public/visitor injuries</li>
                  <li>• You need both for complete protection</li>
                  <li>• No duplication between the two</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Covered?</h2>
            <p className="text-lg text-slate-600">
              Get personalised quotes from multiple NZ insurers in minutes. Find the right coverage at the best price.
            </p>
          </div>
          <QuoteForm />
        </section>
      </main>

      <CTABanner
        heading="Protect Your Business Today"
        subtext="Compare public liability quotes from NZ's top insurers and get comprehensive coverage starting from just a few hundred dollars a year."
      />
    </>
  );
}

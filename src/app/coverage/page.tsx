import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Coverage Guide | Coverage Levels Explained | Cover4You',
  description: "Complete guide to public liability insurance coverage levels ($1M–$20M) for NZ businesses. Understand what's covered, how premiums are calculated, and choose the right level for your business.",
  openGraph: {
    title: 'Public Liability Coverage Levels Guide',
    description: 'Learn about public liability coverage levels and how much cover your business needs.',
    type: 'article',
  },
};

export default function CoveragePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[360px] flex items-end"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-800/25 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight mb-3">
            Public Liability Coverage Guide
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
            Understand coverage levels, what's included, and choose the right protection for your NZ business.
          </p>
        </div>
      </section>

      <main className="w-full">

        {/* ── TABLE 1: Coverage Level Comparison ── */}
        <section className="w-full bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Coverage Levels at a Glance</h2>
            <p className="text-slate-600 mb-8">Compare all five public liability cover levels side-by-side to find the right fit.</p>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-800 shadow-lg">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border-r border-slate-600 p-4 text-left font-semibold min-w-[160px]"></th>
                    {['$1M', '$2M', '$5M', '$10M', '$20M'].map((lvl, i) => (
                      <th key={lvl} className={`p-4 text-center font-bold text-base ${i < 4 ? 'border-r border-slate-600' : ''}`}>
                        {lvl}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: 'Annual Premium',
                      values: ['$400–$800', '$700–$1,500', '$1,500–$3,500', '$3,000–$5,500', '$4,500–$7,000+'],
                      highlight: true,
                    },
                    {
                      label: 'Risk Level',
                      values: ['Low', 'Low–Medium', 'Medium–High', 'High', 'Very High'],
                    },
                    {
                      label: 'Business Size',
                      values: ['1–5 staff', 'Up to 20 staff', 'Up to 50 staff', '50+ staff', 'Large institutions'],
                    },
                    {
                      label: 'Third Party Injury',
                      values: ['✓', '✓', '✓', '✓', '✓'],
                      checks: true,
                    },
                    {
                      label: 'Property Damage',
                      values: ['✓', '✓', '✓', '✓', '✓'],
                      checks: true,
                    },
                    {
                      label: 'Legal & Court Costs',
                      values: ['✓', '✓', '✓', '✓', '✓'],
                      checks: true,
                    },
                    {
                      label: 'Works Contracts',
                      values: ['Limited', 'Limited', '✓', '✓', '✓'],
                      mixed: true,
                    },
                    {
                      label: 'Best For',
                      values: [
                        'Consultants, low-risk offices',
                        'Cafes, salons, retail',
                        'Trades, schools, events',
                        'Large construction, venues',
                        'Major institutions, projects',
                      ],
                    },
                  ].map((row, ridx) => (
                    <tr key={ridx} className={ridx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border-t border-r border-slate-300 p-4 font-semibold text-slate-800">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className={`border-t border-slate-300 p-4 text-center ${i < 4 ? 'border-r' : ''} ${row.highlight ? 'font-bold text-emerald-700' : 'text-slate-700'}`}>
                          {row.checks ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold">✓</span>
                          ) : row.mixed ? (
                            val === '✓'
                              ? <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold">✓</span>
                              : <span className="text-xs text-slate-500 italic">{val}</span>
                          ) : val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── TABLE 2: Which cover suits your business? ── */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Which Cover Suits Your Business?</h2>
            <p className="text-slate-600 mb-8">Find your business type below to see the recommended cover level and typical cost range.</p>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-800 shadow-lg">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border-r border-slate-600 p-4 text-left font-semibold">Business Type</th>
                    <th className="border-r border-slate-600 p-4 text-center font-semibold">Recommended Cover</th>
                    <th className="border-r border-slate-600 p-4 text-center font-semibold">Typical Annual Premium</th>
                    <th className="p-4 text-left font-semibold">Key Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: '🏢 Consultant / IT Professional', cover: '$1M–$2M', premium: '$400–$1,200', reason: 'Low public interaction, office-based work' },
                    { type: '✂️ Hairdresser / Beauty Therapist', cover: '$2M', premium: '$700–$1,200', reason: 'Client-facing premises, product liability risk' },
                    { type: '🐕 Dog Walker / Pet Care', cover: '$1M–$2M', premium: '$500–$1,000', reason: 'Animal-related third party injury risk' },
                    { type: '☕ Café / Restaurant', cover: '$2M–$5M', premium: '$800–$2,500', reason: 'High foot traffic, slip and food injury risk' },
                    { type: '🏪 Retail Shop', cover: '$2M–$5M', premium: '$700–$2,000', reason: 'Customer premises, stock-related damage risk' },
                    { type: '📸 Photographer / Videographer', cover: '$2M', premium: '$600–$1,200', reason: 'Client premises, equipment liability' },
                    { type: '🏋️ Personal Trainer', cover: '$2M–$5M', premium: '$800–$2,000', reason: 'Physical activity, injury risk to clients' },
                    { type: '🔨 Builder / Trades Contractor', cover: '$5M–$10M', premium: '$1,500–$4,500', reason: 'Site access requirements, high injury risk' },
                    { type: '⚡ Electrician / Plumber', cover: '$5M', premium: '$1,200–$3,000', reason: 'Licensed trade minimum, property damage risk' },
                    { type: '🌿 Landscaper / Gardener', cover: '$2M–$5M', premium: '$900–$2,500', reason: 'On-client premises, equipment and injury risk' },
                    { type: '🎓 ECE / Primary School', cover: '$5M–$10M', premium: '$2,000–$5,000', reason: 'Duty of care to minors, high visit volume' },
                    { type: '🏫 Secondary School / Polytechnic', cover: '$10M–$20M', premium: '$3,500–$7,000', reason: 'High enrolment, excursions, sports programs' },
                    { type: '🎪 Event Venue / Market', cover: '$5M–$10M', premium: '$2,000–$5,500', reason: 'Large crowd exposure, licence requirements' },
                    { type: '🚗 Rideshare / Transport', cover: '$2M–$5M', premium: '$900–$2,500', reason: 'Passenger liability, third party risk' },
                    { type: '🏗️ Scaffolder / Roofer', cover: '$5M–$10M', premium: '$2,500–$6,000', reason: 'High-risk work at height, site requirements' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border-t border-r border-slate-300 p-4 font-medium text-slate-900">{row.type}</td>
                      <td className="border-t border-r border-slate-300 p-4 text-center font-bold text-emerald-700">{row.cover}</td>
                      <td className="border-t border-r border-slate-300 p-4 text-center text-slate-700">{row.premium}</td>
                      <td className="border-t border-slate-300 p-4 text-slate-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500 italic">Premiums are indicative estimates for standard business profiles. Actual costs depend on your turnover, claims history, and insurer underwriting.</p>
          </div>
        </section>

        {/* ── TABLE 3: Covered vs Not Covered ── */}
        <section className="w-full bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">What's Covered — and What's Not</h2>
            <p className="text-slate-600 mb-8">Public liability insurance is specific. Knowing the boundaries helps you buy the right combination of cover.</p>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-800 shadow-lg">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border-r border-slate-600 p-4 text-center font-semibold w-1/2">✅ Covered</th>
                    <th className="p-4 text-center font-semibold w-1/2">❌ Not Covered</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Bodily injury to members of the public', 'Injury to your own employees (covered by ACC)'],
                    ['Property damage caused by your business activities', 'Damage to your own property or equipment'],
                    ['Legal and court costs defending a claim', 'Professional errors or bad advice (needs PI cover)'],
                    ['Medical expenses for injured third parties', 'Intentional harm or criminal acts'],
                    ['Loss of earnings compensation paid to claimants', 'Contractual liability (unless specifically endorsed)'],
                    ['Compensation for permanent disability', 'Asbestos-related claims'],
                  ].map(([covered, notCovered], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border-t border-r border-slate-300 p-4">
                        <div className="flex items-start gap-2.5">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full font-bold flex-shrink-0 text-xs mt-0.5">✓</span>
                          <span className="text-slate-700">{covered}</span>
                        </div>
                      </td>
                      <td className="border-t border-slate-300 p-4">
                        <div className="flex items-start gap-2.5">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full font-bold flex-shrink-0 text-xs mt-0.5">✗</span>
                          <span className="text-slate-700">{notCovered}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-900 font-medium">💡 <strong>Tip:</strong> Many NZ businesses need public liability <em>and</em> professional indemnity insurance. Public liability covers physical harm and property damage; professional indemnity covers financial losses from your advice or services. <Link href="/compare" className="text-emerald-700 hover:underline font-semibold">Compare both types →</Link></p>
            </div>
          </div>
        </section>

        {/* ── TABLE 4: Premium Factors ── */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">How Premiums Are Calculated</h2>
            <p className="text-slate-600 mb-8">Insurers assess your specific risk profile. These six factors have the biggest impact on your quote.</p>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-800 shadow-lg">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border-r border-slate-600 p-4 text-left font-semibold">Factor</th>
                    <th className="border-r border-slate-600 p-4 text-center font-semibold">Impact</th>
                    <th className="p-4 text-left font-semibold">What It Means for Your Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: 'Business Type & Industry', impact: '🔴 Very High', detail: 'Trades pay 2–3× more than office-based work. Highest-risk industries (scaffolding, demolition) pay the most.' },
                    { factor: 'Annual Turnover', impact: '🟠 High', detail: 'Higher revenue = larger exposure. Turnover over $5M can mean 1.5× the premium vs under $1M.' },
                    { factor: 'Claims History', impact: '🔴 Very High', detail: 'One major claim can increase your next renewal by 20–50%. A clean record earns loyalty discounts.' },
                    { factor: 'Number of Employees', impact: '🟡 Moderate', detail: 'More staff = more potential incidents. Each employee adds marginally to the overall risk profile.' },
                    { factor: 'Coverage Limit Selected', impact: '🟠 High', detail: '$5M costs roughly 50% more than $1M — but protects far more. Higher limits offer better per-dollar value.' },
                    { factor: 'Safety Practices', impact: '🟡 Moderate', detail: 'ISO 45001 certification, safe work plans, and documented procedures can reduce premiums by 10–15%.' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border-t border-r border-slate-300 p-4 font-semibold text-slate-900">{row.factor}</td>
                      <td className="border-t border-r border-slate-300 p-4 text-center text-sm font-medium">{row.impact}</td>
                      <td className="border-t border-slate-300 p-4 text-slate-700">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h4 className="font-bold text-slate-900 mb-3">Tips to Reduce Your Premium</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold mt-0.5">✓</span> Compare quotes from multiple insurers — prices vary 30–50%</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold mt-0.5">✓</span> Ask about discounts for good safety records or certifications</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold mt-0.5">✓</span> Bundle public liability with other business insurance</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold mt-0.5">✓</span> Increase your excess if you can absorb smaller claims</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold mt-0.5">✓</span> Review annually — your risk profile changes as you grow</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold mt-0.5">✓</span> Document your H&S practices before applying</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NZ Regulatory Context */}
        <section className="w-full bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">NZ Regulatory Context</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Health and Safety at Work Act 2015',
                  points: [
                    'Strong duty of care obligations on all businesses',
                    'Maintain safe premises and remove hazards',
                    'Provide safe systems of work and equipment',
                    'Required training and supervision of workers',
                    'Non-compliance can result in prosecution',
                  ],
                },
                {
                  title: 'Insurance Council of NZ (ICNZ)',
                  points: [
                    'Only use ICNZ-registered insurers for protection',
                    'Access to free dispute resolution via IFSO',
                    'Protection under ICNZ Fair Insurance Code',
                    'Professional conduct and disclosure standards',
                    'Consumer information requirements enforced',
                  ],
                },
                {
                  title: 'Industry-Specific Requirements',
                  points: [
                    'Schools: High duty of care to minors by law',
                    'Food businesses: Food Safety Act compliance',
                    'Construction: H&S Act minimum requirements',
                    'Event organisers: Liquor licensing conditions',
                    'Medical/therapy: Professional body standards',
                  ],
                },
                {
                  title: 'ACC vs Public Liability',
                  points: [
                    'ACC covers injuries to your own employees',
                    'Public liability covers public and visitor injuries',
                    'Both are needed for complete protection',
                    'No duplication — they cover different parties',
                    'ACC levies are mandatory; PL insurance is not (but often required)',
                  ],
                },
              ].map((block, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote-form" className="max-w-6xl mx-auto px-4 py-16">
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

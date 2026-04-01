import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Coverage Guide | Coverage Levels Explained | Public Liability Insurance',
  description:
    "Complete guide to public liability insurance coverage levels ($1M-$20M) for NZ businesses. Understand what's covered, how premiums are calculated, and choose the right level for your business.",
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
      tag: 'Starter',
      colour: 'emerald',
      suitable: ['Small retail shops', 'Professional services', 'Low-risk office work', 'Freelancers & consultants'],
      premium: '$400 – $800',
      description: 'Basic coverage for low-risk businesses with minimal public interaction. Ideal for sole traders, home-based businesses, and low-foot-traffic retail.',
      typical: 'Bookkeeper, graphic designer, small gift shop',
    },
    {
      amount: '$2M',
      tag: 'Popular',
      colour: 'sky',
      suitable: ['Larger retail & hospitality', 'Hairdressing & beauty', 'Cafes & restaurants', 'Personal trainers'],
      premium: '$700 – $1,500',
      description: 'Mid-range coverage suitable for customer-facing businesses with moderate risk. Often the minimum required by landlords and councils for commercial leases.',
      typical: 'Suburban cafe, hair salon, yoga studio',
    },
    {
      amount: '$5M',
      tag: 'Industry Standard',
      colour: 'blue',
      suitable: ['Trade contractors & builders', 'Plumbers & electricians', 'Schools & ECE centres', 'Event venues & markets'],
      premium: '$1,500 – $3,500',
      description: 'Comprehensive coverage and the most common level for contractors and trades. Required by most principal contractors and councils for site access.',
      typical: 'Residential builder, plumber, primary school',
      recommended: true,
    },
    {
      amount: '$10M',
      tag: 'Enhanced',
      colour: 'indigo',
      suitable: ['Larger construction firms', 'Secondary schools', 'Large venues & stadiums', 'Heavy plant operators'],
      premium: '$3,000 – $5,500',
      description: 'Substantial protection for major projects and operations. Often required for government contracts, large commercial builds, and high-capacity public venues.',
      typical: 'Commercial builder, festival organiser, large school',
    },
    {
      amount: '$20M',
      tag: 'Maximum',
      colour: 'violet',
      suitable: ['Complex infrastructure', 'Large education institutions', 'Major venue operators', 'High-rise construction'],
      premium: '$4,500 – $7,000+',
      description: 'Maximum protection for extensive operations and high-value projects. Typically required for infrastructure, multi-storey builds, and large-scale public events.',
      typical: 'Infrastructure contractor, university, convention centre',
    },
  ];

  const coverageDetail = [
    {
      category: 'Bodily Injury',
      covered: true,
      description: 'Covers compensation for physical injury caused to members of the public, customers, or visitors on your premises or by your business activities.',
      examples: 'Customer slips in your shop, visitor trips on equipment at a worksite, patron injured at your venue.',
      limit: 'Up to your policy limit per occurrence',
    },
    {
      category: 'Property Damage',
      covered: true,
      description: 'Covers damage to third-party property caused by your business operations, employees, or subcontractors acting on your behalf.',
      examples: 'Plumber floods a customer\'s home, tradesperson damages a client\'s driveway, equipment damages a neighbouring property.',
      limit: 'Up to your policy limit per occurrence',
    },
    {
      category: 'Legal Defence Costs',
      covered: true,
      description: 'Covers solicitor fees, court costs, and expert witness fees if you are sued — whether or not the claim is found in your favour.',
      examples: 'Defence against a negligence claim, mediation costs, court filing fees and legal representation.',
      limit: 'Typically in addition to your policy limit',
    },
    {
      category: 'Medical Expenses',
      covered: true,
      description: 'Covers immediate medical treatment costs for an injured party, often paid regardless of fault to demonstrate good faith.',
      examples: 'Ambulance call-out, emergency room visit, follow-up physiotherapy for an injured customer.',
      limit: 'Typically $5,000 – $25,000 sub-limit',
    },
    {
      category: 'Loss of Earnings',
      covered: true,
      description: 'Compensates injured third parties for income lost while they recover from injuries your business caused.',
      examples: 'Self-employed tradesperson unable to work after being injured at your site.',
      limit: 'Included within your policy limit',
    },
    {
      category: 'Statutory Liability',
      covered: true,
      description: 'Covers fines, penalties, and defence costs imposed under NZ legislation such as the Health and Safety at Work Act 2015.',
      examples: 'WorkSafe prosecution for a safety breach, council enforcement action, environmental breach penalty.',
      limit: 'Varies — typically $500K – $2M sub-limit',
    },
    {
      category: 'Advertising Injury',
      covered: true,
      description: 'Covers claims arising from defamation, invasion of privacy, or copyright infringement in your advertising materials.',
      examples: 'Competitor sues over misleading advertising claim, accidental use of copyrighted imagery.',
      limit: 'Included within your policy limit',
    },
    {
      category: 'Products Liability',
      covered: true,
      description: 'Covers injury or damage caused by products you manufacture, sell, supply, or distribute after they leave your possession.',
      examples: 'Customer injured by a faulty product you sold, food poisoning from items you prepared.',
      limit: 'Up to your policy limit (may have sub-limit)',
    },
  ];

  const notCovered = [
    {
      item: 'Employee Injuries',
      detail: 'Covered by ACC in New Zealand. You need Employers\' Liability or ACC top-up cover separately.',
    },
    {
      item: 'Professional Errors & Advice',
      detail: 'Requires separate Professional Indemnity (PI) insurance for negligent advice or services.',
    },
    {
      item: 'Your Own Property',
      detail: 'Damage to your own equipment, tools, or premises requires separate Material Damage cover.',
    },
    {
      item: 'Intentional Harm or Criminal Acts',
      detail: 'Deliberate damage, fraud, or criminal conduct by you or your employees is always excluded.',
    },
    {
      item: 'Contractual Liability',
      detail: 'Liability you assumed under a contract beyond what common law requires — unless specifically endorsed.',
    },
    {
      item: 'Asbestos & Pollution',
      detail: 'Asbestos-related claims and gradual pollution are typically excluded. Sudden pollution may be covered.',
    },
    {
      item: 'Motor Vehicle Liability',
      detail: 'Injury or damage arising from motor vehicle use is covered by compulsory motor insurance, not public liability.',
    },
    {
      item: 'Cyber & Data Breach',
      detail: 'Data breach costs, cyber extortion, and digital liability require separate Cyber Insurance.',
    },
  ];

  const premiumFactors = [
    {
      factor: 'Business Type & Industry',
      impact: 'Highest',
      impactColour: 'bg-red-100 text-red-700',
      description: 'High-risk industries (construction, events) pay significantly more than low-risk (office, consulting).',
      example: 'A builder may pay 2–3x more than an accountant for the same cover limit.',
    },
    {
      factor: 'Claims History',
      impact: 'Very High',
      impactColour: 'bg-red-100 text-red-700',
      description: 'Past claims are the strongest predictor of future risk. Even one claim can significantly increase your renewal premium.',
      example: 'A single major claim could increase next year\'s premium by 20–50%.',
    },
    {
      factor: 'Annual Turnover',
      impact: 'High',
      impactColour: 'bg-orange-100 text-orange-700',
      description: 'Higher revenue signals more customers, more transactions, and more potential exposure to claims.',
      example: 'Turnover over $5M may pay 1.5x more than under $1M for identical cover.',
    },
    {
      factor: 'Coverage Limit Chosen',
      impact: 'High',
      impactColour: 'bg-orange-100 text-orange-700',
      description: 'Higher limits cost more, but the per-dollar rate decreases. Doubling your cover rarely doubles your premium.',
      example: '$5M cover might be only 40–60% more expensive than $1M.',
    },
    {
      factor: 'Number of Employees',
      impact: 'Moderate',
      impactColour: 'bg-yellow-100 text-yellow-700',
      description: 'More staff increases the chance of an incident. Sub-contractors may also affect your risk profile.',
      example: 'Each additional employee adds incrementally to your overall risk rating.',
    },
    {
      factor: 'Safety Measures & Certifications',
      impact: 'Moderate',
      impactColour: 'bg-emerald-100 text-emerald-700',
      description: 'Demonstrating strong safety culture through certifications, procedures, and training can earn premium discounts.',
      example: 'ISO 45001 or SiteSafe certification can reduce your premium by 10–15%.',
    },
  ];

  return (
    <>
      {/* Hero Section — full-width background image */}
      <section className="relative w-full min-h-[50vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=900&fit=crop&q=80"
          alt="Modern open-plan office with people working"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 px-4 py-20 md:py-28">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Coverage Guide
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
            Understanding Public Liability Coverage
          </h1>
          <p className="text-xl text-slate-200 mb-6 leading-relaxed max-w-2xl">
            Choosing the right level of cover is one of the most important insurance decisions your
            business will make. Too little leaves you exposed; too much wastes money. This guide
            breaks down every coverage tier, what&apos;s included, what&apos;s excluded, and how
            premiums are calculated — so you can choose with confidence.
          </p>
          <p className="text-slate-300 mb-8 max-w-2xl">
            From sole traders needing $1M of basic protection to large contractors requiring $20M
            for infrastructure projects, we explain exactly what each level provides and who
            it&apos;s designed for.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#coverage-levels"
              className="px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-lg hover:bg-emerald-600 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              View Coverage Tiers
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
        {/* Coverage Levels — tiered cards */}
        <section id="coverage-levels" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Coverage Levels Explained
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the level appropriate for your business size, industry, and risk profile. Most NZ
              businesses opt for $2M–$5M of cover.
            </p>
          </div>

          {/* Desktop 5-column tier layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4 items-start">
            {coverageLevels.map((level) => (
              <div
                key={level.amount}
                className={`relative rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                  level.recommended
                    ? 'border-emerald-400 bg-emerald-50/50 shadow-lg shadow-emerald-500/10'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {level.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Tag */}
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {level.tag}
                </p>

                {/* Amount */}
                <h3 className="text-3xl font-black text-slate-900 mb-1">{level.amount}</h3>

                {/* Premium */}
                <p className="text-lg font-bold text-emerald-600 mb-1">{level.premium}</p>
                <p className="text-xs text-slate-400 mb-4">per year</p>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-grow">
                  {level.description}
                </p>

                {/* Suitable For */}
                <div className="border-t border-slate-100 pt-4 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Suitable For
                  </p>
                  <ul className="space-y-1.5">
                    {level.suitable.map((cat) => (
                      <li key={cat} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Typical */}
                <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">e.g.</span> {level.typical}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="lg:hidden space-y-6">
            {coverageLevels.map((level) => (
              <div
                key={level.amount}
                className={`relative rounded-2xl border-2 p-6 ${
                  level.recommended
                    ? 'border-emerald-400 bg-emerald-50/50 shadow-lg'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {level.recommended && (
                  <div className="absolute -top-3 left-6 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {level.tag}
                    </p>
                    <h3 className="text-3xl font-black text-slate-900">{level.amount}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600">{level.premium}</p>
                    <p className="text-xs text-slate-400">per year</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{level.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {level.suitable.map((cat) => (
                    <span
                      key={cat}
                      className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">e.g.</span> {level.typical}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Coverage Comparison */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What&apos;s Covered in Detail
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A standard public liability policy in New Zealand covers the following categories.
                Exact wording varies by insurer, so always read your policy schedule.
              </p>
            </div>

            {/* Coverage detail table — desktop */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                    <th className="p-4 text-left font-semibold text-sm w-48">Coverage Type</th>
                    <th className="p-4 text-left font-semibold text-sm">Description</th>
                    <th className="p-4 text-left font-semibold text-sm w-72">Real-World Examples</th>
                    <th className="p-4 text-left font-semibold text-sm w-52">Typical Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {coverageDetail.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-emerald-50/40 transition-colors`}
                    >
                      <td className="p-4 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full font-bold text-xs flex-shrink-0">
                            ✓
                          </span>
                          <span className="font-semibold text-slate-900 text-sm">{row.category}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-slate-700 border-b border-slate-100 leading-relaxed">
                        {row.description}
                      </td>
                      <td className="p-4 text-sm text-slate-600 border-b border-slate-100 italic leading-relaxed">
                        {row.examples}
                      </td>
                      <td className="p-4 text-sm text-slate-700 border-b border-slate-100 font-medium">
                        {row.limit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coverage detail — mobile cards */}
            <div className="md:hidden space-y-4">
              {coverageDetail.map((row, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm flex-shrink-0">
                      ✓
                    </span>
                    <h3 className="font-bold text-slate-900">{row.category}</h3>
                  </div>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">{row.description}</p>
                  <div className="bg-slate-50 rounded-lg p-3 mb-3">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Examples</p>
                    <p className="text-sm text-slate-600 italic">{row.examples}</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Limit:</span> {row.limit}
                  </p>
                </div>
              ))}
            </div>

            {/* Not Covered */}
            <div className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  What&apos;s Not Covered
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Understanding exclusions is just as important as knowing what&apos;s included. These
                  items require separate insurance products.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {notCovered.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-5 hover:border-red-200 transition-colors"
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 text-red-600 rounded-full font-bold text-sm flex-shrink-0 mt-0.5">
                      ✗
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{item.item}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Premiums Are Calculated */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Premiums Are Calculated
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insurance premiums aren&apos;t arbitrary. They&apos;re calculated based on your specific
              risk profile. Here are the six key factors.
            </p>
          </div>

          {/* Factors table — desktop */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <th className="p-4 text-left font-semibold text-sm w-56">Factor</th>
                  <th className="p-4 text-center font-semibold text-sm w-32">Impact</th>
                  <th className="p-4 text-left font-semibold text-sm">How It Affects Your Premium</th>
                  <th className="p-4 text-left font-semibold text-sm w-72">Example</th>
                </tr>
              </thead>
              <tbody>
                {premiumFactors.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-emerald-50/40 transition-colors`}
                  >
                    <td className="p-4 font-semibold text-slate-900 text-sm border-b border-slate-100">
                      {item.factor}
                    </td>
                    <td className="p-4 text-center border-b border-slate-100">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${item.impactColour}`}>
                        {item.impact}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-700 border-b border-slate-100 leading-relaxed">
                      {item.description}
                    </td>
                    <td className="p-4 text-sm text-slate-600 italic border-b border-slate-100 leading-relaxed">
                      {item.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Factors — mobile cards */}
          <div className="md:hidden space-y-4">
            {premiumFactors.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{item.factor}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ml-3 ${item.impactColour}`}>
                    {item.impact}
                  </span>
                </div>
                <p className="text-sm text-slate-700 mb-2 leading-relaxed">{item.description}</p>
                <p className="text-sm text-slate-500 italic">{item.example}</p>
              </div>
            ))}
          </div>

          {/* Premium tips */}
          <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Premium Negotiation Tips</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold flex-shrink-0">1</span>
                <p>Get quotes from multiple insurers — prices can vary 30–50% for identical cover.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold flex-shrink-0">2</span>
                <p>Ask about discounts for safety certifications (SiteSafe, ISO 45001, Toitu).</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold flex-shrink-0">3</span>
                <p>Bundle public liability with other policies (material damage, business interruption) for multi-policy discounts.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold flex-shrink-0">4</span>
                <p>Increase your excess to lower your premium — but only if you can afford the out-of-pocket cost.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold flex-shrink-0">5</span>
                <p>Review annually — your circumstances change, and so should your cover.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NZ Regulatory Requirements */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                NZ Regulatory Context
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Key legislation and regulatory frameworks that affect your public liability obligations in New Zealand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Health &amp; Safety at Work Act 2015</h3>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  The HSWA 2015 imposes strong duty-of-care obligations on all businesses operating in New Zealand.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-blue-600 flex-shrink-0">•</span> Maintain safe premises and remove hazards</li>
                  <li className="flex gap-2"><span className="text-blue-600 flex-shrink-0">•</span> Provide safe systems of work</li>
                  <li className="flex gap-2"><span className="text-blue-600 flex-shrink-0">•</span> Ensure safe plant and equipment</li>
                  <li className="flex gap-2"><span className="text-blue-600 flex-shrink-0">•</span> Provide necessary training and supervision</li>
                  <li className="flex gap-2"><span className="text-blue-600 flex-shrink-0">•</span> Penalties up to $3M for serious breaches</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Insurance Council of NZ (ICNZ)</h3>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  ICNZ regulates insurance companies and provides important consumer protections.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-emerald-600 flex-shrink-0">•</span> Only use ICNZ-registered insurers</li>
                  <li className="flex gap-2"><span className="text-emerald-600 flex-shrink-0">•</span> Access to free dispute resolution (IFSO)</li>
                  <li className="flex gap-2"><span className="text-emerald-600 flex-shrink-0">•</span> Protection against insurer failure</li>
                  <li className="flex gap-2"><span className="text-emerald-600 flex-shrink-0">•</span> Professional conduct standards</li>
                  <li className="flex gap-2"><span className="text-emerald-600 flex-shrink-0">•</span> Fair claims handling code of practice</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Industry-Specific Requirements</h3>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  Certain industries have additional regulatory obligations that affect your cover needs.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-indigo-600 flex-shrink-0">•</span> <strong>Schools:</strong> High duty of care to minors, MoE requirements</li>
                  <li className="flex gap-2"><span className="text-indigo-600 flex-shrink-0">•</span> <strong>Food &amp; Beverage:</strong> Food Act 2014 compliance</li>
                  <li className="flex gap-2"><span className="text-indigo-600 flex-shrink-0">•</span> <strong>Construction:</strong> WorkSafe site requirements</li>
                  <li className="flex gap-2"><span className="text-indigo-600 flex-shrink-0">•</span> <strong>Events:</strong> Council permits require minimum cover</li>
                  <li className="flex gap-2"><span className="text-indigo-600 flex-shrink-0">•</span> <strong>Medical:</strong> Health Practitioners Competence Assurance Act</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">ACC &amp; Public Liability</h3>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  An important distinction unique to New Zealand&apos;s no-fault accident compensation system.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-sky-600 flex-shrink-0">•</span> ACC covers your employee injuries at work</li>
                  <li className="flex gap-2"><span className="text-sky-600 flex-shrink-0">•</span> Public Liability covers public, visitor, and customer injuries</li>
                  <li className="flex gap-2"><span className="text-sky-600 flex-shrink-0">•</span> You need both for complete protection</li>
                  <li className="flex gap-2"><span className="text-sky-600 flex-shrink-0">•</span> No duplication — they cover different groups</li>
                  <li className="flex gap-2"><span className="text-sky-600 flex-shrink-0">•</span> ACC does not cover property damage claims</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Get Covered?
            </h2>
            <p className="text-lg text-slate-600">
              Get personalised quotes from multiple NZ insurers in minutes. Find the right coverage
              at the best price.
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

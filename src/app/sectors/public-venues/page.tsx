import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance for Events & Venues | NZ Concerts, Sports, Markets',
  description:
    'Essential public liability insurance for concert venues, sports grounds, community halls, markets, and adventure recreation providers in NZ. Event-specific coverage.',
  openGraph: {
    title: 'Public Liability Insurance for Events & Venues',
    description:
      'Comprehensive coverage for public gatherings and event venues. HSW Act compliance and alcohol licensing support.',
  },
};

export default function PublicVenuesPage() {
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
                name: 'Public Venues & Events',
                item: 'https://publicliability.co.nz/sectors/public-venues',
              },
            ],
          }),
        }}
      />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-cyan-600 to-blue-600 px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Public Liability Insurance for Events & Venues
                </h1>
                <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                  Concert venues, sports grounds, community halls, markets, and adventure recreation need comprehensive coverage. Protect your venue from visitor injuries and property damage claims.
                </p>
                <Link
                  href="#quote-form"
                  className="inline-block px-8 py-4 bg-white text-cyan-600 font-bold text-lg rounded-lg hover:bg-cyan-50 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=675&fit=crop&q=80"
                  alt="Public venue and event liability insurance coverage"
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Venue Types */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Venue & Event Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Concert Venues & Nightclubs',
                  description: 'Music venues, concert halls, nightclubs, and entertainment bars hosting live events.',
                  risks: ['Crowd-related injuries', 'Stage incident liability', 'Alcohol-related incidents', 'Sound/equipment hazards'],
                  coverage: '$10M - $20M+',
                },
                {
                  name: 'Sports Grounds & Clubs',
                  description: 'Sports fields, rugby clubs, tennis clubs, bowling clubs, and sports facilities.',
                  risks: ['Spectator injuries', 'Facility hazards', 'Sports-related incidents', 'Maintenance liability'],
                  coverage: '$5M - $20M',
                },
                {
                  name: 'Community Halls & Meeting Spaces',
                  description: 'Village halls, community centres, marae facilities, and multi-purpose event spaces.',
                  risks: ['Slip and fall claims', 'Facility maintenance issues', 'Event-related incidents', 'Temporary facility hazards'],
                  coverage: '$2M - $10M',
                },
                {
                  name: 'Markets & Outdoor Events',
                  description: 'Farmers markets, art markets, Christmas markets, outdoor festivals, and temporary events.',
                  risks: ['Weather-related incidents', 'Temporary structure collapse', 'Vendor/public interaction', 'Stall-related hazards'],
                  coverage: '$5M - $10M',
                },
                {
                  name: 'Adventure Recreation',
                  description: 'Adventure parks, zipline courses, climbing walls, bungy jumping, and extreme sports facilities.',
                  risks: ['High-risk activity claims', 'Equipment failure', 'Operator error', 'Visitor non-compliance'],
                  coverage: '$10M - $20M+',
                },
                {
                  name: 'Catering & Function Venues',
                  description: 'Hotels, restaurants, wedding venues, function centers hosting events.',
                  risks: ['Slip and fall', 'Food service incidents', 'Alcohol liability', 'Event-related claims'],
                  coverage: '$5M - $10M',
                },
              ].map((venue, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{venue.name}</h3>
                  <p className="text-slate-600 mb-4">{venue.description}</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700">Key Risks:</p>
                      <ul className="text-slate-600 mt-1 space-y-1">
                        {venue.risks.map((risk, ridx) => (
                          <li key={ridx} className="flex items-center gap-2">
                            <span className="text-cyan-600">•</span> {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Typical Coverage:</p>
                      <p className="text-slate-600">{venue.coverage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Health & Safety & Alcohol Licensing */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              HSW Act 2015 & Alcohol Licensing Compliance
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border-l-4 border-cyan-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Health & Safety at Work Act 2015 Obligations
                </h3>
                <p className="text-slate-600 mb-4">
                  Every venue operator must manage health and safety risks under the HSWA 2015:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 font-bold mt-1">•</span>
                    <span>
                      <strong>PCBU Duty:</strong> As a Person Conducting a Business or Undertaking, you must identify hazards and implement controls.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Worker & Visitor Safety:</strong> You're responsible for the safety of employees, contractors, and visitors—including event attendees.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Documentation:</strong> Safety plans, risk assessments, incident reports, and corrective actions must be documented.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Enforcement:</strong> WorkSafe NZ can prosecute serious breaches. Penalties include fines up to $3M and imprisonment.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Alcohol Licensing Act 2012</h3>
                <p className="text-slate-600 mb-4">
                  If your venue serves alcohol, additional obligations and liabilities apply:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Duty of Care to Public:</strong> Venues must ensure alcohol service doesn't cause harm to patrons or the public.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Intoxication-Related Claims:</strong> Injuries caused by intoxicated patrons (e.g., assaults, property damage) may trigger liability claims.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Third-Party Liability:</strong> If an intoxicated patron injures someone outside your venue, you may be held liable if you served them alcohol negligently.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Notification:</strong> Some insurers need to know about alcohol service. Check your policy and advise your broker.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 border border-cyan-300 p-6 rounded-lg">
                <p className="text-slate-900 font-semibold mb-2">Public Liability for Events:</p>
                <p className="text-slate-700">
                  For one-off or large public events, event-specific liability insurance or an event add-on may be required. Insurers often want details about expected attendance, activities, and crowd management plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Scenarios */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Real Venue Liability Scenarios</h2>

            <div className="space-y-6">
              {[
                {
                  scenario: 'Concert Crowd Crush Incident',
                  details:
                    'During a popular concert, inadequate crowd management leads to a crush. Multiple attendees are injured and sue for $500,000+.',
                  coverage: 'Comprehensive venue liability insurance covers crowd management incidents when the venue exercised reasonable care.',
                },
                {
                  scenario: 'Sports Field Spectator Injury',
                  details:
                    'A spectator is struck by a cricket ball from the field. They claim inadequate protective measures at the boundary.',
                  coverage: 'Venue liability covers spectator injuries caused by inherent risks or venue negligence (e.g., poor maintenance).',
                },
                {
                  scenario: 'Alcohol-Related Incident at Function',
                  details:
                    'An intoxicated guest at a wedding reception falls and injures themselves. They claim the venue over-served alcohol.',
                  coverage: 'Alcohol liability extension covers incidents caused by alcohol service—essential for venues serving drinks.',
                },
                {
                  scenario: 'Market Stall Collapse',
                  details:
                    'A temporary market stall collapses in wind, injuring a vendor and nearby visitors. Claims exceed $200,000.',
                  coverage: 'Event liability covers temporary structure incidents if the venue maintained adequate safety standards.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-lg border-l-4 border-cyan-600">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.scenario}</h3>
                  <p className="text-slate-600 mb-4">{item.details}</p>
                  <div className="bg-white p-4 rounded border-l-2 border-cyan-300">
                    <p className="text-sm font-semibold text-slate-700">How Insurance Helps:</p>
                    <p className="text-slate-700 mt-2">{item.coverage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Comparison */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Venue & Event Coverage Breakdown</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300">
                    <th className="p-4 text-left font-bold text-slate-900">Coverage Type</th>
                    <th className="p-4 text-left font-bold text-slate-900">Base Policy</th>
                    <th className="p-4 text-left font-bold text-slate-900">Optional Add-Ons</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: 'Visitor/Spectator Injuries',
                      base: 'Yes',
                      addons: 'Higher limits available',
                    },
                    {
                      type: 'Alcohol Liability',
                      base: 'Check policy',
                      addons: 'Yes - often required',
                    },
                    {
                      type: 'Temporary Structure Coverage',
                      base: 'Usually limited',
                      addons: 'Yes - for marquees, stalls, stages',
                    },
                    {
                      type: 'Event Cancellation',
                      base: 'No',
                      addons: 'Yes - available separately',
                    },
                    {
                      type: 'Management Liability',
                      base: 'Limited',
                      addons: 'Yes - employment practices, regulatory',
                    },
                    {
                      type: 'Cyber Liability',
                      base: 'No',
                      addons: 'Yes - for ticketing systems',
                    },
                    {
                      type: 'Equipment/Property Coverage',
                      base: 'Limited',
                      addons: 'Yes - venue-owned equipment protection',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
                      <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">
                        {row.type}
                      </td>
                      <td className="p-4 text-slate-600 border-b border-slate-200">{row.base}</td>
                      <td className="p-4 text-slate-600 border-b border-slate-200">{row.addons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Public Liability FAQ for Venues & Events
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'What if an event is held only occasionally at my venue?',
                  a: 'Your public liability should cover occasional events as long as they\'re disclosed to your insurer. One-off large events may need separate event insurance or an endorsement.',
                },
                {
                  q: 'Do I need additional coverage if I hire a caterer or event company?',
                  a: 'Yes. You should ensure hired services (caterers, entertainment, security) carry their own liability insurance and list you as an interested party.',
                },
                {
                  q: 'What\'s covered if someone is injured by a third party at my venue?',
                  a: 'If the injury was caused by another attendee (e.g., assault), your liability depends on whether you negligently failed to manage safety. Adequate security and lighting help demonstrate duty of care.',
                },
                {
                  q: 'How much alcohol liability coverage do I need?',
                  a: 'This depends on your venue size, event frequency, and local risk. Discuss with your insurer—typical venues might have $5M-$10M alcohol liability included or available as add-on.',
                },
                {
                  q: 'Are outdoor markets covered under standard venue insurance?',
                  a: 'Outdoor events may have different risk profiles. Advise your insurer of outdoor activities—temporary structures and weather-related hazards may need specific coverage.',
                },
                {
                  q: 'What should I do if there\'s an incident at my venue?',
                  a: 'Immediately document the incident with photos, collect witness details, notify your insurer, and preserve evidence. Do not admit liability or apologize in a way that could be construed as admitting fault.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="group border border-slate-300 rounded-lg p-6 hover:bg-slate-50 transition-colors">
                  <summary className="cursor-pointer font-bold text-slate-900 flex justify-between items-center">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-cyan-600 group-open:rotate-180 transition-transform">
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
        <section id="quote-form" className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Get Your Venue & Event Quote
              </h2>
              <p className="text-xl text-slate-600">
                Comprehensive coverage for public gatherings, concerts, sports, and community events.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          heading="Protect Your Venue from Liability"
          subtext="Join hundreds of NZ venues and event organizers who trust us for comprehensive public liability coverage."
        />
      </main>
    </>
  );
}

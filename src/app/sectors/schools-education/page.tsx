import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Public Liability Insurance for Schools & Education | NZ ECE, Primary, Secondary',
  description:
    'Essential public liability insurance for NZ schools, early childhood, tertiary providers, and after-school programs. Duty of care coverage. Compare quotes today.',
  openGraph: {
    title: 'Public Liability Insurance for Schools & Education',
    description:
      'Comprehensive coverage for educational institutions. Duty of care and student safety protection.',
  },
};

export default function SchoolsEducationPage() {
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
                name: 'Schools & Education',
                item: 'https://publicliability.co.nz/sectors/schools-education',
              },
            ],
          }),
        }}
      />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-purple-600 to-indigo-600 px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Public Liability Insurance for Schools & Education Providers
                </h1>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  From early childhood centres to tertiary institutions, educational providers need comprehensive coverage that reflects their duty of care to students and visitors.
                </p>
                <Link
                  href="#quote-form"
                  className="inline-block px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/images/sector-school.jpg"
                  alt="Schools and education public liability insurance coverage"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Sectors */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Education Sector Coverage</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Early Childhood Education (ECE)',
                  description: 'Kindergartens, playcentres, Montessori, home-based childcare, and daycare services.',
                  coverage: '$5M - $10M',
                  focus: 'High supervision duty, pastoral care liability, developmental activities',
                },
                {
                  name: 'Primary Schools',
                  description: 'Years 0-6 education, including school trips, sports, and on-site programs.',
                  coverage: '$10M - $20M',
                  focus: 'Duty of care in duty hours, school sports, excursions, visiting public',
                },
                {
                  name: 'Secondary Schools',
                  description: 'Years 7-13 education, senior programs, work experience, and community engagement.',
                  coverage: '$10M - $20M+',
                  focus: 'Work experience liability, senior activities, visiting public, student excursions',
                },
                {
                  name: 'Tertiary & Higher Education',
                  description: 'Universities, polytechnics, wānanga, and specialized training providers.',
                  coverage: '$20M+',
                  focus: 'Research liability, campus facilities, visiting public, work-integrated learning',
                },
                {
                  name: 'After-School & Holiday Programs',
                  description: 'After-school care, holiday camps, tutoring centers, and activity-based programs.',
                  coverage: '$5M - $10M',
                  focus: 'Supervision during extended hours, activity risks, parental liability',
                },
                {
                  name: 'Specialist Education Services',
                  description: 'Special needs centers, adult education, distance learning support, and enrichment programs.',
                  coverage: '$5M - $15M',
                  focus: 'Specialized care needs, equipment safety, additional supervision requirements',
                },
              ].map((sector, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.name}</h3>
                  <p className="text-slate-600 mb-4">{sector.description}</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700">Typical Coverage:</p>
                      <p className="text-slate-600">{sector.coverage}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Key Risk Areas:</p>
                      <p className="text-slate-600">{sector.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duty of Care & NZ Education Law */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Duty of Care & Legal Obligations
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Education Act 1989</h3>
                <p className="text-slate-600 mb-4">
                  The Education Act 1989 and Health and Safety at Work Act 2015 establish clear legal duties:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Duty of Care:</strong> Schools and educators have a legal duty to exercise reasonable care for students' safety and wellbeing during the school day and school activities.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>
                      <strong>In loco parentis:</strong> While on school grounds or approved activities, schools act "in the place of parents" and must exercise parental vigilance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Health & Safety Obligations:</strong> The HSWA 2015 requires schools to identify and manage physical and psychological hazards.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Kaitiakitanga & Pastoral Care</h3>
                <p className="text-slate-600 mb-4">
                  NZ schools embrace kaitiakitanga (guardianship and care). This includes:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Student wellbeing:</strong> Schools must consider physical, mental, emotional, and social wellbeing—a holistic approach that increases liability exposure if something goes wrong.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Inclusivity:</strong> Accommodating diverse needs (including cultural, physical, and learning needs) adds complexity to risk management.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold mt-1">•</span>
                    <span>
                      <strong>Aroha (compassion):</strong> The principle of aroha emphasizes care and support—essential but also creating expectations of high duty of care.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-300 p-6 rounded-lg">
                <p className="text-slate-900 font-semibold mb-2">What Happens If There's an Incident?</p>
                <p className="text-slate-700 mb-3">
                  If a student is injured, parents may sue the school or education provider for breach of duty of care. Even if the school exercised reasonable care, legal costs and potential settlement amounts can be substantial.
                </p>
                <p className="text-slate-700">
                  <strong>Example:</strong> A student falls during a school trip and breaks their arm. They claim the school failed to provide adequate supervision. Legal defense costs alone could exceed $30,000.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Education Liability Scenarios */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Common Education Liability Scenarios</h2>

            <div className="space-y-6">
              {[
                {
                  scenario: 'School Excursion Incident',
                  details:
                    'During a supervised field trip, a student slips and sustains a serious head injury. Parents claim inadequate supervision and sue for $100,000+.',
                  coverage: 'Public liability covers off-campus incidents if the activity is school-organized and supervised.',
                },
                {
                  scenario: 'Sports-Related Injury',
                  details:
                    'A student is injured during a school sports competition. They claim poor equipment maintenance or inadequate coaching.',
                  coverage: 'Coverage extends to organized school sports, though high-contact or high-risk activities may have specific policy conditions.',
                },
                {
                  scenario: 'Visitor Injury on Campus',
                  details:
                    'A parent attending a school event slips on a wet floor in the school hall. They sue the school for negligent maintenance.',
                  coverage: 'Public liability covers premises liability for injuries to members of the public on school grounds.',
                },
                {
                  scenario: 'Outdoor Facility Claim',
                  details:
                    'A child in after-school care is injured on the playground. Parents claim inadequate maintenance or supervision.',
                  coverage: 'After-school program providers need coverage that extends to facility and supervision liability.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-lg border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.scenario}</h3>
                  <p className="text-slate-600 mb-4">{item.details}</p>
                  <div className="bg-white p-4 rounded border-l-2 border-purple-300">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Education Sector Coverage Breakdown</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300">
                    <th className="p-4 text-left font-bold text-slate-900">Coverage Aspect</th>
                    <th className="p-4 text-left font-bold text-slate-900">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      aspect: 'Student Injuries (On-Campus)',
                      includes: 'Yes - duty of care covers students under school supervision',
                    },
                    {
                      aspect: 'Off-Campus Activities',
                      includes: 'Yes - school-organized excursions and approved activities',
                    },
                    {
                      aspect: 'Visitor/Public Injuries',
                      includes: 'Yes - parents at events, community visitors on premises',
                    },
                    {
                      aspect: 'Sports & PE Programs',
                      includes: 'Yes - school-organized competitive and recreational sports',
                    },
                    {
                      aspect: 'Facilities Liability',
                      includes: 'Yes - injury caused by facility condition or maintenance',
                    },
                    {
                      aspect: 'Volunteer Incidents',
                      includes: 'Usually yes - school-organized volunteer activities',
                    },
                    {
                      aspect: 'Contracted Services',
                      includes: 'Check policy - external contractors (sports, music, etc.)',
                    },
                    {
                      aspect: 'Cyber Liability',
                      includes: 'Separate add-on - data breaches, online safety issues',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
                      <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">
                        {row.aspect}
                      </td>
                      <td className="p-4 text-slate-600 border-b border-slate-200">{row.includes}</td>
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
              Public Liability FAQ for Education
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Is public liability insurance required for schools in NZ?',
                  a: 'While not always explicitly mandated by law, virtually all schools and education providers maintain it. It\'s essential risk management and often required by boards and insurers.',
                },
                {
                  q: 'What\'s an appropriate coverage limit for a school?',
                  a: 'Primary schools typically carry $10M-$20M, secondary schools $10M-$20M+, and ECE centers $5M-$10M. Larger institutions with more complex activities may need higher limits.',
                },
                {
                  q: 'Does insurance cover incidents at school events like sports days or fetes?',
                  a: 'Yes, if the event is school-organized and supervised. Ensure the insurer knows about planned events—some may require additional coverage for large public gatherings.',
                },
                {
                  q: 'Are excursion and field trip incidents covered?',
                  a: 'Yes, as long as the activity is school-approved and properly supervised. Some insurers may want notice of high-risk activities (overseas trips, adventure sports, etc.).',
                },
                {
                  q: 'What if a student is injured during contracted services like sports coaching?',
                  a: 'You need to ensure contracted providers (coaches, tutors, specialists) carry their own liability insurance. Your policy may not cover their negligence.',
                },
                {
                  q: 'How much does school public liability insurance cost?',
                  a: 'Premiums vary widely based on institution size, number of students, activities offered, and location. Get a quote for a customized assessment.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="group border border-slate-300 rounded-lg p-6 hover:bg-slate-50 transition-colors">
                  <summary className="cursor-pointer font-bold text-slate-900 flex justify-between items-center">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-purple-600 group-open:rotate-180 transition-transform">
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
                Get Your Education Provider Quote
              </h2>
              <p className="text-xl text-slate-600">
                Compare public liability insurance tailored to educational settings and duty of care.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          heading="Protect Your School or Education Provider"
          subtext="Join NZ educational institutions that trust us to find them the right liability coverage."
        />
      </main>
    </>
  );
}

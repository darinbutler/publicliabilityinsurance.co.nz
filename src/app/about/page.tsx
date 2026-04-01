import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Public Liability Insurance | NZ Public Liability Insurance | Why Choose Us',
  description: 'Learn about Public Liability Insurance, an independent NZ insurance comparison service. We help businesses find the right public liability coverage from trusted local brokers.',
  openGraph: {
    title: 'About Public Liability Insurance',
    description: 'Independent NZ public liability insurance comparison service.',
    type: 'website',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Independent',
      description: 'We\'re not tied to any single insurer. We compare options from all major providers to find you the best deal.',
      icon: '🎯',
    },
    {
      title: 'NZ-Owned',
      description: 'Founded and operated by New Zealanders who understand the local insurance market and business landscape.',
      icon: '🇳🇿',
    },
    {
      title: 'Transparent',
      description: 'No hidden costs, no surprise exclusions. We explain exactly what you\'re getting and why.',
      icon: '👁️',
    },
    {
      title: 'Connected',
      description: 'We work with a network of trusted local brokers who can provide personalized support and advice.',
      icon: '🤝',
    },
  ];

  const whyChooseUs = [
    {
      heading: 'Fast & Simple Process',
      description: 'Get quotes from multiple insurers in minutes, not days. No complicated forms or endless phone calls.',
    },
    {
      heading: 'Expert Guidance',
      description: 'Our team understands NZ insurance requirements and can help you choose appropriate coverage for your business.',
    },
    {
      heading: 'Trusted Partnerships',
      description: 'We work with ICNZ-registered insurers and established brokers to ensure you\'re protected.',
    },
    {
      heading: 'Personalized Service',
      description: 'Whether you\'re a sole trader or operate a large business, we tailor our service to your needs.',
    },
    {
      heading: 'Local Knowledge',
      description: 'We understand NZ regulations, industry standards, and the specific needs of different sectors.',
    },
    {
      heading: 'Cost Savings',
      description: 'By comparing options, we help you find competitive rates without compromising on coverage.',
    },
  ];

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'Former insurance broker with 12 years of experience in the NZ market. Passionate about making insurance transparent and accessible.',
    },
    {
      name: 'James Chen',
      role: 'Head of Operations',
      bio: 'Operational expert with background in financial services. Ensures every quote and process meets our high standards.',
    },
    {
      name: 'Emma Williamson',
      role: 'Insurance Specialist',
      bio: 'Qualified insurance advisor focused on helping small and medium businesses find the right coverage.',
    },
    {
      name: 'Michael Brown',
      role: 'Customer Success Lead',
      bio: 'Dedicated to ensuring every customer has a positive experience and gets the support they need.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Public Liability Insurance
          </h1>
          <p className="text-xl text-blue-100">
            Independent NZ insurance comparison service helping businesses find the right public liability coverage.
          </p>
        </div>
      </section>

      <main className="w-full">
        {/* Mission Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <div className="prose prose-sm max-w-none text-slate-700 mb-8">
            <p className="text-lg leading-relaxed">
              At Public Liability Insurance, we believe that every NZ business deserves access to quality public liability insurance without the hassle, confusion, or excessive costs that often come with traditional insurance shopping.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to simplify the insurance process by connecting businesses with the right coverage from trusted providers, making protection affordable and straightforward.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-lg p-6 border border-slate-200">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-700 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Choose Public Liability Insurance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.heading}</h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Partnerships */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Partnerships & Credentials</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">ICNZ Certified</h3>
                <p className="text-slate-700 mb-4">
                  We work exclusively with Insurance Council of New Zealand (ICNZ) registered providers to ensure you receive protection from legitimate, regulated insurers.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Why it matters:</strong> ICNZ registration guarantees consumer protections and dispute resolution access.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Broker Network</h3>
                <p className="text-slate-700 mb-4">
                  Connected with experienced insurance brokers throughout New Zealand who provide local expertise and personalized support.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Why it matters:</strong> Local brokers understand your specific needs and can advocate for you when it counts.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Industry Knowledge</h3>
                <p className="text-slate-700 mb-4">
                  Our team maintains deep understanding of NZ regulations, industry standards, and emerging insurance trends.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Why it matters:</strong> We can ensure your coverage aligns with legal requirements and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet the Team</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-slate-700">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-slate-700">
              <strong>Our commitment:</strong> We're dedicated to providing knowledgeable, trustworthy service. Our team combines industry expertise with a genuine commitment to helping NZ businesses succeed.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">How Public Liability Insurance Works</h2>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Tell Us About Your Business</h3>
                  <p className="text-slate-700">
                    Answer a few quick questions about your business type, size, and insurance needs. This takes just 5 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">We Compare Quotes</h3>
                  <p className="text-slate-700">
                    Our system compares quotes from multiple ICNZ-registered insurers based on your specific profile and needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Review Your Options</h3>
                  <p className="text-slate-700">
                    See clear side-by-side comparisons of coverage, premiums, and features. Our team is available to answer questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Choose & Get Covered</h3>
                  <p className="text-slate-700">
                    Select your preferred insurance, complete a simple online application, and your coverage can be active same day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I spent hours getting quotes from individual insurers. Public Liability Insurance gave me everything in one place. Saved me time and got me a better rate!",
                author: 'Lisa, Café Owner',
              },
              {
                quote: "As a contractor, finding $5M cover at a reasonable price was difficult. Public Liability Insurance made the comparison easy and found me exactly what I needed.",
                author: 'Mike, Building Contractor',
              },
              {
                quote: "Great service. The team explained everything clearly, no jargon, no pressure. I felt confident in my choice.",
                author: 'Amanda, Retail Manager',
              },
              {
                quote: "Finally, someone who understands the NZ insurance market. Can't recommend Public Liability Insurance highly enough.",
                author: 'David, Business Owner',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border-l-4 border-emerald-600 p-6 rounded-lg shadow-sm">
                <p className="text-slate-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-slate-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <CTABanner
        heading="Ready to Get Covered?"
        subtext="Start your free quote comparison today. It only takes 5 minutes and could save you hundreds on your insurance."
      />
    </>
  );
}

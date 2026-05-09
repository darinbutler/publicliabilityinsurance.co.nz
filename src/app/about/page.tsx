import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Us | PublicLiabilityInsurance.co.nz | NZ-Owned Insurance Comparison',
  description: 'We\'re a NZ-owned service that cuts through the confusion of the insurance market — comparing multiple providers so you get the right cover at the right price, without paying for what you don\'t need.',
  openGraph: {
    title: 'About PublicLiabilityInsurance.co.nz',
    description: 'NZ-owned broker referral service. We compare up to 15 insurers so you get personalised cover without the hassle.',
    type: 'website',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'NZ-Owned & Operated',
      description: 'We\'re proudly New Zealand owned and operated. We understand the local market, NZ regulations, and what businesses like yours actually need.',
      icon: '🇳🇿',
    },
    {
      title: 'Truly Independent',
      description: 'We\'re not tied to any single insurer or provider. Our job is to find the best fit for you — not to push a product that earns us the highest commission.',
      icon: '🎯',
    },
    {
      title: 'No Obligation',
      description: 'Our comparison service is completely free. You\'re never under any pressure to purchase, and there are no hidden fees on our end.',
      icon: '✅',
    },
    {
      title: 'Personalised',
      description: 'Generic insurance policies often mean paying for cover you don\'t need. We match you with a policy built around your specific business and risk profile.',
      icon: '🤝',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-emerald-800 to-teal-700 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-emerald-100 text-xs font-semibold rounded-full uppercase tracking-wider mb-5">
            NZ-Owned & Operated
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Insurance shouldn&apos;t be this complicated.<br />
            <span className="text-emerald-300">We&apos;ve made it simple.</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl">
            The NZ insurance market is confusing — and too many good New Zealanders end up with policies that don&apos;t fit their business, paying for cover they don&apos;t need. We exist to fix that.
          </p>
        </div>
      </section>

      <main className="w-full">

        {/* The Problem We Solve */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why We Started This</h2>
          <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
            <p>
              The New Zealand insurance market has a real problem. It&apos;s fragmented, jargon-heavy, and often steered by providers who have every incentive to sell you more cover than you actually need. For a sole trader, a small business owner, or a tradie trying to get on with their work — navigating it all is genuinely hard.
            </p>
            <p>
              Too many New Zealanders end up either underinsured and exposed, or locked into expensive policies loaded with cover that simply doesn&apos;t apply to their situation. Both outcomes are bad — and both are avoidable.
            </p>
            <p>
              We built this service because we believe every New Zealand business deserves a public liability policy that&apos;s personalised to what they actually do — not a generic off-the-shelf product that fits no one particularly well.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">How We Help</h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  heading: 'You tell us about your business',
                  body: 'A quick, simple form — what you do, how big you are, what cover level you\'re after. Takes about five minutes.',
                },
                {
                  step: '02',
                  heading: 'We compare across multiple providers',
                  body: 'We work with a panel of licensed NZ brokers who compare policies from up to 15 insurers on your behalf. No chasing quotes from multiple websites, no sales calls, no hassle.',
                },
                {
                  step: '03',
                  heading: 'A broker reaches out with your options',
                  body: 'A qualified, licensed NZ broker contacts you directly with personalised options — so you can ask questions and make an informed decision without feeling pressured.',
                },
                {
                  step: '04',
                  heading: 'You choose what\'s right for you',
                  body: 'No obligation. You pick the policy that fits, at the right price — or you walk away. Either way, the service costs you nothing.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.heading}</h3>
                    <p className="text-slate-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Difference We Make */}
        <section className="w-full bg-emerald-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-10">The difference it makes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '⏱️',
                  heading: 'Save time',
                  body: 'Instead of contacting multiple insurers and brokers separately, we do the legwork for you in one go.',
                },
                {
                  icon: '💰',
                  heading: 'Save money',
                  body: 'Comparing across providers — and only paying for what you need — often results in a meaningfully better premium.',
                },
                {
                  icon: '🔒',
                  heading: 'Get the right cover',
                  body: 'A policy personalised to your actual business and risk profile, not a generic product that over- or under-insures you.',
                },
              ].map((item) => (
                <div key={item.heading} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.heading}</h3>
                  <p className="text-emerald-200 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Work With</h2>
          <div className="prose max-w-none text-slate-700 text-lg leading-relaxed space-y-4">
            <p>
              We connect you with licensed, experienced New Zealand insurance brokers who are authorised under the Financial Markets Conduct Act 2013. They follow the ICNZ Fair Insurance Code, which means you&apos;re protected by clear standards around how your enquiry is handled, how claims are managed, and how disputes are resolved.
            </p>
            <p>
              Our broker panel works with a wide range of insurers including NZI, Vero, AIG, Zurich, Chubb, QBE and others — so you&apos;re not limited to what one company offers.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { icon: '✅', label: 'ICNZ Fair Insurance Code' },
              { icon: '🔒', label: 'FMCA Licensed Brokers' },
              { icon: '🇳🇿', label: 'NZ-Owned & Operated' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-emerald-900 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in touch</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Have a question before you submit a quote request? We&apos;re happy to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hello@cover4you.co.nz"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors text-sm"
              >
                hello@cover4you.co.nz
              </a>
              <Link
                href="/contact/"
                className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl border border-slate-200 transition-colors text-sm"
              >
                Submit a quote request →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <CTABanner
        heading="Ready to find the right cover?"
        subtext="Submit your details and a licensed NZ broker will compare options from up to 15 insurers — free, no obligation."
      />
    </>
  );
}

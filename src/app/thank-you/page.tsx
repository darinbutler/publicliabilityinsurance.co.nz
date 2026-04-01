import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quote Submitted | Thank You | Public Liability Insurance',
  description: 'Thank you for submitting your public liability insurance quote request. We\'ll be in touch soon with personalized options.',
  robots: 'noindex, follow', // Don't index thank you page
};

export default function ThankYouPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-emerald-100">
            Your quote request has been received and is being processed.
          </p>
        </div>
      </section>

      <main className="w-full">
        {/* Success Message */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg border-2 border-emerald-500 p-8 mb-8">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Confirmed</h2>
              <p className="text-lg text-slate-700 mb-6">
                We've received your public liability insurance quote request. Here's what happens next:
              </p>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Processing</h3>
                  <p className="text-slate-700">
                    We're comparing quotes from multiple ICNZ-registered insurers based on your business profile.
                  </p>
                  <p className="text-sm text-slate-600 mt-2">Typical time: 30 minutes to 2 hours</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Notification</h3>
                  <p className="text-slate-700">
                    We'll send you an email with your personalized quote comparison, including coverage options and pricing.
                  </p>
                  <p className="text-sm text-slate-600 mt-2">Check your inbox and spam folder</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Choose Your Coverage</h3>
                  <p className="text-slate-700">
                    Review the options, ask any questions, and choose the coverage that best fits your business needs.
                  </p>
                  <p className="text-sm text-slate-600 mt-2">Our team is available to help</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Get Covered</h3>
                  <p className="text-slate-700">
                    Complete the simple application for your chosen insurer and your coverage can be active the same day.
                  </p>
                  <p className="text-sm text-slate-600 mt-2">Typically activated within hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Keep An Eye On Your Inbox</h3>
            <p className="text-slate-700 mb-4">
              We'll send your quote comparison to the email address you provided. If you don't receive it within 2 hours:
            </p>
            <ul className="space-y-2 text-slate-700 mb-6">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">1</span>
                <span>Check your spam/junk folder</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">2</span>
                <span>Call us: <a href="tel:098859549" className="text-blue-600 hover:text-blue-700 font-semibold">09 885 9549</a> <span className="text-xs text-slate-500 italic">(quote PLI for best prices)</span></span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">3</span>
                <span>Email: <a href="mailto:hello@cover4you.co.nz" className="text-blue-600 hover:text-blue-700 font-semibold">hello@cover4you.co.nz</a></span>
              </li>
            </ul>
          </div>

          {/* FAQs while they wait */}
          <div className="bg-white rounded-lg border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">While You Wait: Common Questions</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">What if my circumstances change?</h4>
                <p className="text-slate-700">
                  No problem! You can provide updated information before you finalize your choice. Just reply to our email or call us.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Can I get additional coverage options?</h4>
                <p className="text-slate-700">
                  Yes. If you want different coverage levels, exclusions, or add-ons (like professional indemnity), let us know and we'll get additional quotes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Will there be any hidden costs?</h4>
                <p className="text-slate-700">
                  No. All costs are shown upfront in your quotes, including premiums, excess/deductibles, and any other fees. What you see is what you pay.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">What if I need to cancel?</h4>
                <p className="text-slate-700">
                  If you change your mind after purchasing, most policies have a 30-day cooling-off period where you can cancel and get a refund.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Are these real quotes?</h4>
                <p className="text-slate-700">
                  Yes, absolutely. Each quote is genuine and based on the information you provided. Insurers provide real pricing that you can act on immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Resources */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Learn More While You Wait</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/coverage"
                className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:border-blue-600 transition"
              >
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Coverage Guide</h3>
                <p className="text-slate-700 text-sm">
                  Learn about different coverage levels and how to choose the right amount for your business.
                </p>
              </Link>

              <Link
                href="/blog"
                className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:border-blue-600 transition"
              >
                <div className="text-3xl mb-4">📰</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Blog Articles</h3>
                <p className="text-slate-700 text-sm">
                  Read expert insights on public liability insurance and industry-specific requirements.
                </p>
              </Link>

              <Link
                href="/compare"
                className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:border-blue-600 transition"
              >
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Compare Insurers</h3>
                <p className="text-slate-700 text-sm">
                  See detailed comparisons of coverage features and premiums from major NZ providers.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">What To Do Now</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-xl">✓</span>
                <span>Check your email for the quote comparison</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✓</span>
                <span>Review the coverage options and pricing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✓</span>
                <span>Feel free to ask questions or request modifications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✓</span>
                <span>Choose your preferred insurer and coverage level</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">✓</span>
                <span>Complete the simple application to activate coverage</span>
              </li>
            </ul>

            <div className="space-y-3">
              <p className="text-blue-100">Need immediate assistance?</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:098859549"
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
                >
                  Call Us: 09 885 9549
                </a>
                <a
                  href="mailto:hello@cover4you.co.nz"
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Email: hello@cover4you.co.nz
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

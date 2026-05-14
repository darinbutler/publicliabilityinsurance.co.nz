import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="font-bold text-white text-sm">PublicLiabilityInsurance</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Free broker referral service for NZ businesses and sole traders. We compare up to 15 insurers so you don&apos;t have to.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-emerald-900 text-emerald-300 border border-emerald-800 text-xs rounded-full">🌿 ICNZ Fair Code</span>
              <span className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 text-xs rounded-full">🤝 Free Advice</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              {[['Home', '/'], ['Coverage Guide', '/coverage/'], ['Compare Providers', '/compare/'], ['Blog & Guides', '/blog/'], ['About Us', '/about/'], ['Contact', '/contact/'], ['Making a Claim', '/claims/'], ['Disclaimer', '/disclaimer/']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-slate-400 hover:text-emerald-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Trades */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Trades</h3>
            <ul className="space-y-1.5 text-xs">
              {[['Builders', '/businesses/builders/'], ['Electricians', '/businesses/electricians/'], ['Plumbers', '/businesses/plumbers/'], ['Painters & Decorators', '/businesses/painters-decorators/'], ['Landscapers', '/businesses/landscapers/'], ['Roofers', '/businesses/roofers/'], ['Scaffolders', '/businesses/scaffolders/'], ['Drain Layers', '/businesses/drain-layers/']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-slate-400 hover:text-emerald-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services & Food */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Services & Food</h3>
            <ul className="space-y-1.5 text-xs">
              {[['Dog Walkers', '/businesses/dog-walkers/'], ['Cleaners', '/businesses/cleaners/'], ['Personal Trainers', '/businesses/personal-trainers/'], ['Photographers', '/businesses/photographers/'], ['Event Planners', '/businesses/event-planners/'], ['Cafes', '/businesses/cafes/'], ['Restaurants', '/businesses/restaurants/'], ['Takeaways', '/businesses/takeaways/']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-slate-400 hover:text-emerald-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <Link href="/businesses/" className="inline-block mt-3 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">View all 30 types →</Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-500 mb-1">Email</p>
                <a
                  href="mailto:hello@cover4you.co.nz"
                  className="text-slate-400 hover:text-emerald-400 transition-colors break-all"
                >
                  hello@cover4you.co.nz
                </a>
              </div>
              <div className="pt-4">
                <p className="text-slate-500 mb-2 text-xs">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-emerald-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.457-.25-4.643-.25-4.953 0-6.357 3.003-6.357 7.17V8z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-emerald-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-emerald-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 002.856-9.75v-3.208a6.433 6.433 0 002.462-2.149v-.41a3.5 3.5 0 00-4.947.498 5.998 5.998 0 01-7.520 3.257v1.047A15.993 15.993 0 013.991 6.531c-1.666.944-3.646 1.726-5.461 1.028V8.07c1.122-.313 2.79.644 4.595 1.159 2.487.67 5.631 1.633 9.28-1.071.2297-.8147 1.7316-1.0075 2.2711-.5712h2.269a4.686 4.686 0 001.7-1.146c.656-.633 1.424-1.292 2.25-1.682a5.8 5.8 0 01-1.038-2.827z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">Trusted by NZ Businesses</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🏛️', title: 'Recognised Insurers', sub: 'All providers recognised in NZ' },
              { icon: '⚡', title: 'Instant Quotes', sub: 'Response within same day' },
              { icon: '🔍', title: 'Multiple Insurers Compared', sub: 'Up to 15+ insurers reviewed' },
              { icon: '🔒', title: '100% Secure', sub: 'Your data is protected' },
            ].map((badge) => (
              <div key={badge.title} className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 hover:border-emerald-600 transition-colors">
                <span className="text-2xl flex-shrink-0">{badge.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{badge.title}</p>
                  <p className="text-slate-400 text-xs leading-tight">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How This Site Works Disclaimer */}
        <div className="border-t border-slate-800 pt-8 mb-6">
          <div className="bg-slate-800 rounded-xl p-5 text-xs text-slate-400">
            <p className="font-semibold text-slate-300 mb-2">How This Site Works</p>
            <p className="leading-relaxed">
              PublicLiabilityInsurance.co.nz is a comparison and referral service operated by{' '}
              <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">Cover4You</a>
              {' '}— not an insurance underwriter or licensed insurer.
              We compare information from multiple ICNZ-registered insurers and refer qualified enquiries to licensed NZ insurance advisers and brokers.
              Our service is free to use. We may receive a referral fee from insurers when a policy is taken out through our referral.
              All information on this site is general in nature and does not constitute personalised financial advice under the Financial Markets Conduct Act 2013.
              Always read the policy wording and consult a licensed adviser before purchasing. Financial advice is provided by{' '}
              <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">Cover4You</a>
              , a registered financial advice provider.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {currentYear} <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Cover4You</a>, a trading style of GDS. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">
                Disclaimer
              </Link>
              <Link href="/claims" className="hover:text-emerald-400 transition-colors">
                Making a Claim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

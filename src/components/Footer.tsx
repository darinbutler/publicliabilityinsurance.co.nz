import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Simplifying public liability insurance comparison for NZ businesses and professionals.
            </p>
            <p className="text-xs text-slate-500">
              Powered by <span className="text-emerald-400 font-medium">PublicLiabilityInsurance.co.nz</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-bold text-white mb-4">Sectors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sectors/businesses"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Businesses
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/trade-contractors"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Trade Contractors
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/education"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Schools & Education
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/public-venues"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Public Venues
                </Link>
              </li>
            </ul>
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
              <div>
                <p className="text-slate-500 mb-1">Phone</p>
                <a
                  href="tel:098859549"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  09 885 9549
                </a>
                <p className="text-xs text-slate-500 mt-1 italic">Quote PLI for best prices</p>
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
        <div className="border-t border-slate-800 pt-10 mb-10">
          <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Trusted by NZ Businesses
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              {
                label: 'FSP Compliant',
                icon: (
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                label: 'Instant Quotes',
                icon: (
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                label: 'Expert Support',
                icon: (
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                label: '100% Secure',
                icon: (
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mb-2">
                  {badge.icon}
                </div>
                <p className="text-slate-300 text-xs font-medium">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {currentYear} Public Liability Insurance. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

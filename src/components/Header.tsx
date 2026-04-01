'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
        isScrolled ? 'shadow-md' : 'shadow-none'
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <span className="hidden sm:block">
            <Logo />
          </span>
          <span className="sm:hidden">
            <Logo variant="compact" />
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>

            {/* Sectors Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-1">
                Sectors
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/sectors/businesses"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 first:rounded-t-lg"
                >
                  Businesses
                </Link>
                <Link
                  href="/sectors/trade-contractors"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  Trade Contractors
                </Link>
                <Link
                  href="/sectors/schools-education"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  Schools & Education
                </Link>
                <Link
                  href="/sectors/public-venues"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 last:rounded-b-lg"
                >
                  Public Venues
                </Link>
              </div>
            </div>

            <Link
              href="/coverage"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Coverage
            </Link>
            <Link
              href="/compare"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Compare
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors"
          >
            Get a Free Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-200">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              Home
            </Link>

            {/* Mobile Sectors */}
            <button
              onClick={() => setIsSectorsOpen(!isSectorsOpen)}
              className="w-full text-left px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 flex justify-between items-center"
            >
              Sectors
              <svg
                className={`w-4 h-4 transition-transform ${isSectorsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {isSectorsOpen && (
              <div className="bg-slate-50">
                <Link
                  href="/sectors/businesses"
                  className="block px-8 py-2 text-sm text-slate-700 hover:text-emerald-600"
                >
                  Businesses
                </Link>
                <Link
                  href="/sectors/trade-contractors"
                  className="block px-8 py-2 text-sm text-slate-700 hover:text-emerald-600"
                >
                  Trade Contractors
                </Link>
                <Link
                  href="/sectors/schools-education"
                  className="block px-8 py-2 text-sm text-slate-700 hover:text-emerald-600"
                >
                  Schools & Education
                </Link>
                <Link
                  href="/sectors/public-venues"
                  className="block px-8 py-2 text-sm text-slate-700 hover:text-emerald-600"
                >
                  Public Venues
                </Link>
              </div>
            )}

            <Link
              href="/coverage"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              Coverage
            </Link>
            <Link
              href="/compare"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              Compare
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              Contact
            </Link>

            <div className="px-4 py-3 border-t border-slate-200 mt-2">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

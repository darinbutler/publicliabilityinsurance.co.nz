import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Public Liability Insurance by Sector | NZ Industries',
  description: 'Tailored public liability insurance for businesses, trade contractors, schools, and public venues in New Zealand.',
};

export default function SectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">By Sector</span>
        </div>
      </nav>

      {children}
    </>
  );
}

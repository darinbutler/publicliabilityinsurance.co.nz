import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Public Liability Insurance NZ | Compare Quotes & Save | PublicLiabilityInsurance.co.nz',
  description:
    'Compare public liability insurance quotes from leading NZ providers. Get tailored coverage for your business, industry, or sector. Fast, simple, and transparent comparison.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Public Liability Insurance NZ | Compare Quotes & Save',
    description:
      'Find the best public liability insurance for your business in New Zealand. Compare quotes instantly.',
    type: 'website',
    locale: 'en_NZ',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Public Liability Insurance NZ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public Liability Insurance NZ | Compare Quotes & Save',
    description:
      'Compare public liability insurance quotes from leading NZ providers.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

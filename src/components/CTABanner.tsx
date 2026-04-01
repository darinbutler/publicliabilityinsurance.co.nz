import Link from 'next/link';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTABanner({
  heading = 'Ready to Protect Your Business?',
  subtext = 'Get personalized public liability insurance quotes from NZ\'s top providers.',
  buttonText = 'Get a Free Quote',
  buttonLink = '/contact',
}: CTABannerProps) {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-lg text-emerald-50 mb-8">
          {subtext}
        </p>
        <Link
          href={buttonLink}
          className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

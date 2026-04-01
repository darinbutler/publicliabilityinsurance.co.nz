import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Public Liability Insurance Blog | NZ Insurance Articles | Public Liability Insurance',
  description: 'Expert articles and guides on public liability insurance in New Zealand. Learn about coverage, claims, industry-specific requirements, and more.',
  openGraph: {
    title: 'Public Liability Insurance Blog',
    description: 'Read expert articles on public liability insurance for NZ businesses.',
    type: 'website',
  },
};

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insurance Insights & Guides
          </h1>
          <p className="text-xl text-blue-100">
            Expert articles on public liability insurance, coverage tips, and NZ business protection strategies.
          </p>
        </div>
      </section>

      <main className="w-full">
        {/* Category Filter */}
        <section className="w-full bg-slate-50 py-8 px-4 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg hover:border-blue-500 transition-all duration-300"
              >
                {/* Post image */}
                <img
                  src={post.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop&q=80'}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />

                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-700 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4 border-t border-slate-200 pt-4">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 border-2 border-blue-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Stay Informed</h2>
            <p className="text-slate-700 mb-6">
              Get insurance insights, coverage tips, and industry updates delivered to your inbox monthly.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4">
              We respect your privacy. Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Other Resources</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Coverage Guide</h3>
              <p className="text-slate-700 text-sm mb-4">
                Complete guide to coverage levels and how much protection your business needs.
              </p>
              <Link href="/coverage" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Compare Insurers</h3>
              <p className="text-slate-700 text-sm mb-4">
                Compare features, coverage, and premiums from NZ's leading insurance providers.
              </p>
              <Link href="/compare" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                Compare Now →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">FAQ Section</h3>
              <p className="text-slate-700 text-sm mb-4">
                Answers to common questions about public liability insurance in NZ.
              </p>
              <Link href="/contact#faq" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                View FAQs →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

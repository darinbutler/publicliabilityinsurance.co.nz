import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | Cover4You Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-slate-700 mb-6">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Estimated read time
  const wordCount = post.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const readMins = Math.max(1, Math.ceil(wordCount / 220));

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[420px] flex items-end"
        style={{
          backgroundImage: post.image ? `url(${post.image})` : 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 transition mb-5 inline-flex items-center gap-1 text-sm font-semibold">
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-slate-300 text-sm">{post.author}</span>
            <span className="text-slate-400 text-sm">
              {new Date(post.date).toLocaleDateString('en-NZ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="text-slate-400 text-sm">· {readMins} min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">{post.excerpt}</p>
          )}
        </div>
      </section>

      <main className="w-full">
        {/* Breadcrumb strip */}
        <div className="border-b border-slate-100 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-emerald-600 transition">Blog</Link>
            <span>›</span>
            <span className="text-slate-600 truncate max-w-xs">{post.title}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Article */}
          <article>
            {/* Article body */}
            <div
              className="article-content mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Mid-article CTA */}
            <div className="my-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-base mb-1">Ready to compare coverage?</p>
                <p className="text-sm text-slate-600">Get quotes from leading NZ insurers — no obligation, same-day response.</p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition text-sm whitespace-nowrap"
              >
                Get a Quote →
              </Link>
            </div>

            {/* Author card */}
            <div className="border-t border-slate-100 pt-8 mt-4">
              <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                  C
                </div>
                <div>
                  <p className="font-bold text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-500 mt-0.5">Insurance Specialist · Cover4You</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    The Cover4You team are committed to making public liability insurance transparent and accessible for all NZ businesses. Our advisers hold relevant NZ insurance qualifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Share section */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Share this article</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.publicliabilityinsurance.co.nz/blog/${slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition text-sm font-semibold"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://www.publicliabilityinsurance.co.nz/blog/${slug}/&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition text-sm font-semibold"
                >
                  Twitter / X
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.publicliabilityinsurance.co.nz/blog/${slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition text-sm font-semibold"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Sticky container */}
            <div className="sticky top-6 space-y-6">
              {/* CTA card */}
              <div className="rounded-2xl bg-emerald-600 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-2">Need Coverage?</p>
                <h3 className="text-lg font-bold mb-2">Get Your Quote Today</h3>
                <p className="text-sm text-emerald-100 mb-4 leading-relaxed">
                  Compare quotes from NZ's leading insurers. Same-day response from a licensed broker.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-white hover:bg-emerald-50 text-emerald-700 font-bold rounded-xl transition text-center text-sm"
                >
                  Get a Quote →
                </Link>
                <div className="mt-3 flex justify-center gap-4 text-xs text-emerald-200">
                  <span>✓ No obligation</span>
                  <span>✓ Licensed brokers</span>
                </div>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-sm transition group"
                      >
                        <h4 className="font-semibold text-slate-900 text-sm leading-snug mb-2 group-hover:text-emerald-700 transition line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {new Date(relatedPost.date).toLocaleDateString('en-NZ', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick links */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Explore</h3>
                <ul className="space-y-2.5 text-sm">
                  {[
                    { href: '/coverage', label: 'Coverage Guide' },
                    { href: '/compare', label: 'Compare Insurers' },
                    { href: '/sectors/trade-contractors', label: 'Trade Contractors' },
                    { href: '/sectors/businesses', label: 'Businesses & Retail' },
                    { href: '/contact', label: 'Get a Quote' },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-medium transition">
                        <span className="text-emerald-400">›</span> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Quote Form */}
        <section className="w-full bg-slate-50 border-t border-slate-200 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Referral Service</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Covered?</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Now that you understand your insurance needs, get personalised quotes from multiple NZ insurers.
                </p>
                <ul className="space-y-3">
                  {[
                    'Compare 15+ NZ insurers in one place',
                    'Same-day response from a licensed broker',
                    'No obligation — just clear, honest advice',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org Article Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://www.publicliabilityinsurance.co.nz/blog/${slug}/`,
              },
              headline: post.title,
              description: post.excerpt,
              image: post.image || 'https://www.publicliabilityinsurance.co.nz/og-image.png',
              datePublished: post.date,
              dateModified: post.date,
              url: `https://www.publicliabilityinsurance.co.nz/blog/${slug}/`,
              author: {
                '@type': 'Organization',
                name: 'Cover4You',
                url: 'https://www.publicliabilityinsurance.co.nz',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Cover4You',
                url: 'https://www.publicliabilityinsurance.co.nz',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.publicliabilityinsurance.co.nz/logo.png',
                  width: 200,
                  height: 60,
                },
              },
              articleSection: post.category,
              inLanguage: 'en-NZ',
            }),
          }}
        />
        {/* BreadcrumbList for blog post */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.publicliabilityinsurance.co.nz/' },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.publicliabilityinsurance.co.nz/blog/' },
                { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.publicliabilityinsurance.co.nz/blog/${slug}/` },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}

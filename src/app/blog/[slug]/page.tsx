import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | Public Liability Insurance Blog`,
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

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-slate-700 mb-6">
          Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
        </p>
        <Link href="/blog" className="text-emerald-600 font-semibold hover:text-emerald-700">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If no same-category posts, show other posts
  const sidebarPosts =
    relatedPosts.length > 0
      ? relatedPosts
      : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const readingTime = post.readingTime || '5 min read';

  return (
    <>
      {/* Hero Section — full-width background image */}
      <section className="relative w-full min-h-[45vh] flex items-end">
        <img
          src={
            post.image
              ? post.image.replace('w=800&h=450', 'w=1920&h=900')
              : 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=900&fit=crop&q=80'
          }
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/30"></div>

        <div className="max-w-5xl mx-auto w-full relative z-10 px-4 pb-12 pt-24 md:pt-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-500/90 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-300 text-sm">{readingTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white text-xs font-bold">
                {post.author.charAt(0)}
              </div>
              <span>{post.author}</span>
            </div>
            <span className="text-slate-400">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-NZ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </section>

      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Article Content */}
          <article className="lg:col-span-2">
            <div
              className="prose prose-slate md:prose-lg max-w-none
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
                prose-p:text-slate-700 prose-p:leading-relaxed
                prose-a:text-emerald-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-li:text-slate-700
                prose-strong:text-slate-900
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-slate-900 prose-th:border prose-th:border-slate-300
                prose-td:p-3 prose-td:border prose-td:border-slate-300 prose-td:text-slate-700
                [&_a[target='_blank']]:after:content-['_↗'] [&_a[target='_blank']]:after:text-xs [&_a[target='_blank']]:after:text-slate-400
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author */}
            <div className="border-t border-slate-200 pt-8 mt-12">
              <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Written by {post.author}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Part of the Public Liability Insurance team with over 20 years of combined
                    experience helping NZ businesses find the right cover. Our goal is to make
                    insurance transparent and accessible.
                  </p>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 py-8 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Share This Article</h3>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://publicliabilityinsurance.co.nz/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                >
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://publicliabilityinsurance.co.nz/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition text-sm font-semibold"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Quick Quote CTA */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-lg font-bold text-slate-900">Need Coverage?</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Get a free quote comparison from NZ insurers in just 2 minutes.
              </p>
              <Link
                href="/contact"
                className="block w-full px-4 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition text-center text-sm shadow-lg shadow-emerald-600/20"
              >
                Get Quote Now →
              </Link>
              <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                No obligation. No spam.
              </div>
            </div>

            {/* Related Posts */}
            {sidebarPosts.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {relatedPosts.length > 0 ? 'Related Articles' : 'More Articles'}
                </h3>
                <div className="space-y-3">
                  {sidebarPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="block bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md hover:border-emerald-200 transition-all duration-200"
                    >
                      <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                        {rp.category}
                      </span>
                      <h4 className="font-semibold text-slate-900 text-sm mt-1 mb-1 line-clamp-2">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {new Date(rp.date).toLocaleDateString('en-NZ', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Resources — Visual Cards */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Other Resources</h3>
              <div className="space-y-3">
                {/* Coverage Guide */}
                <Link
                  href="/coverage"
                  className="group block bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-200/60 rounded-2xl p-5 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">Coverage Guide</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Compare $1M–$20M tiers and what each level covers</p>
                    </div>
                  </div>
                </Link>

                {/* Compare Insurers */}
                <Link
                  href="/compare"
                  className="group block bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200/60 rounded-2xl p-5 hover:shadow-lg hover:border-sky-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-sky-700 transition-colors">Compare Insurers</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Vero, NZI, AIG, Crombie Lockwood &amp; Delta side-by-side</p>
                    </div>
                  </div>
                </Link>

                {/* FAQ */}
                <Link
                  href="/#faq"
                  className="group block bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-5 hover:shadow-lg hover:border-amber-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">FAQ Section</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Answers to common public liability questions</p>
                    </div>
                  </div>
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  className="group block bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200/60 rounded-2xl p-5 hover:shadow-lg hover:border-violet-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-violet-700 transition-colors">About Us</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">20+ years of insurance expertise across 4 markets</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* NZ Regulatory Bodies */}
            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="font-bold text-white text-sm">NZ Regulatory Bodies</h3>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Insurance Council of NZ', abbr: 'ICNZ', url: 'https://www.icnz.org.nz', colour: 'emerald' },
                  { name: 'WorkSafe New Zealand', abbr: 'WorkSafe', url: 'https://www.worksafe.govt.nz', colour: 'sky' },
                  { name: 'Financial Services Ombudsman', abbr: 'IFSO', url: 'https://www.ifso.nz', colour: 'amber' },
                  { name: 'Financial Markets Authority', abbr: 'FMA', url: 'https://www.fma.govt.nz', colour: 'violet' },
                ].map((body) => (
                  <a
                    key={body.abbr}
                    href={body.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md flex-shrink-0">
                        {body.abbr}
                      </span>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">
                        {body.name}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Always verify your insurer is registered with the relevant NZ authorities.
              </p>
            </div>
          </aside>
        </div>

        {/* Full Width Quote Form */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Covered?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Get personalised quotes from multiple NZ insurers — it takes less than 2 minutes.
            </p>
            <QuoteForm />
          </div>
        </section>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              datePublished: post.date,
              author: { '@type': 'Person', name: post.author },
              publisher: {
                '@type': 'Organization',
                name: 'Public Liability Insurance',
                url: 'https://publicliabilityinsurance.co.nz',
              },
            }),
          }}
        />
      </main>
    </>
  );
}

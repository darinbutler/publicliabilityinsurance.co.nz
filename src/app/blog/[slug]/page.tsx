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

            {/* Quick Links */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Explore</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/coverage" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1">
                    <span>→</span> Coverage Guide
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1">
                    <span>→</span> Compare Insurers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1">
                    <span>→</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1">
                    <span>→</span> Contact Us
                  </Link>
                </li>
              </ul>

              <div className="border-t border-slate-200 mt-4 pt-4">
                <h4 className="font-bold text-slate-900 mb-3 text-sm">NZ Regulatory Bodies</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.icnz.org.nz" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600 transition-colors">
                      Insurance Council of NZ ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://www.worksafe.govt.nz" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600 transition-colors">
                      WorkSafe New Zealand ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ifso.nz" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600 transition-colors">
                      Insurance &amp; Financial Services Ombudsman ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600 transition-colors">
                      Financial Markets Authority ↗
                    </a>
                  </li>
                </ul>
              </div>
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

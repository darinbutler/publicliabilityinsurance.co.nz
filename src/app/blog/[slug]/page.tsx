import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
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

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-blue-100 hover:text-white transition mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            <span className="px-3 py-1 bg-blue-500 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span>{post.author}</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-NZ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <article className="lg:col-span-2">
            {/* Featured Image */}
            <img
              src={post.image ? post.image.replace('w=800&h=450', 'w=1200&h=675') : 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=675&fit=crop&q=80'}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
              loading="lazy"
            />

            {/* Article Content */}
            <div
              className="prose prose-sm md:prose-base max-w-none text-slate-700 mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Meta */}
            <div className="border-t border-slate-200 pt-8 mt-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">About the Author</h3>
                <p className="text-slate-700">
                  {post.author} is part of the Public Liability Insurance team, committed to making public liability insurance transparent and accessible for all NZ businesses.
                </p>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 py-8 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Share This Article</h3>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-semibold">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition text-sm font-semibold">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-slate-200 text-slate-900 rounded hover:bg-slate-300 transition text-sm font-semibold">
                  Copy Link
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            {/* Quick Quote CTA */}
            <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 mb-8 sticky top-4">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Need Coverage?</h3>
              <p className="text-sm text-slate-700 mb-4">
                Get a free quote comparison from NZ insurers in just 5 minutes.
              </p>
              <Link
                href="/contact"
                className="block w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-center text-sm"
              >
                Get Quote Now
              </Link>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-500 transition"
                    >
                      <h4 className="font-semibold text-slate-900 text-sm mb-2 line-clamp-2 hover:text-blue-600">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {new Date(relatedPost.date).toLocaleDateString('en-NZ', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Links */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/coverage" className="text-blue-600 hover:text-blue-700 font-semibold">
                    → Coverage Guide
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-blue-600 hover:text-blue-700 font-semibold">
                    → Compare Insurers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
                    → About Public Liability Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                    → Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Full Width Quote Form Section */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Covered?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Now that you understand your insurance needs, get personalised quotes from multiple NZ insurers.
            </p>
            <QuoteForm />
          </div>
        </section>

        {/* Schema.org Article Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              image: '/images/og-image.png',
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Public Liability Insurance',
                logo: {
                  '@type': 'ImageObject',
                  url: '/logo.png',
                },
              },
            }),
          }}
        />
      </main>
    </>
  );
}

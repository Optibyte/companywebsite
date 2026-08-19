import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  Quote,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blogsData";
import { blogPostSchema } from "@/lib/seo";
import ShareButtons from "./ShareButtons";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Sustainabyte",
    };
  }

  const url = `https://sustainabyte.ai/blogs/${post.slug}`;

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) =>
    post.relatedSlugs.includes(p.slug)
  );

  const jsonLd = blogPostSchema(
    post.title,
    post.excerpt,
    post.image,
    post.isoDate,
    post.author.name
  );

  return (
    <article className="bg-white min-h-screen text-[#0D1B3E] font-[family-name:var(--font-sora)] pt-24">
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      {/* ── Breadcrumb & Back Navigation ── */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#4DB846] hover:text-[#3ca036] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blogs" className="hover:text-gray-600">Blogs</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#0D1B3E] font-medium truncate max-w-[200px]">{post.tag}</span>
          </div>
        </div>
      </div>

      {/* ── Article Header ── */}
      <header className="py-12 md:py-16 bg-[#0D1B3E] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#4DB846]/20 border border-[#4DB846]/40 text-[#4DB846] text-xs font-semibold uppercase tracking-wider">
              {post.tag}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10 text-sm text-gray-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4DB846] flex items-center justify-center font-bold text-white text-lg">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-gray-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#4DB846]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#4DB846]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Featured Image ── */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
        </div>
      </div>

      {/* ── Article Body Container ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <main className="lg:col-span-8">
            {/* Introduction Lead Paragraph */}
            <div className="text-lg md:text-xl text-[#0D1B3E] font-medium leading-relaxed mb-12 p-6 rounded-2xl bg-gray-50 border-l-4 border-[#4DB846]">
              {post.content.intro}
            </div>

            {/* Article Sections */}
            <div className="space-y-12">
              {post.content.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-3">
                    {section.heading}
                  </h2>

                  {section.subheading && (
                    <p className="text-sm font-medium text-[#4DB846] mb-6">
                      {section.subheading}
                    </p>
                  )}

                  {section.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-base leading-relaxed mb-6"
                    >
                      {p}
                    </p>
                  ))}

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-3 my-6 pl-2">
                      {section.bulletPoints.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-[#4DB846] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Pull Quote */}
                  {section.quote && (
                    <div className="my-8 p-6 rounded-2xl bg-[#0D1B3E] text-white relative overflow-hidden">
                      <Quote className="w-12 h-12 text-[#4DB846]/20 absolute right-4 bottom-2" />
                      <p className="text-lg font-semibold italic text-white leading-relaxed relative z-10">
                        &ldquo;{section.quote}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Callout Box */}
                  {section.callout && (
                    <div className="my-8 p-6 rounded-2xl bg-[#eaf4eb] border border-[#4DB846]/30">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#3DA45C] mb-2">
                        <Sparkles className="w-4 h-4" />
                        {section.callout.title}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {section.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Key Metrics / Stat Cards */}
                  {section.metrics && section.metrics.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                      {section.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between"
                        >
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5 text-[#4DB846]" />
                            {metric.label}
                          </div>
                          <div className="text-2xl font-bold text-[#0D1B3E] mb-2">
                            {metric.value}
                          </div>
                          <p className="text-xs text-gray-500 leading-snug">
                            {metric.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="my-12 p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-[#eaf4eb]/50 border border-[#4DB846]/20">
              <h3 className="text-xl font-bold text-[#0D1B3E] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#4DB846]" />
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {post.content.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#4DB846] shrink-0 mt-2" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conclusion */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 mb-12">
              <h3 className="text-lg font-bold text-[#0D1B3E] mb-3">Conclusion</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Social Share Component */}
            <div className="pt-8 border-t border-gray-200">
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </main>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Table of Contents Sticky Box */}
            <div className="sticky top-28 space-y-8">
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Table of Contents
                </h4>
                <nav className="space-y-2.5">
                  {post.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-xs md:text-sm text-gray-600 hover:text-[#4DB846] transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-[#4DB846]"
                    >
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Consultation / CTA Widget */}
              <div className="p-6 rounded-3xl bg-[#0D1B3E] text-white text-center">
                <Sparkles className="w-8 h-8 text-[#4DB846] mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Accelerate Your Facility Decarbonization</h4>
                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  Discover how Sustainabyte&apos;s Agentic AI & certified energy audits can reduce your utility bills by up to 30%.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full py-3 rounded-full bg-[#4DB846] hover:bg-[#3ca036] text-white text-xs font-semibold transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Related Articles Section ── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-[#0D1B3E] mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
                >
                  <div className="relative w-full sm:w-48 aspect-[4/3] shrink-0 bg-gray-100">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[11px] font-semibold text-[#4DB846] uppercase tracking-wider mb-2 block">
                        {rel.tag}
                      </span>
                      <Link href={`/blogs/${rel.slug}`}>
                        <h4 className="font-bold text-[#0D1B3E] text-base group-hover:text-[#4DB846] transition-colors line-clamp-2 mb-2">
                          {rel.title}
                        </h4>
                      </Link>
                      <p className="text-gray-500 text-xs line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                      <span>{rel.date}</span>
                      <Link
                        href={`/blogs/${rel.slug}`}
                        className="text-[#4DB846] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Read <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

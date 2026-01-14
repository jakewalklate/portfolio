import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// Helper to estimate reading time
function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Premium MDX components matching portfolio aesthetic
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-6 tracking-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold text-white mt-10 mb-4 pb-3 border-b border-white/10" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold text-zinc-200 mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-zinc-300 text-lg leading-[1.8] mb-6" {...props} />
  ),
  Spacer: ({ size = "sm" }: { size?: "sm" | "md" | "lg" }) => {
    const heights = { sm: "h-4", md: "h-8", lg: "h-16" };
    return <div className={heights[size]} />;
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 underline-offset-4 transition-colors"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-zinc-800/80 text-zinc-200 py-1 rounded-md text-sm font-mono border border-white/5" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 overflow-x-auto my-6 shadow-lg" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc text-zinc-300 mb-6 space-y-2 pl-6 marker:text-blue-400" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal text-zinc-300 mb-6 space-y-2 pl-6 marker:text-blue-400" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-zinc-300 text-lg leading-relaxed pl-2" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-blue-500/50 pl-6 py-2 my-8 bg-zinc-900/30 rounded-r-xl italic text-zinc-400 text-lg"
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-white/10 my-12" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-zinc-200" {...props} />
  ),
};

const postsDir = path.join(process.cwd(), "app/blog/(articles)");

export async function generateStaticParams() {
  return fs.readdirSync(postsDir).map((file) => ({
    slug: file.replace(/\.mdx?$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(postsDir, `${slug}.mdx`);
  try {
    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);
    const readingTime = getReadingTime(content);

    return (
      <article className="selection:bg-cyan-800 select-text">
        {/* Back Link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to all articles</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12 pb-8 border-b border-white/10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {data.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-zinc-600" />
              <time dateTime={data.date}>
                {new Date(data.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-zinc-600" />
              <span>{readingTime} min read</span>
            </div>
          </div>

          {data.summary && (
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              {data.summary}
            </p>
          )}
        </header>

        {/* Article Content */}
        <section className="prose-article">
          <MDXRemote source={content} components={mdxComponents} />
        </section>

        {/* Article Footer */}
        {/* <footer className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to all articles</span>
          </Link>
        </footer> */}
      </article>
    );
  } catch (error) {
    return notFound();
  }
}

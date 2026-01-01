import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import BookText from "./book-text";

interface Article {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  readingTime: number;
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function getArticles(): Article[] {
  const postsDir = path.join(process.cwd(), "app/blog/(articles)");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".mdx"));

  const articles = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);

    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title || "Untitled",
      date: data.date || "",
      summary: data.summary,
      readingTime: getReadingTime(content),
    };
  });

  // Sort by date, newest first
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function Blog() {
  const articles = getArticles();

  return (
    <div className="space-y-12">
      {/* Book Promotion Card */}
      <div className="border-b border-white/10 pb-10">
        <Link
          href="/book"
          className="group relative flex gap-6 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-white/10 p-5 transition-all"
        >
          <div className="relative shrink-0 h-28 w-20 my-auto -rotate-1 group-hover:rotate-0 transition-transform duration-500 overflow-hidden rounded-lg shadow-lg border border-white/10">
            <img
              src="/5x8.png"
              alt="The Pharmacology of Silence"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BookText />
            </div>
            <h3 className="font-serif text-xl text-white group-hover:text-zinc-200 transition-colors">
              The Pharmacology of Silence
            </h3>
            <p className="text-sm text-zinc-500 line-clamp-4">
              A memoir of my experience of being diagnosed as mentally ill and locked inside a maximum security prison on the outskirts of Sydney's west.
            </p>
          </div>
        </Link>
      </div>

      {/* Articles Section */}
      <section className="space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Blog
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl -mt-4">
          A series of random articles exploring my thoughts on humans and technology.
        </p>

        <div className="space-y-4">
          {articles.length === 0 ? (
            <p className="text-zinc-500 italic">No articles yet.</p>
          ) : (
            articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block p-5 md:-mx-5 rounded-xl bg-zinc-900/50 hover:bg-zinc-900/80 transition-colors"
              >
                <article className="space-y-2">
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>

                  {article.summary && (
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                  )}

                  <div className="flex items-center gap-4 text-xs text-zinc-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{article.readingTime} min read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
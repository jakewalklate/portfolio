import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Sa2gg",
  description: "Sa2gg, an esports service.",
};

export default function Sa2ggPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-20 px-6 min-h-screen">
      <article className="max-w-3xl w-full space-y-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to all projects</span>
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              Proprietary
            </span>
            <span>•</span>
            <span>Gaming Community</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Sa2.gg
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A cross-platform gaming community with a forum, chat, and server.
          </p>
        </header>

        {/* Origin Story */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">The Problem</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most online communities rely on seperated platforms for different features. For example, a community might use Discord for chat, a forum for discussions, and a separate website for server management.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            This creates a fragmented experience for users, and makes it difficult for community managers to manage their community.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">The Vision</h2>
          <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-zinc-400">
            &quot;Bring all the features of a gaming community into one platform, <i>one database</i>.&quot;
          </blockquote>
          <p className="text-zinc-400 leading-relaxed">
            Sa2.gg was founded to solve this problem. It is a cross-platform gaming community with a seemless online and immersive experience for players.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Core Features</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">🗣️ Custom Forum Software</h3>
              <p className="text-zinc-400 text-sm">
                A forum software with a modern UI and a focus on user experience and all of their gaming data in one place.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🎮 Game Servers</h3>
              <p className="text-zinc-400 text-sm">
                A low latency game server software for hosting players.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Stack</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">Node.JS:</strong> Backend framework for the forum, and game server software.
            </li>
            <li>
              <strong className="text-zinc-200">Bootstrap:</strong> CSS framework for the forum and website.
            </li>
            <li>
              <strong className="text-zinc-200">MongoDB:</strong> NoSQL database.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-zinc-500/10 text-zinc-400 text-sm rounded-full border border-zinc-500/20">
              Project Deleted
            </span>
          </div>
        </div>
      </article>
    </main>
  );
}

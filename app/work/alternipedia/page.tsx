import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Alternipedia",
  description: "A multi-perspective, community-editable encyclopedia built on Wikipedia's foundation with transparent moderation.",
};

export default function AlternipediaPage() {
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
            <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
              Open Source
            </span>
            <span>•</span>
            <span>Knowledge Platform</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Alternipedia
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            An attempt to fulfill the promise of a truly neutral encyclopedia—presenting multiple political perspectives
            on the same topic, with full transparency and community-driven moderation. Built to complement Wikipedia,
            not replace it.
          </p>
        </header>

        {/* Vision Section */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">The Problem</h2>
          <p className="text-zinc-400 leading-relaxed">
            Wikipedia&apos;s &quot;neutral point of view&quot; policy was a revolutionary idea, but in practice,
            neutrality is impossible when editors must choose a single narrative. Controversial topics often reflect
            the perspective of whichever group controls the editing process, leaving readers with an incomplete picture
            of complex issues.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Larry Sanger, Wikipedia&apos;s co-founder, eventually left the project over concerns about systemic bias.
            Alternipedia is an attempt to solve this fundamental problem through a different approach.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">How It Works</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📚 Wikipedia Foundation</h3>
              <p className="text-zinc-400 text-sm">
                Every article starts with Wikipedia&apos;s core factual information—dates, figures, undisputed events.
                This provides a solid, well-researched base that doesn&apos;t need to be recreated.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🔀 Multiple Perspectives</h3>
              <p className="text-zinc-400 text-sm">
                Instead of forcing a single narrative, articles present different political and ideological perspectives
                side-by-side. Readers can see how the same events are interpreted across the spectrum and form their
                own conclusions.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">✏️ Community Editable</h3>
              <p className="text-zinc-400 text-sm">
                Anyone can contribute and edit, but contributions are tagged with perspective labels. The goal isn&apos;t
                to achieve consensus—it&apos;s to fairly represent the full range of informed viewpoints.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">📊 Source Transparency</h3>
              <p className="text-zinc-400 text-sm">
                Every claim links to its source, and sources are tagged with their known biases. Readers can trace
                exactly where information comes from and evaluate its credibility themselves.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">The Philosophy</h2>
          <blockquote className="border-l-4 border-zinc-600 pl-4 italic text-zinc-400">
            &quot;True neutrality isn&apos;t about finding a middle ground—it&apos;s about showing all the ground
            and trusting readers to navigate it themselves.&quot;
          </blockquote>
          <p className="text-zinc-400 leading-relaxed">
            Access to information shouldn&apos;t come pre-filtered through someone else&apos;s worldview.
            Alternipedia embraces intellectual diversity as a feature, not a bug. By making bias visible
            rather than hidden, we empower readers to think critically rather than passively consume curated narratives.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Stack</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">Next.js + Tailwind CSS:</strong> Modern React framework with
              server-side rendering, styled with utility-first CSS for rapid development.
            </li>
            <li>
              <strong className="text-zinc-200">Supabase (PostgreSQL):</strong> Backend-as-a-service providing
              real-time database, authentication, and row-level security for content management.
            </li>
            <li>
              <strong className="text-zinc-200">Vercel Hosting:</strong> Edge-optimized deployment with automatic
              scaling and global CDN for fast page loads worldwide.
            </li>
            <li>
              <strong className="text-zinc-200">Perspective Tagging System:</strong> Custom taxonomy for categorizing
              viewpoints without imposing a false left-right dichotomy.
            </li>
            <li>
              <strong className="text-zinc-200">Public Moderation Logs:</strong> All moderator actions are recorded
              in an immutable append-only log for full accountability.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-sm rounded-full border border-sky-500/20">
            ✓ MVP Shipped
          </span>
          <a
            href="https://github.com/alternipedia/alternipedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            View source →
          </a>
        </div>
      </article>
    </main>
  );
}

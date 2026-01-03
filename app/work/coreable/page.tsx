import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Coreable",
  description: "An open source platform measuring and developing future-proof workforce skills for the AI age.",
};

export default function CoreablePage() {
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
            <span className="px-2 py-0.5 bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20">
              Open Source
            </span>
            <span>•</span>
            <span>EdTech / Workforce Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Coreable
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A platform designed to answer the critical question: what skills will matter in the age of AI,
            and how can they be measured, managed, and improved?
          </p>
        </header>

        {/* Origin Story */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">The Question</h2>
          <p className="text-zinc-400 leading-relaxed">
            As AI models become capable of performing an increasing range of cognitive tasks, a fundamental
            question emerges for education and workforce development: <strong className="text-zinc-200">which
              human skills will remain valuable?</strong>
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Coreable was born from this challenge. Developed in collaboration with academics, the project
            aimed to identify, measure, and cultivate the skills that will define human value in an
            AI-augmented workforce.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Origin Story</h2>
          <p className="text-zinc-400 leading-relaxed">
            The idea emerged from the <strong className="text-zinc-200">UTS Startups incubator</strong>,
            bringing together a cross-disciplinary team of technologists, educators, and researchers.
            The project was recognized with the <strong className="text-zinc-200">Hatchable Award</strong>,
            validating its potential to address a real and growing need.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Core Concept</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🔍 Skills Identification</h3>
              <p className="text-zinc-400 text-sm">
                Academic research-backed framework identifying the core competencies that machines struggle
                to replicate—creativity, emotional intelligence, complex problem-solving, and adaptive thinking.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">📊 Measurement Tools</h3>
              <p className="text-zinc-400 text-sm">
                Validated assessment instruments to measure these future-proof skills, providing individuals
                and organizations with actionable insights into their capabilities.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">📈 Development Pathways</h3>
              <p className="text-zinc-400 text-sm">
                Personalized recommendations for skill development based on assessment results, helping users
                focus their growth on areas that will remain relevant as automation advances.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🏢 Organizational Insights</h3>
              <p className="text-zinc-400 text-sm">
                Tools for managers and HR teams to understand team capabilities, identify skill gaps, and
                make informed decisions about training and development investments.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">The Thesis</h2>
          <blockquote className="border-l-4 border-violet-600 pl-4 italic text-zinc-400">
            &quot;In a world where AI can do anything routine, the most valuable human skills are those
            that are fundamentally about being human.&quot;
          </blockquote>
          <p className="text-zinc-400 leading-relaxed">
            Rather than competing with AI on speed and accuracy, Coreable&apos;s framework focused on skills
            that complement automation—interpersonal dynamics, ethical reasoning, creative synthesis, and
            the ability to navigate ambiguity.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Stack</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">React:</strong> Component-based frontend for interactive
              assessments and dynamic skill visualizations.
            </li>
            <li>
              <strong className="text-zinc-200">GraphQL:</strong> Flexible API layer enabling efficient
              data fetching for complex skill relationship queries.
            </li>
            <li>
              <strong className="text-zinc-200">Bootstrap:</strong> Responsive UI framework ensuring
              accessibility across devices for diverse user groups.
            </li>
            <li>
              <strong className="text-zinc-200">MySQL:</strong> Relational database for structured storage
              of assessment data, user profiles, and skill taxonomies.
            </li>
            <li>
              <strong className="text-zinc-200">Google Cloud Platform:</strong> Scalable infrastructure
              for hosting and data processing.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-sm rounded-full border border-sky-500/20">
              ✓ MVP Shipped
            </span>
            <span className="px-3 py-1 bg-zinc-500/10 text-zinc-400 text-sm rounded-full border border-zinc-500/20">
              Project Archived
            </span>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-sm rounded-full border border-amber-500/20">
              🏆 Hatchable Award Winner
            </span>
          </div>
          <a
            href="https://github.com/coreable"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            View source →
          </a>
          <p className="text-sm text-zinc-500">
            <strong className="text-zinc-400">Note:</strong> This project was discontinued due to lack of
            investor interest, despite strong academic validation and the Hatchable Award recognition from
            UTS Startups.
          </p>
        </div>
      </article>
    </main>
  );
}

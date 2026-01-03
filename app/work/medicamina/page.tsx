import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Medicamina",
  description: "Open source precision medicine platform bringing genetic data to mass market for intelligent therapeutic decisions.",
};

export default function MedicaminaPage() {
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
              Open Source
            </span>
            <span>•</span>
            <span>Healthcare / Precision Medicine</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Medicamina
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A cross-platform precision medicine application designed to put genetic and medical data in patients&apos;
            hands—helping prevent pharmacogenetic misdiagnosis and enabling smarter therapeutic decisions.
          </p>
        </header>

        {/* Origin Story */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">The Problem</h2>
          <p className="text-zinc-400 leading-relaxed">
            During a human genetics lecture, a striking statistic emerged: approximately <strong className="text-zinc-200">50% of SSRIs
              are ineffective</strong> in treating depression due to pharmacogenetic factors. Patients cycle through
            medications for months or years, suffering unnecessarily, when a simple genetic screen could predict
            which drugs would actually work for them.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The technology to prevent this exists—whole genome sequencing and pharmacogenetic databases—but it rarely
            reaches common clinical settings. Medical records remain locked in physicians&apos; filing cabinets,
            inaccessible to patients who need them most.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">The Vision</h2>
          <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-zinc-400">
            &quot;Move the center of information from the physician&apos;s cabinet to the patient&apos;s pocket.&quot;
          </blockquote>
          <p className="text-zinc-400 leading-relaxed">
            Medicamina was founded to democratize precision medicine. The model: patients receive genetic testing,
            results are sent directly to their devices, and this data can be shared with any physician at any
            consultation—preventing misdiagnosis at every clinic visit.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Core Features</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">🧪 Pharmacogenetic Screening</h3>
              <p className="text-zinc-400 text-sm">
                Use genetic data to identify drug interactions and ineffective medications before prescription.
                Learn which therapeutics will actually work for your unique genome.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🗄️ Personal Medical Records</h3>
              <p className="text-zinc-400 text-sm">
                Keep your complete medical history in your pocket. Grant doctors temporary access during
                consultations while maintaining full ownership of your data.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🧠 Psychological Assessments</h3>
              <p className="text-zinc-400 text-sm">
                In-depth assessment platform featuring Big Five personality test, MMPI, Myers-Briggs, IQ tests,
                and MCMI—providing comprehensive psychological profiling.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">🌍 Ancestry & Family History</h3>
              <p className="text-zinc-400 text-sm">
                View an ancestry map, build your family tree, and track inherited diseases across generations.
                Understand your genetic heritage and its health implications.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">❤️ Fitness & Health Tracking</h3>
              <p className="text-zinc-400 text-sm">
                Record heart rate, activity levels, and vital signs. Share real-time health data with physicians
                for more informed consultations.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-sky-400 mb-2">🔒 Privacy-First Design</h3>
              <p className="text-zinc-400 text-sm">
                Built with privacy as a core principle. Your genetic and medical data stays under your control,
                with granular permissions for sharing.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Future Ideas</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">Blockchain Disease Tracking:</strong> Open, transparent public
              ledger for infectious disease surveillance with privacy-preserving techniques.
            </li>
            <li>
              <strong className="text-zinc-200">Machine Learning Diagnostics:</strong> AI-powered analysis of
              genetic markers and symptom patterns for early disease detection.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Stack</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">Flutter + Dart:</strong> Cross-platform framework enabling
              deployment to iOS, Android, Web, and Desktop from a single codebase.
            </li>
            <li>
              <strong className="text-zinc-200">Material Design:</strong> Google&apos;s design system for
              consistent, accessible UI across all platforms.
            </li>
            <li>
              <strong className="text-zinc-200">SQL Database:</strong> Structured storage for complex medical
              records, genetic data, and family tree relationships.
            </li>
            <li>
              <strong className="text-zinc-200">WatchOS Integration:</strong> Real-time health monitoring
              via smartwatch for seamless client-consultant information flow.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-zinc-500/10 text-zinc-400 text-sm rounded-full border border-zinc-500/20">
              Project Archived
            </span>
            <a
              href="https://github.com/medicamina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              View source →
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            <strong className="text-zinc-400">Note:</strong> This project has been archived. A similar approach
            to precision medicine is being pursued by{" "}
            <a
              href="https://human.health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Human Health
            </a>{" "}
            in Sydney.
          </p>
        </div>
      </article>
    </main>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Hydroponic Farm Experiment",
  description: "An indoor, low-maintenance hydroponic experiment using recycled materials to create a controlled environment for growing food.",
};

export default function HydroponicFarmPage() {
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
            <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
              Sustainability
            </span>
            <span>•</span>
            <span>Agriculture / Hardware</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Hydroponic Farm Experiment
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            An indoor experiment using recycled materials to create a controlled environment for growing fruits and vegetables.
            Designed for low maintenance, low cost, and a small physical footprint.
          </p>
        </header>

        {/* How It Works */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">Project Overview</h2>
          <p className="text-zinc-400 leading-relaxed">
            This project focused on creating a self-contained ecosystem for indoor farming. By leveraging <strong className="text-zinc-200">recycled materials</strong> and smart environmental controls, it aimed to make hydroponics accessible and efficient even in limited spaces.
          </p>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">💧 Water Management</h3>
              <p className="text-zinc-400 text-sm">
                The system features a centralized <strong>water reservoir</strong> with dedicated <strong>in and out pumps</strong> to circulate nutrient-rich water. This ensures constant hydration and nutrient delivery to the root systems.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🛡️ Filtration & Sterilization</h3>
              <p className="text-zinc-400 text-sm">
                To maintain a healthy growing environment, the system utilizes <strong>UV and small particle filtering</strong> to remove contaminants. Additionally, <strong>H₂O₂ (Hydrogen Peroxide)</strong> is used for microbe killing, preventing root rot and algae growth.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">🌱 Germination Centre</h3>
              <p className="text-zinc-400 text-sm">
                A dedicated <strong>germination centre</strong> provides the optimal conditions for starting seeds before they are transplanted into the main hydroponic system, ensuring high success rates for new crops.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">♻️ Sustainable Design</h3>
              <p className="text-zinc-400 text-sm">
                Built primarily from <strong>recycled materials</strong>, the farm minimizes waste and cost. The design prioritizes a <strong>small footprint</strong>, making it suitable for urban apartments or small homes.
              </p>
            </div>
          </div>
        </section>

        {/* Status Badge */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
              ✓ Completed Experiment
            </span>
          </div>
        </div>
      </article>
    </main>
  );
}

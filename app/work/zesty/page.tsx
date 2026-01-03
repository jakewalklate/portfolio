import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Zesty",
  description: "Next-generation adult entertainment platform built for safety, connection, and community.",
};

export default function ZestyPage() {
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
            <span className="px-2 py-0.5 bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20">
              In Development
            </span>
            <span>•</span>
            <span>Platform / Safety Tech</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Zesty
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            The next-generation adult entertainment platform built for safety, connection, and community.
            A comprehensive ecosystem for content creators and users, prioritizing security and trust.
          </p>
        </header>

        {/* Problem Section */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">The Problem</h2>
          <p className="text-zinc-400 leading-relaxed">
            The adult entertainment industry lacks a <strong className="text-zinc-200">safe and secure
              infrastructure</strong> for transactions and interactions. Content creators face rampant scams
            and fraud, making it difficult to earn a living. Users struggle to find reliable services and
            verified providers.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Existing platforms fail to address fundamental safety concerns—no escrow protection, no meaningful
            verification, and no accountability. Workers in this industry deserve the same professional tools
            and protections available in any other sector.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">The Vision</h2>
          <blockquote className="border-l-4 border-pink-600 pl-4 italic text-zinc-400">
            &quot;One comprehensive platform for everything behind the scenes in private adult industry work—
            employment, events, networking, advertising, and community.&quot;
          </blockquote>

          <h2 className="text-2xl font-bold text-white pt-4">Safety & Trust</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">💰 Escrow Payments</h3>
              <p className="text-zinc-400 text-sm">
                Funds are protected until services are verified complete. No more scams, no more
                chargebacks—both parties are protected through secure transaction handling.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🪪 ID Verification</h3>
              <p className="text-zinc-400 text-sm">
                Mandatory verification ensures all users are real and of legal age. Building a
                foundation of trust from the first interaction.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">⭐ Reputation System</h3>
              <p className="text-zinc-400 text-sm">
                Community-driven ratings and reviews help identify trusted members. Transparent
                history lets users make informed decisions.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">🚨 Safety Reporting</h3>
              <p className="text-zinc-400 text-sm">
                Direct police reporting integration and safety tools for immediate assistance
                when needed. Worker safety is non-negotiable.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Content & Interaction</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">📹 Live Streaming</h3>
              <p className="text-zinc-400 text-sm">
                Real-time broadcasting with LiveKit integration for ultra-low-latency interaction.
                Professional-grade streaming for content creators.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-pink-400 mb-2">👑 VIP Subscriptions</h3>
              <p className="text-zinc-400 text-sm">
                Exclusive content feeds for subscribers—images, videos, and status updates.
                Monetization tools that put creators first.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">💬 Private Messaging</h3>
              <p className="text-zinc-400 text-sm">
                Secure, real-time chat functionality with end-to-end privacy.
                Professional communication tools for business interactions.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Community & Services</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">🔍 Search Directory</h3>
              <p className="text-zinc-400 text-sm">
                Find companions and services nearby with location-based search.
                Verified profiles with transparent information.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-lime-400 mb-2">🎉 Events & Meetups</h3>
              <p className="text-zinc-400 text-sm">
                Organize and join gatherings to socialize with the community.
                Networking opportunities in a safe environment.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">💼 Job Listings</h3>
              <p className="text-zinc-400 text-sm">
                Dedicated section for industry-related employment opportunities.
                Studios and agencies can find talent professionally.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Stack</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">Next.js 16 + TypeScript:</strong> Modern App Router architecture
              with React Server Components and Server Actions for optimal performance.
            </li>
            <li>
              <strong className="text-zinc-200">Tailwind CSS 4 + Radix UI:</strong> Utility-first styling with
              accessible, unstyled component primitives.
            </li>
            <li>
              <strong className="text-zinc-200">PostgreSQL + Prisma:</strong> Robust relational database with
              type-safe ORM for complex data relationships.
            </li>
            <li>
              <strong className="text-zinc-200">Supabase Auth:</strong> Secure authentication and authorization
              with built-in ID verification flows.
            </li>
            <li>
              <strong className="text-zinc-200">LiveKit:</strong> WebRTC-based real-time streaming infrastructure
              for low-latency live broadcasts.
            </li>
            <li>
              <strong className="text-zinc-200">Capacitor:</strong> Cross-platform mobile deployment to iOS and
              Android from a single codebase.
            </li>
          </ul>
        </section>

        {/* Status Badge */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-sm rounded-full border border-amber-500/20">
              🚧 Under Construction
            </span>
            <a
              href="https://github.com/zesty-hot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              View source →
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            <strong className="text-zinc-400">Status:</strong> Currently pending support from payment processors.
            The platform is feature-complete but awaiting financial infrastructure partnerships.
          </p>
        </div>
      </article>
    </main>
  );
}

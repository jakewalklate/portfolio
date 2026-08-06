import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ChevronLeft, ChevronRight, Code, Dna, Home, Mail } from "lucide-react";
import Link from "next/link";
import DynamicNav from "./nav";
import ButtonStyle from '@/app/app.module.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://svnty.is-a.dev"),
  title: {
    default: "Jake Spencer Walklate [svnty]",
    template: "%s | Jake Spencer Walklate",
  },
  description:
    "Life-Technology Specialist, Convergence & Ethics Advocate, Biotech Engineer & Creative. Merging biological systems with engineering principles to drive innovation at the intersection of life and technology.",
  keywords: [
    // Personal branding
    "Jake Spencer Walklate",
    "Jake Walklate",
    "svnty",
    "svnty_dev",

    // Professional titles
    "Biotech Engineer",
    "Software Engineer",
    "Bioinformatician",
    "Biomedical Engineer",
    "Creative Developer",
    "Full Stack Developer",
    "Biotechnology Specialist",
    "Life-machine convergence specialist",
    "Life-technology specialist",
    "Technology Ethics Advocate",

    // Biotech & Biology
    "Synthetic Biology",
    "Computational Biology",
    "Genetic Engineering",
    "CRISPR Engineer",
    "Gene Editing",
    "Molecular Biology",
    "Systems Biology",
    "Protein Engineering",
    "Biomanufacturing",
    "Metabolic Engineering",

    // Bioinformatics & Data
    "Bioinformatics",
    "Genomics",
    "Proteomics",
    "DNA Sequencing",
    "Sequence Analysis",
    "Biological Data Analysis",
    "Computational Genomics",

    // Programming & Tech
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Web Development",
    "API Development",
    "Database Design",

    // Data Science & ML
    "Machine Learning Developer",
    "Data Scientist",
    "Bioinformatics Tools",
    "Scientific Computing",
    "Data Visualization",

    // General
    "Portfolio",
    "Biotechnology Innovation",
    "Interdisciplinary Engineer",
    "STEM",
    "Biotechnology",
  ],
  authors: [{ name: "Jake Spencer Walklate", url: "https://svnty.is-a.dev" }, { name: "Jake Walklate", url: "https://svnty.is-a.dev" }],
  creator: "Jake Spencer Walklate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://svnty.is-a.dev",
    title: "Jake Spencer Walklate [svnty]",
    description:
      "Biotech Engineer & Creative. Merging biological systems with engineering principles.",
    siteName: "Jake Spencer Walklate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jake Spencer Walklate [svnty]",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake Spencer Walklate [svnty]",
    description:
      "Biotech Engineer & Creative. Merging biological systems with engineering principles.",
    creator: "@svnty_dev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased! min-h-screen! bg-[#070707]! text-white! selection:bg-slate-500`}
      >
        {/* Navigation / Header */}
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="hidden md:flex items-center font-bold text-xl tracking-tighter px-3 py-1 -ml-3 rounded-full bg-white/[0.035] hover:bg-white/10 transition-all active:scale-[0.98]"><ChevronLeft className="inline -mr-1" /><span className="-mt-0.5 tracking-normal">svnty</span>&nbsp;/<ChevronRight className="inline -ml-1" /></Link>
            <Link href="/" className="md:hidden font-bold text-xl tracking-tighter"><Code /></Link>
            <DynamicNav />
            <a
              id="contact"
              href="mailto:jake@svnty.is-a.dev"
              className={`${ButtonStyle.button} px-4 py-2 text-sm font-semibold rounded-full hover:opacity-70! transition-colors hover:scale-[0.975]!`}
            >
              <span className="hidden md:block">Get in touch</span>
              <span className="block md:hidden"><Mail size={16} /></span>
            </a>
          </div>
        </header>

        <Analytics />

        {children}

        <footer className="w-full border-t border-white/10 bg-black py-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Jake Spencer Walklate. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

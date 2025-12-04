import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
    "Biotech Engineer & Creative. Merging biological systems with engineering principles. Building the future of biotech and digital experiences.",
  keywords: [
    "Jake Spencer Walklate",
    "svnty",
    "Biotech Engineer",
    "Software Engineer",
    "Creative Developer",
    "Synthetic Biology",
    "Portfolio",
  ],
  authors: [{ name: "Jake Spencer Walklate", url: "https://svnty.is-a.dev" }],
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
        url: "/og-image.png", // We might need to generate this or use a placeholder
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased! min-h-screen! bg-black! text-white! selection:bg-zinc-800!`}
      >
        {/* Navigation / Header */}
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-bold text-xl tracking-tighter">Hello</a>
            <nav className="flex gap-6 text-sm font-medium text-zinc-400">
              <a href="/who-am-i" className="hover:text-white transition-colors mx-1">About</a>
              <a href="/work" className="hover:text-white transition-colors mx-1">Work</a>
              <a href="/book" className="hover:text-white transition-colors mx-1">Book</a>
            </nav>
            <a
              id="contact"
              href="mailto:jake@svnty.is-a.dev"
              className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get in touch
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

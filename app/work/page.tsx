import React from "react";

export default function WorkPage() {
  const projects = [
    {
      title: "Alternipedia",
      description: "An open, collaborative encyclopedia designed to emphasize exploring multiple viewpoints on complex topics.",
      tags: ["React", "Next.js", "Wikipedia", "Vercel"],
      link: "https://github.com/alternipedia",
      img: "/alternipedia.png"
    },
    {
      title: "Medicamina",
      description: "A precision medicine platform for personalized treatment recommendations and disease prediction.",
      tags: ["Flutter", "Precision Medicine", "Data Analytics", "Azure Cloud"],
      link: "https://github.com/medicamina",
      img: "/medicamina.png"
    },
    {
      title: "Coreable",
      description: "Tools to expertly measure and map soft skills.",
      tags: ["TypeScript", "GraphQL", "Google Cloud"],
      link: "https://github.com/coreable",
      img: "/coreable.png"
    },
    {
      title: "Zesty",
      description: "A safe platform for adult industry workers to accept payments and report abusive clients.",
      tags: ["Next.js", "Payment Processing", "Escrow", "Google Cloud"],
      link: "https://github.com/zesty-hot",
      img: "/zesty.png"
    },
    {
      title: "Blood cell classifier",
      description: "A machine learning model to identify blood cell categories.",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      link: "https://github.com/svnty/blood-cell-classification/blob/main/notebook.ipynb",
      img: "/bloodcell.png"
    },
    {
      title: "Arduino Community IntelliSense fix",
      description: "A Visual Studio Code extension to fix IntelliSense for Arduino.",
      tags: ["Visual Studio Code", "Arduino", "IntelliSense"],
      link: "https://marketplace.visualstudio.com/items?itemName=svnty.vscode-arduino-intellisense",
      img: "/arduino.png"
    },
    {
      title: "Low earth orbit satellite tracker",
      description: "A 3D printed calculator to track low earth orbit satellites.",
      tags: ["C++", "Arduino", "3D FDM Printing", "Computer Aided Design"],
      link: "https://github.com/svnty/ISS-arduino-tracker",
      img: "/isstracker.jpeg"
    },
    {
      title: "Mendelian genetics simulator",
      description: "A simple rust engine to to simulate genetic inheritence of same-sex attraction.",
      tags: ["Rust", "Genetics", "Bioinformatics"],
      link: "https://github.com/svnty/homosexuality-simulator",
      img: "/gene-simulator.png"
    },
    {
      title: "Hydroponic farm",
      description: "Self managing hydroponic farm to grow plants in a controlled environment.",
      tags: ["Arduino", "Hydroponics", "Alternating Current", "Direct Current"],
      link: "#",
      img: "/farm.png"
    },
  ];

  return (
    <main className="flex flex-col items-center pt-32 pb-20 px-6 min-h-screen">
      <section className="max-w-5xl w-full space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering Projects
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A collection of projects exploring the intersection of humans and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              target="_blank"
              key={index}
              href={project.link}
              className="group block p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all"
            >
              <div className="aspect-video w-full bg-zinc-800/50 rounded-xl mb-6 overflow-hidden relative">
                {/* Placeholder for project image */}
                <img src={project.img} className="absolute inset-0 flex items-center justify-center text-zinc-600 font-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="space-y-8 pt-12 border-t border-white/10">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Fast Food Crew Member</h3>
                <div className="text-zinc-400">Fast Food Chain</div>
              </div>
              <div className="text-zinc-500 font-mono text-sm">
                Sep 2024 — Present
              </div>
            </div>
            <ul className="list-disc list-inside text-zinc-400 leading-relaxed">
              <li>Voted most liked team member. Consistently delivering high-quality service in a fast-paced environment.</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Analyst Programmer</h3>
                <div className="text-zinc-400">ClockOn Australia</div>
              </div>
              <div className="text-zinc-500 font-mono text-sm">
                Jul 2019 — Feb 2020
              </div>
            </div>
            <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
              <li>Converted a legacy windows application from Delphi into C# and JavaScript for modern day web browsers in an agile environment.</li>
              <li>Trained management on new tools to create cross browser friendly web applications.</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Fiber Optic Technician</h3>
                <div className="text-zinc-400">Schokman</div>
              </div>
              <div className="text-zinc-500 font-mono text-sm">
                Feb 2015 — Dec 2015
              </div>
            </div>
            <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
              <li>Connected houses to the national broadband network by splicing, stripping and testing fibre optic cables.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">
                Resume
              </h2>
              <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                Download my resume for a summary of my experience.
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="shrink-0 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75V1.5m0 0l3 3m-3-3l-3 3M12 9.75V1.5" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
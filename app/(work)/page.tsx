import { IdCard } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function WorkPage() {
  const work_in_progress = [
    {
      title: 'OpenBio Operating System (OBOS)',
      description: 'An open-source software ecosystem for biological research and development.',
      tags: ["Rust", "WebAssembly", "React", "PostgreSQL"],
      link: '/work/obos',
      img: '/openbio-os.png',
      linkType: 'internal'
    },
  ];

  const interactive_projects = [
    {
      title: 'CHIP-8 emulator',
      description: 'An interactive CHIP-8 emulator with visible machine state and playable games.',
      tags: ["Rust", "WebAssembly", "Interactive"],
      link: '/work/chip8-emulator',
      img: '/chip8.png',
      linkType: 'internal'
    },
    {
      title: "Pavlov's Dog",
      description: "An interactive spiking neural network demonstrating classical conditioning with Hebbian learning.",
      tags: ["Rust", "WebAssembly", "Neuroscience", "Interactive"],
      link: "/work/pavlovs-dog",
      img: '/pdog.png'
    }
  ];

  const projects = [
    {
      title: "Alternipedia",
      description: "An open, collaborative encyclopedia designed to emphasize exploring multiple viewpoints on complex topics.",
      tags: ["React", "Next.js", "Wikipedia", "Vercel", "Tailwind"],
      link: "/work/alternipedia",
      img: "/alternipedia.png",
      linkType: "internal"
    },
    {
      title: "Medicamina",
      description: "A precision medicine platform for personalized treatment recommendations and disease prediction.",
      tags: ["Flutter", "Precision Medicine", "Data Analytics", "Azure Cloud", "Material Design"],
      link: "/work/medicamina",
      img: "/medicamina.png",
      linkType: "internal"
    },
    {
      title: "Coreable",
      description: "Tools to expertly measure and map soft skills.",
      tags: ["React", "GraphQL", "Google Cloud", "Bootstrap"],
      link: "/work/coreable",
      img: "/coreable.png",
      linkType: "internal"
    },
    {
      title: "Zesty",
      description: "A safe platform for adult industry workers to accept payments and report abusive clients.",
      tags: ["Next.js", "Payment Processing", "Escrow", "Google Cloud", "Tailwind"],
      link: "/work/zesty",
      img: "/zesty.png",
      linkType: "internal"
    },
    {
      title: "Blood cell classifier",
      description: "A machine learning model to identify blood cell categories.",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      link: "/work/blood-cell-mlp",
      img: "/bloodcell.png",
      linkType: "internal"
    },
    {
      title: "Arduino Community IntelliSense fix",
      description: "A Visual Studio Code extension to fix IntelliSense for Arduino.",
      tags: ["Visual Studio Code", "Arduino", "IntelliSense"],
      link: "https://marketplace.visualstudio.com/items?itemName=svnty.vscode-arduino-intellisense",
      img: "/arduino.png",
      linkType: "external"
    },
    {
      title: "Low earth orbit satellite tracker",
      description: "A 3D printed calculator to track low earth orbit satellites.",
      tags: ["C++", "Arduino", "3D FDM Printing", "Computer Aided Design"],
      link: "/work/satellite-tracker",
      img: "/isstracker.jpeg",
      linkType: "internal"
    },
    {
      title: "Mendelian genetics simulator",
      description: "A simple rust engine to simulate genetic inheritence of same-sex attraction.",
      tags: ["Rust", "Genetics", "Bioinformatics"],
      link: "https://github.com/jakewalklate/homosexuality-simulator",
      img: "/gene-simulator.png",
      linkType: "external"
    },
    {
      title: "Hydroponic farm",
      description: "Self managing hydroponic farm to grow plants in a controlled environment.",
      tags: ["Arduino", "Hydroponics", "Alternating Current", "Direct Current"],
      link: "/work/hydroponic-farm",
      img: "/farm.png",
      linkType: "internal"
    },
    {
      title: "sa2.gg",
      description: "A gaming community with a forum, chat, and server.",
      tags: ["Gaming", "Node.js", "MongoDB", "Bootstrap"],
      link: "/work/sa2gg",
      img: "/sa2gg.png",
      linkType: "internal"
    },
    {
      title: "Telcor telecommunications",
      description: "An administration system for a fictional telecommunications company.",
      tags: ["Java", "MySQL", "Class Assignment"],
      link: "#",
      img: "/telcor.png",
      linkType: "internal"
    },
    {
      title: "Sister",
      description: "A brand page for a local skateboarding company.",
      tags: ["HTML", "CSS", "Bootstrap"],
      link: "#",
      img: "/sister.png",
      linkType: "internal"
    }
  ];

  const contracted_freelance = [
    {
      title: 'Investible Games',
      description: 'A venture capital company I contracted to, to develop games for their website.',
      tags: ['JavaScript', 'HTML', 'Freelance'],
      link: '#',
      img: '/investiblegames.png',
      linkType: 'internal'
    },
    {
      title: 'Complete Ceramic Care',
      description: 'A marketing and advertising page for a car detailing company.',
      tags: ['Zola', 'Freelance'],
      link: 'http://complete-ceramic-care.github.io/',
      img: '/completeceramiccare.jpg',
      linkType: 'external'
    }
  ];

  return (
    <main className="flex flex-col items-center pt-32 pb-20 px-6 min-h-screen">
      <section className="max-w-5xl w-full space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A collection of projects exploring the intersection of humans and technology.
          </p>
        </div>

        {/* <div className="space-y-4 -mt-4 mb-6">
          <h3 className="text-2xl font-bold text-stone-300">Work In Progress</h3>
          <div className="grid grid-cols-1 gap-6">
            {work_in_progress.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="group flex flex-col h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all"
              >
                <div className="w-full max-h-32 md:max-h-66 bg-zinc-800/50 rounded-xl mb-4 overflow-hidden">
                  <img src={project.img} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4 text-sm grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div> */}

        <div className="space-y-4 mb-6">
          <h3 className="text-2xl font-bold text-stone-300">Interactive Experiments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interactive_projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="group flex flex-col h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all"
              >
                <div className="w-full max-h-32 md:max-h-66 bg-zinc-800/50 rounded-xl mb-4 overflow-hidden">
                  <img src={project.img} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4 text-sm grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* <div className="space-y-4 mb-6">
          <h3 className="text-2xl font-bold text-stone-300">Web apps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects_trimmed.map((project, index) => {
              const cardContent = (
                <>
                  <div className="aspect-video w-full bg-zinc-800/50 rounded-xl mb-6 overflow-hidden relative">
                    <img src={project.img} className="absolute inset-0 flex items-center justify-center text-zinc-600 font-medium" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 line-clamp-2 grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              const className = "group flex flex-col h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all";

              return project.linkType === "internal" ? (
                <Link key={index} href={project.link} className={className}>
                  {cardContent}
                </Link>
              ) : (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div> */}

        {/* <div className="space-y-4 mb-6">
          <h3 className="text-2xl font-bold text-stone-300">Contracted Freelance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contracted_freelance.map((project, index) => {
              const cardContent = (
                <>
                  <div className="aspect-video w-full bg-zinc-800/50 rounded-xl mb-6 overflow-hidden relative">
                    <img src={project.img} className="absolute inset-0 flex items-center justify-center text-zinc-600 font-medium" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 line-clamp-2 grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              const className = "group flex flex-col h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all";

              return project.linkType === "internal" ? (
                <Link key={index} href={project.link} className={className}>
                  {cardContent}
                </Link>
              ) : (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div> */}

        {/* <div className="space-y-8 pt-12 border-t border-white/10">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Work Experience
          </h2>

          <a href="https://pattysmiths.com.au/" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Fast Food Crew Member</h3>
                  <div className="text-zinc-400">Pattysmiths</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  Sep 2024 — Present
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed">
                <li>Voted most liked team member.</li>
              </ul>
            </div>
          </a>

          <Link href="/work/medicamina" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                  <div className="text-zinc-400">Medicamina</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  Feb 2022 - Oct 2023
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Developed a web application for medical clinical data.</li>
              </ul>
            </div>
          </Link>

          <a href="https://www.frangos.com.au" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Waiter</h3>
                  <div className="text-zinc-400">Frangos Charcoal Chicken</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  Jun 2021 - Aug 2021
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Took orders, served customers, and handled payments.</li>
              </ul>
            </div>
          </a>

          <Link href="/work/coreable" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Founding Backend Engineer</h3>
                  <div className="text-zinc-400">Coreable</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  Aug 2020 — Jun 2021
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Developed a GraphQL API to serve as the single source of truth for employee data.</li>
                <li>Built a real-time analytics dashboard to visualize employee performance metrics.</li>
                <li>Implemented a role-based access control system to ensure data privacy and security.</li>
              </ul>
            </div>
          </Link>

          <a href="https://clockon.com.au" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Analyst Programmer</h3>
                  <div className="text-zinc-400">ClockOn</div>
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
          </a>

          <Link href="/work/sa2gg" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                  <div className="text-zinc-400">Sa2.gg</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  Feb 2019 - Jul 2019
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Developed a web application for a local esports organisation.</li>
              </ul>
            </div>
          </Link>


          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">2x Jobs Simultaneously (Labourer + Delivery Driver)</h3>
                <div className="text-zinc-400">Misc</div>
              </div>
              <div className="text-zinc-500 font-mono text-sm">
                2018
              </div>
            </div>
            <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
              <li>Worked as a construction labourer on residential sites while simultaneously managing a delivery route.</li>
              <li>Maintained a high level of physical fitness and time management to balance two demanding roles.</li>
            </ul>
          </div>

          <a href="https://erinaleagues.com.au" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Kitchen Assistant</h3>
                  <div className="text-zinc-400">Erina Leagues Club</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  2017
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Assisted in the day to day running of the kitchen by washing dishes and cleaning up after events.</li>
              </ul>
            </div>
          </a>

          <a href="https://www.facebook.com/photo.php?fbid=862572302578504&set=a.627904512711952&id=100064772256189" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Kitchen Hand</h3>
                  <div className="text-zinc-400">Sit & Chats Café</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  Late 2016
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Assisted in the day to day running of the kitchen by washing dishes and cleaning up after events.</li>
              </ul>
            </div>
          </a>

          <a href="https://goodwillbuilding.com.au" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Construction Labourer</h3>
                  <div className="text-zinc-400">Goodwill Building</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  Early 2016
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Worked as a construction labourer on a range of projects including house renovations and new builds.</li>
              </ul>
            </div>
          </a>

          <a href="https://schokman.co" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Fiber Optic Technician</h3>
                  <div className="text-zinc-400">Schokman</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  2015
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Connected houses to the national broadband network by splicing, stripping and testing fibre optic cables.</li>
              </ul>
            </div>
          </a>


          <a href="https://mcdonalds.com.au" target="_blank" className="block">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Crew Member</h3>
                  <div className="text-zinc-400">McDonalds</div>
                </div>
                <div className="text-zinc-500 font-mono text-sm">
                  2014
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
                <li>Worked as a crew member at McDonalds.</li>
              </ul>
            </div>
          </a>
        </div> */}


        <div className="space-y-8 pt-6 border-t border-white/10">
          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-amber-400 transition-colors duration-200">
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
              className="shrink-0 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-300 transition-colors flex items-center gap-2 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75V1.5m0 0l3 3m-3-3l-3 3M12 9.75V1.5" />
              </svg>
              Download
            </a>
          </div> */}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-sky-400 transition-colors duration-200">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">
                Business Card
              </h2>
              <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                Download my business card for my contact information.
              </p>
            </div>
            <a
              href="/business-card.png"
              target="_blank"
              className="shrink-0 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-300 transition-colors flex items-center gap-2 text-sm"
            >
              <IdCard />
              Download
            </a>
          </div>
        </div>
      </section>
    </main >
  );
}
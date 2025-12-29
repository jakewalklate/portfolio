"use client";

import { useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";

interface CourseUnit {
  code: string;
  name: string;
}

interface Institution {
  name: string;
  courses: CourseUnit[];
}

const institutions: Institution[] = [
  {
    name: "University of Technology Sydney",
    courses: [
      { code: "41028", name: "Engineering Work Experience" },
      { code: "41055", name: "Professional Experience Review" },
      { code: "41035", name: "Professional Practice Preparation 1" },
      { code: "68037", name: "Physics" },
      { code: "33130", name: "Maths 1" },
      { code: "33230", name: "Maths 2" },
      { code: "38230", name: "Introduction to Engineering Projects" },
      { code: "48240", name: "Design and Innovation Fundamentals" },
      { code: "48250", name: "Economics and Finance for Engineering Projects" },
      { code: "38260", name: "Engineering Project Management" },
      { code: "48270", name: "Entrepreneurship and Commercialisation" },
      { code: "65111", name: "Chemistry 1" },
      { code: "91161", name: "Cell Biology and Genetics" },
      { code: "65212", name: "Chemistry 2" },
      { code: "91314", name: "General Microbiology" },
      { code: "91132", name: "Molecular Biology" },
      { code: "91320", name: "Metabolic Biochemistry" },
      { code: "91178", name: "Applications of Molecular Biology" },
      { code: "91400", name: "Human Anatomy and Physiology" },
      { code: "91401", name: "Immunology" },
      { code: "91500", name: "Histology" },
      { code: "91827", name: "Advanced Medical Biochemistry" },
      { code: "91829", name: "Microbiology Diagnosis" },
      { code: "91180", name: "Immunology and Human Health" },
      { code: "41029", name: "Engineering Research Preparation" },
      { code: "41030", name: "Engineering Capstone" },
      { code: "48610", name: "Introduction to Mechanical and Mechatronic Engineering" },
    ],
  },
  {
    name: "TAFE NSW",
    courses: [
      { code: "ICTDBS403", name: "Create basic databases" },
      { code: "ICTICT404", name: "Use online learning tools" },
      { code: "ICTICT417", name: "Identify, evaluate and apply industry-specific technologies" },
      { code: "ICTICT418", name: "Contribute to copyright, ethics and privacy in an ICT environment" },
      { code: "ICTPRG402", name: "Apply query language (SQL)" },
      { code: "ICTPRG403", name: "Develop data-driven applications" },
      { code: "ICTPRG404", name: "Test applications" },
      { code: "ICTPRG405", name: "Automate processes" },
      { code: "ICTPRG406", name: "Apply introductory object-oriented language skills" },
      { code: "ICTPRG410", name: "Build a user interface" },
      { code: "ICTPRG414", name: "Apply introductory programming skills in another language" },
      { code: "ICTPRG415", name: "Apply skills in object-oriented design" },
      { code: "ICTPRG418", name: "Apply intermediate programming skills in another language" },
      { code: "ICTPRG419", name: "Analyse software requirements" },
      { code: "ICTPRG527", name: "Apply intermediate object-oriented language skills" },
      { code: "ICTWEB409", name: "Develop cascading style sheets (CSS)" },
      { code: "ICTWEB4111", name: "Produce basic client-side scripts for dynamic web pages" },
      { code: "ICTWEB429", name: "Create a markup language document to specification" },
      { code: "BSBRES401", name: "Analyse and present research information" },
      { code: "BSBWHS401", name: "Implement and monitor WHS policies and procedures" },
      { code: "ICTPRG407", name: "Write script for software applications" },
      { code: "RIICOM301D", name: "Communicate information" },
      { code: "VU21998", name: "Utilise basic network concepts and protocols in cyber security" },
      { code: "VU21989", name: "Test concepts and procedures for cyber security" },
      { code: "VU21990", name: "Recognise the need for cyber security in an organisation" },
      { code: "VU21991", name: "Implement network security infrastructure for an organisation" },
      { code: "ICAICT101A", name: "Operate a personal computer" },
      { code: "ICAICT105A", name: "Operate spreadsheet applications" },
      { code: "ICAICT106A", name: "Operate presentation packages" },
      { code: "NSWTCOM212B", name: "Use intercultural communication skills" },
      { code: "NSWTCOM306B", name: "Write non-routine texts" },
      { code: "NSWTCOM307B", name: "Demonstrate inclusive communication skills" },
      { code: "NSWTLRN301B", name: "Draw conclusions from information for study purposes" },
      { code: "NSWTNM303A", name: "Use calculations in work and training contexts" },
      { code: "NSWTNM304A", name: "Use measurements in work and training contexts" },
      { code: "NSWTNM305A", name: "Read and interpret graphs, charts and tables in work and training context" },
      { code: "NSWTPLG302", name: "Develop and implement a project" },
      { code: "NSWTPLG304A", name: "Research and implement an action plan for employment and training" },
      { code: "NSWTRDG301B", name: "Read and respond to non-routine texts" },
      { code: "NSWTSU302B", name: "Develop a personal action plan for environmental sustainability" },
      { code: "NSWTTMW301B", name: "Apply team participations skills" },
      { code: "ICTNWK302", name: "Determine and action network problems" },
      { code: "ICTNWK305", name: "Install and manage network protocols" },
      { code: "VU21992", name: "Develop a cyber security industry project" },
      { code: "VU21993", name: "Secure a networked personal computer" },
      { code: "VU21994", name: "Perform basic cyber security data analysis" },
      { code: "VU21995", name: "Manage the security infrastructure of an organisation" },
      { code: "VU21996", name: "Evaluate and test an incident response plan for an enterprise" },
      { code: "VU21997", name: "Expose website security vulnerabilities" },
    ],
  },
];

export default function CompletedClasses() {
  const [openInstitution, setOpenInstitution] = useState<string | null>(null);

  const toggleInstitution = (name: string) => {
    setOpenInstitution(openInstitution === name ? null : name);
  };

  return (
    <div className="space-y-4">
      {institutions.map((institution) => (
        <div
          key={institution.name}
          className="rounded-xl bg-zinc-900/30 border border-white/5 overflow-hidden"
        >
          <button
            onClick={() => toggleInstitution(institution.name)}
            className="w-full px-5 py-4 flex items-center justify-between gap-4 hover:bg-zinc-800/30 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                {institution.name === "University of Technology Sydney" && (
                  <img src="/university-of-technology-sydney.png" alt="University of Technology Sydney" className="size-5 invert" />
                )}
                {institution.name === "TAFE NSW" && (
                  <img src="/tafe-nsw.png" alt="TAFE NSW" className="w-5 h-1.5 invert my-2" />
                )}
              </div>
              <div className="text-left">
                <h4 className="text-white font-medium">{institution.name}</h4>
                <p className="text-zinc-500 text-sm">
                  {institution.courses.length} units completed
                </p>
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`text-zinc-500 transition-transform duration-300 ${openInstitution === institution.name ? "rotate-180" : ""
                }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${openInstitution === institution.name
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
              }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-4 pt-2 border-t border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {institution.courses.map((course) => (
                    <div
                      key={course.code}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-zinc-800/30 border border-white/5 hover:border-cyan-300/30 transition-colors"
                    >
                      <span className={`text-zinc-600 font-mono text-xs shrink-0 ${institution.name === "University of Technology Sydney" ? "w-12" : "w-20"}`}>
                        {course.code}
                      </span>
                      <span className="text-zinc-300 text-sm group-hover:text-cyan-300 transition-colors">
                        {course.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

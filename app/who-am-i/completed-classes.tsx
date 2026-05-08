"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CourseUnit {
  code?: string;
  name: string;
}

interface CourseCategory {
  code: string;
  name: string;
  courses: CourseUnit[];
}

interface Institution {
  name: string;
  courses?: CourseUnit[];
  categories?: CourseCategory[];
}

const institutions: Institution[] = [
  {
    name: "University of Technology Sydney",
    categories: [
      {
        code: "STM90994",
        name: "Professional Engineering Practice",
        courses: [
          { code: "41028", name: "Engineering Work Experience" },
          { code: "41055", name: "Professional Experience Review" },
          { code: "41035", name: "Professional Practice Preparation 1" },
        ],
      },
      {
        code: "STM90106",
        name: "Core subjects",
        courses: [
          { code: "35010", name: "Foundation Mathematics" },
          { code: "68037", name: "Physical Modelling" },
          { code: "33130", name: "Mathematical Modelling 1" },
          { code: "33230", name: "Mathematical Modelling 2" },
          { code: "38230", name: "Introduction to Engineering Projects" },
          { code: "48240", name: "Design and Innovation Fundamentals" },
          { code: "48250", name: "Economics and Finance for Engineering Projects" },
          { code: "38260", name: "Engineering Project Management" },
          { code: "48270", name: "Entrepreneurship and Commercialisation" },
          { code: "41029", name: "Engineering Research Preparation" },
          { code: "41030", name: "Engineering Capstone" },
        ],
      },
      {
        code: "MAJ06256",
        name: "Pathology",
        courses: [
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
          { code: "91180", name: "Immunology and Human Health" },
          { code: "91827", name: "Advanced Medical Biochemistry" },
          { code: "91829", name: "Microbiology Diagnosis" },
          { code: "91707", name: "Pharmacology" },
          { code: "91148", name: "Human Genetics and Precision Medicine" },
          { code: "60001", name: "Principles of Scientific Practice" },
        ],
      },
      {
        code: "SMJ03050",
        name: "Mechatronic Engineering",
        courses: [
          { code: "41070", name: "Embedded Mechatronics Studio" },
          { code: "48622", name: "Embedded Mechatronics Systems" },
          { code: "41012", name: "Programming for Mechatronic Systems" },
          { code: "41014", name: "Sensors and Control for Mechatronic Systems" },
          { code: "41099", name: "Introduction to Mechatronics Engineering" },
          { code: "48530", name: "Circuit Analysis and Design" },
          { code: "48610", name: "Introduction to Mechanical Engineering" },
          { code: "41039", name: "Programming 1" },
        ],
      },
      {
        code: "SMJ03047",
        name: "Biomedical Engineering",
        courses: [
          { code: "42026", name: "Biomedical Polymers" },
          { code: "49261", name: "Biomedical Instrumentation" },
          { code: "49275", name: "Neural Networks and Fuzzy Logic" },
          { code: "41160", name: "Introduction to Biomedical Engineering" },
          { code: "60101", name: "Chemistry and Materials Science" },
        ],
      },
      {
        code: "SMJ03066",
        name: "Data Analytics",
        courses: [
          { code: "48024", name: "Programming 2" },
          { code: "31256", name: "Image Processing and Pattern Recognition" },
          { code: "31005", name: "Machine Learning" },
          { code: "31250", name: "Introduction to Data Analytics" },
        ],
      },
    ],
  },
  {
    name: "TAFE NSW",
    categories: [
      {
        code: "ICT40515",
        name: "Certificate IV in Programming",
        courses: [
          { code: "ICTDBS403", name: "Create basic databases" },
          { code: "ICTICT404", name: "Use online learning tools" },
          { code: "ICTICT417", name: "Identify, evaluate and apply current industry-specific technologies to meet industry standards" },
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
        ],
      },
      {
        code: "22334VIC",
        name: "Certificate IV in Cyber Security",
        courses: [
          { code: "BSBRES401", name: "Analyse and present research information" },
          { code: "BSBWHS401", name: "Implement and monitor WHS policies, procedures, and programs to meet legislative requirements" },
          { code: "ICTPRG405", name: "Automate processes" },
          { code: "ICTPRG407", name: "Write script for software applications" },
          { code: "RIICOM301D", name: "Communicate information" },
          { code: "VU21998", name: "Utilise basic network concepts and protocols required in cyber security" },
          { code: "VU21989", name: "Test concepts and procedures for cyber security" },
          { code: "VU21990", name: "Recognise the need for cyber security in an organisation" },
          { code: "VU21991", name: "Implement network security infrastructure for an organisation" },
          { code: "VU21992", name: "Develop a cyber security industry project" },
          { code: "VU21993", name: "Secure a networked personal computer" },
          { code: "VU21994", name: "Perform basic cyber security data analysis" },
          { code: "VU21995", name: "Manage the security infrastructure of an organisation" },
          { code: "VU21996", name: "Evaluate and test an incident response plan for an enterprise" },
          { code: "VU21997", name: "Expose website security vulnerabilities" },
        ],
      },
      {
        code: "10091NAT",
        name: "Certificate III in Employment and Training",
        courses: [
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
        ],
      },
      {
        code: "Statement of Attainment",
        name: "Networking Essentials",
        courses: [
          { code: "ICTNWK302", name: "Determine and action network problems" },
          { code: "ICTNWK305", name: "Install and manage network protocols" },
        ],
      },
    ],
  },
];

export default function CompletedClasses() {
  const [openInstitution, setOpenInstitution] = useState<string | null>(null);

  const getInstitutionUnitCount = (institution: Institution) => {
    if (institution.categories) {
      return institution.categories.reduce(
        (total, category) => total + category.courses.length,
        0
      );
    }

    return institution.courses?.length ?? 0;
  };

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
                  {getInstitutionUnitCount(institution)} units completed
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
                {institution.categories ? (
                  <div className="space-y-5">
                    {institution.categories.map((category) => (
                      <section key={category.code} className="space-y-2">
                        <h5 className="text-zinc-300 text-sm font-semibold tracking-wide">
                          {category.code} - {category.name}
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {category.courses.map((course) => (
                            <div
                              key={`${category.code}-${course.code ?? course.name}`}
                              className="group flex items-start gap-3 p-3 rounded-lg bg-zinc-800/30 border border-white/5 hover:border-cyan-300/30 transition-colors"
                            >
                              {course.code && (
                                <span className="text-zinc-600 font-mono text-xs shrink-0 w-24 whitespace-nowrap">
                                  {course.code}
                                </span>
                              )}
                              <span className="text-zinc-300 text-sm min-w-0 leading-snug group-hover:text-cyan-300 transition-colors">
                                {course.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {institution.courses?.map((course) => (
                      <div
                        key={course.code ?? course.name}
                        className="group flex items-start gap-3 p-3 rounded-lg bg-zinc-800/30 border border-white/5 hover:border-cyan-300/30 transition-colors"
                      >
                        {course.code && (
                          <span className="text-zinc-600 font-mono text-xs shrink-0 w-24 whitespace-nowrap">
                            {course.code}
                          </span>
                        )}
                        <span className="text-zinc-300 text-sm min-w-0 leading-snug group-hover:text-cyan-300 transition-colors">
                          {course.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

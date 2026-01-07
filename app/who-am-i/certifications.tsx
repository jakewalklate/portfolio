"use client";

import { useState } from "react";
import { ChevronDown, Award, Building2, GraduationCap, HardHat } from "lucide-react";

interface Certification {
  name: string;
  date?: string;
}

interface CertificationProvider {
  name: string;
  icon: "linkedin" | "udemy" | "college" | "organization" | "safety";
  certifications: Certification[];
}

const providers: CertificationProvider[] = [
  {
    name: "LinkedIn Learning",
    icon: "linkedin",
    certifications: [
      { name: "Artificial Intelligence Foundations: Neural Network", date: "2025" },
      { name: "Machine Learning Foundations: Calculus", date: "2025" },
      { name: "The Data Science of Healthcare, Medicine, and Public Health", date: "2025" },
      { name: "Electronics Foundations: Fundamentals", date: "2025" },
      { name: "Machine Learning and AI Foundations: Decision Trees with KNIME", date: "2024" },
      { name: "Introduction to Machine Learning with KNIME", date: "2024" },
      { name: "Python Data Analysis", date: "2024" },
      { name: "Rapid Prototyping for Product Design", date: "2024" },
      { name: "Git Essential Training", date: "2023" },
      { name: "CompTIA A+ (220-1001) Cert Prep 6: Physical Networking", date: "2020" },
      { name: "Explore App Development with the MERN Stack", date: "2020" },
      { name: "Learning Full-Stack JavaScript Development: MongoDB, Node, and React", date: "2020" },
      { name: "Networking Foundations: Networking Basics", date: "2020" },
      { name: "React.js: Essential Training", date: "2020" },
      { name: "React: Securing Applications", date: "2020" },
      { name: "Advance your Node.js Skills", date: "2020" },
      { name: "Advanced Node.js: Scaling Applications", date: "2020" },
      { name: "Learning Subnetting", date: "2020" },
      { name: "Node.js: Microservices", date: "2020" },
      { name: "Advanced Express", date: "2019" },
      { name: "Angular: Progressive Web Apps", date: "2019" },
      { name: "Become a MEAN Javascript Developer", date: "2019" },
      { name: "Building RESTful Web APIs with Node.js and Express", date: "2019" },
      { name: "Databases for Node.js Developers", date: "2019" },
      { name: "Explore Web Development with Node.js", date: "2019" },
      { name: "Express Essential Training", date: "2019" },
      { name: "Learning MongoDB", date: "2019" },
      { name: "Learning Node.js", date: "2019" },
      { name: "Learning SQL Programming", date: "2019" },
      { name: "Learning Vuex", date: "2019" },
      { name: "Learning webpack 4", date: "2019" },
      { name: "Node.js: Debugging and Performance Tuning", date: "2019" },
      { name: "Node.js: Real-Time Web with Socket.IO", date: "2019" },
      { name: "Node.js: Testing and Code Quality", date: "2019" },
      { name: "SQL: Data Reporting and Analysis", date: "2019" },
      { name: "Vue.js 2 Essential Training", date: "2019" },
      { name: "Angular: Ecosystems", date: "2019" },
      { name: "Angular: Maintaining Applications", date: "2019" },
      { name: "Angular: Securing Apps", date: "2019" },
      { name: "Building Vue and Node Apps with Authentication", date: "2019" },
      { name: "C# Object-Oriented Programming Tips and Tricks", date: "2019" },
      { name: "Creating a Culture of Privacy", date: "2019" },
      { name: "First Look: Rust", date: "2019" },
      { name: "IT Security: Key Policies and Resources", date: "2019" },
      { name: "Implementing a Privacy, Risk and Assurance Program", date: "2019" },
      { name: "Learning RxJS", date: "2019" },
      { name: "Learning Vue.js", date: "2019" },
      { name: "Microsoft SQL Server 2019 Essential Training", date: "2019" },
      { name: "Node.js: Deploying Applications", date: "2019" },
      { name: "Scrum: Advanced", date: "2019" },
      { name: "Scrum: The Basics", date: "2019" },
      { name: "TypeScript Essential Training", date: "2019" },
      { name: "UX Foundations: Multidevice Design", date: "2019" },
      { name: "Understanding Copyright: A Deeper Dive", date: "2019" },
      { name: "Understanding Intellectual Property", date: "2019" },
      { name: "Understanding Patents: A Deeper Dive", date: "2019" },
      { name: "Understanding Rights of Publicity: A Deeper Dive", date: "2019" },
      { name: "Understanding Trade Secrets: A Deeper Dive", date: "2019" },
      { name: "Understanding Trademarks: A Deeper Dive", date: "2019" },
      { name: "User Experience for Web Design", date: "2019" },
      { name: "Advanced Node.js", date: "2019" },
      { name: "Agile at Work: Reporting with Agile Charts and Boards", date: "2019" },
      { name: "Angular Essential Training", date: "2019" },
      { name: "Angular: Building Large Applications", date: "2019" },
      { name: "Angular: Building an Interface", date: "2019" },
      { name: "Angular: Material Design", date: "2019" },
      { name: "Angular: Routing", date: "2019" },
      { name: "Angular: Workflows", date: "2019" },
      { name: "Building Angular and Node Apps with Authentication", date: "2019" },
      { name: "Data Science Foundations: Fundamentals", date: "2019" },
      { name: "Learning Angular", date: "2019" },
      { name: "Learning the Angular CLI", date: "2019" },
      { name: "Project Management Simplified", date: "2019" },
      { name: "ASP.NET Core: Security", date: "2019" },
      { name: "Node.js: Design Patterns", date: "2019" },
      { name: "SQL Essential Training", date: "2019" },
      { name: "Advanced Java Programming", date: "2019" },
      { name: "C# & .NET: Programming", date: "2019" },
      { name: "Choosing a Cloud Platform for Developers: AWS, Azure, and GCP", date: "2019" },
      { name: "Electron: Building Cross Platform Desktop Apps", date: "2019" },
      { name: "Learning .NET Programming", date: "2019" },
      { name: "Learning npm the Node Package Manager", date: "2019" },
      { name: "Node.js: Securing RESTful APIs", date: "2019" },
      { name: "Node.js: Security", date: "2019" },
      { name: "Building a Website with Node.js and Express.js", date: "2019" },
    ],
  },
  {
    name: "Udemy",
    icon: "udemy",
    certifications: [
      { name: "Angular - The Complete Guide", date: "2020" },
      { name: "JavaScript: Understanding the Weird Parts", date: "2020" },
      { name: "NgRx (with NgRx Data) - The Complete Guide", date: "2020" },
      { name: "The Coding Interview Bootcamp: Algorithms + Data Structures", date: "2019" },
      { name: "Angular (Full App) with Angular Material, Angularfire & NgRx", date: "2019" },
    ],
  },
  {
    name: "Hillsdale College",
    icon: "college",
    certifications: [
      { name: "The American Left: From Liberalism to Despotism", date: "2023" },
      { name: "American Citizenship and Its Decline", date: "2021" },
    ],
  },
  {
    name: "ACS (Australian Computer Society)",
    icon: "organization",
    certifications: [
      { name: "Associate in Information Technology (AIT) [EXPIRED]", date: "2019" },
      { name: "Clarity and Conciseness in Business Writing", date: "2019" },
      { name: "Conquering the Challenges of Public Speaking", date: "2019" },
      { name: "Developing a Plan to Further Your Career", date: "2019" },
      { name: "Ethical Standards and Project Management Institute Core Values", date: "2019" },
      { name: "Exploring Chatbots", date: "2019" },
      { name: "Introduction to Artificial Intelligence", date: "2019" },
      { name: "Machine Learning", date: "2019" },
      { name: "Ethics and Project Management", date: "2019" },
      { name: "Introduction to UI/UX", date: "2019" },
    ],
  },
  {
    name: "Engineers Australia",
    icon: "organization",
    certifications: [
      { name: "Associate Member", date: "Jan 2023" },
    ],
  },
  {
    name: "SafeWork NSW",
    icon: "safety",
    certifications: [
      { name: "WH&S Whitecard", date: "Jan 2015" },
    ],
  },
];

export default function Certifications() {
  const [openProvider, setOpenProvider] = useState<string | null>(null);

  const toggleProvider = (name: string) => {
    setOpenProvider(openProvider === name ? null : name);
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return <Award size={20} />;
      case "udemy":
        return <GraduationCap size={20} />;
      case "college":
        return <GraduationCap size={20} />;
      case "safety":
        return <HardHat size={20} />;
      default:
        return <Building2 size={20} />;
    }
  };

  const getIconStyle = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return "bg-blue-500/10 text-blue-400";
      case "udemy":
        return "bg-purple-500/10 text-purple-400";
      case "college":
        return "bg-green-500/10 text-green-400";
      case "safety":
        return "bg-orange-500/10 text-orange-400";
      default:
        return "bg-amber-500/10 text-amber-400";
    }
  };

  return (
    <div className="space-y-4">
      {providers.map((provider) => (
        <div
          key={provider.name}
          className="rounded-xl bg-zinc-900/30 border border-white/5 overflow-hidden"
        >
          <button
            onClick={() => toggleProvider(provider.name)}
            className="w-full px-5 py-4 flex items-center justify-between gap-4 hover:bg-zinc-800/30 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${getIconStyle(provider.icon)}`}>
                {getIcon(provider.icon)}
              </div>
              <div className="text-left">
                <h4 className="text-white font-medium">{provider.name}</h4>
                <p className="text-zinc-500 text-sm">
                  {provider.certifications.length} certification{provider.certifications.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`text-zinc-500 transition-transform duration-300 ${openProvider === provider.name ? "rotate-180" : ""
                }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${openProvider === provider.name
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
              }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-4 pt-2 border-t border-white/5">
                <div className="space-y-2">
                  {provider.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="group flex items-center justify-between gap-3 p-3 rounded-lg bg-zinc-800/30 border border-white/5 hover:border-blue-600/30 transition-colors"
                    >
                      <span className="text-zinc-300 text-sm group-hover:text-blue-600 transition-colors">
                        {cert.name}
                      </span>
                      {cert.date && (
                        <span className="text-zinc-600 font-mono text-xs shrink-0">
                          {cert.date}
                        </span>
                      )}
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

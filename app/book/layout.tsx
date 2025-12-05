import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Pharmacology of Silence",
  description: "A harrowing memoir of being misdiagnosed as severely psychotic and locked inside a maximum security prison.",
  keywords: [
    // Primary - Mental Health System Issues
    "psychiatric misdiagnosis",
    "wrongly diagnosed mental illness",
    "forced psychiatric medication",
    "involuntary psychiatric hold",
    "mental health system abuse",
    "psychiatric malpractice",
    "community treatment order",
    "Section 19B involuntary admission",
    "section 14 mental health act",
    "section 20bq crimes act",
    "mental health review tribunal",

    // Medical/Pharmacological
    "pharmacogenomics mental health",
    "CYP2D6 poor metabolizer",
    "adverse drug reactions psychiatric medications",
    "antipsychotic side effects",
    "venlafaxine withdrawal symptoms",
    "paliperidone weight gain",
    "psychotic sexual dysfunction",
    "aripiprazole akathesia",
    "medication induced psychosis",
    "neurotoxicity psychiatric drugs",
    "akathisia antipsychotics",
    "iatrogenic harm psychiatry",
    "drug induced violence",
    "forensic pharmacology",
    "forensic psychiatry",
    "forensic psychology",

    // Specific Diagnoses (that were wrong)
    "delusional disorder misdiagnosis",
    "schizophrenia misdiagnosis",
    "first episode psychosis misdiagnosis",
    "false psychosis diagnosis",
    "borderline personality disorder stalking",

    // Legal Issues
    "criminal charges mental health",
    "wrongly convicted mental illness",
    "apprehended violence order",
    "AVO breach",
    "stalking false accusation",
    "legal aid failure",
    "inadequate legal representation",
    "mental health defense",

    // Male-Specific Issues
    "male domestic violence victim",
    "men falsely accused",
    "female on male stalking",
    "men mental health system",
    "male victim not believed",

    // Institutional Problems
    "psychiatric gaslighting",
    "medical gaslighting",
    "psychiatric abuse survivors",
    "psychiatric trauma",
    "institutional betrayal",
    "psychiatric coercion",
    "forced medication stories",

    // Recovery/Advocacy
    "psychiatric medication withdrawal",
    "surviving psychiatric system",
    "psychiatric abuse recovery",
    "mental health patient rights",
    "psychiatric medication tapering",
    "challenging psychiatric diagnosis",

    // Location-Specific (for Australian searches)
    "mental health system Australia",
    "NSW mental health act",
    "psychiatric hospitals Sydney",
    "St Vincents mental health",
    "Prince of Wales Hospital psychiatry",
    "Australian mental health tribunal",

    // Long-tail searches (people in crisis)
    "I'm not psychotic but they say I am",
    "psychiatric medications making me worse",
    "how to prove psychiatric misdiagnosis",
    "forced psychiatric hold story",
    "psychiatric nurse threatened me",
    "medication side effects called delusional",
    "therapist won't listen medication problems",

    // Memoir/Personal Story
    "psychiatric survivor story",
    "mental health memoir",
    "psychiatric system memoir",
    "true story psychiatric abuse",
    "first person psychiatric misdiagnosis",

    // support networks
    "Thomas Szasz",
    "Citizens Commission on Human Rights",
  ],
  openGraph: {
    title: "The Pharmacology of Silence - Surviving Psychiatric Misdiagnosis",
    description: "A firsthand account of being wrongly diagnosed, forcibly medicated, imprisoned, and ultimately vindicated. A story of survival and institutional failure.",
    type: "book",
    locale: "en_AU",
    siteName: "The Pharmacology of Silence",
    images: [
      {
        url: "/og-image-book.jpg",
        width: 1200,
        height: 630,
        alt: "The Pharmacology of Silence book cover",
      },
    ],
  },
  category: "memoir",
  other: {
    "book:author": "Jake Spencer Walklate",
    "book:tag": "mental health, psychiatric abuse, medical malpractice, memoir",
    "article:published_time": "2025-12-12",
    "article:section": "Mental Health",
  },
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Pharmacology of Silence",
  description: "A harrowing memoir of being misdiagnosed as severely psychotic and locked inside a maximum security prison.",
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
"use client";
import { Navbar } from "@/components/Nav";
import { Hero2 } from "@/components/Hero2";
import { About } from "@/components/About";
import { Sponsors } from "@/components/Sponsors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Guidelines } from "@/components/Guidelines";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero2 />
      <About />
      <Guidelines />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}

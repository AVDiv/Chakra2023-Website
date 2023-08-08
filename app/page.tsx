"use client";
import { Hero } from '@/components/Hero'
import { About } from '@/components/About';
import { Prizes } from '@/components/Prizes';
import { Sponsors } from '@/components/Sponsors';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';


export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <About />
      <Prizes />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  )
}

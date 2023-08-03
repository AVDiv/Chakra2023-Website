"use client";
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero'
import { Prizes } from '@/components/Prizes';
import { Sponsors } from '@/components/Sponsors';

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <About />
      <Prizes />
      <Sponsors />
      <Contact />
    </main>
  )
}

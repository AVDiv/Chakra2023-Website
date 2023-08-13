"use client";
import { Navbar } from '@/components/Nav';
import { Hero } from '@/components/Hero'
import { Hero2 } from '@/components/Hero2'
import { About } from '@/components/About';
import { Prizes } from '@/components/Prizes';
import { Sponsors } from '@/components/Sponsors';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';


export default function Home() {
  return (
    <main className='w-full'>
      <Navbar />
      {/*<Hero />*/}
      <Hero2 />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

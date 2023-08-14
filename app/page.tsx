"use client";
import { Navbar } from '@/components/Nav';
import { Hero2 } from '@/components/Hero2'
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';


export default function Home() {
  return (
    <main className='w-full'>
      <Navbar />
      <Hero2 />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

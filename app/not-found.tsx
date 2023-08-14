import { Navbar } from '@/components/Nav'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
        <Navbar />
        <div className="h-screen w-full">
            <div className='flex flex-col items-center justify-center pt-10 h-full w-full text-center'>
                <h1 className='text-[128px] font-semibold glitch-text text-glow-red text-chakra-red' data-text="404"><span>404</span></h1>
                <p className='text-glow-yellow font-semibold text-3xl'>Looks like you are lost!</p>
            </div>
        </div>
        </>
    )
  }
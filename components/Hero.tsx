import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { LineArt } from "./svgs/LineArt";
import { LineArtSide } from "./svgs/LineArtSide";
import { DotArt } from "./svgs/DotArt";
import { ChakraLogo } from "./svgs/Logo";

export function Hero() {
    return ( 
    <section className="min-h-[920px] h-screen w-full relative">
        <div className="head-binary-interpreter overflow-hidden">
            <p className="whitespace-nowrap -ml-6">10011010 11011001 11011110 11011111 11011011 00011011 00101001 10101101 10101101 10011010 11011001 11011110 11011111 11011111 10011010 11011001 11011110 11011111 11011011 00011011 00101001 10101101 10101101 10011010 11011001 11011110 11011111 11011111 10011010 11011001 11011110 11011111 11011011 00011011 00101001 10101101 10101101 10011010 11011001 11011110 11011111 11011111</p>
        </div>
        <div className="focus-gradient h-full w-full absolute top-0 left-0">
            <div className=" h-2/3 w-full mt-6 flex items-center relative overflow-hidden">
                <motion.div  initial={{ height: 'auto' }} animate={{ height: '100%'}} transition={{duration: 1, ease: "circOut"}} className="bg-[#FFAC30] w-full flex flex-col justify-center items-center">
                    <div className="text-black h-full text-center flex flex-col items-center justify-between">
                        <motion.div initial={{ height: 0, clipPath: 'inset(100% 0 0 0)', margin: 0 }} animate={{ height: 192, clipPath: 'inset(0 0 0 0)', margin: 32 }} className="h-48">
                            <ChakraLogo color="#000000" className="rotate-logo" />
                        </motion.div>
                        <h1 className="text-8xl my-3 glitch-text" data-text="cHAKRA"><span>chAkra</span></h1>
                        <motion.p initial={{ height: 0, clipPath: 'inset(0 0 100% 0)', paddingBlock: 0 }} animate={{ height: 100, clipPath: 'inset(0 0 0 0)', paddingBlock: '1rem' }} transition={{duration: 0.8, ease: "easeOut"}} className="text-4xl max-w-3xl"><TypeIt options={{cursorChar: '█', startDelay: 1000}}>the ctf hackath0n that We never imAgined of...</TypeIt></motion.p>
                        <motion.a href="#" initial={{ opacity: 0, height: 0, padding: '0 16px 0 16px', marginBottom: 0, borderWidth: 0 }} animate={{ opacity: 1, height: 72, padding: '16px 16px 16px 16px', marginBottom: 40, borderWidth: 4 }} whileHover={{ textShadow: '0 0 10px #FFAC30' }} transition={{duration: 0.8, ease: "easeIn"}} className=" overflow-hidden text-2xl border-black hover:bg-black hover:text-[#FFAC30] transition-all">$ sudo Register</motion.a>
                    </div>
                <motion.span initial = {{strokeDasharray: 1000, strokeDashoffset: 1000}} animate={{strokeDashoffset: 0}} transition={{duration: 1, delay: 1, ease: "easeInOut"}}>
                    <LineArt className="absolute -bottom-1 right-4" />
                    <LineArtSide className="absolute -left-1 bottom-4" />
                </motion.span>
                <motion.span initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease: "easeInOut"}}>
                    <DotArt className="absolute top-10 -left-20" />
                    <DotArt className="absolute top-44 -right-20" />
                </motion.span>
                </motion.div>
            </div>
            <div className="h-[calc(33.3%_-_24px)] w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl text-[#E5212C] text-glow-red">$ <TypeIt options={{ cursorChar: '█'}}>introduced_by</TypeIt></h1>
                <motion.p className=" glitch-text text-4xl bg-[#E5212C] text-black p-4 m-8 text-shadow" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} transition={{duration: 1, ease: "circOut"}} data-text="ieee NsbM student BRAncH"><span>ieee nsbm student branch</span></motion.p>
            </div>
        </div>
    </section>
    )
}
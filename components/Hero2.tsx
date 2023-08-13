import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { ChakraLogo } from "./svgs/Logo";
import artCircleC from "@/public/artCircleC.png"
import Image from "next/image";

export function Hero2() {
    return ( 
    <section className="min-h-[920px] h-screen w-full relative" id="home">
        <div className="focus-gradient h-full w-full absolute top-0 left-0">
            <div className=" h-full w-full flex items-center relative overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center relative">
                    <motion.div className="h-[500px] relative" initial={{marginBottom: 80}} animate={{marginBottom: 0}} transition={{duration: 0.8, ease: "easeIn"}}>
                        <div className="origin-center absolute top-0 left-0 right-0 bottom-0 m-auto w-80 h-80 scale-[4] -z-10">
                            <Image src={artCircleC} alt="" className="w-full h-full animate-[spin_50s_reverse_ease-in-out_infinite]" />
                        </div>
                        <ChakraLogo color="#FFAC30" className="animate-[spin_50s_ease-in-out_infinite] origin-center" />
                    </motion.div>
                    <div className="bg-[#212121] mt-10 px-5 py-3 rounded-lg">
                        <p className="text-4xl max-w-3xl font-julius"> <TypeIt options={{cursorChar: ' ', startDelay: 1000}}>The ultimate hackathon</TypeIt> </p>
                    </div>
                    <motion.a href="#" initial={{ opacity: 0, height: 0, padding: '0 16px 0 16px', marginTop: 0, borderWidth: 0 }} animate={{ opacity: 1, height: 72, padding: '16px 16px 16px 16px', marginTop: 40, borderWidth: 4 }} whileHover={{ textShadow: '0 0 10px #FFAC30' }} transition={{duration: 0.8, ease: "easeIn"}} className=" overflow-hidden text-2xl border-chakra-yellow hover:bg-chakra-yellow hover:text-black transition-all backdrop-blur">&gt; sudo Register</motion.a>
                </div>
            </div>
        </div>
    </section>
    )
}
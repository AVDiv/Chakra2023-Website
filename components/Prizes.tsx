import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { PrizeCard } from "./cards/PrizeCard";

// import '@/app/binbg'

export function Prizes() {  
    return (
        <section className="w-full relative overflow-hidden bg-[#00000030] font-julius">
            <div className=" w-full h-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    <h1 className="text-3xl text-chakra-yellow my-10 text-glow-yellow glitch-text" data-text="$ PRiZes"><span>$ <TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>prizes</TypeIt></span></h1>
                </div>
                <motion.div className="text-xl max-w-6xl text-glow-yellow m-5 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                    <div className="w-full h-full flex justify-center items-center flex-wrap">
                        <PrizeCard rank="championship" price="9000"/>
                        <PrizeCard rank="runners up" price="6000"/>
                        <PrizeCard rank="2nd runners up" price="4000"/>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

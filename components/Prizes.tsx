import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
// import '@/app/binbg'

export function Prizes() {  
    return (
        <section className="w-full relative overflow-hidden bg-[#00000030]">
            <div className=" w-full h-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    <h1 className="text-3xl text-[#FFAC30] my-10 text-glow-yellow glitch-text" data-text="$ PRiZes"><span>$ <TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>prizes</TypeIt></span></h1>
                </div>
                <motion.div className="text-xl max-w-5xl w-[1024px] text-glow-yellow m-5 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                    <div className="flex justify-center items-center">
                        <div className="w-80 h-96 rounded-lg bg-[#212121] shadow-lg my-5 mx-7 hover:bg-transparent hover:shadow-none transition-all hover:border-[#E5212C] border-[#FFAC30] hover:border-2 ">
                            <div className="w-full h-4/5">

                            </div>
                            <div className="w-full h-1/5">
                                <div className="px-4 py-2 text-center">
                                    <TypeIt options={{ waitUntilVisible: true, cursorChar: '_' }}>
                                        champonship<br/>
                                        Rs. 9000
                                    </TypeIt>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { ContactCard } from "./cards/ContactCard";
// import '@/app/binbg'

export function Contact() {  
    return (
        <section className="w-full relative overflow-hidden bg-[#00000030]" id="contact">
            <div className=" w-full h-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    <h1 className="text-3xl text-[#FFAC30] my-10 text-glow-yellow glitch-text" data-text="contact us"><span><TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>contact us</TypeIt></span></h1>
                </div>
                <motion.div className="text-xl max-w-5xl text-glow-yellow m-5 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                    <div className="flex justify-center items-center flex-wrap">
                        <ContactCard name="name" position="position" />
                        <ContactCard name="name" position="position" />
                        <ContactCard name="name" position="position" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

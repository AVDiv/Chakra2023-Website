import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
// import '@/app/binbg'

export function About() {
    return (
        <section className="w-full relative overflow-hidden bg-[#00000050] font-julius" id="about">
            <div className="h-full md:h-auto md:w-full absolute top-0 left-0 -z-10 opacity-30 origin-center">
                <video autoPlay loop muted playsInline className="h-full w-auto md:h-auto md:w-full origin-center">
                    <source src="manthra.webm" type="video/webm" />
                </video>
            </div>
            <div className=" w-full h-full flex flex-col justify-center items-center backdrop-blur-sm backdrop-brightness-100 bg-gradient-radial from-transparent to-black bg-[length:5px_5px] ">
                <div className="w-full flex justify-center">
                    <h1 className="text-3xl text-manthra-red my-10 text-glow-red glitch-text" data-text="what is manthra"><span><TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>what is manthra</TypeIt></span></h1>
                </div>
                <motion.div className="text-xl max-w-5xl text-glow-yellow m-5 mb-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                    <p><TypeIt options={{ waitUntilVisible: true, cursorChar: ' ', speed: 1.5 }}>
                    Introducing “Manthra”, a unique hackathon by the “IEEE Computer Society of NSBM Green University”, seamlessly blending the reality and the virtual worlds.<br/>Competitors will experience a captivating real-life computer game, embracing the rich mythology of Sri Lanka, while inspiring innovation in technology and culture.
                    <br/><br/>
                    Just like the seven energy points of the human astral body, "Manthra" represents the diverse and dynamic essence of this event. Now, behold "CHAKRA" - a hackathon like no other. This extraordinary event aims to summon the most talented hackers and coders from across the island, uniting these little teams to embark on daunting tasks and unearth elusive solutions.
                    </TypeIt></p>
                </motion.div>
            </div>
        </section>
    )
}

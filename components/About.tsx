import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
// import '@/app/binbg'

export function About() {
    return (
        <section className="w-full relative overflow-hidden bg-[#00000050]">
            <div className="w-full h-full absolute top-0 left-0 bottom-0 right-0 m-auto -z-10 opacity-30 ">
                {/* <p className="binBg">{this.state.binaryBg}</p> */}
                <video autoPlay loop muted playsInline className="w-full">
                    <source src="chakra.webm" type="video/webm" />
                </video>
            </div>
            <div className=" w-full h-full flex flex-col justify-center items-center backdrop-blur-sm backdrop-brightness-100 bg-gradient-radial from-transparent to-black bg-[length:5px_5px] ">
                <div className="w-full flex justify-center">
                    <h1 className="text-3xl text-chakra-red my-10 text-glow-red glitch-text" data-text="$ chAkRa -h"><span>$ <TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>chakra -h</TypeIt></span></h1>
                </div>
                <motion.div className="text-xl max-w-5xl w-[1024px] text-glow-yellow m-5 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                    <p><TypeIt options={{ waitUntilVisible: true, cursorChar: ' ', speed: 1.5 }}>
                        - a contest which not only hackers can participate.<br/>
                        - a Group should consist of 4 members which is an inclusive of; <br/>
                        &emsp;- the story teller<br/>&emsp;- the problem solver<br/>&emsp;- the coder<br/>&emsp;- the critical thinker<br/>
                    </TypeIt></p>
                </motion.div>
            </div>
        </section>
    )
}

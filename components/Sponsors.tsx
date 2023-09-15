import TypeIt from "typeit-react";
import { motion } from "framer-motion";

export function Sponsors() {  
    return (
        <section className="w-full relative overflow-hidden bg-[#00000050]">
            <div className=" w-full h-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    <h1 className="text-3xl text-manthra-red my-10 text-glow-red glitch-text" data-text="$ sPons0Rs"><span>$ <TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>sponsors</TypeIt></span></h1>
                </div>
                <motion.div className="text-xl max-w-5xl w-[1024px] text-glow-yellow m-5 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                    
                </motion.div>
            </div>
        </section>
    )
}

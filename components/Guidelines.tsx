import TypeIt from "typeit-react";
import { motion } from "framer-motion";

export function Guidelines() {  
    return (
        <section className="w-full relative overflow-hidden bg-[#00000050]">
            <div className=" w-full h-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center text-center">
                    <h1 className="text-3xl text-manthra-yellow my-10 text-glow-yellow glitch-text" data-text="rules and regulations"><span><TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>rules and regulations</TypeIt></span></h1>
                </div>
                <motion.div className="text-xl max-w-5xl text-glow-yellow m-5 mb-10 " initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                <TypeIt options={{ waitUntilVisible: true, cursorChar: ' ', speed: 1.5 }}>
                These stipulations delineate the framework and expectations for participation, ensuring a fair and competitive environment.<br /><br />
                &emsp;- A team must comprise 04 members, all of whom must be enrolled at the same university.<br /><br />
                &emsp;&emsp;1. The Problem Solver<br />
                &emsp;&emsp;2. The Storyteller | AKA The Narrative Luminary<br />
                &emsp;&emsp;3. The Coder | AKA The Digital Architect<br />
                &emsp;&emsp;4. The Critical Thinker | AKA The Analytical Sage<br /><br />

                &emsp;- Due to a high demand for registrations, not all registered teams can participate. A meticulous selection process will be employed to identify participating teams. Successful teams will be notified via email.<br />
                &emsp;- Teams are required to develop solutions for the provided questions.<br />
                &emsp;- Participants are encouraged to leverage available resources.<br />
                &emsp;- Any programming language can be employed to create the solution.<br />
                &emsp;- Participants are expected to remain engaged throughout the entirety of the ctf's duration.<br />
                &emsp;- It is imperative for all participants to accept and respect the final judgments rendered by the panel of judges.<br />
                </TypeIt>
                </motion.div>
            </div>
        </section>
    )
}
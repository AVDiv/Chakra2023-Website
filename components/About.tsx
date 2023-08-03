import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
// import '@/app/binbg'

export class About extends React.Component {
    constructor({...props}){
        super(props);
        this.state = {
            binaryBg: "1010"
        }
        this.generateBinary = this.generateBinary.bind(this);
        this.updateBinary = this.updateBinary.bind(this);
    }

    componentDidMount(): void {
        this.generateBinary();
        setInterval(this.updateBinary, 5);
    }
    render(): React.ReactNode {
        
        return (
            <section className="w-full relative overflow-hidden bg-[#00000050]">
                <div className="w-full h-full absolute top-0 left-0 -z-10 opacity-30">
                    <p className="binBg">{this.state.binaryBg}</p>
                </div>
                <div className=" w-full h-full flex flex-col justify-center items-center">
                    <div className="w-full flex justify-center">
                        <h1 className="text-3xl text-[#FFAC30] my-10 text-glow-yellow glitch-text" data-text="$ chAkRa -h"><span>$ <TypeIt options={{ waitUntilVisible: true, cursorChar: '█' }}>chakra -h</TypeIt></span></h1>
                    </div>
                    <motion.div className="text-xl max-w-5xl w-[1024px] text-glow-yellow m-5 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.7, 0.1, 1] }} transition={{ duration: 1, times: [0, 0.25, 0.26, 1], ease: ["easeIn", 'linear', "easeIn"] }}>
                        <p>
                            - a contest which not only hackers can participate.
                        </p>
                    </motion.div>
                </div>
            </section>
        )
    }
    generateBinary() {
        let str = "";
        for (let i = 0; i < 8500; i++) {
            if(Math.random() > 0.05){
                str += ' '
            }else{
                str += '■';
            }
        }
        this.setState({binaryBg: str})
    }
        
    updateBinary() {
        let str = this.state.binaryBg;
        let n = str.length;
        let r = Math.floor(Math.random() * n + 1);
        let char = '';
        Math.random() > 0.1?char = ' ':char = '■';
        this.setState({binaryBg: str.substring(0, r) + char + str.substring(r + 1)})
    }
}

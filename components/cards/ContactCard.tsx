import React from "react";
import Image from "next/image";
import TypeIt from "typeit-react";
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

export function ContactCard({ ...props }) {
    return (
        <div className="w-80 h-96 rounded-lg bg-[#212121] shadow-lg hover:bg-transparent hover:shadow-none transition-all hover:border-chakra-red border-chakra-yellow hover:border-2 ">
            <div className="w-full h-3/6">
                <Image src={props.image} alt="" className={"w-full h-full object-cover ".concat(props.className)} />
            </div>
            <div className="w-full h-3/6 flex flex-col justify-center">
                <div className="px-4 py-2 text-center">
                    <TypeIt options={{ waitUntilVisible: true, cursorChar: '_' }}>
                        {props.name}<br/>
                        <span className="text-base">{props.position}</span>
                    </TypeIt>
                </div>
                <div className="flex justify-center items-center gap-x-2">
                    <a href={"tel:"+props.phone} className="text-xl hover:text-chakra-red text-chakra-yellow transition-all">
                        <FaPhone className="text-base" />
                    </a>
                    <a href={"mailto:"+props.email} className="text-xl hover:text-chakra-red text-chakra-yellow transition-all">
                        <FaEnvelope className="text-lg" />
                    </a>
                    <a href={props.linkedin} className="text-xl hover:text-chakra-red text-chakra-yellow transition-all">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}
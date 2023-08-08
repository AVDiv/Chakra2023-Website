import React from "react";
import TypeIt from "typeit-react";
import { FaLinkedin } from 'react-icons/fa';

export function ContactCard({ ...props }) {
    return (
        <div className="w-80 h-96 rounded-lg bg-[#212121] shadow-lg my-5 mx-7 hover:bg-transparent hover:shadow-none transition-all hover:border-chakra-red border-chakra-yellow hover:border-2 ">
            <div className="w-full h-3/5">

            </div>
            <div className="w-full h-2/5 flex flex-col justify-center">
                <div className="px-4 py-2 text-center">
                    <TypeIt options={{ waitUntilVisible: true, cursorChar: '_' }}>
                        {props.name}<br/>
                        {props.position}
                    </TypeIt>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://www.linkedin.com/in/" className="text-xl hover:text-chakra-red text-chakra-yellow transition-all">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}
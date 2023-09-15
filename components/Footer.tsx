import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { WordLogo } from "./svgs/WordLogo";

export function Footer() { 
    return(
        <footer className="bg-manthra-yellow flex flex-wrap text-center justify-center sm:justify-between items-center px-10">
            <div className="my-8">
                <div className="ml-1 h-10 w-fit">
                    <WordLogo color="black" />
                </div>
                <p className="ml-1 mt-2 text-black">The ultimate hackathon</p>
            </div>
            <p className="flex text-xl my-1 text-black">
                <a href="https://www.facebook.com/ieeensbm" className="p-1 rounded-full hover:bg-black hover:text-manthra-yellow transition-all mx-1"><FaFacebook /></a>
                <a href="https://www.linkedin.com/company/ieeesbnsbm" className="p-1 rounded-full hover:bg-black hover:text-manthra-yellow transition-all mx-1"><FaLinkedin /></a>
                <a href="https://www.instagram.com/ieee_nsbm/" className="p-1 rounded-full hover:bg-black hover:text-manthra-yellow transition-all mx-1"><FaInstagram /></a>
            </p>
        </footer>
    )
 }
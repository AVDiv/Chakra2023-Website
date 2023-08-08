import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() { 
    return(
        <footer className="bg-chakra-yellow flex flex-wrap text-center justify-center sm:justify-between items-center">
            <p className="m-1">developed by chakra development team</p>
            <p className="flex text-xl my-1">
                <a href="https://www.facebook.com/ieeensbm" className="p-1 rounded-full hover:bg-black hover:text-chakra-yellow transition-all mx-1"><FaFacebook /></a>
                <a href="https://www.linkedin.com/company/ieeesbnsbm" className="p-1 rounded-full hover:bg-black hover:text-chakra-yellow transition-all mx-1"><FaLinkedin /></a>
                <a href="https://www.instagram.com/ieee_nsbm/" className="p-1 rounded-full hover:bg-black hover:text-chakra-yellow transition-all mx-1"><FaInstagram /></a>
            </p>
        </footer>
    )
 }
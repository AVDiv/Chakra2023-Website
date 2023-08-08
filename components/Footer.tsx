import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() { 
    return(
        <footer className="bg-chakra-yellow flex justify-between">
            <p className="m-1">developed by chakra development team</p>
            <p className="flex text-xl my-1">
                <a href="#" className="p-1 rounded-full hover:bg-black hover:text-chakra-yellow transition-all mx-1"><FaFacebook /></a>
                <a href="#" className="p-1 rounded-full hover:bg-black hover:text-chakra-yellow transition-all mx-1"><FaLinkedin /></a>
                <a href="#" className="p-1 rounded-full hover:bg-black hover:text-chakra-yellow transition-all mx-1"><FaInstagram /></a>
            </p>
        </footer>
    )
 }
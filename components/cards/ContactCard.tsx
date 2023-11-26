import React from "react";
import Image from "next/image";
import TypeIt from "typeit-react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export function ContactCard({ ...props }) {
  return (
    <div className="w-80 h-96 rounded-lg bg-[#212121] shadow-lg hover:bg-transparent hover:shadow-none transition-all hover:border-manthra-red border-manthra-yellow hover:border-2 ">
      <div className="w-full max-h-44">
        <Image
          src={props.image}
          alt=""
          className={"w-full h-full max-h-44 rounded-t-lg object-cover ".concat(
            props.className
          )}
        />
      </div>
      <div className="w-full h-full max-h-44 flex flex-col justify-center">
        <div className="px-4 py-2 mt-4 text-center">
          <TypeIt options={{ waitUntilVisible: true, cursorChar: "_" }}>
            {props.name}
            <br />
            <span className="text-base">{props.position}</span>
          </TypeIt>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <a
            href={"tel:" + props.phone}
            className="text-xl hover:text-manthra-red text-manthra-yellow transition-all"
          >
            <FaPhone className="text-base" />
          </a>
          <a
            href={"mailto:" + props.email}
            className="text-xl hover:text-manthra-red text-manthra-yellow transition-all"
          >
            <FaEnvelope className="text-lg" />
          </a>
          <a
            href={props.linkedin}
            className="text-xl hover:text-manthra-red text-manthra-yellow transition-all"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* {props.subPosition && (
          <div className="px-4">
            <hr className="border-t-2 border-manthra-yellow my-4" />
            <div className="flex flex-row gap-3">
              <Image
                className="h-16 w-16 rounded-full"
                width={100}
                height={100}
                src={props.coChairInfo.image as string}
                alt={`${props.coChairInfo} Image`}
              />
              <div>
                <TypeIt options={{ waitUntilVisible: true, cursorChar: "_" }}>
                  <span className="text-sm">{props.coChairInfo.name}</span>
                  <br />
                  <span className="text-xs">- {props.subPosition} -</span>
                </TypeIt>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

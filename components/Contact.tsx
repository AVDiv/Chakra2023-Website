import React from "react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { ContactCard } from "./cards/ContactCard";
import SrimalImg from "@/public/Srimal.jpeg";
import KaveenImg from "@/public/Kaveen.jpeg";
import JayasankaImg from "@/public/Jayasanka.jpeg";
// import PasadiImg from "@/public/pasadi.jpg";
import GeethImg from "@/public/Geeth.jpg";

export function Contact() {
  return (
    <section
      className="w-full relative overflow-hidden bg-[#00000030]"
      id="contact"
    >
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center">
          <h1
            className="text-3xl text-manthra-red my-10 text-glow-red glitch-text"
            data-text="contact us"
          >
            <span>
              <TypeIt options={{ waitUntilVisible: true, cursorChar: "█" }}>
                contact us
              </TypeIt>
            </span>
          </h1>
        </div>
        <motion.div
          className="text-xl max-w-6xl w-full xl:w-[1156px] text-glow-yellow m-5 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.7, 0.1, 1] }}
          transition={{
            duration: 1,
            times: [0, 0.25, 0.26, 1],
            ease: ["easeIn", "linear", "easeIn"],
          }}
        >
          <div className="w-full flex justify-center py-5">
            <ContactCard
              name="srimal fernando"
              position="- event chairperson -"
              image={SrimalImg}
              email="srimal.cyber@gmail.com"
              phone="0765341551"
              linkedin="https://www.linkedin.com/in/srimal-online/"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-items-center py-5 gap-y-5">
            <ContactCard
              name="kaveen rupasinghe"
              position="- head of content -"
              image={KaveenImg}
              phone="0774711560"
              email="kaveenrupasinghe@ieee.org"
              linkedin="https://lk.linkedin.com/in/kaveen-rupasinghe-356123186"
              subPosition={"Co-Chair, Content"}
              coChairInfo={{ name: "Co-Chair Name", image: "/co-chair.png" }}
            />
            <ContactCard
              name="jayasanka ariyarathna "
              position="- head of program -"
              image={JayasankaImg}
              phone="0704821254"
              email="jayasankaariyaratne@ieee.org"
              linkedin="https://www.linkedin.com/in/jayasanka-ariyaratne"
              subPosition={"Co-Chair, Program"}
              coChairInfo={{ name: "Co-Chair Name", image: "/co-chair.png" }}
            />
            {/* <ContactCard
              name="pasandi samarasinghe"
              position="- head of er -"
              image={PasadiImg}
              phone="0711476371"
              email="pasadisamarasinghe@ieee.org"
              linkedin="https://www.linkedin.com/in/pasadi-samarasinghe"
            /> */}
            <ContactCard
              name="Geeth Induwara"
              position="- head of er -"
              image={GeethImg}
              phone="0773623718"
              email="geethinduwara@ieee.org"
              linkedin="https://www.linkedin.com/in/geethinduwara/"
              subPosition={"Co-Chair, ER"}
              coChairInfo={{ name: "Co-Chair Name", image: "/co-chair.png" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

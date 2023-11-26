import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { PartnerCard } from "./cards/PartnerCard";

export function Partners() {
  return (
    <section
      className="w-full relative overflow-hidden bg-[#00000050]"
      id="partners"
    >
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center">
          <h1
            className="text-3xl text-manthra-red my-10 text-glow-red glitch-text"
            data-text="$ p4Rtn3Rs"
          >
            <span>
              ${" "}
              <TypeIt options={{ waitUntilVisible: true, cursorChar: "█" }}>
                Partners
              </TypeIt>
            </span>
          </h1>
        </div>
        <motion.div
          className="text-xl max-w-6xl w-full xl:w-[1156px] text-glow-yellow m-5 mb-14 flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.7, 0.1, 1] }}
          transition={{
            duration: 1,
            times: [0, 0.25, 0.26, 1],
            ease: ["easeIn", "linear", "easeIn"],
          }}
        >
          <div className="flex flex-wrap gap-5 justify-center items-center mx-5">
            <PartnerCard
              name="Partner 01"
              image="/partner-logo.png"
              link="#"
            />
            <PartnerCard
              name="Partner 02"
              image="/partner-logo.png"
              link="#"
            />
            <PartnerCard
              name="Partner 03"
              image="/partner-logo.png"
              link="#"
            />
            <PartnerCard
              name="Partner 04"
              image="/partner-logo.png"
              link="#"
            />
            <PartnerCard
              name="Partner 05"
              image="/partner-logo.png"
              link="#"
            />
            <PartnerCard
              name="Partner 06"
              image="/partner-logo.png"
              link="#"
            />
            <PartnerCard
              name="Partner 07"
              image="/partner-logo.png"
              link="#"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

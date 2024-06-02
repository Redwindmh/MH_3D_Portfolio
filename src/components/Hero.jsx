import { React, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from "../styles";
import Sparkle from "react-sparkle";
import rpmMalcolm from "../assets/ReadyPlayerMe-Avatar.jpeg"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[red]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-red-600 to-black-500" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I'm <span className="text-[red]">Malcolm</span>,
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            your friendly neighborhood&nbsp;
            <span className="md:hidden">
              <br />
            </span>
            <span
              className="absolute"
              activeclassname="active"
              to="/technomancy"
            >
              technomancer <Sparkle flickerSpeed={"slowest"} color={"random"} />
            </span>
          </p>
        </div>
      </div>
      <motion.div className="flex justify-center" whileHover={{ y: -50, scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <a href="https://www.linkedin.com/in/malcolm-hendricks-50152a139/" target="_blank">
          <img title="Click for my LinkedIn!" className="rounded-full border-8 border-black border-t-red-600 sm:h-96 h-72 w-auto mt-96" src={rpmMalcolm} alt="Malcolm" />
        </a>
      </motion.div>
      {/* <ModelCanvas /> */}
      <div className="absolute bottom-1 w-full flex justify-center items-center">
        <a href="#about">
        </a>
      </div>
    </section>
  );
};

export default Hero;

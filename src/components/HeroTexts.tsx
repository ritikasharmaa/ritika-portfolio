"use client";
import TextRotator from "./TextRotator";
import { motion } from "framer-motion";

const HeroTexts = () => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        variants={variants1}
        className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl "
      >
        Ritika
        <br /> Sharma .
      </motion.h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;

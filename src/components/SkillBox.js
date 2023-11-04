import React from "react";
import { motion } from "framer-motion";

const SkillBox = ({ skill }) => {
  const skillIntro = {
    hide: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.span
        className="w-64 p-4 border border-black bg-gray-50 shadow-md rounded-sm"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={skillIntro}
      >
        {skill}
      </motion.span>
    </>
  );
};

export default SkillBox;

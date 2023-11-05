import React from "react";
import { motion } from "framer-motion";
import { TiDeleteOutline } from "react-icons/ti";

const SkillBox = ({ skill, canDelete, setSkills, skills, index }) => {
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

  const handleDelete = () => {
    setSkills(skills.filter((skill, ind) => index !== ind));
  };

  return (
    <>
      <motion.span
        className="w-64 p-4 border border-black bg-gray-50 shadow-md rounded-sm relative "
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={skillIntro}
      >
        {skill}
        <TiDeleteOutline
          className={`${
            !canDelete && "hidden"
          } float-right text-2xl cursor-pointer hover:text-red-800`}
          onClick={handleDelete}
        />
      </motion.span>
    </>
  );
};

export default SkillBox;

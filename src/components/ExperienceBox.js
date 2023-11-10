import React from "react";
import { motion } from "framer-motion";
import { TiDeleteOutline } from "react-icons/ti";
import { convertDate } from "@/utils/lib";

const ExperienceBox = ({
  index,
  canDelete,
  experience,
  experiences,
  setExperiences,
}) => {
  const experienceIntro = {
    hide: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  console.log(experience.startDate.split("-"));

  const handleDelete = () => {
    setExperiences(experiences.filter((experience, ind) => index !== ind));
  };

  return (
    <>
      <motion.article
        className="w-full md:w-2/3 flex flex-col gap-2 shadow-lg rounded-md border border-slate-950 bg-slate-50 p-4 relative"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={experienceIntro}
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{experience.organization}</h2>
          <h4 className="text-md text-gray-500">{experience.role}</h4>
        </div>
        <p className="text-md">{`
        ${convertDate(experience.startDate)} - ${convertDate(
          experience.endDate
        )}`}</p>
        <p className="text-justify">{experience.description}</p>

        <TiDeleteOutline
          className={`${
            !canDelete && "hidden"
          } absolute top-2 right-2 text-3xl cursor-pointer hover:text-red-800`}
          onClick={handleDelete}
        />
      </motion.article>
    </>
  );
};

export default ExperienceBox;

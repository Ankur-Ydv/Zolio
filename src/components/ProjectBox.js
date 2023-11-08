import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FiLink2, FiGithub } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

const ProjectBox = ({ index, canDelete, project, projects, setProjects }) => {
  const projectIntro = {
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

  const handleDelete = () => {
    setProjects(projects.filter((project, ind) => index !== ind));
  };

  return (
    <>
      <motion.article
        className="w-full md:w-2/3 flex flex-col gap-4 shadow-lg rounded-md border border-slate-950 bg-slate-50 p-4"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={projectIntro}
      >
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-justify">{project.description}</p>
        <div className="flex gap-4 text-xl">
          {project.link !== "" && (
            <Link href={project.repoLink} target="_blank">
              <FiGithub />
            </Link>
          )}
          {project.github !== "" && (
            <Link href={project.link} target="_blank">
              <FiLink2 />
            </Link>
          )}
        </div>
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

export default ProjectBox;

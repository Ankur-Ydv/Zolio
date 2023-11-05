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
        className="w-2/3 h-fit flex items-center justify-end relative"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={projectIntro}
      >
        <figure className="absolute left-0 ">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Project Image"
            className="object-cover w-72 h-48 rounded-md shadow-lg"
          />
        </figure>

        <div className="w-3/4 min-h-[250px] p-4 pr-6 pl-36 flex flex-col gap-4 rounded-md shadow-md bg-gray-50">
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <p className="text-justify">{project.description}</p>
          <div className="flex gap-4 text-xl">
            {project.link !== "" && (
              <Link href={project.link}>
                <FiGithub />
              </Link>
            )}
            {project.github !== "" && (
              <Link href={project.repoLink}>
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
        </div>
      </motion.article>
    </>
  );
};

export default ProjectBox;

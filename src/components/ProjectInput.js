import React, { useState } from "react";

const ProjectInput = ({ projects, setProjects }) => {
  const [currentProject, setCurrentProject] = useState({
    title: "",
    image: "",
    repoLink: "",
    link: "",
    description: "",
  });

  console.log(currentProject);

  const addProject = () => {
    setProjects([...projects, currentProject]);
  };

  return (
    <>
      <article className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-8">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            className="w-full p-2"
            onChange={(e) =>
              setCurrentProject({ ...currentProject, title: e.target.value })
            }
          />
          <input
            type="text"
            name="Image"
            placeholder="Project Image"
            className="w-full p-2"
            onChange={(e) =>
              setCurrentProject({ ...currentProject, image: e.target.value })
            }
          />
        </div>

        <div className="w-full flex gap-8">
          <input
            type="text"
            name="repolink"
            placeholder="Repository Link"
            className="w-full p-2"
            onChange={(e) =>
              setCurrentProject({ ...currentProject, repoLink: e.target.value })
            }
          />
          <input
            type="text"
            name="link"
            placeholder="Project Link"
            className="w-full p-2"
            onChange={(e) =>
              setCurrentProject({
                ...currentProject,
                link: e.target.value,
              })
            }
          />
        </div>

        <textarea
          rows={4}
          className="w-full p-2"
          name="description"
          placeholder="Project description"
          onChange={(e) =>
            setCurrentProject({
              ...currentProject,
              description: e.target.value,
            })
          }
        />

        <button
          type="button"
          className="w-fit px-8 py-2 rounded-md shadow-md bg-slate-950 text-white"
          onClick={addProject}
        >
          Add New Project
        </button>
      </article>
    </>
  );
};

export default ProjectInput;

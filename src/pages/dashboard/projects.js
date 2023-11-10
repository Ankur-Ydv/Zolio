import axios from "axios";
import React, { useState } from "react";
import { russo_one } from "@/utils/fonts";
import { getServerSession } from "next-auth";
import { FaPlus, FaCheck } from "react-icons/fa";
import { authOptions } from "../api/auth/[...nextauth]";
import Users from "@/utils/UserModel";
import Loader from "@/components/Loader";
import MainLayout from "@/utils/MainLayout";
import ProjectBox from "@/components/ProjectBox";
import DashboardNavbar from "@/components/DashboardNavbar";
import { enqueueSnackbar } from "notistack";

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const username = await session.session.user.username;
  const response = await Users.findOne({ username }, "projects");
  const projectsArray = JSON.parse(JSON.stringify(response.projects));

  return {
    props: {
      username,
      projectsArray,
    },
  };
}

const Projects = ({ username, projectsArray }) => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([...projectsArray]);
  const [currentProject, setCurrentProject] = useState(SampleProject);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.put("/api/edit/projects", { projects, username });
      enqueueSnackbar("Projects Added", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Internal Server Error", { variant: "error" });
    }
    setLoading(false);
  };

  const validation = () => {
    const { title, description } = currentProject;
    if (title === "" || description === "") {
      enqueueSnackbar("Title & Description are mandatory", { variant: "info" });
      return false;
    } else if (description > 500) {
      enqueueSnackbar("Keep Description Shorter", { variant: "warning" });
      return false;
    }

    return true;
  };

  const addProject = () => {
    if (validation()) {
      setProjects([...projects, currentProject]);
      setCurrentProject(SampleProject);
    }
  };

  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col items-center overflow-auto">
          <DashboardNavbar username={username} />
          <section className="w-full md:3/4 lg:w-2/3 flex flex-col gap-4 px-4 py-8">
            <h1 className={`${russo_one.className} text-2xl`}>
              Edit Your Projects
            </h1>

            <article className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentProject.title}
                    onChange={(e) =>
                      setCurrentProject({
                        ...currentProject,
                        title: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="title"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Project Title
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentProject.date}
                    onChange={(e) =>
                      setCurrentProject({
                        ...currentProject,
                        date: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="date"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Project Date
                  </label>
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    id="repository"
                    name="repository"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentProject.repository}
                    onChange={(e) =>
                      setCurrentProject({
                        ...currentProject,
                        repository: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="repository"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Repository Link
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    type="text"
                    id="link"
                    name="link"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentProject.link}
                    onChange={(e) =>
                      setCurrentProject({
                        ...currentProject,
                        link: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="link"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Project Link
                  </label>
                </div>
              </div>

              <textarea
                rows={6}
                className="w-full p-2 rounded-md"
                name="description"
                placeholder="Project description"
                value={currentProject.description}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    description: e.target.value,
                  })
                }
              />

              <div className="flex gap-4">
                <button
                  type="button"
                  className="p-4 rounded-md shadow-md bg-slate-900 text-white"
                  onClick={addProject}
                >
                  <FaPlus />
                </button>

                <button
                  type="button"
                  className="p-4 rounded-md shadow-md bg-slate-900 disabled:opacity-70 text-white"
                  disabled={loading ? true : false}
                  onClick={handleSubmit}
                >
                  {loading ? <Loader /> : <FaCheck />}
                </button>
              </div>
            </article>

            <div className="w-full flex flex-col items-center gap-8">
              {projects.map((project, index) => {
                return (
                  <ProjectBox
                    key={"project" + index}
                    index={index}
                    canDelete={true}
                    project={project}
                    projects={projects}
                    setProjects={setProjects}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

const SampleProject = {
  title: "",
  repository: "",
  link: "",
  date: "",
  description: "",
};

export default Projects;

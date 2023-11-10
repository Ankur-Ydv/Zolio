import axios from "axios";
import React, { useState } from "react";
import { russo_one } from "@/utils/fonts";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Users from "@/utils/UserModel";
import Loader from "@/components/Loader";
import MainLayout from "@/utils/MainLayout";
import DashboardNavbar from "@/components/DashboardNavbar";
import { enqueueSnackbar } from "notistack";
import { FaCheck, FaPlus } from "react-icons/fa";
import ExperienceBox from "@/components/ExperienceBox";

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
  const response = await Users.findOne({ username }, "experiences");
  const experiencesArray = JSON.parse(JSON.stringify(response.experiences));

  return {
    props: {
      username,
      experiencesArray,
    },
  };
}

const Experiences = ({ username, experiencesArray }) => {
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([...experiencesArray]);
  const [currentExperience, setCurrentExperience] = useState(SampleExperience);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.put("/api/edit/experiences", { experiences, username });
      enqueueSnackbar("Experiences Added", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Internal Server Error", { variant: "error" });
    }
    setLoading(false);
  };

  const validation = () => {
    const { organization, role, startDate, description } = currentExperience;
    if (
      organization === "" ||
      description === "" ||
      role === "" ||
      startDate === ""
    ) {
      enqueueSnackbar("All fields are mandatory", {
        variant: "info",
      });
      return false;
    } else if (description > 500) {
      enqueueSnackbar("Keep Description Shorter", { variant: "warning" });
      return false;
    }

    return true;
  };

  const addExperience = () => {
    if (validation()) {
      setExperiences([...experiences, currentExperience]);
      setCurrentExperience(SampleExperience);
    }
  };

  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col items-center overflow-auto">
          <DashboardNavbar username={username} />
          <section className="w-full md:3/4 lg:w-2/3 flex flex-col gap-4 px-4 py-8">
            <h1 className={`${russo_one.className} text-2xl`}>
              Edit Your Experiences
            </h1>

            <article className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentExperience.organization}
                    onChange={(e) =>
                      setCurrentExperience({
                        ...currentExperience,
                        organization: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="organization"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Organization
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    type="text"
                    id="role"
                    name="role"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentExperience.role}
                    onChange={(e) =>
                      setCurrentExperience({
                        ...currentExperience,
                        role: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="role"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Role
                  </label>
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentExperience.startDate}
                    onChange={(e) =>
                      setCurrentExperience({
                        ...currentExperience,
                        startDate: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="startDate"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Start Date
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={currentExperience.endDate}
                    onChange={(e) =>
                      setCurrentExperience({
                        ...currentExperience,
                        endDate: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="endDate"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    End Date
                  </label>
                </div>
              </div>

              <textarea
                rows={6}
                className="w-full p-2 rounded-md"
                name="description"
                placeholder="Project description"
                value={currentExperience.description}
                onChange={(e) =>
                  setCurrentExperience({
                    ...currentExperience,
                    description: e.target.value,
                  })
                }
              />

              <div className="flex gap-4">
                <button
                  type="button"
                  className="p-4 rounded-md shadow-md bg-slate-900 text-white"
                  onClick={addExperience}
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
              {experiences.map((experience, index) => {
                return (
                  <ExperienceBox
                    key={"project" + index}
                    index={index}
                    canDelete={true}
                    experience={experience}
                    experiences={experiences}
                    setExperiences={setExperiences}
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

const SampleExperience = {
  organization: "",
  role: "",
  startDate: "",
  endDate: "",
  description: "",
};

export default Experiences;

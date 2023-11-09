import axios from "axios";
import React, { useState } from "react";
import { russo_one } from "@/utils/fonts";
import { FaPlus, FaCheck } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Users from "@/utils/UserModel";
import MainLayout from "@/utils/MainLayout";
import SkillBox from "@/components/SkillBox";
import DashboardNavbar from "@/components/DashboardNavbar";
import Loader from "@/components/Loader";

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
  const response = await Users.findOne({ username }, "skills");

  return {
    props: {
      username,
      skillsArray: response.skills,
    },
  };
}

const Skills = ({ username, skillsArray }) => {
  const [skills, setSkills] = useState([...skillsArray]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [loading, setLoading] = useState(false);

  const addSkill = () => {
    if (currentSkill !== "") setSkills([...skills, currentSkill]);
    setCurrentSkill("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.put("/api/edit/skills", { skills, username });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col items-center overflow-auto">
          <DashboardNavbar username={username} />
          <section className="w-full md:3/4 lg:w-2/3 flex flex-col gap-4 px-4 py-8">
            <h1 className={`${russo_one.className} text-2xl`}>
              Edit Your Skills
            </h1>

            <div className="w-full flex gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                />
                <label
                  htmlFor="skill"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Enter Your Skill Here
                </label>
              </div>

              <button
                type="button"
                className="p-4 rounded-md shadow-md bg-slate-900 text-white"
                onClick={addSkill}
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

            <article className="w-full flex flex-wrap justify-evenly gap-4">
              {skills.map((skill, index) => {
                return (
                  <SkillBox
                    key={"skill" + index}
                    index={index}
                    canDelete={true}
                    skill={skill}
                    skills={skills}
                    setSkills={setSkills}
                  />
                );
              })}
            </article>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

export default Skills;

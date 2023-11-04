import React, { useState } from "react";
import { useFormik } from "formik";
import { handleValidation } from "@/utils/lib";
import MainLayout from "@/utils/MainLayout";
import SkillBox from "@/components/SkillBox";
import SkillInput from "@/components/SkillInput";
import ProjectInput from "@/components/ProjectInput";
import CertificateInput from "@/components/CertificateInput";
import FormHeader from "@/components/FormHeader";
import ProjectBox from "@/components/ProjectBox";
import CertificateBox from "@/components/CertificateBox";

const Home = () => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  console.log(projects);

  const onSubmit = async (values, error) => {
    console.log(values);
    const validate = handleValidation(values);
    if (validate.status) {
      alert(hello);
    } else {
      alert(validate.msg);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      resumeLink: "",
      description: "",
      image: "",
      profiles: {
        leetcode: "",
        github: "",
        linkedin: "",
        geeksforgeeks: "",
        codechef: "",
        codeforces: "",
      },
    },
    onSubmit,
  });

  return (
    <>
      <MainLayout>
        <form
          action="#"
          className="w-2/3 flex flex-col items-center gap-8 my-8 p-4 border border-black"
          onSubmit={formik.handleSubmit}
        >
          <FormHeader />

          <section className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-8">
              <input
                type="text"
                name="fullname"
                required={true}
                placeholder="Enter Your Full Name*"
                className="w-full p-2"
                {...formik.getFieldProps("fullname")}
              />
              <input
                type="email"
                name="email"
                required={true}
                placeholder="Enter Your EmailId*"
                className="w-full p-2"
                {...formik.getFieldProps("email")}
              />
            </div>
            <div className="w-full flex gap-8">
              <input
                type="password"
                name="password"
                required={true}
                placeholder="Password (Should Be of Min. 8 Characters)*"
                className="w-full p-2"
                {...formik.getFieldProps("password")}
              />
              <input
                type="password"
                name="confirmPassword"
                required={true}
                placeholder="Re-Enter Password*"
                className="w-full p-2"
                {...formik.getFieldProps("confirmPassword")}
              />
            </div>
            <div className="w-full flex gap-8">
              <input
                type="text"
                name="role"
                required={true}
                placeholder="How You Describe Yourself (ROLE)*"
                className="w-full p-2"
                {...formik.getFieldProps("role")}
              />
              <input
                type="text"
                name="resume"
                required={true}
                placeholder="Enter Your Resume Link*"
                className="w-full p-2"
                {...formik.getFieldProps("resumeLink")}
              />
            </div>
            <textarea
              placeholder="Tell Us About Yourself (max 500 characters)"
              rows={4}
              className="w-full p-2"
              {...formik.getFieldProps("description")}
            />
          </section>

          <section className="w-full flex flex-col gap-4">
            <h1 className="text-2xl">Add Your Profiles</h1>
            <div className="w-full flex gap-8">
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                className="w-full p-2"
                {...formik.getFieldProps("linkedin")}
              />
              <input
                type="text"
                name="github"
                placeholder="GitHub"
                className="w-full p-2"
                {...formik.getFieldProps("github")}
              />
            </div>

            <div className="w-full flex gap-8">
              <input
                type="text"
                name="leetcode"
                placeholder="LeetCode"
                className="w-full p-2"
                {...formik.getFieldProps("leetcode")}
              />
              <input
                type="text"
                name="geeksforgeeks"
                placeholder="GeeksForGeeks"
                className="w-full p-2"
                {...formik.getFieldProps("geeksforgeeks")}
              />
            </div>

            <div className="w-full flex gap-8">
              <input
                type="text"
                name="codeforces"
                placeholder="CodeForces"
                className="w-full p-2"
                {...formik.getFieldProps("codeforces")}
              />
              <input
                type="text"
                name="codechef"
                placeholder="CodeChef"
                className="w-full p-2"
                {...formik.getFieldProps("codechef")}
              />
            </div>
          </section>

          <section className="w-full flex flex-col gap-8">
            <h1 className="text-2xl">Add Your Skills</h1>
            <SkillInput skills={skills} setSkills={setSkills} />
            <article className="w-full flex flex-wrap justify-evenly gap-4 ">
              {skills.map((skill, index) => {
                return <SkillBox skill={skill} key={index} />;
              })}
            </article>
          </section>

          <section className="w-full flex flex-col gap-4">
            <h1 className="text-2xl">Add Your Projects</h1>
            <ProjectInput projects={projects} setProjects={setProjects} />
            <div className="w-full flex flex-col items-center gap-8">
              {projects.map((project, index) => {
                return <ProjectBox project={project} key={index} />;
              })}
            </div>
          </section>

          <section className="w-full flex flex-col gap-4">
            <h1 className="text-2xl">Add Your Certificates</h1>
            <CertificateInput
              certificates={certificates}
              setCertificates={setCertificates}
            />
            <div className="w-full flex flex-col gap-4">
              {certificates.map((certificate, index) => {
                return <CertificateBox certificate={certificate} key={index} />;
              })}
            </div>
          </section>

          <button
            type="submit"
            className="w-fit px-8 py-2 rounded-md shadow-md bg-slate-950 text-white"
          >
            Create My PortFolio
          </button>
        </form>
      </MainLayout>
    </>
  );
};

export default Home;

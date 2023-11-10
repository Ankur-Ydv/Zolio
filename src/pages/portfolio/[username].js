import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { russo_one } from "@/utils/fonts";
import { MdDownload } from "react-icons/md";
import Users from "@/utils/UserModel";
import Footer from "@/components/Footer";
import DbConnect from "@/utils/DbConnect";
import MainLayout from "@/utils/MainLayout";
import SkillBox from "@/components/SkillBox";
import ProjectBox from "@/components/ProjectBox";
import Header from "@/components/PortfolioNavbar";
import ConnectForm from "@/components/ConnectForm";
import CertificateBox from "@/components/CertificateBox";
import ProfileSidebar from "@/components/ProfileSidebar";
import ExperienceBox from "@/components/ExperienceBox";

export async function getServerSideProps({ params }) {
  DbConnect().catch((error) => console.log(error));

  const response = await Users.findOne({ username: params.username });
  const user = JSON.parse(JSON.stringify(response));

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
}

const Portfolio = ({ user }) => {
  const ImageIntro = {
    from: {
      scale: 0,
      rotate: "360",
      opacity: 0,
    },
    to: {
      scale: 1,
      rotate: "0",
      opacity: 0.8,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <MainLayout extraStyle={"h-screen"}>
        <Header />
        <div className="m-auto w-full h-full px-4 flex flex-col items-center overflow-auto lg:w-2/3">
          <section
            id="home"
            className="w-full min-h-full flex flex-col gap-4 justify-center items-center"
          >
            <motion.figure
              initial="from"
              whileInView="to"
              viewport={{ once: true }}
              variants={ImageIntro}
              className="rounded-full border border-black border-t-4 border-r-2 border-b-0 overflow-hidden relative"
            >
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Profile Image"
                className="object-cover w-48 h-48 p-2 rounded-full"
              />
            </motion.figure>
            <article className="flex flex-col gap-4 items-center">
              <h1 className={`${russo_one.className} text-4xl lg:text-6xl`}>
                {user.fullname}
              </h1>
              <h4 className="text-center text-xl lg:text-2xl">{user.title}</h4>
              <p className="w-full lg:w-2/3 text-center">{user.description}</p>
              <ProfileSidebar profiles={user.profiles} />
            </article>
            <Link
              href={user.resume}
              className="border border-black py-2 px-4 rounded-md bg-gray-50"
              target="_blank"
            >
              <MdDownload className="inline-block" /> Resume
            </Link>
          </section>

          {user.skills.length !== 0 && (
            <section id="skills" className="w-full pt-16">
              <h1
                className={`${russo_one.className} text-3xl font-semibold mb-6`}
              >
                My Top Skills
              </h1>
              <div className="w-full flex flex-wrap justify-evenly gap-6">
                {user.skills.map((skill, index) => {
                  return (
                    <SkillBox skill={skill} key={index} canDelete={false} />
                  );
                })}
              </div>
            </section>
          )}

          {user.experiences.length !== 0 && (
            <section id="certifications" className="w-full pt-16">
              <h1
                className={`${russo_one.className} text-3xl font-semibold mb-6`}
              >
                Experience
              </h1>
              <div className="w-full flex flex-col gap-4">
                {user.experiences.map((experience, index) => {
                  return <ExperienceBox experience={experience} key={index} />;
                })}
              </div>
            </section>
          )}

          {user.projects.length !== 0 && (
            <section id="projects" className="w-full pt-16">
              <h1
                className={`${russo_one.className} text-3xl font-semibold mb-6`}
              >
                Projects
              </h1>
              <div className="w-full flex flex-col items-center gap-8">
                {user.projects.map((project, index) => {
                  return <ProjectBox project={project} key={index} />;
                })}
              </div>
            </section>
          )}

          {user.certificates.length !== 0 && (
            <section id="certifications" className="w-full pt-16">
              <h1
                className={`${russo_one.className} text-3xl font-semibold mb-6`}
              >
                Certifications
              </h1>
              <div className="w-full flex flex-col gap-4">
                {user.certificates.map((certificate, index) => {
                  return (
                    <CertificateBox certificate={certificate} key={index} />
                  );
                })}
              </div>
            </section>
          )}

          <section id="connect" className="w-full pt-16 pb-4">
            <h1
              className={`${russo_one.className} text-3xl font-semibold mb-6`}
            >
              Connect With ME
            </h1>
            <article className="w-full flex justify-center">
              <ConnectForm to_name={user.fullname} to_email={user.email} />
            </article>
          </section>

          <Footer />
        </div>
      </MainLayout>
    </>
  );
};

export default Portfolio;

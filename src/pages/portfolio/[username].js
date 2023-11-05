import React from "react";
import { Russo_One } from "next/font/google";
import CertificateBox from "@/components/CertificateBox";
import ConnectForm from "@/components/ConnectForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectBox from "@/components/ProjectBox";
import SkillBox from "@/components/SkillBox";
import { MdDownload } from "react-icons/md";
import MainLayout from "@/utils/MainLayout";
import DbConnect from "@/utils/DbConnect";
import Users from "@/utils/UserModesl";
import Link from "next/link";

const russo_one = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

export async function getServerSideProps({ params }) {
  DbConnect().catch((error) => console.log(error));

  const res = await Users.findOne({ username: params.username });
  const userData = JSON.parse(JSON.stringify(res));

  if (!userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { userData },
  };
}

const Portfolio = ({ userData }) => {
  return (
    <>
      <MainLayout>
        <Header />

        <section
          id="home"
          className="w-2/3 min-h-full flex flex-col gap-4 justify-center items-center"
        >
          <figure className="rounded-full border border-black overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="Profile Image"
              className="object-cover w-48 h-48"
            />
          </figure>
          <article className="flex flex-col gap-4 items-center">
            <h1 className={`${russo_one.className} text-6xl`}>Ankur Yadav</h1>
            <h3 className="text-2xl">
              Mern Stack Developer & Competitive Programmer
            </h3>
            <p className="w-2/3 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et
              facere architecto dolor iure vero aperiam! Veritatis beatae culpa
              laboriosam facilis accusantium cupiditate neque ullam corrupti,
              quo alias dolorum asperiores!
            </p>
          </article>
          <Link
            href={userData.resumeLink}
            className="border border-black py-2 px-4 rounded-md bg-gray-50"
            target="_blank"
          >
            <MdDownload className="inline-block" /> Resume
          </Link>
        </section>

        <section id="skills" className="w-2/3 pt-16">
          <h1 className={`${russo_one.className} text-3xl font-semibold mb-6`}>
            My Top Skills
          </h1>
          <div className="w-full flex flex-wrap justify-evenly gap-6">
            {userData.skills.map((skill, index) => {
              return <SkillBox skill={skill} key={index} canDelete={false} />;
            })}
          </div>
        </section>

        <section id="projects" className="w-2/3 pt-16">
          <h1 className={`${russo_one.className} text-3xl font-semibold mb-6`}>
            Projects
          </h1>
          <div className="w-full flex flex-col items-center gap-8">
            {userData.projects.map((project, index) => {
              return <ProjectBox project={project} key={index} />;
            })}
          </div>
        </section>

        <section id="certifications" className="w-2/3 pt-16">
          <h1 className={`${russo_one.className} text-3xl font-semibold mb-6`}>
            Certifications
          </h1>
          <div className="w-full flex flex-col gap-4">
            {userData.certificates.map((certificate, index) => {
              return <CertificateBox certificate={certificate} key={index} />;
            })}
          </div>
        </section>

        <section id="connect" className="w-2/3 pt-16 pb-4">
          <h1 className={`${russo_one.className} text-3xl font-semibold mb-6`}>
            Connect With ME
          </h1>
          <article className="w-full flex justify-center">
            <ConnectForm />
          </article>
        </section>

        <Footer />
      </MainLayout>
    </>
  );
};

export default Portfolio;

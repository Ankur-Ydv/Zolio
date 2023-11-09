import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { russo_one } from "@/utils/fonts";
import { getServerSession } from "next-auth";
import { BsArrowBarRight } from "react-icons/bs";
import { authOptions } from "../api/auth/[...nextauth]";
import MainLayout from "@/utils/MainLayout";
import DashboardNavbar from "@/components/DashboardNavbar";

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

  return {
    props: {
      username,
    },
  };
}

const Dashboard = ({ username }) => {
  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col overflow-auto">
          <DashboardNavbar username={username} />
          <div className="w-full h-full flex flex-wrap gap-12 p-8 items-center justify-center">
            <Card title={"Edit Bio"} to={"/dashboard/bio"} />
            <Card title={"Edit Profiles"} to={`/dashboard/profiles`} />
            <Card title={"Edit Skills"} to={"/dashboard/skills"} />
            <Card title={"Edit Projects"} to={"/dashboard/projects"} />
            <Card title={"Edit Certificates"} to={"/dashboard/certificates"} />
            <Card title={"Edit Experiences"} to={"/dashboard/experiences"} />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

const Card = ({ title, to }) => {
  return (
    <>
      <Link href={to}>
        <motion.article className="w-80 h-52 bg-slate-50 shadow-lg rounded-md hover:scale-105 flex justify-center items-center transition">
          <span className={`${russo_one.className} w-fit h-fit text-2xl`}>
            {title + " "}
            <BsArrowBarRight className="inline-block" />
          </span>
        </motion.article>
      </Link>
    </>
  );
};

export default Dashboard;

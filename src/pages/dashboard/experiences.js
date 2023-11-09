import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
import { russo_one } from "@/utils/fonts";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Users from "@/utils/UserModel";
import Loader from "@/components/Loader";
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
  const response = await Users.findOne({ username }, "experiences");

  return {
    props: {
      username,
      experiencesArray: response.experiences,
    },
  };
}

const Experiences = ({ username, experiencesArray }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col items-center overflow-auto">
          <DashboardNavbar username={username} />
          <section className="w-full md:3/4 lg:w-2/3 flex flex-col gap-4 px-4 py-8">
            <h1 className={`${russo_one.className} text-2xl`}>
              Edit Your Experiences
            </h1>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

export default Experiences;

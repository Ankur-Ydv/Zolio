import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { russo_one } from "@/utils/fonts";
import { FaCheck } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Users from "@/utils/UserModel";
import Loader from "@/components/Loader";
import MainLayout from "@/utils/MainLayout";
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
  const response = await Users.findOne({ username }, "profiles");
  const profilesObject = JSON.parse(JSON.stringify(response.profiles));

  return {
    props: {
      username,
      profilesObject,
    },
  };
}

const Profiles = ({ username, profilesObject }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, error) => {
    setLoading(true);
    try {
      await axios.put("/api/edit/profiles", { username, values });
      enqueueSnackbar("Profiles Added", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Internal Server Error", { variant: "error" });
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      linkedin: profilesObject.linkedin,
      github: profilesObject.github,
      leetcode: profilesObject.leetcode,
      geeksforgeeks: profilesObject.geeksforgeeks,
      codechef: profilesObject.codechef,
      codeforces: profilesObject.codeforces,
    },
    onSubmit,
  });

  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col items-center overflow-auto">
          <DashboardNavbar username={username} />
          <form
            className="w-full md:3/4 lg:w-2/3 flex flex-col gap-4 px-4 py-8"
            onSubmit={formik.handleSubmit}
          >
            <h1 className={`${russo_one.className} text-2xl`}>
              Edit Your Profiles' Username
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("linkedin")}
                />
                <label
                  htmlFor="linkedin"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  LinkedIn
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  id="github"
                  name="github"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("github")}
                />
                <label
                  htmlFor="github"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  GitHub
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  id="leetcode"
                  name="leetcode"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("leetcode")}
                />
                <label
                  htmlFor="leetcode"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  LeetCode
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  id="geeksforgeeks"
                  name="geeksforgeeks"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("geeksforgeeks")}
                />
                <label
                  htmlFor="geeksforgeeks"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  GeeksForGeeks
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  id="codechef"
                  name="codechef"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("codechef")}
                />
                <label
                  htmlFor="codechef"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  CodeChef
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  id="codeforces"
                  name="codeforces"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("codeforces")}
                />
                <label
                  htmlFor="codeforces"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  CodeForces
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-fit p-4 rounded-md shadow-md bg-slate-900 disabled:opacity-70 text-white"
              disabled={loading ? true : false}
            >
              {loading ? <Loader /> : <FaCheck />}
            </button>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default Profiles;

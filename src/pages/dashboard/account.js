import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { russo_one } from "@/utils/fonts";
import { FaCheck } from "react-icons/fa";
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
  const response = await Users.findOne(
    { username },
    "fullname email title resume description"
  );
  const user = JSON.parse(JSON.stringify(response));

  return {
    props: {
      username,
      user,
    },
  };
}

const Account = ({ username, user }) => {
  const router = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const res = await axios.delete(`/api/delete/${username}`);
      if (res.status === 200) router.push("/");
      else setDeleteLoading(false);
    } catch (error) {
      console.log(error);
      setDeleteLoading(false);
    }
  };

  const onSubmit = async (values, error) => {
    setSubmitLoading(true);
    if (true) {
      try {
        const res = await axios.patch("/api/edit/account", {
          ...values,
          username,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    setSubmitLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      fullname: user.fullname,
      email: user.email,
      title: user.title,
      resume: user.resume,
      description: user.description,
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
              Edit Your Account
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("fullname")}
                />
                <label
                  htmlFor="fullname"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Full Name
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("email")}
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("title")}
                />
                <label
                  htmlFor="title"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Title
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  id="resume"
                  name="resume"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("resume")}
                />
                <label
                  htmlFor="resume"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Resume Link
                </label>
              </div>
            </div>

            <textarea
              placeholder="Tell Us About Yourself (max 500 characters)"
              rows={6}
              className="w-full p-2 rounded-md"
              {...formik.getFieldProps("description")}
            />

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-fit p-4 rounded-md shadow-md bg-slate-900 disabled:opacity-70 text-white"
                disabled={submitLoading ? true : false}
              >
                {submitLoading ? <Loader /> : <FaCheck />}
              </button>

              <button
                type="button"
                className="w-fit p-3 rounded-md shadow-md bg-gray-50 font-semibold border border-red-800 text-red-900 disabled:opacity-70"
                disabled={deleteLoading ? true : false}
                onClick={handleDelete}
              >
                {deleteLoading ? <Loader /> : "Delete Portfolio"}
              </button>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default Account;

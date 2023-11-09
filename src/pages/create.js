import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import FormHeader from "@/components/FormHeader";
import MainLayout from "@/utils/MainLayout";
import Loader from "@/components/Loader";

const Create = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, error) => {
    setLoading(true);
    try {
      if (true) {
        await axios.post("/api/auth/signup", {
          fullname: values.fullname,
          username: values.username,
          email: values.email,
          password: values.password,
        });
      }
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
  });

  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex justify-center items-center">
          <form
            className="w-80 flex flex-col items-center gap-8 p-4 border border-black overflow-auto"
            onSubmit={formik.handleSubmit}
          >
            <FormHeader />
            <section className="w-full flex flex-col gap-4">
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
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("password")}
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Password
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("confirmPassword")}
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Confirm Password
                </label>
              </div>

              <div className="w-full relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...formik.getFieldProps("username")}
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Username
                </label>
              </div>
            </section>

            <div className="w-full flex flex-col items-center gap-1">
              <button
                type="submit"
                className="w-64 h-10 rounded-md shadow-md bg-gray-900 text-white disabled:opacity-70"
                disabled={loading ? true : false}
              >
                {loading ? <Loader /> : "Create a New Portfolio"}
              </button>

              <Link href="/" className="hover:text-slate-500">
                Edit Portfolio →
              </Link>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default Create;

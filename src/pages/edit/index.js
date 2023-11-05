import React from "react";
import { useFormik } from "formik";
import FormHeader from "@/components/FormHeader";
import MainLayout from "@/utils/MainLayout";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Edit = () => {
  const router = useRouter();

  const onSubmit = async (values, error) => {
    try {
      await axios.post("/api/edit", values);
      router.push(`/edit/${values.username}`);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <>
      <MainLayout extraStyle={"justify-center h-screen"}>
        <form
          className="w-1/4 flex flex-col items-center gap-6 p-4 border border-black"
          onSubmit={formik.handleSubmit}
        >
          <FormHeader />
          <input
            type="text"
            name="username"
            required={true}
            placeholder="Username"
            className="w-full p-2"
            {...formik.getFieldProps("username")}
          />
          <input
            type="password"
            name="password"
            required={true}
            placeholder="Password"
            className="w-full p-2"
            {...formik.getFieldProps("password")}
          />
          <div className="w-full flex flex-col gap-1 items-center">
            <button
              type="submit"
              className="w-1/3 p-2 bg-black text-white rounded-md"
            >
              Login
            </button>
            <Link href="/" className="hover:text-slate-500">
              Create a New Portfolio →
            </Link>
          </div>
        </form>
      </MainLayout>
    </>
  );
};

export default Edit;

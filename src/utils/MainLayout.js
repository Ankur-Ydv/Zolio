import React from "react";
import { rubik } from "@/utils/fonts";

const MainLayout = ({ children, extraStyle }) => {
  return (
    <>
      <main
        className={`${rubik.className} w-screen h-screen block text-slate-800 text-sm lg:text-md ${extraStyle}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;

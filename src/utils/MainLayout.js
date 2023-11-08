import React from "react";
import { Rubik, Russo_One } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const russo_one = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

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

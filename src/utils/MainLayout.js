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
        className={`${rubik.className} w-screen flex flex-col items-center overflow-y-auto text-slate-800 relative ${extraStyle}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;

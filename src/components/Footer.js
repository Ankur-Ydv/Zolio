import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col items-center ">
        <nav className="w-1/2 flex justify-evenly p-6 border-t border-black text-slate-600">
          <ul className="flex flex-col gap-4">
            <Link href="/">
              <li className="hover:text-black">Home</li>
            </Link>
            <Link href="/#skills">
              <li className="hover:text-black">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="hover:text-black">Projects</li>
            </Link>
            <Link href="/#connect">
              <li className="hover:text-black">Certifications</li>
            </Link>
            <Link href="/#connect">
              <li className="hover:text-black">Connect</li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-4">
            <Link href="https://www.linkedin.com/in/ankur-yadav-aky/">
              <li className="hover:text-black">LinkedIn</li>
            </Link>
            <Link href="https://github.com/Ankur-Ydv">
              <li className="hover:text-black">GitHub</li>
            </Link>
            <Link href="https://leetcode.com/Akryadav/">
              <li className="hover:text-black">LeetCode</li>
            </Link>
            <Link href="https://www.codechef.com/users/akryadav">
              <li className="hover:text-black">CodeChef</li>
            </Link>
            <Link href="https://auth.geeksforgeeks.org/user/akryadav">
              <li className="hover:text-black">GeeksForGeeks</li>
            </Link>
          </ul>
        </nav>
        <div className="text-md mb-4">
          Powered By <span className="font-semibold">Next.js</span> &{" "}
          <span className="font-semibold">Vercel</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

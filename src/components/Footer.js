import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer className="w-full flex flex-col items-center">
        <nav className="w-full md:2/3 flex justify-evenly p-6 border-t border-black text-slate-600">
          <ul className="flex flex-col gap-4">
            <Link href={`/portfolio/${router.query.username}`}>
              <li className="hover:text-black">Home</li>
            </Link>
            <Link href={`/portfolio/${router.query.username}/#projects`}>
              <li className="hover:text-black">Projects</li>
            </Link>
            <Link href={`/portfolio/${router.query.username}/#certifications`}>
              <li className="hover:text-black">Certifications</li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-4">
            <Link href={`/portfolio/${router.query.username}/#skills`}>
              <li className="hover:text-black">Skills</li>
            </Link>
            <Link href={`/portfolio/${router.query.username}/#experience`}>
              <li className="hover:text-black">Experience</li>
            </Link>
            <Link href="/dashboard">
              <li className="hover:text-black">Dashboard</li>
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

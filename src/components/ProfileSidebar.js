import Link from "next/link";
import React from "react";
import {
  SiLinkedin,
  SiGithub,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";

const ProfileSidebar = ({ profiles }) => {
  return (
    <>
      <aside className="flex gap-8 text-xl bg-black text-white p-4 rounded-md shadow-lg">
        <Link href={profiles.linkedin} target="_blank">
          <SiLinkedin />
        </Link>
        <Link href={profiles.github} target="_blank">
          <SiGithub />
        </Link>
        <Link href={profiles.leetcode} target="_blank">
          <SiLeetcode />
        </Link>
        <Link href={profiles.geeksforgeeks} target="_blank">
          <SiGeeksforgeeks />
        </Link>
        <Link href={profiles.codechef} target="_blank">
          <SiCodechef />
        </Link>
        <Link href={profiles.codeforces} target="_blank">
          <SiCodeforces />
        </Link>
      </aside>
    </>
  );
};

export default ProfileSidebar;

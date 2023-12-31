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
        <Link
          href={`https://www.linkedin.com/in/${profiles.linkedin}`}
          target="_blank"
        >
          <SiLinkedin />
        </Link>
        <Link href={`https://github.com/${profiles.github}`} target="_blank">
          <SiGithub />
        </Link>
        <Link
          href={`https://leetcode.com/${profiles.leetcode}`}
          target="_blank"
        >
          <SiLeetcode />
        </Link>
        <Link
          href={`https://auth.geeksforgeeks.org/user/${profiles.geeksforgeeks}`}
          target="_blank"
        >
          <SiGeeksforgeeks />
        </Link>
        <Link
          href={`https://www.codechef.com/users/${profiles.codechef}`}
          target="_blank"
        >
          <SiCodechef />
        </Link>
        <Link
          href={`https://codeforces.com/profile/${profiles.codeforces}`}
          target="_blank"
        >
          <SiCodeforces />
        </Link>
      </aside>
    </>
  );
};

export default ProfileSidebar;

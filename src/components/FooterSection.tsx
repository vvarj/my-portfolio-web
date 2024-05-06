import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import constants from "@/utils/constants";

function FooterSection() {
  const SOCIALMEDIA_LINKS = constants?.SOCIALMEDIA_LINKS;

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="grid grid-cols-1 mt-10  sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="font-bold text-xl">Address</p>
          <p>Kerala, India</p>
        </div>
        <div>
          {" "}
          <p className="font-bold text-xl">Email</p>
          <p>iamarjunvv@gmail.com</p>
        </div>
        <div>
          {" "}
          <p className="font-bold text-xl">About Me</p>
          <p>MERN stack Developer</p>
        </div>
        <div>
          {" "}
          <p className="font-bold text-xl">Follow Me</p>
          <Link href={SOCIALMEDIA_LINKS?.linkedIn}>
            <p className="flex items-center">
              <FaLinkedin />
              <span>LinkedIn</span>
            </p>
          </Link>
          <Link href={SOCIALMEDIA_LINKS?.github}>
            <p className="flex items-center">
              <FaGithub />
              <span>Github</span>
            </p>
          </Link>
          <Link href={SOCIALMEDIA_LINKS?.twitter}>
            <p className="flex items-center">
              <FaTwitter />
              <span>Twitter</span>
            </p>
          </Link>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        &#169; 2024 V V Arjun. All Rights Reserved.
      </p>
    </footer>
  );
}

export default FooterSection;

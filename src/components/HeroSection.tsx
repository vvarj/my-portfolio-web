"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import profPic from "../../public/images/prof-pic.png";
import { Button } from "./ui/moving-border";
import {
  IoLogoFirefox,
  IoLogoGithub,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoNodejs,
  IoLogoTwitter,
} from "react-icons/io5";
import { SiExpress, SiMongodb, SiNextdotjs, SiReact } from "react-icons/si";
import Link from "next/link";
import CONSTANTS from "@/utils/constants";

function HeroSection() {
  const words = `Hai, I am Arjun , A passionate MERN stack Developer from India`;

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1  bg-stone-900">
      <div className="col-span-1 md:mt-28 mt-24 p-8">
        <div className="flex items-center justify-center mt-2 md:mt-20">
          <TextGenerateEffect words={words} />
        </div>
        <div className="text-green-600 text-3xl flex mt-7 gap-4">
          <div className="flex">
            <Link href={CONSTANTS?.SOCIALMEDIA_LINKS?.github}>
              <IoLogoGithub />
            </Link>
            {/* <span>Github</span> */}
          </div>
          <div className="flex">
            <Link href={CONSTANTS?.SOCIALMEDIA_LINKS?.linkedIn}>
              <IoLogoLinkedin />
            </Link>
            {/* <span>LinkedIn</span> */}
          </div>
          <div className="flex">
            <Link href={CONSTANTS?.SOCIALMEDIA_LINKS?.twitter}>
              <IoLogoTwitter />
            </Link>
            {/* <span>Twitter</span> */}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Download CV
          </Button>
        </div>
        <p className="text-yellow-600 mt-4 text-2xl underline">Tech Stack</p>
        <div className="skill-logos grid grid-cols-3 gap-3 mt-5">
          <div className="text-yellow-500">
            <p className="text-xl">Javascript</p>
            <span className="text-4xl">
              <IoLogoJavascript />
            </span>
          </div>
          <div className="text-yellow-500">
            <p className="text-xl">Node Js</p>
            <span className="text-4xl">
              <IoLogoNodejs />
            </span>
          </div>
          <div className="text-yellow-500">
            <p className="text-xl">Express Js</p>
            <span className="text-4xl">
              <SiExpress />
            </span>
          </div>
          <div className="text-yellow-500">
            <p className="text-xl">MongoDB</p>
            <span className="text-4xl">
              <SiMongodb />
            </span>
          </div>
          <div className="text-yellow-500">
            <p className="text-xl">React Js</p>
            <span className="text-4xl">
              <SiReact />
            </span>
          </div>
          <div className="text-yellow-500">
            <p className="text-xl">Next Js</p>
            <span className="text-4xl">
              <SiNextdotjs />
            </span>
          </div>
        </div>
      </div>

      {/* <div className="col-span-1"></div> */}

      <div className="col-span-1 min-h-[600px] md:mt-2 lg:mt-28 mt-1">
        <div className="flex justify-center items-center p-10">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-center">
              <Image src={profPic} alt="profile pic" width={350} height={350} />
            </div>

            <p className="text-base sm:text-xl text-black mt-1 mb-2 dark:text-neutral-200">
              About Me
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {`Working as a Node.js developer with expertise in frontend technologies
              like React and Next.js, I bring a unique blend of skills to the
              table. With a passion for crafting seamless user experiences and
              robust backend solutions, I thrive in the dynamic world of web
              development. My dedication to staying updated with the latest
              industry trends ensures that I deliver scalable and innovative
              solutions tailored to meet your project's needs. Let's build
              something extraordinary together.`}
            </p>
          </BackgroundGradient>
          {/* Button section */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

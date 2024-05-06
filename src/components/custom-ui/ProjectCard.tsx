import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";

interface CardProps {
  title: string;
  description: string;
  url: string;
}

function ProjectCard(props: CardProps) {
  return (
    <div>
      {" "}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* <Image
      src={porPic}
      alt="Project 1"
      className="w-full h-64 object-cover"
      width={0}
      height={0}
    /> */}
        <div className="w-full h-64 object-cover flex items-center justify-center">
          <p className="text-9xl">
            <SiGithub />
          </p>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{props?.title}</h3>
          <p className="text-gray-700 mb-4">{props?.description}</p>
          <Link href={props?.url} className="text-blue-500 hover:underline">
            GitHub Repository
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

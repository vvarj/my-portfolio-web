"use client";
import React from "react";
import ProjectCard from "./custom-ui/ProjectCard";

interface Projects {
  title: string;
  description: string;
  url: string;
}

const PROJECTS: Projects[] = [
  {
    title: "Portfolio Website",
    description:
      "Created Personal portfolio website using NextJs app routing. Technology used : Next.js, Typescript , ReactJs, Tailwind CSS",
    url: "https://github.com/vvarj/my-portfolio-web",
  },
  {
    title: "Dance Website",
    description:
      "Created a Dance Website model using NodeJS and ExpressJS where a user can view the website have option to submit form. Template View Engine : Pug 3.0.2 Technology used: JavaScript , NodeJS , ExpressJS , MongoDB  ",
    url: "https://github.com/vvarj/Dance-Website",
  },
  {
    title: "Task Manager REST API",
    description:
      "Task Manager REST API design. Technology used: JavaScript , NodeJS , ExpressJS , MongoDB  ",
    url: "https://github.com/vvarj/Task-Manager-API",
  },
  {
    title: "Library-management-system-API",
    description:
      "A library management system API using NodeJs Express.Js Framework REST APIs.Features : User validations, signup , admin,use roles, password encryption,jsonwebtokens",
    url: "https://github.com/vvarj/Library-management-system-API",
  },
];

function ProjectSection() {
  return (
    <div className="grid grid-cols-1 bg-zinc-900">
      <div>
        <h2 className="text-center font-medium text-2xl text-sky-400 mt-10 ">
          Projects
        </h2>
      </div>
      <div className="projects grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="col-span-1 min-h-[500px] flex justify-center items-center m-10"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                url={project.url}
              />
            </div>
          );
        })}
        {/* <div className="col-span-1 min-h-[500px] flex justify-center items-center">
          <ProjectCard
            title="Portfolio Website"
            description="Portfolio website in NextJs"
            url="https://github.com/vvarj/my-portfolio-web"
          />
        </div> */}
        {/* <div className="col-span-1 min-h-[500px] bg-zinc-900"> 3</div>
        <div className="col-span-1 min-h-[500px] bg-zinc-900">4 </div>
        <div className="col-span-1 min-h-[500px] bg-zinc-900"> 5</div>
        <div className="col-span-1 min-h-[500px] bg-zinc-900"> 6</div> */}
      </div>
    </div>
  );
}

export default ProjectSection;

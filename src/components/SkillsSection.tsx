"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function SkillsSection() {
  const projects = [
    {
      title: "Javascript",
      description:
        "Skilled in JavaScript programming, capable of developing interactive and dynamic web applications to enhance user experience and functionality.",
      link: "/",
    },
    {
      title: "Node JS",
      description:
        "Competent in Node.js, enabling server-side JavaScript development, building robust and scalable network applications, and leveraging its vast ecosystem of libraries and packages.",
      link: "/",
    },
    {
      title: "Express Js",
      description:
        "Proficient in using Express.js, a minimalist web application framework for Node.js, to develop RESTful APIs and web services, streamlining server-side development and enhancing project efficiency.",
      link: "/",
    },
    {
      title: "React Js",
      description:
        "Proficient in React.js, a popular JavaScript library for building user interfaces, proficient in creating reusable UI components, managing state efficiently, and developing single-page applications (SPAs) with a focus on performance and scalability. Skilled in utilizing React's virtual DOM for optimized rendering and enhancing user experiences through declarative and component-based development.",
      link: "/",
    },
    {
      title: "MongoDB",
      description:
        "Experienced in MongoDB, a NoSQL database, proficient in designing and implementing scalable database solutions for web applications. Skilled in using MongoDB's document-oriented data model to store and retrieve data efficiently, enabling flexibility and scalability for modern applications. Experienced in working with MongoDB's query language and aggregation framework for complex data operations, as well as in integrating MongoDB with Node.js applications for seamless backend development.",
      link: "/",
    },
    {
      title: "HTML & CSS",
      description:
        "Proficient in creating structured, visually appealing web pages using HTML for content markup and CSS for styling and layout design.",
      link: "/",
    },
    {
      title: "Typescript",
      description:
        "Experienced in TypeScript, a statically typed superset of JavaScript, for building scalable and maintainable web applications with improved code quality and error detection.",
      link: "/",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 grid-cols-1 bg-slate-900">
      <div className=" min-h-[80px]">
        <h2 className="text-center mt-10 font-medium text-2xl text-sky-400">
          My Skills
        </h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
      {/* <div className="bg-zinc-500 min-h-[160px]">
        <div className="grid sm:grid-cols-3 grid-cols-1">
          <div className="col-span-1 bg-cyan-100 min-h-80">1</div>
          <div className="col-span-1 bg-slate-400 min-h-80">2</div>
          <div className="col-span-1 bg-cyan-50 min-h-80">3</div>
          <div className="col-span-1 bg-slate-100 min-h-80">1</div>
          <div className="col-span-1 bg-cyan-50 min-h-80">2</div>
          <div className="col-span-1 bg-slate-100 min-h-80">3</div>
        </div>
      </div> */}
    </div>
  );
}

export default SkillsSection;

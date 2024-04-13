"use client";
import React from "react";

function ProjectSection() {
  return (
    <div className="grid grid-cols-1 mt-10">
      <div>
        <h2 className="text-center bg-amber-500 min-h-[80px]">Projects</h2>
      </div>
      <div className="projects grid grid-cols-2">
        <div className="col-span-1 bg-zinc-400 min-h-[500px]">1</div>
        <div className="col-span-1 bg-green-400 min-h-[500px]">2</div>
        <div className="col-span-1 min-h-[500px] bg-blue-400">3</div>
        <div className="col-span-1 min-h-[500px] bg-blue-800">4</div>
      </div>
    </div>
  );
}

export default ProjectSection;

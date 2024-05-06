"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

function ProjectSection() {
  return (
    <div className="grid grid-cols-1 bg-zinc-900">
      <div>
        <h2 className="text-center font-medium text-2xl text-sky-400 mt-10 ">
          Projects
        </h2>
      </div>
      <div className="projects grid gap-5 md:grid-cols-3 grid-cols-1">
        <div className="col-span-1 bg-zinc-900 min-h-[500px]"></div>
        <div className="col-span-1 bg-zinc-900 min-h-[500px]"> </div>
        <div className="col-span-1 min-h-[500px] bg-zinc-900"> </div>
        <div className="col-span-1 min-h-[500px] bg-zinc-900"> </div>
        <div className="col-span-1 min-h-[500px] bg-zinc-900"> </div>
        <div className="col-span-1 min-h-[500px] bg-zinc-900"> </div>
      </div>
    </div>
  );
}

export default ProjectSection;

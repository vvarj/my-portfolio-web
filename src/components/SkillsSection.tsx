"use client";
import React from "react";

function SkillsSection() {
  return (
    <div className="grid sm:grid-cols-1 grid-cols-1 mt-10">
      <div className="bg-indigo-400 min-h-[80px]">
        <h2 className="text-center">My Skills</h2>
      </div>
      <div className="bg-zinc-500 min-h-[160px]">
        <div className="grid sm:grid-cols-3 grid-cols-1">
          <div className="col-span-1 bg-cyan-100 min-h-80">1</div>
          <div className="col-span-1 bg-slate-400 min-h-80">2</div>
          <div className="col-span-1 bg-cyan-50 min-h-80">3</div>
          <div className="col-span-1 bg-slate-100 min-h-80">1</div>
          <div className="col-span-1 bg-cyan-50 min-h-80">2</div>
          <div className="col-span-1 bg-slate-100 min-h-80">3</div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

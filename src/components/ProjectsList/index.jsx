'use client';
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from "@/data/projects.json";
import { useState } from "react";
import "@/components/Tech/AboutTech.css";

export function ProjectsList(){
  const numberOfProjects = projects.length;

  const [visibleProjects, setVisibleProjects] = useState(5);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 5);
  };

  return(
    <>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <h2 className="text-3xl font-bold tracking-widest">Projects</h2>
        <p className="font-bold tracking-widest">Total Projects: {numberOfProjects}</p>
      </div>
      <div className="flex flex-wrap gap-20">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="projectCard sm:min-w-xs max-w-xs">
            <figure className="overflow-hidden rounded-lg">
              <img className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" src={project.image} />
            </figure>
            <p className="flex items-center justify-between font-bold !mt-4">{project.name} <a className="hoverElements" href={project.url}><FaExternalLinkAlt /></a></p>
            <p className="projectSkills !mt-4 text-sm">Technologies Used:</p>
            <p className="projectSkills text-sm">{project.skills}</p>
          </div>
        ))}
      </div>
      {visibleProjects < numberOfProjects && (
        <button
          onClick={loadMore}
          className="w-30 !m-auto !p-2 cursor-pointer border border-neutral-700 rounded"
        >
          Show more
        </button>
      )}
    </>
  )
}
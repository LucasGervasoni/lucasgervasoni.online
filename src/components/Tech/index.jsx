import "@/components/Tech/AboutTech.css";
import { ProjectsList } from "@/components/ProjectsList/index";
import stack from "@/data/stack.json";

export function AboutTech() {
  return (
    <div className="aboutTech">
      <h1 className="text-3xl font-bold tracking-widest">Stack & Projects</h1>
      <p className="aboutTech tracking-widest md:text-lg sm:text-sm">
        I would like to explain that my knowledge is based on what I have
        learned, studied, and even explored as a hobby. I don't necessarily have
        deep expertise in all areas, but I have learned to work with various
        tools and technologies to solve specific problems. As for my projects,
        most of them were developed with the goal of practicing what I'm
        studying. These projects are available on my{" "}
        <a
          className="text-blue-400 font-bold"
          href="https://github.com/LucasGervasoni?tab=repositories"
        >
          GitHub
        </a>
        . Additionally, I have recently been generating new ideas and putting
        them into practice, so below you will find a list of my personal
        projects and skills.
      </p>
      <div className="aboutTechContent flex flex-col gap-10">
        <h2 className="text-3xl font-bold tracking-widest">Tech Stack</h2>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {stack.map((stack, index) => (
            <img
            key={index}
            alt={stack.name}
            src={stack.url}
          />
          ))}
        </div>
      </div>
      <div className="aboutTechContent flex flex-col gap-10">
        <ProjectsList />
      </div>
    </div>
  );
}

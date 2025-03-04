import { ProjectsList } from "@/components/ProjectsList/index";

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
          <img
            alt="html"
            src="https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=html5&logoColor=white"
          />
          <img
            alt="css"
            src="https://img.shields.io/badge/CSS-black?style=for-the-badge&logo=CSS&logoColor=white"
          />
          <img
            alt="sass"
            src="https://img.shields.io/badge/SASS-black?style=for-the-badge&logo=sass&logoColor=white"
          />
          <img
            alt="javascript"
            src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=white"
          />
          <img
            alt="node.js"
            src="https://img.shields.io/badge/node.js-black?style=for-the-badge&logo=node.js&logoColor=white"
          />
          <img
            alt="Express.js"
            src="https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express&logoColor=white"
          />
          <img
            alt="nestjs"
            src="https://img.shields.io/badge/nestjs-black?style=for-the-badge&logo=nestjs&logoColor=white"
          />
          <img
            alt="Next.js"
            src="https://img.shields.io/badge/next%20js-black?style=for-the-badge&logo=nextdotjs&logoColor=white"
          />
          <img
            alt="React.js"
            src="https://img.shields.io/badge/React%20js-black?style=for-the-badge&logo=react&logoColor=white"
          />
          <img
            alt="Typescript"
            src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white"
          />
          <img
            alt="Tailwind"
            src="https://img.shields.io/badge/Tailwind-black?style=for-the-badge&logo=tailwind-css&logoColor=white"
          />
          <img
            alt="Bootstrap"
            src="https://img.shields.io/badge/Bootstrap-black?style=for-the-badge&logo=bootstrap-css&logoColor=white"
          />
          <img
            alt="Java"
            src="https://img.shields.io/badge/Java-black?style=for-the-badge&logo=openjdk&logoColor=white"
          />
          <img
            alt="springboot"
            src="https://img.shields.io/badge/springboot-black?style=for-the-badge&logo=springboot&logoColor=white"
          />
          <img
            alt="Python"
            src="https://img.shields.io/badge/Python-black?style=for-the-badge&logo=python&logoColor=white"
          />
          <img
            alt="Django"
            src="https://img.shields.io/badge/Django-black?style=for-the-badge&logo=django&logoColor=white"
          />
          <img
            alt="mysql"
            src="https://img.shields.io/badge/mysql-black?style=for-the-badge&logo=mysql&logoColor=white"
          />
          <img
            alt="postgresql"
            src="https://img.shields.io/badge/postgresql-black?style=for-the-badge&logo=postgresql&logoColor=white"
          />
          <img
            alt="git"
            src="https://img.shields.io/badge/Git-black?style=for-the-badge&logo=git&logoColor=white"
          />
          <img
            alt="aws"
            src="https://img.shields.io/badge/AWS-black?style=for-the-badge&logo=amazon-web-services&logoColor=white"
          />
          <img
            alt="heroku"
            src="https://img.shields.io/badge/Heroku-black?style=for-the-badge&logo=heroku&logoColor=white"
          />
          <img
            alt="vercel"
            src="https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white"
          />
          <img
            alt="figma"
            src="https://img.shields.io/badge/Figma-black?style=for-the-badge&logo=figma&logoColor=white"
          />
        </div>
      </div>
      <div className="aboutTechContent flex flex-col gap-10">
        <ProjectsList />
      </div>
    </div>
  );
}

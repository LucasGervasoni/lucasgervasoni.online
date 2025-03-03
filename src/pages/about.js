import "../../public/css/About.css";
import { NavBar } from "@/components/NavBar";
import { AboutMe } from "@/components/aboutMe/AboutMe";

export default function About() {
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar />
      <AboutMe />
    </div>
  );
}

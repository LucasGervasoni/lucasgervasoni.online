import "../../public/css/About.css";
import { NavBar } from "@/components/Navbar/index";
import { AboutMe } from "@/components/AboutMe/index";
import { Footer } from "@/components/Footer/index";

export default function About() {
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar />
      <AboutMe />
      <Footer />
    </div>
  );
}

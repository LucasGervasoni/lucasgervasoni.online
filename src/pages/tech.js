import "../../public/css/AboutTech.css";
import { NavBar } from "@/components/Navbar/index";
import { AboutTech } from "@/components/Tech/index";
import { Footer } from "@/components/Footer/index";

export default function Tech() {
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar />
      <AboutTech />
      <Footer />
    </div>
  );
}

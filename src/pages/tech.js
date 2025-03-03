import "../../public/css/AboutTech.css";
import { NavBar } from "@/components/NavBar";
import { AboutTech } from "@/components/tech/AboutTech";
import { Footer } from "@/components/Footer";

export default function Tech() {
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar />
      <AboutTech />
      <Footer />
    </div>
  );
}

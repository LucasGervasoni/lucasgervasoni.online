import "../../public/css/MoreAboutMe.css";
import { NavBar } from "@/components/NavBar";
import { MoreAboutMe } from "@/components/aboutMe/MoreAboutMe";
import { Footer } from "@/components/Footer";

export default function MoreAbout() {
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar />
      <MoreAboutMe />
      <Footer />
    </div>
  );
}

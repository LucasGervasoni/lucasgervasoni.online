import "../../public/css/MoreAboutMe.css";
import { NavBar } from "@/components/Navbar/index";
import { MoreAboutMe } from "@/components/MoreAboutMe/index";
import { Footer } from "@/components/Footer/index";

export default function MoreAbout() {
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar />
      <MoreAboutMe />
      <Footer />
    </div>
  );
}

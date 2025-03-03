import '../../public/css/About.css'
import { NavBar } from "@/components/navBar";
import { AboutMe } from "@/components/aboutMe/aboutMe";

export default function About(){
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar/>
      <AboutMe/>
    </div>
  )
}
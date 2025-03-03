import '../../public/css/AboutTech.css'
import { NavBar } from "@/components/navBar";
import { AboutTech } from '@/components/tech/aboutTech';

export default function Tech(){
  return (
      <div className="mainContainer min-w-2xs max-w-3xl">
        <NavBar/>
        <AboutTech/>
      </div>
    )
}
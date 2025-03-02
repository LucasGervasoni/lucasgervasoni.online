import '../../public/css/MoreAboutMe.css'
import { NavBar } from "@/components/navBar";
import { MoreAboutMe } from '@/components/moreAboutMe';

export default function MoreAbout(){
  return (
    <div className="mainContainer min-w-2xs max-w-3xl">
      <NavBar/>
      <MoreAboutMe/>
    </div>
  )
}
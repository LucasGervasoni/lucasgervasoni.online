'use client'
import { useState } from "react";
import { useBodyTheme } from "@/hooks/changeTheme";
import { HiOutlineDownload } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";

export function NavBar(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? 'light-theme' : 'dark-theme';

  useBodyTheme(theme);

  const buttonDownload = {
    cursor: "pointer",
    transition: "background 0.2s ease-in-out, color 0.2s ease-in-out",
  };


  return(
    <nav className="flex justify-between items-center">
     <p className="tracking-wider flex items-center gap-4">
      <Link href="/">LUCAS GERVASONI</Link> 
        <button className="cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <FiSun/> : <FiMoon/> }
      </button>
        </p>
      <a href="https://drive.google.com/file/d/1Ry7EtIbztxdZPtVEvihpzufAfbW-ymAC/view?usp=sharing" target="_blank" className="animate-bounce" style={buttonDownload}><HiOutlineDownload/></a>
    </nav>
  )
}
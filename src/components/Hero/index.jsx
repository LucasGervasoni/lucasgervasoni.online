'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export function Hero(){
  const [text, setText] = useState({
    line1: "",
    line2: ""
  });
  const [index, setIndex] = useState(0);

  const lines = [
    "Hey, I'm Lucas.",
    "I'm from Brazil."
  ];

  useEffect(() => {
    if (index < lines[0].length) {
      const timeout = setTimeout(() => {
        setText((prevText) => ({
          ...prevText,
          line1: prevText.line1 + lines[0].charAt(index)
        }));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (index < lines[0].length + lines[1].length) {
      const timeout = setTimeout(() => {
        setText((prevText) => ({
          ...prevText,
          line2: prevText.line2 + lines[1].charAt(index - lines[0].length)
        }));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);



    return (
        <div className="heroContainer h-140 flex flex-col gap-4 justify-center">
          <div>
            <p className="text-3xl font-bold">{text.line1}</p>
            <p className="text-xl">{text.line2}</p>
          </div>
          <div className="socialList flex sm:flex-row flex-col sm:gap-2 md:gap-4">
            <a className="flex flex-row items-center gap-2" href="https://www.linkedin.com/in/lucasgervasoni/" target="_blank"><FaLinkedin /> Linkedin</a>
            <a className="flex flex-row items-center gap-2" href="https://github.com/LucasGervasoni" target="_blank"><FaGithub /> Github</a>
          </div>
          <p 
          className="w-50 buttonStart"
          >
            <Link href="/About" className="flex items-center gap-4 justify-between">Press to start <FaArrowRightLong /></Link>
            </p>
        </div>
    )
}
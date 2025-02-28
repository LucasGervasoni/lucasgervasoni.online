'use client';
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export function Hero(){
  const [isHovered, setIsHovered] = useState(false);


  const [text, setText] = useState({
    line1: "",
    line2: ""
  });
  const [index, setIndex] = useState(0);

  const lines = [
    "Hey, I'm Lucas.",
    "I'm a Software Developer from Brazil."
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

  const buttonStart = {
    backgroundColor: isHovered ? "#212024" : "transparent",
    cursor: "pointer",
    padding: "8px 10px",
    borderRadius: "5px",
    transition: "background 0.2s ease-in-out, color 0.2s ease-in-out",
  };



    return (
        <div className="heroContainer h-150 flex flex-col gap-4 justify-center">
          <div>
            <p className="text-3xl font-bold">{text.line1}</p>
            <p className="text-xl">{text.line2}</p>
          </div>
          <div className="socialList flex sm:flex-row flex-col sm:gap-2 md:gap-4">
            <a className="flex flex-row items-center gap-2" href="https://www.linkedin.com/in/lucasgervasoni/" target="_blank"><FaLinkedin /> Linkedin</a>
            <a className="flex flex-row items-center gap-2" href="https://github.com/LucasGervasoni" target="_blank"><FaGithub /> Github</a>
          </div>
          <p 
          className="w-50" style={buttonStart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            <a className="flex items-center gap-4 justify-between">Press to start <FaArrowRightLong /></a>
            </p>
        </div>
    )
}
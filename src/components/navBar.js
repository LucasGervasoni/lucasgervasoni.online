import { HiOutlineDownload } from "react-icons/hi";

export function NavBar(){

  const buttonDownload = {
    cursor: "pointer",
    transition: "background 0.2s ease-in-out, color 0.2s ease-in-out",
  };


  return(
    <nav className="flex justify-between items-center">
      <p className="tracking-wider">LUCAS GERVASONI</p>
      <a href="https://drive.google.com/file/d/1Ry7EtIbztxdZPtVEvihpzufAfbW-ymAC/view?usp=sharing" target="_blank" className="animate-bounce" style={buttonDownload}><HiOutlineDownload/></a>
    </nav>
  )
}
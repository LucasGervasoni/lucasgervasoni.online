import Link from "next/link";

export function Footer(){
  return(
    <nav className="flex justify-between items-center gap-4 min-h-10">
      <p className="text-sm md:text-base hoverElements cursor-pointer footerElements">© Lucas Gervasoni</p>
      <div className="flex items-center gap-4">
        <Link className="text-xs md:text-sm hoverElements footerElements" href="/">Home</Link>
        <Link className="text-xs md:text-sm hoverElements footerElements" href="/About">About</Link>
        <Link className="text-xs md:text-sm hoverElements footerElements" href="/Tech">Stack & Projects</Link>
      </div>
    </nav>
  )
}
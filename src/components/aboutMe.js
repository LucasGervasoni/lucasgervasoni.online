import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

export function AboutMe() {

  const imgStyle = {
    display: 'inline',
    height: '30px',
  }

    return (
        <div className="aboutMe">
          <h1 className="text-3xl font-bold tracking-widest">Hi <img style={imgStyle} src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif"/> , I'm Lucas Gervasoni</h1>
          <div className="aboutMeContent">
            <p className="aboutMeItems tracking-widest md:text-lg sm:text-sm">
              I'm a Software Developer, passionate about technology and solving real-world problems through coding.
            </p>
            <p className="aboutMeItems tracking-widest md:text-lg sm:text-sm">
            From a young age, I have been curious about understanding how things work, which led me to explore the world of technology. Today, I dedicate my time to learning, creating, and growing as a <b className="text-blue-400">software developer</b>, as well as venturing into the fields of <b className="text-blue-400">data and process automation.</b> With every project, I see an opportunity to transform ideas into impactful solutions.
            </p>
            <p className="aboutMeItems tracking-widest md:text-lg sm:text-sm">
            Today, I have a degree in Logistics from <a className="text-blue-400 font-bold" href="https://drive.google.com/file/d/1WNLXQ87df9wSrR3jCIlHS7vgMRCpIdPj/view?usp=sharing">Anhanguera University</a>, a field that has always interested me and that I have come to realize is strongly connected to technology. This education has given me a strategic perspective on process management, resource optimization, and operational efficiency. With this knowledge, combined with my passion for technology, I aim to create innovative solutions that automate tasks, improve processes, increase efficiency, and generate positive impacts for both businesses and people.
            </p>
            <Link href="/moreAbout" className="moreAboutLink w-40 flex items-center gap-2 justify-between text-blue-500">More about me <FaArrowRightLong /></Link>
          </div>
        </div>
    );
}
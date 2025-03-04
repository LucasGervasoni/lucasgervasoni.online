import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import "@/components/AboutMe/About.css";

export function MoreAboutMe() {
  return (
    <div className="moreAboutMe">
      <h1 className="text-3xl font-bold tracking-widest">User Manual</h1>
      <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        This content delves a little deeper into Lucas, covering both technical aspects, such as his skills and knowledge in the professional field, and social aspects, related to his strengths and weaknesses.</p>
      <div className="moreAboutMeContent">
        <h2 className="text-3xl font-bold tracking-widest">Goals</h2>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
          I am always seeking to expand my knowledge with experienced professionals and contribute to innovative and challenging projects. My goal is to grow professionally by applying technological solutions to optimize processes and create a positive impact that connects technology and logistics.</p>
      </div>
      <div className="moreAboutMeContent">
        <h2 className="text-3xl font-bold tracking-widest">Education</h2>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; Education: Computer Science<br/>
        &#9679; Institution: Universidade Estácio de Sá<br/>
        &#9679; Period: 01/2023 - 12/2026
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; Education: Logistics<br/>
        &#9679; Institution: University Pitágoras Unopar Anhanguera<br/>
        &#9679; Period: 01/2023 - 12/2024<br/>
        &#9679;  <a className="text-blue-400 font-bold" href="https://drive.google.com/file/d/1WNLXQ87df9wSrR3jCIlHS7vgMRCpIdPj/view?usp=sharing">Degree</a>
        </p>
      </div>
      <div className="moreAboutMeContent">
        <h2 className="text-3xl font-bold tracking-widest">Certificates</h2>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; Skills: HTML, CSS, Javascript, SASS, React, NodeJs, REST API, Algorithms<br/>
        &#9679; Institution: DevMedia<br/>
        &#9679;  <a className="text-blue-400 font-bold" href="https://drive.google.com/drive/folders/1_PjqWo5qZ_000JmXz5I1cROzAaY5h_e9?usp=sharing">Degree</a>
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; Skills: GitHub Foundations<br/>
        &#9679; Institution: GitHub<br/>
        &#9679;  <a className="text-blue-400 font-bold" href="https://www.credly.com/badges/e2a2065e-ffdb-4a84-9ba1-9deae95eaa8a/print">Degree</a>
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; Skills: Excel, Power BI, AWS<br/>
        &#9679; Institution: Alura<br/>
        &#9679;  <a className="text-blue-400 font-bold" href="https://drive.google.com/drive/folders/1eqFO5FQ33kP8Tqm9OglHHvfD9C0NwuqV?usp=sharing">Degree</a>
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; Skills: Hardware Training and Maintenance of PC and Notebooks<br/>
        &#9679; Institution: Ever-UP Cursos e Treinamentos<br/>
        &#9679;  <a className="text-blue-400 font-bold" href="https://drive.google.com/file/d/1JDa66ow8dXhYG63OX-4CBrwU5zPxXQKM/view?usp=sharing">Degree</a>
        </p>
      </div>
      <div className="moreAboutMeContent">
        <h2 className="text-3xl font-bold tracking-widest">Strengths</h2>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; <b>Continuous learning:</b> I have a strong commitment to constant learning and am always seeking new skills and knowledge. I believe that continuous evolution is essential to adapt to changes and stand out in projects involving programming, data, and process automation.
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; <b>Systemic thinking:</b> I strive to simplify complex systems to understand them better. I enjoy deeply analyzing challenging problems and finding strategic solutions.
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; <b>Agility and dynamism:</b> I value the continuous delivery of results and prefer to work at a fast pace, iterating constantly to achieve improvements and innovation.
        </p>
      </div>
      <div className="moreAboutMeContent">
        <h2 className="text-3xl font-bold tracking-widest">Weaknesses</h2>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; <b>Overexerting myself:</b> I get excited about many ideas and projects, and this ends up leading me to take on more than I can handle.
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; <b>Starting simple:</b> Sometimes, my mind skips basic steps and tries to solve everything at once, too quickly. Don't hesitate to help me stay focused and manage this impulsiveness.
        </p>
        <p className="moreAboutMeItems tracking-widest md:text-lg sm:text-sm">
        &#9679; <b>Perfectionism:</b> Sometimes, by wanting everything to be perfect, I end up spending more time and energy on details that, often, don't make much difference. This causes me to lose focus on what really matters, when, in some situations, the simple solution is enough to achieve good results.
        </p>
      </div>
      <Link href="/Tech" className="moreAboutLink text-sm w-60 md:text-base md:w-70 flex items-center gap-2 justify-between text-blue-500">Tech Stack and Projects <FaArrowRightLong /></Link>
    </div>
  )
}
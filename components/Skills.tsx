import React from 'react'
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiJson } from 'react-icons/si';
import { SiXml } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiNpm } from 'react-icons/si';
import { SiYarn } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { SiC } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';


const skillIcons = [
    {
        name: "HTML",
        icon: TiHtml5,
    },
    {
        name: "CSS",
        icon: IoLogoCss3,
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "React",
        icon: FaReact,
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
    },
    {
        name: "Express",
        icon: SiExpress,
    },
    {
        name: "Django",
        icon: SiDjango,
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
    },
    {
        name: "MySQL",
        icon: SiMysql,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
    },
    {
        name: "JSON",
        icon: SiJson,
    },
    {
        name: "XML",
        icon: SiXml,
    },
    {
        name: "Git",
        icon: SiGit,
    },
    {
        name: "GitHub",
        icon: SiGithub,
    },
    {
        name: "NPM",
        icon: SiNpm,
    },
    {
        name: "Yarn",
        icon: SiYarn,
    },
    {
        name: "Figma",
        icon: SiFigma,
    },
    {
        name: "Python",
        icon: SiPython,
    },
    {
        name: "Java",
        icon: FaJava,
    },
    {
        name: "C",
        icon: SiC,
    },
    {
        name: "C++",
        icon: SiCplusplus,
    },
    {
        name: "AWS",
        icon: FaAws,
    },
]


const Skills = () => {
  return (
    <section id="skills" className='flex flex-col gap-4 mt-14 mb-16'>
      <h2 className='text-3xl font-bold'>My Areas of Expertise</h2>
      <p>Here are the areas of expertise that I have acquired over the years.</p>
      <div className="flex flex-col md:flex-row gap-8">
        <ul className="flex flex-col gap-4 skills-list">
          <li>
            <span>Frontend</span> (HTML, CSS, JavaScript, Typescript, React.js, Three.js, Angular, Vue.js, TailwindCSS, React Native)
          </li>
          <li>
            <span>Backend</span> (JavaScript, Python, SQL, Node.js & Express.js, Django, MongoDB, MySQL, PostgreSQL, JSON, XML)
          </li>
          <li>
            <span>Fullstack</span> (Next.js, MERN, and Python fullstack)
          </li>
          <li>
            <span>DevOps basics</span> (Docker, Kubernetes, AWS)
          </li>
          <li>
            <span>Version control</span> (Git & GitHub)
          </li>
          <li>
            <span>Package managers</span> (NPM, Yarn, Pip)
          </li>
          <li>
            <span>Design basics</span> (Figma & Adobe Photoshop)
          </li>
          <li>
            <span>Programming languages</span> (Python, Java, C, C++, JavaScript, Typescript)
          </li>
          <li>
            <span>Operating systems</span> (Windows, Linux, and macOS)
          </li>
          <li>
            <span>Databases</span> (SQL, MongoDB, MySQL, PostgreSQL)
          </li>
          <li>
            <span>Tools</span> (GitHub, Docker, AWS, Figma, Adobe Photoshop, Visual Studio Code, Webstorm, PyCharm, Android Studio, etc.)
          </li>
        </ul>
        <ul className='flex flex-wrap gap-6 justify-center items-center flex-2/3'>
          {
            skillIcons.map((skill) => (
              <li key={skill.name}>
                <skill.icon size={45} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Skills;
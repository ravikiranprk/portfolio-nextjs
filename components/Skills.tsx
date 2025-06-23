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
        title: "HyperText Markup Language",
    },
    {
        name: "CSS",
        icon: IoLogoCss3,
        title: "Cascading Style Sheets",
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
        title: "JavaScript",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        title: "TypeScript",
    },
    {
        name: "React",
        icon: FaReact,
        title: "React",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        title: "Tailwind CSS",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        title: "Node.js",
    },
    {
        name: "Express",
        icon: SiExpress,
        title: "Express.js",
    },
    {
        name: "Django",
        icon: SiDjango,
        title: "Django",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        title: "MongoDB",
    },
    {
        name: "MySQL",
        icon: SiMysql,
        title: "MySQL",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        title: "PostgreSQL",
    },
    {
        name: "JSON",
        icon: SiJson,
        title: "JSON",
    },
    {
        name: "XML",
        icon: SiXml,
        title: "XML",
    },
    {
        name: "Git",
        icon: SiGit,
        title: "Git",
    },
    {
        name: "GitHub",
        icon: SiGithub,
        title: "GitHub",
    },
    {
        name: "NPM",
        icon: SiNpm,
        title: "npm",
    },
    {
        name: "Yarn",
        icon: SiYarn,
        title: "Yarn",
    },
    {
        name: "Figma",
        icon: SiFigma,
        title: "Figma",
    },
    {
        name: "Python",
        icon: SiPython,
        title: "Python",
    },
    {
        name: "Java",
        icon: FaJava,
        title: "Java",
    },
    {
        name: "C",
        icon: SiC,
        title: "C Prorammin Language",
    },
    {
        name: "C++",
        icon: SiCplusplus,
        title: "C++",
    },
    {
        name: "AWS",
        icon: FaAws,
        title: "AWS",
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
            <span>Programming languages</span> (Python, Java, C, C++, JavaScript, Typescript, Liquid)
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
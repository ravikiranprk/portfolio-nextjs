"use client";
import Link from "next/link";
import { BookOpenCheck, BriefcaseBusiness, CircleUserRound, Home, LucideSunDim, Mail, Moon, FolderOpenDot } from 'lucide-react';
import React, { useState } from 'react';

const Menu = () => { 
  const [themeValue, setTheme] = useState("dark");

  return (
    <menu className={`flex justify-between items-center mt-5 mb-5 w-11/12 mx-auto ${ themeValue === "dark" ? 'text-zinc-100 li-hover' : 'text-[#292929] li-hover-light'}`}>
      {/* name */}
      <h1 className='logo font-bold text-xl'><Link href="/">Ravi Kiran Palaparthi</Link></h1>

      {/* navigation links for lg (large) devices (laptop, etc.) */} 
      <ul className={`flex justify-center items-center gap-3 ${ themeValue === "dark"? 'border-zinc-300' : 'border-[#292929]'} border-2 rounded-full px-2 py-1 mx-auto li-center hidden lg:flex`}>
        <li><Link href="/"><Home /></Link></li>
        <li className={`${themeValue === "dark" ? 'text-zinc-300' : 'text-[#292929]'}`}>|</li>
        <li><a href="#about"><CircleUserRound />About</a></li>
        <li><a href="#skills"><BookOpenCheck />Skills</a></li>
        <li><a href="#projects"><FolderOpenDot />Projects</a></li>
        <li><a href="#experience"><BriefcaseBusiness />Experience</a></li>
        <li><a href="#contact"><Mail />Contact</a></li>
      </ul>

      {/* navigation links for md and sm devices (mobile, tablet, etc.) */}
      <ul className={`flex flex-col justify-center items-center gap-3 ${ themeValue === "dark"? 'border-zinc-300' : 'border-[#292929]'} border-2 rounded-full px-2 py-1 mx-auto li-center mobile-nav z-20 hidden`}>
        <li><Link href="/"><Home /></Link></li>
        <li className={`${themeValue === "dark" ? 'text-zinc-300' : 'text-[#292929]'}`}>|</li>
        <li><a href="#about"><CircleUserRound />About</a></li>
        <li><a href="#skills"><BookOpenCheck />Skills</a></li>
        <li><a href="#projects"><FolderOpenDot />Projects</a></li>
        <li><a href="#experience"><BriefcaseBusiness />Experience</a></li>
        <li><a href="#contact"><Mail />Contact</a></li>
        <li>
          <button 
            id='theme-toggle'
            onClick={() => setTheme(themeValue === "dark" ? "light" : "dark")} 
            value={themeValue} 
            className='hover:cursor-pointer lg:hidden'
          >
            {themeValue === "dark" ? <LucideSunDim /> : <Moon />}
          </button>
        </li>
      </ul>
      
      {/* theme toggle button */}
      <button 
        id='theme-toggle'
        onClick={() => setTheme(themeValue === "dark" ? "light" : "dark")} 
        value={themeValue} 
        className='hover:cursor-pointer hidden lg:flex'
      >
        {themeValue === "dark" ? <LucideSunDim /> : <Moon />}
      </button>
    </menu>
  )
}

export default Menu;
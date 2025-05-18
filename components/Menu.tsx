"use client";
import { BookOpenCheck, BriefcaseBusiness, CircleUserRound, Home, Laptop, LucideSunDim, Mail, MenuIcon, MenuSquareIcon, Moon } from 'lucide-react';
import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Menu = () => { 
  const [themeValue, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <menu className={`flex lg:justify-evenly justify-between lg:items-center items-start mt-5 mb-5 w-11/12 mx-auto ${ themeValue === "dark" ? 'text-zinc-100 li-hover' : 'text-[#292929] li-hover-light'} gap-8 z-50`}>
      {/* name */}
      <h1 className='logo font-bold text-xl'><a href="/">Ravi Kiran Palaparthi</a></h1>

      {/* navigation links for lg (large) devices (laptop, etc.) */} 
      <ul className={`flex justify-center items-center gap-3 ${ themeValue === "dark"? 'border-zinc-300' : 'border-[#292929]'} border-2 rounded-full px-2 py-1 mx-auto li-center hidden lg:flex`}>
        <li><a href="/"><Home /></a></li>
        <li className={`${themeValue === "dark" ? 'text-zinc-300' : 'text-[#292929]'}`}>|</li>
        <li><a href="#about"><CircleUserRound />About</a></li>
        <li><a href="#skills"><BookOpenCheck />Skills</a></li>
        <li><a href="#experience"><BriefcaseBusiness />Experience</a></li>
        <li><a href="#contact"><Mail />Contact</a></li>
        <li className='flex justify-center items-center'><a href="/CVWebDev.pdf" download><FaFileDownload />Resume</a></li>
      </ul>

      <div className="md:hidden w-[30vw]" onClick={toggleMobileMenu}>
        {
          isMobileMenuOpen ? (
            <span>
            <RiCloseLine size={30} className='hover:cursor-pointer' />
            {/* navigation links for md and sm devices (mobile, tablet, etc.) */}
            <ul className={`absolute z-50 flex-col  justify-center items-start gap-3 ${ themeValue === "dark"? 'border-zinc-300' : 'border-[#292929]'} border-2 rounded-md px-4 py-2 li-center ${isMobileMenuOpen ? 'flex' : 'hidden'} w-fit bg-gray-800 text-zinc-200`}>
              <li><a href="#about"><CircleUserRound />About</a></li>
              <li><a href="#skills"><BookOpenCheck />Skills</a></li>
              <li><a href="#experience"><BriefcaseBusiness />Experience</a></li>
              <li><a href="#contact"><Mail />Contact</a></li>
              <li>
                <button 
                  id='theme-toggle'
                  onClick={() => setTheme(themeValue === "dark" ? "light" : "dark")} 
                  value={themeValue} 
                  className='hover:cursor-pointer lg:hidden'
                >
                  {themeValue === "dark" ? (<LucideSunDim />)  : <Moon />}
                </button>
              </li>
            </ul>
            </span>
          ) : (
            <RiMenu3Line size={30} className='hover:cursor-pointer' />
          )
        }
      </div>

      
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
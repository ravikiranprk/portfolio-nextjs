"use client";
import React from 'react'
import Image from "next/image";

type ButtonProps = {
  text: string,
  className: string,
  id: string,
}

const Button = ({ text, className, id } : ButtonProps ) => {
  return (
    <a className={`${className ?? ''} relative z-20 cursor-pointer`} href='#contact' >
      <div className="px-4 py-4 rounded-lg bg-[#181818] text-white flex justify-center items-center relative cursor-pointer overflow-hidden group border-black border-1">
        <div 
          className='absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-white text-[#181818] transition-all duration-500 '
        />
        <p 
          className="uppercase md:text-lg transition-all duration-500 group-hover:text-white group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 text-[#181818]"
        > 
          {text}
        </p>
        <div className="group-hover:bg-white size-10 rounded-full absolute right-10 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden">
          <Image
              width={20}
              height={20}
              src="/arrow-down.svg"
              alt="arrow"
              className="text-[var(--foreground)] xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500"
          />
        </div>
      </div>
    </a>
  )
}

export default Button;
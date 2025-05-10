import React from 'react'
import { FiLinkedin } from 'react-icons/fi';
import { Mail as MailIcon } from 'lucide-react';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';
import { BiX } from 'react-icons/bi';

const socialIcons = [
    {
        icon: FaGithub,
        socialUrl: "https://github.com/ravikiranprk",
    },
    {
        icon: FiLinkedin,
        socialUrl: "https://www.linkedin.com/in/ravi-kiran-palaparthi-ab7934221/",
    },
    {
        icon: MailIcon,
        socialUrl: "mailto:ravikiranprk160@gmail.com",
    },
    {
        icon: FaWhatsapp,
        socialUrl: "https://wa.me/+919381709276",
    },
    {
        icon: BiX,
        socialUrl: "https://x.com/RaviKiran258454",
    },
]

const Footer = () => {
  return (
    <footer className='mt-14 mb-12'>
      <div className='flex flex-col justify-center items-center gap-7'>
        <h3 className='text-3xl font-bold text-center'>Get in touch</h3>
        <div className='flex justify-evenly items-center gap-8 sm:gap-14'>
          {socialIcons.map((icon) => (
            <a key={icon.socialUrl} href={icon.socialUrl} target="_blank" rel="noopener noreferrer" className='text-2xl'>
              <icon.icon />
            </a>
          ))}
        </div>
        <p className='font-bold'>&copy; {new Date().getFullYear()} Ravi Kiran Palaparthi, All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiLinkedin } from "react-icons/fi";
import { Mail as MailIcon } from "lucide-react";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { BiX } from "react-icons/bi";

const words = [
  { text: "Concepts", imgPath: "/concepts.svg" },
  { text: "Ideas", imgPath: "/ideas.svg" },
  { text: "Designs", imgPath: "/designs.svg" },
  { text: "Code", imgPath: "/code.svg" },
];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2,
        ease: "power2.inOut",
      }
    );
  });

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
  ];

  return (
    <main className="mb-6 flex flex-col gap-4">
      <div className="relative z-10 xl:mt-7 mt-5 md:h-dvh h-[60vh] flex items-center justify-center">
        {/* Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide absolute pt-0 px-2 md:px-5 py-[20px] h-[48px] md:h-[55px] xl: md:translate-y-1 translate-y-0 overflow-hidden">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                        />
                        {word.text}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>

              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I&apos;m Ravi Kiran, an aspiring Web Developer with a passion for
              creating visually stunning, user-friendly, and interactive
              websites.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="Let's talk"
            />
          </div>
        </header>
      </div>
      <div className="flex justify-center items-center gap-3 p-5">
        {socialIcons.map((icon) => (
          <Link
            key={icon.socialUrl}
            href={icon.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <icon.icon />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Hero;

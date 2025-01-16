"use client";
import React from 'react';

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import { ArrowDownToLine } from 'lucide-react';

const Hero = () => {
  const words = ["beautiful", "functional", "responsive"];

  return (
    <div className="relative h-[83.333vh] flex items-center p-6 md:p-8 lg:p-12 m-10">
      {/* Spotlight Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Background Grid
      <div className="absolute inset-0 h-full w-full dark:bg-black-100 bg-black dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"></div> */}

      {/* Main content container */}
      <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-center w-full">
        
        {/* Left Section: Text */}
        <div className="lg:max-w-[50%] w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6 mt-8 lg:mt-0">
          
          {/* Intro Text */}
          <p className="uppercase tracking-widest text-xs md:text-sm text-blue-100">
            Hi! I&apos;m Janhavi, a Next.js Developer.
          </p>
          
          {/* Headline with FlipWords */}
          <div className="text-xl md:text-3xl lg:text-4xl font-semibold leading-snug lg:leading-tight space-y-2 md:space-y-4">
            <span>Building</span>
            <span className="inline-block">
              <FlipWords words={words} />
            </span>
            <span>websites using MERN stack </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mt-6 md:mt-8 lg:mt-10">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <Link target="_blank" href='https://drive.google.com/file/d/14oLon1Kgdlyibi75DPpB3Pc-2Cgfv0T4/view?usp=sharing'>
            <MagicButton
                title="Download Cv"
           
                icon={<ArrowDownToLine /> }

                position="right"
              />
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-2 lg:mb-0">
          <img
            src="/images/janhavi.jpg"
            alt="Janhavi"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

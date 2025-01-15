"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";


const Hero = () => {

  const words = ["beautiful", "functional", "responsive"];

  return (
    <div className="relative pb-20 pt-30 bg-black ">
      {/* Spotlight Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full dark:bg-black-100 bg-black dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"></div>

      {/* Main content container */}
      <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-between lg:justify-center w-full my-20">
        
        {/* Left Section: Text */}
        <div className="lg:max-w-[50%] w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Intro Text */}
          <p className="uppercase tracking-widest text-xs text-blue-100 mt-4">
            Hi! I&apos;m Janhavi, a Next.js Developer.
          </p>
          
          {/* Headline with FlipWords */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug lg:leading-tight space-y-10">
            <span>Building</span>
            <span className="inline-block">
              <FlipWords words={words} /> {/* FlipWords component */}
            </span>
            <span>websites using MERN stack </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap space-x-4 justify-center lg:justify-start mt-10 md:mt-16 lg:mt-20">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <Link target="_blank" href='https://drive.google.com/uc?export=download&id=1RBUKVkt_JNnNthJW0ggiOqm7FXyIMG5Y'>
              <button 
                className="lg:mt-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Download CV
              </button>
            </Link>
          </div>

        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <img
            src="/images/janhavi.jpg"
            alt="Janhavi"
            className="rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover"
          />
        </div>

      </div>
      
    </div>
  );
};

export default Hero;

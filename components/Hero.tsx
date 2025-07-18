"use client";
import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import { ArrowDownToLine } from 'lucide-react';
import { BackgroundGradientAnimation } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MovingBorder } from "./ui/moving-border";
import { motion } from "framer-motion";

const Hero = () => {
  const words = ["beautiful", "functional", "responsive"];
  const description = "Full-stack developer passionate about creating stunning web experiences with modern technologies.";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Animation */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 0)"
        gradientBackgroundEnd="rgb(0, 0, 0)"
        firstColor="40, 40, 40"
        secondColor="60, 60, 60"
        thirdColor="80, 80, 80"
        fourthColor="100, 100, 100"
        fifthColor="120, 120, 120"
        pointerColor="140, 140, 140"
        size="60%"
        blendingValue="normal"
        interactive={true}
        containerClassName="absolute inset-0"
      />

      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="white"
      />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-black bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16">
            
            {/* Profile Image - Mobile First */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 relative order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl animate-pulse"></div>
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  src="/images/janhavi.jpg"
                  alt="Janhavi"
                  className="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              
              {/* Intro Text */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 mb-2 sm:mb-4"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-300 font-medium">
                  Hi! I&apos;m Janhavi, a Next.js Developer.
                </p>
              </motion.div>
              
              {/* Main Headline */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight space-y-2"
              >
                <div>
                  <span className="text-white">Building </span>
                  <div className="inline-block">
                    <FlipWords words={words} />
                  </div>
                  <span className="text-white"> websites</span>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                    using MERN stack
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-2xl"
              >
                <TextGenerateEffect 
                  words={description}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300"
                />
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8 w-full sm:w-auto"
              >
                <MovingBorder duration={2000} className="bg-black border-white/20 w-full sm:w-auto">
                  <a href="#projects" className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-white justify-center">
                    <span className="text-sm sm:text-base">Show my work</span>
                    <FaLocationArrow className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </MovingBorder>

                <MovingBorder duration={2000} className="bg-black border-white/20 w-full sm:w-auto">
                  <Link 
                    target="_blank" 
                    href='https://drive.google.com/file/d/14oLon1Kgdlyibi75DPpB3Pc-2Cgfv0T4/view?usp=sharing'
                    className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-white justify-center"
                  >
                    <span className="text-sm sm:text-base">Download CV</span>
                    <ArrowDownToLine className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </MovingBorder>
              </motion.div>

              {/* Tech Stack */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-wrap gap-2 mt-6 sm:mt-8 justify-center lg:justify-start max-w-lg"
              >
                {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-black/50 text-gray-300 rounded-full border border-white/20 hover:border-white/40 transition-colors backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

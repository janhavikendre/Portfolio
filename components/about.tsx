"use client";
import React from "react";
import { Timeline } from "./ui/timeline";
import { Building, Code, Users, Star, Briefcase, Globe } from 'lucide-react';

const data = [
  {
    title: "Software Engineer",
    company: "VXSolutions",
    duration: "July 2025 - Present",
    icon: <Building className="w-6 h-6" />,
    content: (
      <div className="text-white space-y-3 sm:space-y-4">
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-100">
          Developing high-performance web applications using Dioxus framework with Rust. 
          Building cross-platform desktop and web applications with near-native performance, 
          leveraging Rust's memory safety and speed for scalable frontend solutions.
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
          {["Dioxus Framework", "Rust", "WebAssembly", "Cross-platform Apps", "Performance Optimization"].map((skill) => (
            <span key={skill} className="px-2 py-1 sm:px-3 sm:py-1.5 bg-black text-white rounded-lg text-[10px] sm:text-xs md:text-sm font-medium border border-white/20 hover:border-white/40 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  
  {
    title: "Full-Stack Developer",
    company: "Freelancer",
    duration: "July 2024 - March 2025",
    icon: <Globe className="w-6 h-6" />,
    content: (
      <div className="text-white space-y-3 sm:space-y-4">
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-100">
          Developed 10+ production-grade applications using Next.js, MERN stack, and 
          Web3 technologies. Integrated smart contracts and optimized APIs for 
          performance and scalability.
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
          {["Next.js", "MERN Stack", "Web3", "Smart Contracts", "API Optimization"].map((skill) => (
            <span key={skill} className="px-2 py-1 sm:px-3 sm:py-1.5 bg-black text-white rounded-lg text-[10px] sm:text-xs md:text-sm font-medium border border-white/20 hover:border-white/40 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="bg-black">
      <Timeline data={data} />

      {/* Professional Stats */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
          <div className="text-center p-6 md:p-8 bg-black backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <Briefcase size={28} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Corporate Experience</h3>
            <p className="text-gray-300 text-sm md:text-base">Enterprise Development</p>
          </div>

          <div className="text-center p-6 md:p-8 bg-black backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Freelance Projects</h3>
            <p className="text-gray-300 text-sm md:text-base">10+ Client Solutions</p>
          </div>

          <div className="text-center p-6 md:p-8 bg-black backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <Code size={28} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Tech Stack</h3>
            <p className="text-gray-300 text-sm md:text-base">MERN & Modern Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

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

    
    </section>
  );
}

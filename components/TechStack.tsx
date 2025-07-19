"use client";
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { FloatingDock } from './ui/floating-dock';
import { motion } from 'framer-motion';

function TechStack() {
  const frontendTech = [
    {
      name: "React",
      icon: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
      description: "Building interactive UIs with component-based architecture"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.iconscout.com/icon/free/png-512/typescript-3521774-2945272.png",
      description: "Type-safe JavaScript for better development experience"
    },
    {
      name: "Next.js",
      icon: "/images/next.jpg",
      description: "Full-stack React framework for production applications"
    },
    {
      name: "HTML5",
      icon: "/images/html.jpg",
      description: "Semantic markup for modern web applications"
    },
    {
      name: "CSS3",
      icon: "/images/css.png",
      description: "Styling with modern CSS features and animations"
    },
    {
      name: "Tailwind CSS",
      icon: "/images/tailwind.png",
      description: "Utility-first CSS framework for rapid UI development"
    },
    {
      name: "JavaScript",
      icon: "/images/javascript.png",
      description: "Dynamic programming language for web development"
    },
    {
      name: "Redux",
      icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
      description: "distributed state management for complex applications"
    }
  ];

  const backendTech = [
    {
      name: "Node.js",
      icon: "/images/nodejs.jpg",
      description: "Server-side JavaScript runtime environment"
    },
    {
      name: "Express.js",
      icon: "/images/expressjs.png",
      description: "Fast, unopinionated web framework for Node.js"
    },
    {
      name: "MongoDB",
      icon: "/images/mongodb.png",
      description: "NoSQL database for flexible data storage"
    },
    {
      name: "PostgreSQL",
      icon: "/images/postgress.png",
      description: "Advanced open-source relational database"
    },
    {
      name: "MySQL",
      icon: "/images/sql.jpg",
      description: "Popular relational database management system"
    },
     {
      name: "Redux",
      icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
      description: "distributed state management for complex applications"
    }
  ];

  const featuredTech = [
    { title: "React", icon: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" },
    { title: "TypeScript", icon: "https://cdn.iconscout.com/icon/free/png-512/typescript-3521774-2945272.png" },
    { title: "Next.js", icon: "/images/next.jpg" },
    { title: "Node.js", icon: "/images/nodejs.jpg" },
    { title: "MongoDB", icon: "/images/mongodb.png" },
    { title: "Tailwind", icon: "/images/tailwind.png" }
  ];

  return (
    <section id='techstack' className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6'>
            Tech <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Technologies I use to build scalable and performant applications
          </p>
        </motion.div>

        {/* Featured Technologies Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="w-full flex justify-center px-4">
            <FloatingDock items={featuredTech} />
          </div>
        </motion.div>

        {/* Frontend Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            Frontend <span className="text-blue-400">Technologies</span>
          </h3>
          <InfiniteMovingCards
            items={frontendTech}
            direction="right"
            speed="slow"
          />
        </motion.div>

        {/* Backend Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            Backend <span className="text-purple-400">Technologies</span>
          </h3>
          <InfiniteMovingCards
            items={backendTech}
            direction="left"
            speed="slow"
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4"
        >
          <div className="text-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">10+</div>
            <p className="text-gray-300 text-sm sm:text-base">Frontend Technologies</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">5+</div>
            <p className="text-gray-300 text-sm sm:text-base">Backend Technologies</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 sm:col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">15+</div>
            <p className="text-gray-300 text-sm sm:text-base">Projects Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;

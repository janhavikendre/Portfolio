"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  company: string;
  duration: string;
  content: React.ReactNode;
  icon: React.ReactElement<{ className?: string }>;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black font-sans" ref={containerRef}>
      {/* Header */}
      <div className="max-w-4xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            My Professional Journey
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Building expertise through diverse experiences and challenging
            projects
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div
        ref={ref}
        className="relative max-w-4xl mx-auto pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6"
      >
        {/* Mobile Timeline Line */}
        <div className="block md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800/50"></div>

        {/* Desktop Timeline Line */}
        <div className="hidden md:block absolute left-8 sm:left-10 top-0 bottom-0 w-0.5 bg-gray-800/50"></div>

        {/* Animated Progress Lines */}
        <motion.div
          className="block md:hidden absolute left-6 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 origin-top"
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
        />

        <motion.div
          className="hidden md:block absolute left-8 sm:left-10 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 origin-top"
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
        />

        {/* Timeline Items */}
        {data.map((item, index) => (
          <div key={index} className="relative">
            {/* Mobile Layout */}
            <div className="block md:hidden pl-12 pr-4 pb-8">
              {/* Mobile Timeline Dot */}
              <div className="absolute left-4 top-4 w-4 h-4 bg-white rounded-full border-2 border-blue-500 shadow-lg z-10">
                <div className="absolute inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
              </div>

              {/* Mobile Content Card */}
              <div className="bg-black/80 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-xl hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    {React.cloneElement(item.icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {item.company}
                    </h4>
                    <p className="text-xs text-gray-300">{item.duration}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-100 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>

            {/* Desktop Layout (unchanged) */}
            <div className="hidden md:block pl-16 sm:pl-20 pr-4 sm:pr-6 pb-12 sm:pb-16 md:pb-20">
              {/* Desktop Timeline Dot */}
              <div className="absolute left-6 sm:left-8 top-6 w-4 h-4 bg-white rounded-full border-2 border-blue-500 shadow-lg z-10">
                <div className="absolute inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
              </div>

              {/* Desktop Content Card */}
              <div className="bg-black/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    {React.cloneElement(item.icon, {
                      className: "w-7 h-7 sm:w-8 sm:h-8 text-white",
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                      {item.company}
                    </h4>
                    <p className="text-base sm:text-lg text-gray-300 font-medium">
                      {item.duration}
                    </p>
                  </div>
                </div>
                <div className="mt-6">{item.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

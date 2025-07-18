"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[280px] max-w-full relative rounded-2xl border border-white/20 bg-black/80 backdrop-blur-md px-4 py-6 md:px-6 md:py-8 hover:border-white/40 transition-all duration-300 hover:scale-105 flex-shrink-0"
            key={idx}
          >
            <div className="relative z-20 flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-white/20">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 md:w-10 md:h-10 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

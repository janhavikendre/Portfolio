"use client";
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
} & any) {
  const divRef = useRef<HTMLDivElement>(null);
  const radius = 100;
  const path = `circle(${radius}px at var(--mouse-x) var(--mouse-y))`;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

  const maskImage = useMotionTemplate`${path}`;

  return (
    <motion.div
      ref={divRef}
      onMouseMove={(e) => {
        const rect = divRef.current?.getBoundingClientRect();
        if (rect) {
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }
      }}
      className={cn(
        "relative h-14 w-60 p-[1px] overflow-hidden rounded-xl transition duration-300",
        containerClassName
      )}
    >
      <div className="absolute inset-0 rounded-xl border border-white/20"></div>
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-white opacity-0 transition duration-300 hover:opacity-100"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      ></motion.div>
      <div className={cn("relative bg-black border-0 rounded-xl", className)}>
        <Component
          className="w-full h-full flex items-center justify-center text-white rounded-xl"
          {...otherProps}
        >
          {children}
        </Component>
      </div>
    </motion.div>
  );
}

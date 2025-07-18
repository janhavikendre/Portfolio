"use client";
import { cn } from "../../lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: string; href?: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full flex justify-center", className)}>
      <motion.div className="flex h-14 md:h-16 items-center justify-center gap-1 md:gap-2 rounded-2xl bg-black/80 backdrop-blur-md px-3 md:px-4 border border-white/20 max-w-fit">
        {items.map((item, idx) => (
          <IconContainer key={idx} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

function IconContainer({
  title,
  icon,
  href,
}: {
  title: string;
  icon: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);

  // More responsive scaling values
  const widthTransform = useTransform(distance, [-80, 0, 80], [40, 56, 40]);
  const heightTransform = useTransform(distance, [-80, 0, 80], [40, 56, 40]);
  const widthTransformIcon = useTransform(distance, [-80, 0, 80], [20, 32, 20]);
  const heightTransformIcon = useTransform(distance, [-80, 0, 80], [20, 32, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceFromCenter = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        distance.set(Math.max(-80, Math.min(80, distanceFromCenter - 80)));
      }
    };

    const handleMouseLeave = () => {
      distance.set(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [distance]);

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className="aspect-square rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative border border-white/20 cursor-pointer group"
    >
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-contain rounded-sm"
        />
      </motion.div>
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
        <span className="text-xs text-white bg-black/90 px-2 py-1 rounded-md whitespace-nowrap border border-white/20">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
      


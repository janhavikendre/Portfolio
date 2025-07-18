"use client";
import { cn } from "../../lib/utils";
import React from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(0, 0, 0)",
  gradientBackgroundEnd = "rgb(0, 0, 0)",
  firstColor = "18, 113, 255",
  secondColor = "80, 80, 80",
  thirdColor = "100, 100, 100",
  fourthColor = "120, 120, 120",
  fifthColor = "140, 140, 140",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = React.useRef<HTMLDivElement>(null);

  const [curX, setCurX] = React.useState(0);
  const [curY, setCurY] = React.useState(0);
  const [tgX, setTgX] = React.useState(0);
  const [tgY, setTgY] = React.useState(0);

  React.useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = React.useCallback((event: React.MouseEvent) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  }, []);

  const [isSafari, setIsSafari] = React.useState(false);
  React.useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-black",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--color)_0,_var(--color)_50%,_transparent_100%)] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[--color:rgba(${firstColor},0.8)] [--size:${size}] [--blending-value:${blendingValue}]`,
            `animate-first`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(${secondColor},0.8)_0,_rgba(${secondColor},0.8)_50%,_transparent_100%)] [mix-blend-mode:${blendingValue}] w-[${size}] h-[${size}] top-[calc(50%-${size}/2)] left-[calc(50%-${size}/2)]`,
            `animate-second`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(${thirdColor},0.8)_0,_rgba(${thirdColor},0.8)_50%,_transparent_100%)] [mix-blend-mode:${blendingValue}] w-[${size}] h-[${size}] top-[calc(50%-${size}/2)] left-[calc(50%-${size}/2)]`,
            `animate-third`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(${fourthColor},0.8)_0,_rgba(${fourthColor},0.8)_50%,_transparent_100%)] [mix-blend-mode:${blendingValue}] w-[${size}] h-[${size}] top-[calc(50%-${size}/2)] left-[calc(50%-${size}/2)]`,
            `animate-fourth`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(${fifthColor},0.8)_0,_rgba(${fifthColor},0.8)_50%,_transparent_100%)] [mix-blend-mode:${blendingValue}] w-[${size}] h-[${size}] top-[calc(50%-${size}/2)] left-[calc(50%-${size}/2)]`,
            `animate-fifth`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(${pointerColor},0.8)_0,_rgba(${pointerColor},0.8)_50%,_transparent_100%)] [mix-blend-mode:${blendingValue}] w-full h-full -top-1/2 -left-1/2`,
              `[--color:rgba(${pointerColor},0.8)]`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};

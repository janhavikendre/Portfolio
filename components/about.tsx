"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";

const content = [
  {
    title: "Real-time Updates",
    description:
      "I implement real-time changes in most of my projects, ensuring that all updates are reflected instantly across all connected clients. By leveraging tools like WebSockets and Pusher, I ensure efficient and transparent workflows, whether it’s in collaborative tools or group chat applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "In my projects, I integrate version control systems like GitHub to ensure smooth collaboration with other developers and prevent the chaos of manual updates. From handling large codebases to maintaining clean version histories, my approach to version control is seamless and efficient",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://raw.githubusercontent.com/adrianhajdin/portfolio/aa3fc6de5066925313070cbb5bdce9d85cc89241/public/b1.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Why Work With Me?",
    description:
      "I am not only focused on building scalable applications but also on making them user-friendly. Whether you're a team looking to build collaborative platforms or an individual needing to streamline your workflows, I can help create tailored solutions that meet your specific needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  
];
export function About() {
  return (
    <section id="about" className="bg-black-100 py-20">
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
    </section>
  );
}

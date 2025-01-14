"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";
import { Github ,Webhook,BookOpen} from 'lucide-react';

const content = [
  {
    title: "Webhook Integration",
    description:
      "I specialize in implementing webhook systems that enable automated interactions between different services and applications. By setting up reliable webhook endpoints, I ensure seamless data flow and event-driven communication between various platforms, making integration processes efficient and automated.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Webhook size={80} />
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "In my projects, I integrate version control systems like GitHub to ensure smooth collaboration with other developers and prevent the chaos of manual updates. From handling large codebases to maintaining clean version histories, my approach to version control is seamless and efficient",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Github size={80} />
      </div>
    ),
  },
  {
    title: "Why Work With Me?",
    description:
      "I am not only focused on building scalable applications but also on making them user-friendly. Whether you're a team looking to build collaborative platforms or an individual needing to streamline your workflows, I can help create tailored solutions that meet your specific needs.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <BookOpen   size={80} />
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

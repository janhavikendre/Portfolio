"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ThreeDCardDemo() {
  const router = useRouter();

  const handleClick = () => {
    router.push("https://github.com/janhavikendre/Docs1.git");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Container to handle responsiveness */}
      
      {/* First Card */}
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Google Docs
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
             Google Docs with real-time collaboration and chat features with organization account.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/Docs.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://docs1-al14.vercel.app/ "
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              onClick={handleClick}
            >
              Git hub
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      {/* Second Card (Can have different content) */}
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Chat App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Chat app with real-time chat features and chat rooms.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/chat-app.jpg" // Replace with your second image
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://chat-app-u29r.vercel.app/ "
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              onClick={() => router.push("https://github.com/janhavikendre/Chat-app.git")}
            >
              Git hub
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

    </div>
  );
}

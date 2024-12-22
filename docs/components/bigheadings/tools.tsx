"use client";
import React, { useEffect, useState } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { FwCards } from "../cards/fwcardsReact";
import { FwCardsNextJS } from "../cards/fwcardsNextJS";
import { FwCardsRemix } from "../cards/fwcardsRemix";
import { FwCardsVue } from "../cards/fwcardsVue";

const content = [
  {
    title: "React",
    description: "",
    content: (
      <div className="h-555 flex-grow bg-blue-400 flex items-center justify-center text-white">
        <FwCards />
      </div>
    ),
  },
  {
    title: "Next.js",
    description: "",
    content: (
      <div className="flex-grow bg-transparent flex items-center justify-center text-white">
        <FwCardsNextJS />
      </div>
    ),
  },
  {
    title: "Angular",
    description: "",
    content: (
      <div className="flex-grow bg-transparent flex items-center justify-center text-white">
        <FwCardsRemix />
      </div>
    ),
  },
  {
    title: "Vue",
    description: "krlejgowjtgojtwºgºet geoptrijhgeorghjeorg wrghjprhjg",
    content: (
      <div className="flex-grow bg-[linear-gradient(to_bottom_right,#00c6ff,#0072ff)] flex items-center justify-center text-white">
        <FwCardsVue />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = (event) => {
    const stickyScrollElement = event.target;
    const scrollY = stickyScrollElement.scrollTop;
    const maxScroll = stickyScrollElement.scrollHeight - stickyScrollElement.clientHeight;
    const scrollFraction = scrollY / maxScroll;

    // Calculate a new background color based on scroll position
    const newColor = `rgba(255, ${Math.floor(255 * (1 - scrollFraction))}, ${Math.floor(255 * scrollFraction)}, 1)`;
    setBgColor(newColor);
  };

  return (
    <div className="p-10" style={{ backgroundColor: bgColor }}>
      <div onScroll={handleScroll} className="overflow-auto h-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

 {/* <     */}
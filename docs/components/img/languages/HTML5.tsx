"use client"
import Image from "next/image";
import Html5 from "@/public/html5.webp"; // Updated image source

export function Html51(): JSX.Element {
  return (
    <Image src={Html5} alt="Html5" width={200} height={200} /> // Updated size to 200x200
  );
}
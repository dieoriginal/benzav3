"use client"
import Image from "next/image";
import Javascript from "@/public/javascript.webp"; // Updated image source

export function Javascript1(): JSX.Element {
  return (
    <Image src={Javascript} alt="Javascript" width={200} height={200} /> // Updated size to 200x200
  );
}
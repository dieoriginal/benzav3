"use client"
import Image from "next/image";
import Typescript from "@/public/typescript.webp"; // Updated image source

export function Typescript1(): JSX.Element {
  return (
    <Image src={Typescript} alt="Typescript" width={200} height={200} /> // Updated size to 200x200
  );
}
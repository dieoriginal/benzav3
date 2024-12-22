"use client"
import Image from "next/image";
import Python from "@/public/python123.png"; // Updated image source

export function Python1(): JSX.Element {
  return (
    <Image src={Python} alt="Python" width={200} height={200} /> // Updated size to 200x200
  );
}
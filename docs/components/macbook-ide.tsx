import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import { CursorImg } from "@/components/img/ide/cursorimg";

export function MacbookCursor() {
  return (
    <div className="overflow-hidden dark:bg-[#0A0A0A] bg-white w-full">
      <MacbookScroll
        src={<CursorImg />} // Using CursorImg as the picture
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <></>
  );
};

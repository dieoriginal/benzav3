import Image from "next/image";
import cursorm from "@/public/CursorAI2.jpg";

export function CursorImg() {
  return (
    <Image src={cursor} alt="cursor" width={100} height={100} />
  );
}

import Image from "next/image";
import React from "react";

export default function HeroPage() {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div className="absolute -z-50 inset-0">
        <Image src={"/bg.avif"} alt="bg" fill className="object-cover" />
      </div>
      <div className="absolute bg-gradient-to-b from-black/30 via-transparent to-black/30 -z-40 inset-0"></div>
    </div>
  );
}

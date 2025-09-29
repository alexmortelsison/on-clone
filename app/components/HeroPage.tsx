import Image from "next/image";
import React from "react";

export default function HeroPage() {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div className="absolute -z-50 inset-0">
        <Image src={"/bg.avif"} alt="bg" fill className="object-cover" />
      </div>
      <div className="absolute bg-gradient-to-b from-black/20 via-transparent to-black/50 -z-40 inset-0"></div>
      <div className=" mt-[640px] pl-18 space-y-6">
        <h1 className="text-5xl font-semibold tracking-tight">
          On x BEAMS x REI Co-op
        </h1>
        <h2 className="text-3xl">Outdoor gear for stories worth exploring</h2>
        <button className="bg-white px-8 py-2 text-black rounded-full text-md font-medium tracking-tight">
          Discover the collection
        </button>
      </div>
    </div>
  );
}

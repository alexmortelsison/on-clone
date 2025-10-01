import Image from "next/image";
import React from "react";
import BottomNavbar from "./BottomNavbar";

export default function HeroPage() {
  return (
    <div className="h-screen w-full overflow-hidden relative text-white">
      <div className="absolute -z-50 inset-0">
        <Image src={"/bg.avif"} alt="bg" fill className="object-cover" />
      </div>
      <div className="absolute bg-gradient-to-b from-black/20 via-transparent to-black/50 -z-40 inset-0"></div>
      <div className="lg:mt-[640px] mt-[500px] lg:pl-18 md:mt-[680px] justify-center text-center lg:text-start space-y-6">
        <h1 className="lg:text-5xl font-semibold font-noto text-2xl justify-center">
          On x BEAMS x REI Co-op
        </h1>
        <h2 className="lg:text-3xl text-center lg:text-start">
          Outdoor gear for stories worth exploring
        </h2>
        <button className="bg-white px-8 py-2 text-black rounded-full text-md font-medium tracking-tighter hover:cursor-pointer hover:bg-gray-200">
          Discover the collection
        </button>
      </div>
      <div className="absolute bottom-0 py-8 w-screen lg:hidden">
        <BottomNavbar />
      </div>
    </div>
  );
}

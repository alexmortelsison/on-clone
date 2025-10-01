"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import gsap from "gsap";

const photos = [
  { label: "Performance", src: "/performance.avif" },
  { label: "Cloud", src: "/cloud.avif" },
  { label: "Core", src: "/core.avif" },
  { label: "Cloudmonster", src: "/cloudmonster.avif" },
  { label: "Club", src: "/club.avif" },
  { label: "THE ROGER", src: "/roger.avif" },
  { label: "Cloudtilt", src: "/cloudtilt.avif" },
];

const handleMouseEnter = (arrowElement: HTMLDivElement) => {
  gsap.to(arrowElement, {
    opacity: 1,
    duration: 0.2,
    x: 20,
    ease: "power2.out",
  });
};

const handleMouseLeave = (arrowElement: HTMLDivElement) => {
  gsap.to(arrowElement, {
    opacity: 0,
    duration: 0.2,
    x: -20,
    ease: "power2.out",
  });
};

export default function ScrollPage() {
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setArrowRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      if (el && arrowRefs.current[index] !== el) {
        arrowRefs.current[index] = el;
      }
    },
    []
  );

  return (
    <div className="lg:pt-24 pb-24 lg:pl-24 pl-4 h-70% max-w-full">
      <ScrollArea className="w-full">
        <div className="flex gap-x-8 w-max whitespace-nowrap">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0  hover:cursor-pointer pb-8"
            >
              <div
                className="relative overflow-hidden rounded-lg"
                onMouseEnter={() =>
                  arrowRefs.current[index] &&
                  handleMouseEnter(arrowRefs.current[index]!)
                }
                onMouseLeave={() =>
                  arrowRefs.current[index] &&
                  handleMouseLeave(arrowRefs.current[index]!)
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  width={1000}
                  height={1200}
                  className="h-[500px] w-[300px] object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-3xl font-semibold">
                    {photo.label}
                  </p>
                  <div
                    ref={(el) => setArrowRef(el, index)}
                    className="opacity-0 transform -translate-x-5"
                  >
                    <AiOutlineArrowRight className="text-white text-4xl pr-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

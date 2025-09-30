"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";

const menuLinks = [
  { name: "Running", src: "/running.avif" },
  { name: "Road Running", src: "/roadrunning.avif" },
  { name: "Trail running", src: "/trail-running.avif" },
  { name: "Lifestyle", src: "/lifestyle.avif" },
  { name: "Hiking and outdoor", src: "/hiking-and-outdoor.avif" },
  { name: "Tennis", src: "/tennis.avif" },
  { name: "Training and gym", src: "/training-and-gym.avif" },
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

export default function ActivitiesPage() {
  const [currentImageSrc, setCurrentImageSrc] = useState(menuLinks[0].src);

  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setArrowRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      if (el) {
        arrowRefs.current[index] = el;
      }
    },
    []
  );

  const combinedMouseEnter = (
    arrowElement: HTMLDivElement,
    imageSrc: string
  ) => {
    handleMouseEnter(arrowElement);
    setCurrentImageSrc(imageSrc);
  };

  return (
    <div className="h-70% px-92 mt-8 mb-16">
      <div className="flex justify-between">
        <div>
          <h2 className="font-mono text-2xl">Activities</h2>
          <div className="flex items-center">
            <div className="pt-4">
              {menuLinks.map((item, index) => (
                <div key={item.name}>
                  <Link
                    href={"/"}
                    className="flex text-5xl pb-4 font-semibold items-center"
                    onMouseEnter={() =>
                      combinedMouseEnter(arrowRefs.current[index]!, item.src)
                    }
                    onMouseLeave={() =>
                      handleMouseLeave(arrowRefs.current[index]!)
                    }
                  >
                    {item.name}
                    <div
                      ref={(el) => setArrowRef(el, index)}
                      className="opacity-0 ml-4"
                    >
                      <AiOutlineArrowRight />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={currentImageSrc}
            alt={currentImageSrc}
            width={600}
            height={800}
            className="object-cover w-[500px] h-auto rounded-2xl"
          />
          <Image
            src={currentImageSrc}
            alt={currentImageSrc}
            width={600}
            height={800}
            className="object-cover w-[500px] h-auto rounded-2xl absolute inset-0 rotate-6"
          />
        </div>
      </div>
    </div>
  );
}

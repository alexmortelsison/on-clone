"use client";
import { BiRightArrowAlt } from "react-icons/bi";
import gsap from "gsap";
import Image from "next/image";
import React, { ReactNode, useEffect, useRef } from "react";

export default function ShopByCategory() {
  const arrow1 = useRef<HTMLParagraphElement | null>(null);
  const arrow2 = useRef<HTMLParagraphElement | null>(null);
  const arrow3 = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    gsap.to(".titlecategory", {
      opacity: 1,
      delay: 1,
    });
  }, []);

  const handleMouseEnter = (
    arrowRef: React.RefObject<HTMLParagraphElement | null>
  ) => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };
  const handleMouseLeave = (
    arrowRef: React.RefObject<HTMLParagraphElement | null>
  ) => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };
  return (
    <div className="h-screen w-full max-w-[95%] mx-auto mt-24 overflow-hidden">
      <div className="flex font-noto">
        <h1 className="text-5xl tracking-tight font-bold">Shop by category</h1>
      </div>
      <div className="flex mt-16 justify-center">
        <div className="relative">
          <Image
            src={"/c1.avif"}
            alt="c1"
            width={500}
            height={1000}
            className="object-cover w-[600px] h-auto px-8 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(arrow1)}
            onMouseLeave={() => handleMouseLeave(arrow1)}
          />
          <div className="flex justify-between items-center">
            <p className="titlecategory opacity-0 absolute bottom-1/16 left-18 text-3xl font-semibold text-white hover:underline hover:underline-offset-8">
              Shoes
            </p>
            <p
              className="absolute bottom-1/16 right-18 opacity-0 text-white text-4xl"
              ref={arrow1}
            >
              <BiRightArrowAlt />
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/c2.avif"}
            alt="c1"
            width={500}
            height={1000}
            className="object-cover w-[600px] h-auto px-8 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(arrow2)}
            onMouseLeave={() => handleMouseLeave(arrow2)}
          />
          <div className="flex justify-between items-center">
            <p className="titlecategory opacity-0 absolute bottom-1/16 left-18 text-3xl font-semibold text-white hover:underline hover:underline-offset-8">
              Apparel
            </p>
            <p
              className="absolute bottom-1/16 right-18 opacity-0 text-white text-4xl"
              ref={arrow2}
            >
              <BiRightArrowAlt />
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/c3.avif"}
            alt="c1"
            width={500}
            height={1000}
            className="object-cover w-[600px] h-auto px-8 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(arrow3)}
            onMouseLeave={() => handleMouseLeave(arrow3)}
          />
          <div className="flex justify-between items-center">
            <p className="titlecategory opacity-0 absolute bottom-1/16 left-18 text-3xl font-semibold text-white hover:underline hover:underline-offset-8">
              Accessories
            </p>
            <p
              className="absolute bottom-1/16 right-18 opacity-0 text-white text-4xl"
              ref={arrow3}
            >
              <BiRightArrowAlt />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

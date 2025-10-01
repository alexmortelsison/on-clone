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
        duration: 0.5,
        x: 20,
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
        x: -20,
        ease: "power2.out",
      });
    }
  };
  return (
    <div className="lg:h-screen w-full lg:max-w-[95%] md:px-16 px-8 mx-auto lg:mt-24 mt-16 overflow-hidden">
      <div className="flex font-noto">
        <h1 className="lg:text-5xl text-3xl tracking-tight font-bold">
          Shop by category
        </h1>
      </div>
      <div className="flex mt-16 justify-center space-x-8">
        <div className="relative">
          <Image
            src={"/c1.avif"}
            alt="c1"
            width={500}
            height={1000}
            className="object-cover md:w-[550px] w-[800px] md:h-auto cursor-pointer rounded-lg"
            onMouseEnter={() => handleMouseEnter(arrow1)}
            onMouseLeave={() => handleMouseLeave(arrow1)}
          />
          <div className="flex justify-between items-center">
            <p className="titlecategory opacity-0 absolute lg:bottom-1/16 lg:left-18 lg:text-3xl md:text-xl text-sm bottom-2 left-2 font-semibold text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
              Shoes
            </p>
            <p
              className="absolute lg:bottom-1/16 lg:right-18 bottom-2 right-8 opacity-0 text-white lg:text-4xl md:text-2xl text-sm -translate-x-20"
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
            className="object-cover md:w-[550px] w-[800px] md:h-auto cursor-pointer rounded-lg"
            onMouseEnter={() => handleMouseEnter(arrow2)}
            onMouseLeave={() => handleMouseLeave(arrow2)}
          />
          <div className="flex justify-between items-center">
            <p className="titlecategory opacity-0 absolute lg:bottom-1/16 lg:left-18 lg:text-3xl md:text-xl text-sm bottom-2 left-2 font-semibold text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
              Apparel
            </p>
            <p
              className="absolute lg:bottom-1/16 lg:right-18 bottom-2 right-8 opacity-0 text-white lg:text-4xl md:text-2xl text-sm -translate-x-20"
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
            className="object-cover md:w-[550px] w-[800px] md:h-auto cursor-pointer rounded-lg"
            onMouseEnter={() => handleMouseEnter(arrow3)}
            onMouseLeave={() => handleMouseLeave(arrow3)}
          />
          <div className="flex justify-between items-center">
            <p className="titlecategory opacity-0 absolute lg:bottom-1/16 lg:left-18 lg:text-3xl md:text-xl text-sm bottom-2 left-2 font-semibold text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
              Accessories
            </p>
            <p
              className="absolute lg:bottom-1/16 lg:right-18 bottom-2 right-8 opacity-0 text-white lg:text-4xl md:text-2xl text-sm -translate-x-20"
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

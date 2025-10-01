import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import React from "react";

interface ShoeCardProps {
  name: string;
  imageSrc: string;
  price: string;
  category: string;
  color: string;
}

export default function ShoeCard({
  name,
  imageSrc,
  price,
  category,
  color,
}: ShoeCardProps) {
  return (
    <div>
      <div className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] bg-gray-100 relative hover:cursor-pointer">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
        <div className="absolute right-4 top-4 text-2xl">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="pt-4 text-sm">
        <p className="text-lg font-bold">{name}</p>
        <p>{category}</p>
        <p>{color}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

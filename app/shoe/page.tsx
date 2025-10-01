import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import ShoeCard from "../components/ShoeCard";

export default function ShoePage() {
  return (
    <div className="lg:h-[80vh] w-full lg:px-16 px-4">
      <h2 className="lg:text-6xl text-3xl tracking-tight font-semibold">
        You may be interested in
      </h2>
      <div className="pt-8">
        <ScrollArea>
          <div className="shrink-0 inline-flex gap-x-2 pb-8">
            <ShoeCard
              name={"Cloud 6"}
              imageSrc={"/black.avif"}
              price={"¥18,700"}
              category={"All-day wear, CloudTec®"}
              color={"11 Colors"}
            />
            <ShoeCard
              name={"Cloud 6 Waterproof"}
              imageSrc={"/beige.avif"}
              price={"¥20,900"}
              category={"All-day wear"}
              color={"4 Colors"}
            />
            <ShoeCard
              name={"Cloud 6"}
              imageSrc={"/white.avif"}
              price={"¥18,700"}
              category={"All-day wear, CloudTec®"}
              color={"10 Colors"}
            />
            <ShoeCard
              name={"Cloud 6 Waterproof"}
              imageSrc={"/black2.avif"}
              price={"¥20,900"}
              category={"All-day wear"}
              color={"6 Colors"}
            />
            <ShoeCard
              name={"Cloudzone Moon"}
              imageSrc={"/redstring.avif"}
              price={"¥18,700"}
              category={"All-day"}
              color={"3 Colors"}
            />
            <ShoeCard
              name={"Cloudzone"}
              imageSrc={"/blackstring.avif"}
              price={"¥23,100"}
              category={"All-day wear, CloudTec®, Helion™ superfoam"}
              color={"4 Colors"}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

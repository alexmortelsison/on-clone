"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pathname = usePathname();
  const navlinks = [
    { name: "Shop", link: "/shop" },
    { name: "Activities", link: "/activities" },
    { name: "Explore", link: "/explore" },
  ];
  const iconlinks = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      name: "Search",
      link: "/search",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
        </svg>
      ),
      name: "Shopping",
      link: "/shopping",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      name: "Profile",
      link: "/profile",
    },
  ];
  return (
    <div className="absolute px-12 pt-4 w-full text-white z-10">
      <div className="flex justify-between items-center">
        <div className="">
          <svg
            width="64"
            height="64"
            viewBox="0 0 54 54"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="_logo_gk4wp_59 _dark_gk4wp_65 _logo_136en_185"
            aria-label="Go to On Homepage"
            role="img"
          >
            <path d="M36.281 11.384c-.056.058-.114.13-.17.188l-2.364 2.41-.057.058c-.057.072-.057.145.014.247a8.331 8.331 0 0 1 1.096 3.309c.257 2.409-.342 4.571-1.822 6.473-1.268 1.625-2.92 2.64-4.899 3.09-.911.204-1.837.218-2.762.117-1.524-.16-2.891-.726-4.116-1.655-1.766-1.335-2.862-3.105-3.318-5.311-.17-.813-.199-1.64-.128-2.453.171-1.901.883-3.585 2.15-5.022 1.21-1.379 2.692-2.278 4.443-2.685a8.03 8.03 0 0 1 2.635-.189 8.5 8.5 0 0 1 3.588 1.147c.142.087.2.029.285-.058l2.35-2.395c.056-.058.113-.13.185-.217l2.889 2.945.001.001Zm-5.342 7.4c.071-2.8-2.093-4.832-4.529-4.905-2.748-.073-4.798 2.25-4.798 4.76 0 2.57 2.122 4.79 4.67 4.746 2.507.03 4.6-2.076 4.656-4.6Zm3.605 19.391c.014 2.351 0 4.717 0 7.068v.32h-4.13v-.29c0-2.468.015-4.935 0-7.403 0-1.291-.44-2.423-1.366-3.323a3.827 3.827 0 0 0-2.208-1.06c-1.11-.16-2.121.117-3.018.799-.898.696-1.424 1.64-1.595 2.757-.086.537-.1 1.089-.1 1.64-.014 2.192 0 4.369 0 6.56v.305h-4.101v-.276c0-2.656-.029-5.326.014-7.982.029-1.408.47-2.743 1.196-3.962 1.21-2.032 2.934-3.338 5.198-3.875a8.414 8.414 0 0 1 2.178-.203c2.265.101 4.201 1.015 5.74 2.742 1.096 1.248 1.794 2.7 2.036 4.369.098.608.155 1.217.155 1.812"></path>
          </svg>
        </div>
        <div className="flex items-center pr-8">
          <div className="space-x-8 pr-90 text-xl font-bold">
            {navlinks.map((item, index) => (
              <Sheet open={open} onOpenChange={setOpen} key={index}>
                <SheetTrigger
                  className="hover:underline-offset-8 hover:underline"
                  onMouseEnter={() => {
                    setActiveLink(item.name);
                    setOpen(true);
                  }}
                  onMouseLeave={() => setOpen(false)}
                >
                  {item.name}
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>A</SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            ))}
          </div>
          <div className="flex items-center space-x-6 font-bold">
            {iconlinks.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

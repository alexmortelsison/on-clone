import { CiYoutube } from "react-icons/ci";
import { BsTiktok } from "react-icons/bs";
import { BsStrava } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="w-full lg:px-16 lg:pb-12 lg:flex lg:justify-between px-4">
        <div className="lg:w-[600px]">
          <h2 className="lg:text-2xl text-xl">
            Stay in the loop, with exclusive offers and product previews
          </h2>
          <form
            action=""
            className="bg-gray-100 px-4 text-gray-500 py-4 mt-4 border-gray-200 border hover:bg-gray-50"
          >
            Email
          </form>
          <div className="lg:flex pt-12 gap-x-4 hidden">
            <Image
              src={"/jp.svg"}
              alt="japan"
              width={100}
              height={100}
              className="object-cover w-[20px] h-[20px]"
            />
            <p>Japan</p>
          </div>
        </div>
        <div className="lg:flex gap-y-4 lg:w-[900px] lg:justify-between lg:pr-32 py-8 lg:py-0 lg:mt-8">
          <div className="space-y-4 lg:space-y-0">
            <div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-100 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.343 7.531a2.5 2.5 0 0 0-2.781 1.635l-.166.472-.944-.332.166-.472A3.5 3.5 0 0 1 15.42 10c0 1.266-.943 2.146-1.723 2.666a7.55 7.55 0 0 1-1.576.793l-.03.01-.008.004h-.003l-.001.001L11.92 13l.159.474-.475.158-.316-.948.473-.158.005-.002.02-.007.085-.031a6.556 6.556 0 0 0 1.272-.652c.72-.48 1.277-1.1 1.277-1.834a2.501 2.501 0 0 0-2.077-2.469ZM12 16v1.5h-1V16h1Z"
                    ></path>
                  </svg>
                </div>
                <p>Help & Support</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-100 rounded-full p-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.732 4.732A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5V14a2.5 2.5 0 0 1-2.5 2.5h-7.293L6.5 21.207V16.5h-1A2.5 2.5 0 0 1 3 14V6.5a2.5 2.5 0 0 1 .732-1.768ZM5.5 5A1.5 1.5 0 0 0 4 6.5V14a1.5 1.5 0 0 0 1.5 1.5h2v3.293l3.293-3.293H18.5A1.5 1.5 0 0 0 20 14V6.5A1.5 1.5 0 0 0 18.5 5h-13ZM8 11V9.5h1V11H8Zm3.5 0V9.5h1V11h-1Zm3.5 0V9.5h1V11h-1Z"></path>
                  </svg>
                </div>
                <p>Chat</p>
              </div>
            </div>
          </div>
          <div className="space-y-2 py-8 lg:py-0">
            <p className="hover:underline">Become a member</p>
            <p className="hover:underline">Refer a friend</p>
            <p className="hover:underline">Gift cards</p>
            <p className="hover:underline">On stores</p>
            <p className="hover:underline">Shop locator</p>
            <p className="hover:underline">Supplier portal</p>
          </div>
          <div className="space-y-2">
            <p className="hover:underline">About On</p>
            <p className="hover:underline">Careers</p>
            <p className="hover:underline">Investors</p>
            <p className="hover:underline">Press & media</p>
            <p className="hover:underline">Backstage</p>
          </div>
        </div>
      </div>
      <div className="lg:px-18 px-4 lg:flex lg:justify-between lg:items-center lg:py-12 flex-col">
        <div className="lg:flex gap-x-8">
          <p className="hover:cursor-pointer">© On 2025</p>
          <p className="hover:cursor-pointer">Terms & conditions</p>
          <p className="hover:cursor-pointer">Privacy policy</p>
          <p className="hover:cursor-pointer">Accessibility</p>
          <p className="hover:cursor-pointer">Imprint</p>
          <p className="hover:cursor-pointer">Vulnerability Reporting</p>
        </div>
        <div className="lg:flex lg:space-x-12 lg:items-center px-4 lg:px-0 hidden">
          <FaFacebookF />
          <CgInstagram />
          <BsLinkedin />
          <BsStrava />
          <BsTiktok />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.482 10.622 20.04 3h-1.554l-5.693 6.618L8.245 3H3l6.876 10.007L3 21h1.554l6.012-6.989L15.368 21h5.245l-7.13-10.378ZM5.114 4.17H7.5l10.986 15.714h-2.387L5.114 4.17Z"
              fill="currentColor"
            ></path>
          </svg>
          <CiYoutube className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

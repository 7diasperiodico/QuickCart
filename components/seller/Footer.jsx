import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10 bg-[#00B2EF]">
      <div className="flex items-center gap-4">
        <Image className="hidden md:block" src={assets.logo} alt="logo"/>
        <div className="hidden md:block h-7 w-px bg-white"></div>
        <p className="py-4 text-center text-xs md:text-sm text-white">
          Copyright 2025 © Nive All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
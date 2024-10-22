"use client";
import Image from "next/image";
import React from "react";
import logo from "../public/Logo.jpg";

export default function Header() {
  return (
    <nav className="flex items-center justify-center mx-auto w-full inset-0 bg-gradient-to-r from-transparent via-transparent to-[#676394] py-2 md:py-4 sticky top-0 mb-14 md:mb-24">
      <div className="px-6">
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-lg"
        />
      </div>
    </nav>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import logo from "../public/Logo.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="flex items-center justify-center md:justify-between px-8 mx-auto w-full inset-0 bg-gradient-to-r from-transparent via-transparent to-[#676394] py-2 md:py-4 sticky top-0 mb-14 md:mb-24">
    
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-lg"
        />

      <div
     className="hidden md:block"
      >
        <a
          className="group bg-[#25D366] px-7 mt-6
        rounded-full py-3 flex items-center gap-2 outline-none focus:scale-110
        hover:scale-110 active:scale-105 transition cursor-pointer
         border border-black/10 dark:bg-white/10"
          href="https://chat.whatsapp.com/KO0ZkIkHIqt4547IeTTxPL "
          download
        >
          {" "}
          Join Our WhatsApp GroupChat
          <FaWhatsapp className="opacity-60 group-hover:translate-x-2 transition text-4xl" />
        </a>
      </div>
    </nav>
  );
}

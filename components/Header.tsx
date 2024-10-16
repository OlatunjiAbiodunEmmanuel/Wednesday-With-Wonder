"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import logo from "../public/Logo.jpg";

export default function Header() {
  return (
    <nav className="mx-auto w-full bg-red-500 py-2 md:py-4 sticky top-0 mb-14 md:mb-24">
     <div className="px-6">
     <Image src={logo} alt="" width={80} height={100} className="rounded-lg" />
     </div>
    </nav>
  );
}

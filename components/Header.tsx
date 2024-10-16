

import Image from "next/image";
import React from "react";

import logo from "../public/Logo.jpg"



export default function Header() {


  return (
    <header className="z-[999] ">

      <Image 
      src={logo}
      alt=""
      
      />
      <nav className="flex justify-around itemscenter fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top[1.7rem] sm:h-[initial] sm:py-0">
             </nav>
    </header>
  );
}
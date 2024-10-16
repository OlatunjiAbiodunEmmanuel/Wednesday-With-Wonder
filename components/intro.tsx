"use client";
import Image from "next/image";
import React from "react";
import abbey from "@/public/img.jpg";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaLongArrowAltRight,
  FaWhatsapp,
} from "react-icons/fa";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="scroll-mt-[100rem] mb-16 max-w-[50rem text-center sm:mb-0 mx auto">
      <div className="">
        <div className="md:flex items-center justify-center gap-6 mx-auto">
          <Image
            src={abbey}
            alt="Abiodun Portfolio"
            width="340"
            height="340"
            priority={true}
            className="rounded-full 
                 border-white object-cover shadow-xl border-[0.35rem]"
          />
          <p className="mb10 mt-4 font-medium !leading[1.5 text-xl md:text-2xl  text-center textred-500">
            Introducing{" "}
            <span className="font-bold">Wednesdays with Wonder</span>, a safe,
            anonymous space where users can openly share and discuss{" "}
            <span className="italic font-bold">
              relationship issues, health concerns, lifestyle choices, and
              questions about sex.
            </span>{" "}
            Whether you&apos;re seeking advice, support, or simply want to share
            your experiences, this platform allows you to connect with others
            who{" "}
            <span className="font-bold">
              provide helpful opinions and perspectives without judgment
            </span>
            . Here, your privacy is prioritised, and you can engage in
            meaningful conversations to navigate personal challenges.
            <div
        className="flex flex-col sm:flex-row gap-4 justify-center 
      text-lg font-medium px4"
      >
        <a
          className="group bg-white px-7 mt-6
        rounded-full py-3 flex items-center gap-2 outline-none focus:scale-110
        hover:scale-110 active:scale-105 transition cursor-pointer
         border border-black/10 dark:bg-white/10" href="https://chat.whatsapp.com/KO0ZkIkHIqt4547IeTTxPL " download
        >
          {" "}
          Join Our WhatsApp GroupChat <FaWhatsapp className="opacity-60 group-hover:translate-x-2 transition text-4xl"/>
        </a>
       
      </div>
          </p>
          
        </div>
        
      </div>

    </section>
  );
}

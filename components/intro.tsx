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
} from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 mx auto">
      <div className="flex items-center justify-center">
        <div className="relative">
          <MotionDiv
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={abbey}
              alt="Abiodun Portfolio"
              width="192"
              height="192"
              priority={true}
              className="rounded-full 
                 h-44 w-24 border-white object-cover shadow-xl border-[0.35rem]"
            />
          </MotionDiv>
          <MotionDiv
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </MotionDiv>
        </div>
      </div>
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
          <span className="font-bold">Hi, I&apos;m Abiodun.</span> I&apos;m a{" "}
          <span className="font-bold">fontend developer</span> with{" "}
          <span className="font-bold">2 years </span>
          of experience in designing and implementing web applications. I enjoy
          building <span className="italic">sites & apps</span> with Proven
          ability to deliver high quality code on time and within budget.
        </p>
      </MotionDiv>
      <MotionDiv
        className="flex flex-col sm:flex-row gap-4 justify-center 
      text-lg font-medium px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay:0.1
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7
        rounded-full py-3 flex items-center gap-2 outline-none focus:scale-110
         hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <FaLongArrowAltRight className="opacity-70 group-hover:translate-x-3 transition"/>
        </Link>
        <a
          className="group bg-white px-7
        rounded-full py-3 flex items-center gap-2 outline-none focus:scale-110
        hover:scale-110 active:scale-105 transition cursor-pointer
         border border-black/10" href="/CV.pdf" download
        >
          {" "}
          Download CV <FaDownload className="opacity-60 group-hover:translate-y-2 transition"/>
        </a>
        <a
          className="bg-white text-gray-700 p-4
        rounded-full py-3 flex items-center gap-2 text-[1.325rem] focus:scale-[1.15]
        hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
         border border-black/10"
         href="https://" target="_blank"
        >
          {" "}
          <FaLinkedin />{" "}
        </a>
        <a
          className="bg-white text-gray-700 p-4
        rounded-full py-3 flex items-center gap-2 text-[1.325rem] focus:scale-[1.15]
        hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
         border border-black/10"
         href="https://" target="_blank"
        >
          {" "}
          <FaGithub />{" "}
        </a>
      </MotionDiv>
    </section>
  );
}

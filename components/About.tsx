'use client'
import React from "react";
import { MotionDiv } from "./MotionDiv";
import SectionHeading from "./Section-heading";
import { useSectionInView } from "@/app/lib/hooks";

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <MotionDiv
    ref = {ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me</SectionHeading>
      <p className="mb-3">
        Having worked in both {" "}
        <span className="font-medium">
          financial institutions and food companies
        </span>
        , I made the decision to pursue my passion for programming. Enrolling in
        a coding school, I acquired skills in{" "}
        <span className="font-medium">full-stack web development</span>. {" "}
        <span className="italic">My favorite aspect of programming</span> is the
        problem-solving process, <span className="underline">relishing </span> {" "}
        the satisfaction of discovering solutions. I am constantly eager to
        explore and learn new technologies. Outside of coding,
      </p>

      <p>
        <span className="italic">Outside of coding</span>,I find enjoyment in playing video games, watching movies,
        <span className="font-medium">and expanding my knowledge through learning.</span>.
      </p>
    </MotionDiv>
  );
}

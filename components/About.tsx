import React from 'react'
import { MotionDiv } from './MotionDiv'
import SectionHeading from './Section-heading'

export default function About() {
  return (
    <MotionDiv
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
       <SectionHeading > About Me</SectionHeading>
        <p className="mb-3">
        After working with both {" "}
        <span className="font-medium">financial institution and food company</span>, I decided to pursue my
        passion for programming. I enrolled in a coding school and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </MotionDiv>
  )
}

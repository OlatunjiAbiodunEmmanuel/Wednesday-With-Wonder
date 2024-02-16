import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fammet from "@/public/fatherLand.jpg";
import community from "@/public/community.jpg";
import esmaz from "@/public/fatherLand.jpg";
import todo from "@/public/community.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fameet",
    description:
      "I worked as a React Developer on this startup project. Where users can link up and know more about africa heritage.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind","Shadcn",],
    imageUrl: fammet,
  },
  {
    title: "FatherLand Community",
    description:
      "I worked as a React Developer on this project. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","Shadcn",],
    imageUrl: community,
  },
  {
    title: "Esmaz Events",
    description:
      "A public web app for quick analytics on text. It has features like filtering, creating events, stripe payments and pagination..",
    tags: ["React", "Next.js","TypeScript","Shadcn", "Mongo DB","Uploadthing","Clerk","Stripe", "Tailwind", "Framer"],
    imageUrl: esmaz,
  },
  {
    title: "TodoList",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTMl","CSS","JAVASCRIPT", "Bootstrap"],
    imageUrl: todo,
  },
  {
    title: "AnimeVault",
    description:
      "A site to view and download anime pictures. It has features like infinite scrolling.",
    tags: ["React", "Next.js", "Shadcn", "Tailwind", "Framer"],
    imageUrl: esmaz,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
  "Figma"
] as const;
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fammet from "@/public/fameet.jpg";
import community from "@/public/community.jpg";
import esmaz from "@/public/event.png";
import todo from "@/public/todolist.png";
import anime from "@/public/image.png";

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
    title: "Graduated Coding school",
    location: "Nigeria",
    description:
      "I graduated after 6 months of studying. I immediately found a job as an intern front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Nigeria",
    description:
      "I worked as a front-end developer and also developing myself along the way. ",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Frontend Developer",
    location: "Nigeria",
    description:
      "I'm now a frontend developer working as a freelancer and also at fatherland global community. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fameet",
    description:
      "I worked as a React Developer on this startup project which aims to create a virtual space where families connect, explore their roots, and celebrate shared history.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind","Shadcn",],
    imageUrl: fammet,
  },
  {
    title: "FatherLand Community",
    description:
      "I worked as a React Developer on this project which  unites Africans, providing an Afrocentric lifestyle and diverse products. Members immerse in Africa's rich heritage and experience. It has features like filtering, sorting, pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","Shadcn",],
    imageUrl: community,
  },
  {
    title: "Esmaz Events",
    description:
      "An event website where users can host, buy tickets for an event. It has features like filtering, creating events, stripe payments and pagination..",
    tags: ["Next.js","TypeScript", "Mongo DB","Uploadthing","Clerk","Stripe", "Tailwind"],
    imageUrl: esmaz,
  }, 
  {
    title: "AnimeVault",
    description:
      "A site to view and download anime pictures. It has features like infinite scrolling.",
    tags: ["React", "Next.js", "Shadcn", "Tailwind", "Framer"],
    imageUrl: anime,
  },
  {
    title: "TodoList",
    description:
      "A project where users can create and manage tasks by setting due dates, adding notes, prioritizing tasks, and marking them as complete",
    tags: ["HTMl","CSS","JAVASCRIPT", "Bootstrap"],
    imageUrl: todo,
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
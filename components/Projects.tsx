
import React from "react";
import SectionHeading from "./Section-heading";
import { projectsData } from "@/app/lib/data";
import Project from "./projet";



export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading> my Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

 
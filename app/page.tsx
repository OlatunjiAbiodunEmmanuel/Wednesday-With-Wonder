import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/contact'
import Experience from '@/components/experinces'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      {/* <SectionDivider /> */}
      <Projects />
      <Skills />
    <Experience />
    <Contact />
    </div>
  )
}

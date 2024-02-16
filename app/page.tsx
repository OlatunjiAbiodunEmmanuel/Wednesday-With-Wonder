import About from '@/components/About'
import Projects from '@/components/Projects'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </div>
  )
}

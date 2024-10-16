

import Contact from '@/components/contact'

import Intro from '@/components/intro'

import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center px-4 h-fit'>
      <Intro />
    <Contact />
    </div>
  )
}

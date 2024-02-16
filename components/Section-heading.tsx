import React, { ReactNode } from 'react'

// SectionHeading({children}: SectionHeadingProps)
// type SectionHeadingProps ={children: ReactNode;}

export default function SectionHeading({children}: {children: any}) {
  return (
   <h2 className='text-3xl font-medium capitalize mb-8'>
    {children}
   </h2>
  )
}

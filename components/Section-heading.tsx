import React, { ReactNode } from 'react'


export default function SectionHeading({children}: {children: any}) {
  return (
   <h2 className='text-xl md:3xl font-medium capitalize mb-8 text-center'>
    {children}
   </h2>
  )
}

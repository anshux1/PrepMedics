import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { GridPattern } from '../ui/grid-pattern'

export default function Hero() {
  return (
    <div className='h-screen relative p-6 rounded-3xl'>
      <Image src='LandingLeft.svg' alt='LandingLeftSvg' width={300} height={400} className='absolute left-0' />
      <Image src='LandingRight.svg' alt='LandingLeftSvg' width={300} height={400} className='absolute right-0' />
      <div className='h-full m-7 rounded-2xl'>
        <div className='max-w-7xl relative mx-auto flex flex-col items-center text-center'>
          <div className='my-10 text-center mx-auto flex flex-col items-center gap-5'>
            <h1 className='text-blue-500'>Master Exams with Smart PYQ Practice.</h1>
            <h2 className='text-5xl font-bold'>Practice Previous Year Questions and Create Custom Tests for Effective Preparation.</h2>
            <h3>Enhance your exam readiness with tools designed for students. Practice previous years&apos; questions and build personalized tests to achieve your goals.</h3>
          </div>
          <div>
            <Button>Start Practicing for Free</Button>
            <Button>Learn More</Button>
          </div>
          <div className='rounded-3xl my-10 bottom-[-70%]'>
            <Image src="/hero-img.webp" alt='HeroImage' width={1580} height={1} className='rounded-3xl' />
          </div>
        </div>
        <GridPattern
          width={200}
          height={200}
          x={-1}
          y={-1}
          strokeDasharray="20 9"
          className="-z-10"
        />
      </div>
    </div>
  )
}


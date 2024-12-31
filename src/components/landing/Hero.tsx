import React from "react"
import Image from "next/image"

import { DarkModeToggle } from "@/components/DarkModeToggle"
import { Button } from "@/components/ui/button"
import { GridPattern } from "@/components/ui/grid-pattern"

export default function Hero() {
  return (
    <div className="relative h-screen rounded-3xl p-6">
      <DarkModeToggle />
      <Image
        src="LandingLeft.svg"
        alt="LandingLeftSvg"
        width={300}
        height={400}
        className="absolute left-0"
      />
      <Image
        src="LandingRight.svg"
        alt="LandingLeftSvg"
        width={300}
        height={400}
        className="absolute right-0"
      />
      <div className="m-7 h-full rounded-2xl">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="mx-auto my-10 flex flex-col items-center gap-5 text-center">
            <h1 className="text-blue-500">
              Master Exams with Smart PYQ Practice.
            </h1>
            <h2 className="text-5xl font-bold">
              Practice Previous Year Questions and Create Custom Tests for
              Effective Preparation.
            </h2>
            <h3>
              Enhance your exam readiness with tools designed for students.
              Practice previous years&apos; questions and build personalized
              tests to achieve your goals.
            </h3>
          </div>
          <div>
            <Button>Start Practicing for Free</Button>
            <Button>Learn More</Button>
          </div>
          <div className="bottom-[-70%] my-10 rounded-3xl">
            <Image
              src="/hero-img.webp"
              alt="HeroImage"
              width={1580}
              height={1}
              className="rounded-3xl"
            />
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

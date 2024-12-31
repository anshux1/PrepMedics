"use client"

import Image from "next/image"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import OrbitingCircles from "@/components/ui/orbiting-circles"

const OuterCircleLogos = [
  "https://prepmedics.blob.core.windows.net/prepmedics/jipmer-exam.png",
  "https://prepmedics.blob.core.windows.net/prepmedics/aiims-exam.png",
  "https://prepmedics.blob.core.windows.net/prepmedics/nta.svg",
]

const InnerCircleLogos = [
  "https://prepmedics.blob.core.windows.net/prepmedics/bacteria.png",
  "https://prepmedics.blob.core.windows.net/prepmedics/botany.png",
  "https://prepmedics.blob.core.windows.net/prepmedics/dna.png",
  "https://prepmedics.blob.core.windows.net/prepmedics/physics-logo1.svg",
]

const desktop = "(min-width: 768px)"
export function AuthLogos() {
  const isDesktop = useMediaQuery(desktop)
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap leading-none">
        <Image
          src="https://prepmedics.blob.core.windows.net/prepmedics/Logo.png"
          width={isDesktop ? 150 : 100}
          height={0}
          alt="Wellness Icon"
          className="z-10 -mb-4 -mr-7 dark:invert dark:filter"
        />
      </span>

      {InnerCircleLogos.map((logo, index) => (
        <OrbitingCircles
          key={logo}
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={5 * index}
          radius={isDesktop ? 105 : 75}
        >
          <Image src={logo} width={50} height={50} alt="Wellness Icon" />
        </OrbitingCircles>
      ))}
      {OuterCircleLogos.map((logo, index) => (
        <OrbitingCircles
          key={logo}
          className="size-[50px] border-none bg-transparent"
          radius={isDesktop ? 190 : 125}
          duration={20}
          delay={7 * index}
          reverse
        >
          <Image src={logo} width={150} height={0} alt="Wellness Icon" />
        </OrbitingCircles>
      ))}
    </div>
  )
}

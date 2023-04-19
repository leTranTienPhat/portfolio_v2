import { useMotionValueEvent, useScroll, motion } from "framer-motion"
import { useRef } from "react"
import StickyPreview from "./StickyPreview"
import ProjectCard from "./ProjectCard"

export default function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"]
  })
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <section className="h-[4000px] bg-blue-200">
      <div className="relative w-full h-full p-[100px]" >
        <StickyPreview />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}
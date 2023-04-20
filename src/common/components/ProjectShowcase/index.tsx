import { useEffect, useRef, useState } from "react"
import StickyPreview from "./StickyPreview"
import ProjectCard from "./ProjectCard"
import boxCollision from "../../helpers/boxCollision"
import kokusai from "../../assets/Images/Projects/kokusai.jpg"
import bsn from "../../assets/Images/Projects/bsn.jpg"
import nifeHub from "../../assets/Images/Projects/nifehub.jpg"
import netflix from "../../assets/Images/Projects/netflix.jpg"
import linkneverphai from "../../assets/Images/Projects/linkneverphai.jpg"

const projectPreview = [
  {
    id: 1,
    text: 'bg-red-200',
    previewImg: kokusai
  },
  {
    id: 2,
    text: 'bg-red-400',
    previewImg: bsn

  },
  {
    id: 3,
    text: 'bg-red-600',
    previewImg: nifeHub

  },
  {
    id: 4,
    text: 'bg-red-800',
    previewImg: netflix

  },
  {
    id: 5,
    text: 'bg-red-950',
    previewImg: linkneverphai

  },
]

export default function ProjectShowcase() {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const targetRef = useRef<HTMLDivElement>(null)
  const refItem1 = useRef<HTMLDivElement>(null)
  const refItem2 = useRef<HTMLDivElement>(null)
  const refItem3 = useRef<HTMLDivElement>(null)
  const refItem4 = useRef<HTMLDivElement>(null)
  const refItem5 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', updatePreview);

    return () => window.removeEventListener('scroll', updatePreview);
  }, []);

  const updatePreview = () => {
    const currentPreviewRect = targetRef.current!.getBoundingClientRect()
    const refItem1Rect = refItem1.current!.getBoundingClientRect()
    const refItem2Rect = refItem2.current!.getBoundingClientRect()
    const refItem3Rect = refItem3.current!.getBoundingClientRect()
    const refItem4Rect = refItem4.current!.getBoundingClientRect()
    const refItem5Rect = refItem5.current!.getBoundingClientRect()

    if (boxCollision(currentPreviewRect, refItem1Rect)) {
      setCurrentItem(0)
    }
    else if (boxCollision(currentPreviewRect, refItem2Rect)) {
      setCurrentItem(1)
    }
    else if (boxCollision(currentPreviewRect, refItem3Rect)) {
      setCurrentItem(2)
    }
    else if (boxCollision(currentPreviewRect, refItem4Rect)) {
      setCurrentItem(3)
    }
    else if (boxCollision(currentPreviewRect, refItem5Rect)) {
      setCurrentItem(4)
    }
  }

  return (
    <section className=" bg-blue-200">
      <div className="relative py-[200px]" >
        <StickyPreview ref={targetRef} currentItem={projectPreview[currentItem]} />
        <ProjectCard isFocus={false} ref={refItem1} />
        <ProjectCard isFocus={false} ref={refItem2} />
        <ProjectCard isFocus={false} ref={refItem3} />
        <ProjectCard isFocus={false} ref={refItem4} />
        <ProjectCard isFocus={false} ref={refItem5} />
      </div>
    </section>
  )
}
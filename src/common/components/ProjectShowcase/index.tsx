import { useEffect, useRef, useState } from "react"
import StickyPreview from "./StickyPreview"
import ProjectCard from "./ProjectCard"
import boxCollision from "../../helpers/boxCollision"
import kokusai from "../../assets/Images/Projects/kokusai.jpg"
import bsn from "../../assets/Images/Projects/bsn.jpg"
import nifeHub from "../../assets/Images/Projects/nifehub.jpg"
import netflix from "../../assets/Images/Projects/netflix.jpg"
import styleShop from "../../assets/Images/Projects/styleshop.jpg"
import rakuten from "../../assets/Images/Projects/rakuten.jpg"
import ProjectSlide from "./ProjectSlide"
import dashboard from "../../assets/Images/Projects/dashboard.jpg"
import khaoxin from "../../assets/Images/Projects/khaoxin.jpg"
import movieSite from "../../assets/Images/Projects/movie-site.jpg"
import quiz from "../../assets/Images/Projects/quiz.jpg"
import linkneverphai from "../../assets/Images/Projects/linkneverphai.jpg"
import oldPortfolio from "../../assets/Images/Projects/portfolio-v1.jpg"
import { useTranslation } from "react-i18next"

export type IProject = {
  id: number,
  title: string,
  description: string,
  technology: string,
  task: string[],
  platform: string[],
  teamSize: number,
  previewImg?: string,
  backgroundColor?: string,
}

const projectExtra = [
  {
    previewImg: kokusai,
    backgroundColor: "bg-card-yellow"
  },
  {
    previewImg: rakuten,
    backgroundColor: "bg-card-green"
  },
  {
    previewImg: bsn,
    backgroundColor: "bg-card-blue"
  },
  {
    previewImg: nifeHub,
    backgroundColor: "bg-card-pink"
  },
  {
    previewImg: netflix,
    backgroundColor: "bg-card-brown"
  },
  {
    previewImg: styleShop,
    backgroundColor: "bg-card-yellow"
  },
]

const projectSlide: string[] = [dashboard, movieSite, khaoxin, oldPortfolio, linkneverphai, quiz]

export default function ProjectShowcase() {

  const { t } = useTranslation();
  const projectInfo: IProject[] = t('projects', { returnObjects: true })

  const projectPreview: IProject[] = projectInfo.map((project, index) => {
    return { ...project, ...projectExtra[index] }
  })

  const [currentItem, setCurrentItem] = useState<number>(0)
  const targetRef = useRef<HTMLDivElement>(null)
  const refItem1 = useRef<HTMLDivElement>(null)
  const refItem2 = useRef<HTMLDivElement>(null)
  const refItem3 = useRef<HTMLDivElement>(null)
  const refItem4 = useRef<HTMLDivElement>(null)
  const refItem5 = useRef<HTMLDivElement>(null)
  const refItem6 = useRef<HTMLDivElement>(null)

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
    const refItem6Rect = refItem6.current!.getBoundingClientRect()

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
    } else if (boxCollision(currentPreviewRect, refItem6Rect)) {
      setCurrentItem(5)
    }
  }

  return (
    <section className="bg-bg-light dark:bg-bg-dark">
      <div className="relative flex flex-col items-center " >
        <div className="h-[100px] lg:h-[240px] ">
          <h3 className="title-text">{"<ProjectPreviews />"}</h3>
        </div>
        <StickyPreview ref={targetRef} currentItem={projectPreview[currentItem]} />
        <ProjectCard ref={refItem1} item={projectPreview[0]} />
        <ProjectCard ref={refItem2} item={projectPreview[1]} />
        <ProjectCard ref={refItem3} item={projectPreview[2]} />
        <ProjectCard ref={refItem4} item={projectPreview[3]} />
        <ProjectCard ref={refItem5} item={projectPreview[4]} />
        <ProjectCard ref={refItem6} item={projectPreview[5]} />
      </div>
      <ProjectSlide projectSlide={projectSlide} />
    </section>
  )
}
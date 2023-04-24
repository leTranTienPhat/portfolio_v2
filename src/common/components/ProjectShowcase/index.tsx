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

export type IProject = {
  id: number,
  title: string,
  description: string,
  technology: string,
  task: string[],
  platform: string[],
  teamSize: number,
  previewImg: string,
  backgroundColor: string,
}

const projectPreview: IProject[] = [
  {
    id: 1,
    title: '[Kokusai Express] K-NACCS Admin Management - Webapp version',
    description: "K-NACCS is a customs clearance software developed by Kokusai Express for use in Japan",
    technology: "VueJS, Java, TailwindCSS, Vuestic UI, AG-Grid, MariaDB.",
    task: ["Build reusable utilities and components", "Build complex admin dashboard with multiple conditional check", "Implement global state management with Vuex", "Daily maintainance, debugging issues"],
    platform: ["Git", "Redmine"],
    teamSize: 7,
    previewImg: kokusai,
    backgroundColor: "bg-card-yellow"
  },
  {
    id: 2,
    title: '[Rakuten] Merchant Request Form',
    description: "A custom form that collect user information about the next location where Rakuten should expand its Rpay services.",
    technology: "NextJS, Java, MariaDB, AWS",
    task: ["Work with Google Map geolocation services (Search Autocomplete, Reverse Geolocation, etc)", "Analyze and display heatmap for admin user based on the coordinates received from the form", "Create high-level design, provide feedbacks to client for better layout experience.",
      "Communicate with client using English on weekly basis", "Daily maintainance, debugging issues", "Write manual test cases, perform test cases and log bugs"],
    platform: ["Git", "Confluence"],
    teamSize: 5,
    previewImg: rakuten,
    backgroundColor: "bg-card-green"
  },
  {
    id: 3,
    title: 'BSN - Next System',
    description: "BSN is a web application that allows registering the business payment slip for employees and management of monthly budgets for each department.",
    technology: "C#, SQL Server",
    task: ["Perform manual tests", "Write QA, log bugs using English", "Implement global state management with Vuex", "Daily test, debugging issues"],
    platform: ["Google Sheet"],
    teamSize: 14,
    previewImg: bsn,
    backgroundColor: "bg-card-blue"
  },
  {
    id: 4,
    title: 'Nifehub',
    description: "Nifehub is a large scale global social platform planning to release in 2023.",
    technology: "VueJS, PHP, CodeIgniter 4 , PostgreSQL",
    task: ["Create services and controller based on existing codes", "Build pixel-perfect responsive HTML based on Figma designs, SEO Optimized", "Daily maintainance, debugging issues"],
    platform: ["Git", "Jira", "Trello"],
    teamSize: 16,
    previewImg: nifeHub,
    backgroundColor: "bg-card-pink"
  },
  {
    id: 5,
    title: 'Netflix (clone)',
    description: "I cloned Netflix, yay!",
    technology: "React, Typescript, NextJS, Firebase",
    task: ["Manage global states with Recoil and Atoms", "Turn JSON results from API calls into beautiful UI", "Login/register and store user info using Firebase"],
    platform: ["Git"],
    teamSize: 1,
    previewImg: netflix,
    backgroundColor: "bg-card-brown"
  },
  {
    id: 6,
    title: 'Style Shop',
    description: "Demo template designed for e-commerce websites",
    technology: "React, Typescript, NodeJS, SCSS, Redux",
    task: ["Responsive and fast-loading landing page with smooth animation transition", "Handle global state management with Redux"],
    platform: ["Git", "Trello"],
    teamSize: 2,
    previewImg: styleShop,
    backgroundColor: "bg-card-yellow"
  },
]

const projectSlide: string[] = [dashboard, movieSite, khaoxin, oldPortfolio, linkneverphai, quiz]

export default function ProjectShowcase() {
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
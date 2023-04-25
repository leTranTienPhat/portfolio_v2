import { forwardRef } from "react"
import { IProject } from ".."
import { useInView } from "framer-motion"

type Props = {
  item: IProject
}

const inViewOptions = {
  once: true,
}

const ProjectCard = ({ item }: Props, ref: any) => {
  const isInView = useInView(ref, inViewOptions)

  const appearAnimation = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }

  return (
    <div ref={ref}
      className={`w-[95%] min-h-[500px] ${item.backgroundColor} dark:bg-transparent dark:border-2 dark:border-white dark:text-white mb-10 rounded-[40px] px-10 lg:px-20 py-10 shadow-xl`}
      style={appearAnimation}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full h-full">
        <div className=" w-full h-full">
          <h3 className="text-xl font-bold mb-10">{item.title}</h3>
          <p className="mb-4">{item.description}</p>
          <p className="mb-4">Technologies: {item.technology}</p>
          <ul className="list-disc">
            {item.task.map((task, index) => {
              return (
                <li key={index}>{task}</li>
              )
            })}
          </ul>
        </div>

        <div className="w-full h-full lg:hidden">
          <img src={item.previewImg} alt={item.description} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export default forwardRef(ProjectCard)
import { forwardRef } from "react"
import { IProject } from ".."

type Props = {
  // children: React.ReactElement
  isFocus: false
  item: IProject
}

const ProjectCard = ({ isFocus, item }: Props, ref: any) => {
  return (
    <div ref={ref} className={`w-[95%] h-[600px] ${item.backgroundColor} mb-10 rounded-[40px] px-20 py-10`}>
      <div className="grid grid-cols-2 w-full h-full">
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

        <div></div>

      </div>
    </div>
  )
}

export default forwardRef(ProjectCard)
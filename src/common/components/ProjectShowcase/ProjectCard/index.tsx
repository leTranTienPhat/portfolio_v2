import { forwardRef } from "react"
import { IProject } from ".."

type Props = {
  // children: React.ReactElement
  item: IProject
}

const ProjectCard = ({ item }: Props, ref: any) => {
  return (
    <div ref={ref} className={`w-[95%] min-h-[500px] ${item.backgroundColor} mb-10 rounded-[40px] px-20 py-10  shadow-xl`}>
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
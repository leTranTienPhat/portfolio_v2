import { forwardRef } from "react"

type Props = {
  // children: React.ReactElement
  isFocus: false
}

const ProjectCard = ({ isFocus }: Props, ref: any) => {
  return (
    <div ref={ref} className="container w-full h-[600px] mb-1 bg-blue-400 rounded-[40px] px-20 py-10">
      <div className="grid grid-cols-2 w-full h-full">
        <div className=" w-full h-full">
          <h3>Nifehub</h3>
          <div>
            <p>Nifehub is a large scale global social platform planning to release in 2023.</p>
          </div>
          <div>
            <p className="whitespace-nowrap">Technologies: <span>CodeIgniter 4 , VueJS, PostgreSQL.</span> </p>

          </div>
          <div>
            <p>Details</p>
            <ul>
              <li>Build pixel-perfect responsive HTML based on Figma designs, </li>
              <li>Project management platform: Git, Jira, Trello.</li>
              <li>Team size: 10</li>
            </ul>
          </div>
        </div>

        <div></div>

      </div>
    </div>
  )
}

export default forwardRef(ProjectCard)
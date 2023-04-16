import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'

import '../styles/Project.css'

const Project = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
       {
        ProjectList.map((project, index)=>{
          return <ProjectItem id={index} name={project.name} image={project.Image}/>
        })
       }
      </div>
     

    </div>
  )
}

export default Project

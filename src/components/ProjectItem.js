import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({image, name, id}) => {
  const naviagte = useNavigate()
  return (
    <div className='projectItem'  onClick={()=>{
      naviagte(`/project/${id}`)
    }}>
      <div style={{backgroundImage : `url(${image})`}} className='bgImage'></div>
      <h2>{name}</h2>
    </div>
  )
}

export default ProjectItem

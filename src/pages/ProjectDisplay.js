import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@material-ui/icons';
import '../styles/ProjectDisplay.css'
import { Link } from 'react-router-dom';

const ProjectDisplay = () => {
  
    const {id} = useParams();
    const project = ProjectList[id] 

    const handlePageChange = () => {
      window.location.href="http://vineetkatiyar98.github.io/crypto/"
    }


  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.Image}/>
        <p>
            <b>Skills</b> : <i style={{color:"black", fontSize:"35px"}}>{project.skills}</i> <br />
        </p>
       <Link> <GitHub onClick={handlePageChange}/></Link>
        <p>click on icon for project</p>
    </div>
  )
}

export default ProjectDisplay

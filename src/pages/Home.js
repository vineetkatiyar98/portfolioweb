import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css'
import { Link } from 'react-router-dom';


const Home = () => {

  const handleLinkedIn = () => {
    window.location.href="https://www.linkedin.com/in/vineetkatiyar98/"
  }
   const handleEmail = () => {
    window.location.href="vineetkatiyar98@gmail.com"
  } 
  const handleGithub = () => {
    window.location.href="https://github.com/vineetkatiyar98"
  }

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Vinit</h2>
        <div className='prompt'><p>A web developer for learning and creating. </p>
        <Link><LinkedInIcon onClick={handleLinkedIn}/></Link>
        <Link><EmailIcon onClick={handleEmail}/></Link>
        <Link><GithubIcon onClick={handleGithub}/></Link>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
              <h2>Front-End</h2>
              <span>
                Reactjs, Redux, HTML5, CSS3, NPM, Bootstrap, StyledComponent, jquery
              </span>
          </li>
          <li className='item'>
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, MongoDB, MySQL, MS SQL
              </span>
          </li>
          <li className='item'>
              <h2>Languages</h2>
              <span>
                JavaScript, C programming, python
              </span>
          </li>

        </ol>
      </div> 
    </div>
  )
}

export default Home

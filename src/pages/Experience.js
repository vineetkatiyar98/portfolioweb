import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import '../styles/Experience.css'
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2015-2017'
        iconStyle={{background: "#3e497a", color : "#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>My High School from DPG inter College Nighasan Kheri, Uttar Pradesh </h3>
          <p>with 81% marks</p>
        </VerticalTimelineElement> 
        
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2017-2019'
        iconStyle={{background: "#3e497a", color : "#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>My Intermediate from Zila Panchayat inter College Nighasan Kheri, Uttar Pradesh </h3>
          <p>with 79% marks</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2017-2019'
        iconStyle={{background: "#3e497a", color : "#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>
            Diploma from Govt Polytechnic Mohammadi Keri, Uttar Pradesh
          </h3>
          <p>In Computer Science and Engineerig</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work'
        date='2022 - NOW'
        iconStyle={{background: "#e9d35b", color : "#fff"}}
        icon={<WorkIcon/>}>
          <h3 className='vertical-timeline-element-title'>
           Full-Stack Developer(MERN) - Techpile Technology Pvt. Ltd.
          </h3>
          <i>Current Working</i>
          <p>Lucknow, Uttar Pradesh</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
     
    </div>
  )
}

export default Experience

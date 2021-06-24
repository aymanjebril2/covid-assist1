import React from 'react'
import Katherine from './img/kathreen.png'
import shan from './img/shan.png'
import Ayman from './img/ayman.png'

const AboutUs = () => {
    const team =[
        {
            firstName: "Ayman",
            lastName: "Omer",
            teamTitle: "Full-Stack Web Developer",
            teamImage: Ayman,
            linkedin: "https://www.linkedin.com/in/ayman-omer-b2429b1ab/",
          },
          {
            firstName: "Katherine",
            lastName: "Fernandez",
            teamTitle: "Product Designer",
            teamImage: Katherine,
            linkedin: "https://www.linkedin.com/in/katfernandez22/",
          },
          {
            firstName: "Shan",
            lastName: "Siddiqui",
            teamTitle: "Front-End Web Developer",
            teamImage:shan ,
            linkedin: "https://www.linkedin.com/in/ssiddiqui007/",
          },


    ]
    return (
        <div className="team-page">


           
        </div>
    )
}

export default AboutUs

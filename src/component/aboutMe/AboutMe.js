import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import profile2 from '../../assets/imgs/Profile.jpg'
import resume from '../../assets/docs/Hyunjoon_Lee_resume.pdf'
import './AboutMe.scss'


export class AboutMe extends Component {
    render() {
        return (
            <div className="main_aboutme">
                <div className="container">
                    {/* <Slide bottom> */}
                    <div className="row justify-content-around">
                        {/* <div className="col-10 col-md-5 profile">
                                <img src={profile2} alt="profile2" />

                            </div> */}
                        <Slide left>
                            <div className="col-10 about">
                                {/* <h4></h4> */}
                                <h1>ABOUT ME & My Skills</h1>

                                <p>
                                    I am a widely skiled creative with a passion for web developement and technology.
                                    I love learning, and want to become the best developer I can be. As a developer, I believe that ideas come first, tools come second - having defined a goal.
                                    I will find a way and will persist until I reach it.
                        </p>
                                <div className="links row">
                                    <div className="col-12 cv">
                                        <a href={resume} target="_blank" rel="noopener noreferrer">
                                            <button className="btn1 btnn">Download CV</button>
                                        </a>
                                    </div>
                                    {/* <div className="col-lg-6 col-sm-12 link">
                                        <a a href={"https://www.linkedin.com/in/hyun-joon-lee"} target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon style={{ fontSize: "3rem" }} /></a>
                                        <a href={"https://github.com/Neallee0213"} target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon style={{ fontSize: "2.5rem" }} /></a>
                                    </div> */}
                                </div>

                            </div>
                        </Slide>
                    </div>
                    {/* </Slide> */}
                </div>
            </div>
        )
    }
}

export default AboutMe

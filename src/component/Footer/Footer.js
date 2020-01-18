import React, { Component } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PortraitIcon from '@material-ui/icons/Portrait';
import resume from '../../assets/docs/Hyunjoon_Lee_resume.pdf'
import './Footer.scss'
export class Footer extends Component {
    render() {
        return (
            <div className="container-fluid footer">
                <div className="row justify-content-center">
                    {/* <div className="col-12 footer-col footer-icons"> */}
                    <div className="col-12 footer_col footer_icons">
                        <li><a className="footer_links first_links" href={"https://www.linkedin.com/in/hyun-joon-lee"} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a className="footer_links" href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li><a className="footer_links" href="mailto:hyunjoon.lee0213@gmail.com" target="_blank">Email</a></li>
                        <li><a className="footer_links" href={"https://github.com/Neallee0213"} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        {/* <div className="row justify-content-center">
                            <div className="col-12 col-md-3">
                                <a href={"https://www.linkedin.com/in/hyun-joon-lee"} target="_blank" rel="noopener noreferrer"><LinkedInIcon className="linkedin" /><span>LinkedIn</span></a>
                            </div>
                            <div className="col-12 col-md-3">
                                <a href={resume} target="_blank" rel="noopener noreferrer"><PortraitIcon className="resume" /><span>Resume</span></a>
                            </div>
                            <div className="col-12 col-md-3">
                                <a href={"https://github.com/Neallee0213"} target="_blank" rel="noopener noreferrer"><GitHubIcon className="github" /><span>GitHub</span></a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

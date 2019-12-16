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
                <div className="row">
                    <div className="col-12 col-md-6 footer-col"><h5>HYUNJOON LEE</h5></div>
                    <div className="col-12 col-md-6 footer-col footer-icons">
                        <a href={"https://www.linkedin.com/in/hyun-joon-lee"} target="_blank" rel="noopener noreferrer"><LinkedInIcon className="linkedin" /></a>
                        <a href={"https://github.com/Neallee0213"} target="_blank" rel="noopener noreferrer"><GitHubIcon className="github" /></a>
                        <a href={resume} target="_blank" rel="noopener noreferrer"><PortraitIcon className="resume" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

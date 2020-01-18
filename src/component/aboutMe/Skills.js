import React, { Component } from 'react'
import { FiHash } from "react-icons/fi";
import front_end from '../../assets/imgs/icon/front_end2.png'
import back_end from '../../assets/imgs/icon/back_end2.png'
import others from '../../assets/imgs/icon/others2.png'

import python from '../../assets/imgs/logo/python.png'
import php from '../../assets/imgs/logo/php.png'
import js from '../../assets/imgs/logo/js.png'
import html from '../../assets/imgs/logo/html.png'
import css from '../../assets/imgs/logo/css.png'
import sass from '../../assets/imgs/logo/sass.png'
import node from '../../assets/imgs/logo/node.png'
import react_redux from '../../assets/imgs/logo/react_redux.png'
import mongodb from '../../assets/imgs/logo/mongodb.png'
import mysql from '../../assets/imgs/logo/mysql.png'
import bootstrap from '../../assets/imgs/logo/bootstrap.png'
import github from '../../assets/imgs/logo/github.png'


import Fade from 'react-reveal/Fade';
import './Skills.scss'
export class Skills extends Component {
    render() {
        return (
            <Fade bottom delay={700}>
                <div className="container skills">
                    <div className="row justify-content-center skills_row">
                        <div className="col skills_col">
                            <ul>
                                <li><FiHash className="icon_s" />Html&Css</li>
                                <li><FiHash className="icon_s" />Sass</li>
                                <li><FiHash className="icon_s" />Javascript</li>
                                <li><FiHash className="icon_s" />React/Redux</li>
                                <li><FiHash className="icon_s" />Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center skills_row">
                        <div className="col skills_col">
                            <ul>
                                <li><FiHash className="icon_s" />Python</li>
                                <li><FiHash className="icon_s" />Node.js</li>
                                <li><FiHash className="icon_s" />Php</li>
                                <li><FiHash className="icon_s" />MongoDB</li>
                                <li><FiHash className="icon_s" />MySQL</li>
                                <li><FiHash className="icon_s" />Github</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="row justify-content-center skills_row">
                    <Fade bottom delay={700}>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={html} alt="html" />
                            <p>html</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={css} alt="css" />
                            <p>css</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={js} alt="js" />
                            <p>javascript</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={sass} alt="sass" />
                            <p>sass</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={bootstrap} alt="bootstrap" />
                            <p>bootstrap</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={react_redux} alt="react_redux" />
                            <p>react/redux</p>
                        </div>

                        <div className="col-3 col-md-1 skills_col">
                            <img src={python} alt="python" />
                            <p>python</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={node} alt="node" />
                            <p>node</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={php} alt="php" />
                            <p>php</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={mongodb} alt="mongodb" />
                            <p>mongodb</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={mysql} alt="mysql" />
                            <p>mysql</p>
                        </div>
                        <div className="col-3 col-md-1 skills_col">
                            <img src={github} alt="github" />
                            <p>github</p>
                        </div>

                    </Fade>
                </div> */}
                </div>
            </Fade>


            // <div className="skills">
            //     <div className="container-fulid">
            //         <div className="row justify-content-center">
            //             <Slide left>
            //                 <div className="col-8 col-md-2 skill">
            //                     <img src={front_end} alt="front_end_icon" className="icons" />
            //                     <p className="skill_title">frontend</p>
            //                     <p className="line"></p>
            //                     <p>HTML&CSS</p>
            //                     <p>Javascript</p>
            //                     <p>React.js</p>
            //                 </div>
            //             </Slide>
            //             <Slide bottom>
            //                 <div className="col-8 col-md-2 skill">
            //                     <img src={back_end} alt="back_end_icon" className="icons" />
            //                     <p className="skill_title">backend</p>
            //                     <p className="line"></p>
            //                     <p>Python</p>
            //                     <p>PHP</p>
            //                     <p>MySQL</p>
            //                     <p>Firebase</p>
            //                 </div>
            //             </Slide>
            //             <Slide right>
            //                 <div className="col-8 col-md-2 skill">
            //                     <img src={others} alt="others_icon" className="icons" />
            //                     <p className="skill_title">others</p>
            //                     <p className="line"></p>
            //                     <p>Github</p>
            //                     <p>Meterial UI</p>
            //                     <p>Bootstrap</p>
            //                 </div>
            //             </Slide>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Skills

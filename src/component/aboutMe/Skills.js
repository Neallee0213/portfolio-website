import React, { Component } from 'react'
import front_end from '../../assets/imgs/icon/front_end2.png'
import back_end from '../../assets/imgs/icon/back_end2.png'
import others from '../../assets/imgs/icon/others2.png'
import Slide from 'react-reveal/Slide';
import './Skills.scss'
export class Skills extends Component {
    render() {
        return (
            <div className="skills">
                {/* <div className="container">
                    <div className="row">
                        <div className="col title">
                            <h1>My Skills</h1>
                        </div>
                    </div>
                </div> */}
                <div className="container-fulid">
                    <div className="row justify-content-center">
                        <Slide left>
                            <div className="col-8 col-md-2 skill">
                                <img src={front_end} alt="front_end_icon" className="icons" />
                                <p className="skill_title">frontend</p>
                                <p className="line"></p>
                                <p>HTML&CSS</p>
                                <p>Javascript</p>
                                <p>React.js</p>
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className="col-8 col-md-2 skill">
                                <img src={back_end} alt="back_end_icon" className="icons" />
                                <p className="skill_title">backend</p>
                                <p className="line"></p>
                                <p>Python</p>
                                <p>PHP</p>
                                <p>MySQL</p>
                                <p>Firebase</p>
                                {/* <p>MongoDB</p>
<p>Node.js</p> */}
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="col-8 col-md-2 skill">
                                <img src={others} alt="others_icon" className="icons" />
                                <p className="skill_title">others</p>
                                <p className="line"></p>
                                <p>Github</p>
                                <p>Meterial UI</p>
                                <p>Bootstrap</p>
                            </div>
                        </Slide>
                    </div>

                    {/* <div className="row justify-content-center">
                        <Slide left>
                            <div className="col- skill">
                                <img src={front_end} alt="front_end_icon" className="icons" />
                                <p className="skill_title">My Education</p>
                                <p className="line"></p>
                                <p>George Brown College</p>
                                <p>Computer tr</p>
                                <p>React.js</p>
                            </div>
                        </Slide>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Skills

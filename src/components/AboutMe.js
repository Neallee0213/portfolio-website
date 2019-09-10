import React from 'react'
import { Layout } from "./Layout"
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { NavButton } from "./NavButtom";


const Styles = styled.div`
*{
    
    color: white;
    padding: 0;
    box-sizing: border-box;
    
}


h1{
    margin-top: 8%;
    margin-bottom: 8%;
    text-align: center;
    text-transform: uppercase; 
    font-weight: 200;
}
span{
    font-size: 2rem;
}
h2{
    text-align:center;
    margin-bottom: 8%;
}
h3{
    text-align:center;
    margin-top:4%;
    margin-bottom:2%;
    font-weight:200;
    color: rgb(35, 35, 36);
}
.skills_row li{
    color:rgb(35, 35, 36);
    margin-bottom: 2%;
}
.skills{
    margin-top: 10%;
}
// .skills_row{
//     margin-left:12%;
// }
.education{
    margin-top: 10%;
    
}

.hr_light{
    background-color : white;
    margin-top: 9%;
}
.front-end,
.back-end,
.other{
    box-shadow: 18px 29px 36px 16px rgba(0,0,0,0.75);
    background-color: rgb(233, 233, 235);
}

.front-end ul,
.back-end ul,
.other ul{
    margin-left: 9%;
    color: black;
}


@media (max-width: 991px){
    .front-end,
    .back-end,
    .other{

        box-shadow: none;
        margin-bottom:20px;
        
    }
    
}
@media (max-width: 576px){
    .front-end,
    .back-end,
    .other{
        box-shadow: none;
        margin: 5px;
         
    }
    
}

`;

export const AboutMe = () => (

    <Styles>
        <Layout>
        <Container className="about_me">
            <Row>
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>

            <Row>
                <Col><span>Hello,</span>
                <p>I am a widely skiled creative with a passion for web developement and technology.
                I love learning, and want to become the best developer I can be. As a developer, I believe that ideas come first, tools come second - having defined a goal.
                 I will find a way and will persist until I reach it.</p>
                </Col>
            </Row>
            <hr className="hr_light" />
        </Container>
        <Container className="skills">
            <Row>
                <Col>
                    <h2> Skills</h2>
                </Col>
            </Row>
            <Row className="skills_row d-flex justify-content-between" >
                <Col sm={6} lg={3} className="front-end ">
                    <h3>Front-End</h3>
                    <ul>
                        <li>HTML&CSS</li>
                        <li>Javascript</li>

                    </ul>
                </Col>
                <Col sm={6} lg={3} className="back-end">
                    <h3>Back-End</h3>
                    <ul>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                    </ul>
                </Col>
                <Col sm={12} lg={3} className="other">
                    <h3>Library</h3>
                    <ul>
                        <li>React</li>
                        <li>React Spring</li>
                        <li>Jquery</li>
                    </ul>
                    <h3>Framework</h3>
                    <ul>
                        <li>Bootstrap</li>
                    </ul>

                </Col>

            </Row>
            <hr className="hr_light" />
        </Container>
        <Container className="education">
            <Row>
                <Col>
                    <h2>Education</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Diploma Computer Systems Technician</h4>
                    <p>- Georgebrown College</p>
                </Col>
            </Row>
            <hr className="hr_light" />
        </Container>
        <NavButton />
        </Layout>
    </Styles>

)

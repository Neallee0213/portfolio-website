import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/docs/Hyunjoon_Lee_resume.pdf"


const Styles = styled.div`
*{
    margin:0;
    padding:0;
}
.button-row{
    
    margin-top: 5%;
    margin-bottom: 3%;
    width:100%;
}

.button-col a{
    margin-left:20px;
    font-size:1.5rem;
    
}
.button-col span{
    display: block;
    font-size: .7rem;
    margin-left: -10px;
}

.button-col a:nth-last-child(1) span {
    margin-left: -5px;
}

`;
export const NavButton = () => (
    <Styles>
        <Container>
            <Row className="button-row">
                <Col className="button-col d-flex justify-content-center">
                    <a href={"https://www.linkedin.com/in/hyun-joon-lee"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="12"></FontAwesomeIcon>
                        <span>Linkedin</span>
                    </a>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <span>Resume</span>
                    </a>
                    <a href={"https://github.com/Neallee0213"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                        <span>Github</span>
                    </a>
                </Col>
            </Row>
        </Container>
    </Styles>
)





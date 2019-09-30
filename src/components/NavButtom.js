import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../assets/docs/Hyun-joon Lee Resume.pdf"


const Styles = styled.div`
*{
    margin:0;
    padding:0;
}
.button-row{
    
    margin-top: 5%;
    margin-bottom: 5%;
    width:100%;
}

.button-col a{
    margin-left:20px;
    font-size:1.5rem;
    
}



`;
export const NavButton = () => (
    <Styles>
        <Container>
            <Row className="button-row">
                <Col className="button-col d-flex justify-content-center">
                    <a href={"https://www.linkedin.com/in/hyun-joon-lee"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="12"></FontAwesomeIcon>
                    </a>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>

                    </a>
                    <a href={"https://github.com/Neallee0213"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    </a>
                </Col>
            </Row>
        </Container>
    </Styles>
)





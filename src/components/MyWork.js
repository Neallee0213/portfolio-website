import React from 'react'
import styled from "styled-components";
import { NavButton } from "./NavButtom";
import { Container, Row, Col } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout } from "./Layout"
import main_twitter from "../assets/imgs/quoteMachine/main_twitter.png"
import main1 from "../assets/imgs/quoteMachine/main1.png"
import quote_all from "../assets/imgs/quoteMachine/quote_all.gif"
import in_twitter from "../assets/imgs/quoteMachine/in_twitter.png"
import weather_main from "../assets/imgs/weather/weather_main.png"
import weather_error from "../assets/imgs/weather/weather_error.png"
import weather_result from "../assets/imgs/weather/weather_result.png"
import weather_all from "../assets/imgs/weather/weather_all.gif"
import img_main from "../assets/imgs/ImageFinder/img_main.png"
import img_clicked from "../assets/imgs/ImageFinder/img_clicked.jpg"
import img_searched from "../assets/imgs/ImageFinder/img_searched.png"
import img_all from "../assets/imgs/ImageFinder/img_all.gif"



const Styles = styled.div`
*{
    
    color: white;
    padding: 0;
    box-sizing: border-box;
}
.mywk h1{
    margin-top: 8%;
    margin-bottom: 8%;
    text-align: center;
    text-transform: uppercase; 
    font-weight: 200;
}
img{
    width:40%;
    margin:5px;
}

.mw-icon-link a{
    font-size: 2rem;
    float:left;
    margin-right:15px;
    margin-left:5px;
    margin-top:10px;
    text-align: center;
    text-decoration: none;
    
}
.mw-icon-link p{
    font-size: 10px;
    color white;
}
.hr-breaker{
    margin-top:5%;
    margin-bottom:5%;
    background-color: darkgray;
}
.quote_text,
.weather_text,
.img_text{
    margin-top:15%;
    
}
.quote_text h5,
.weather_text h5,
.img_text h5{
    font-weight:300;
}
.quote_text ul,
.weather_text ul,
.img_text ul{
    margin-top:10%;
    margin-left:1rem;
}
.quote_text li,
.weather_text li,
.img_text li{
    font-weight:300;
}
@media (max-width: 425px){
    .quote_text,
    .weather_text,
    .img_text{
        margin-top:10%;
        margin-bottom:30%;
    }
}
`;

export const MyWork = () => (

    <Styles>
        <Layout>
            <Container>
                <Row>
                    <Col className="mywk">
                        <h1>My work</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className="hr-breaker" />
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <img src={main1} alt={"main1"} fluid />
                        <img src={main_twitter} alt={"main_twitter"} fluid />
                        <img src={in_twitter} alt={"in_twitter"} fluid />
                        <img src={quote_all} alt={"quote_all"} fluid />

                    </Col>
                    <Col className="mw-icon-link" md={3}>
                        <div className="quote_text">
                            <h5>Random Quote Generator</h5>
                            <ul>
                                <li>React</li>
                                <li>Meterial-UI</li>
                                <li>FontAwesome</li>
                                <li>Bootstrap</li>
                                <li>API</li>

                            </ul>
                        </div>
                        <a href={"https://github.com/Neallee0213/quote-machine"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>code</p>
                        </a>
                        <a href={"https://5d9c17d80fd0ed44ad9f8d7a--amazing-payne-eabf66.netlify.com"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                            <p>demo</p>
                        </a>

                    </Col>
                </Row>

            </Container>

            <Container>
                <Row>
                    <Col>
                        <hr className="hr-breaker" />
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <img src={weather_main} alt={"weather_main"} fluid />
                        <img src={weather_error} alt={"weather_error"} fluid />
                        <img src={weather_result} alt={"weather_result"} fluid />
                        <img src={weather_all} alt={"weather_all"} fluid />

                    </Col>
                    <Col className="mw-icon-link" md={3}>
                        <div className="weather_text">
                            <h5>Weather Application </h5>
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <a href={"https://github.com/Neallee0213/weather_app_r_16days"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>code</p>
                        </a>
                        <a href={"https://weather-neal-hj-lee.netlify.com"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                            <p>demo</p>
                        </a>

                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <hr className="hr-breaker" />
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <img src={img_main} alt={"img_main"} fluid />
                        <img src={img_clicked} alt={"img_clicked"} fluid />
                        <img src={img_searched} alt={"img_searched"} fluid />
                        <img src={img_all} alt={"img_all"} fluid />

                    </Col>
                    <Col className="mw-icon-link" md={3}>
                        <div className="img_text">
                            <h5>ImageFinder Application </h5>
                            <ul>
                                <li>React</li>
                                <li>Meterial-UI</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <a href={"https://github.com/Neallee0213/Image-Finder"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>code</p>
                        </a>
                        <a href={"https://image-finder-neal-hj-lee.netlify.com"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                            <p>demo</p>
                        </a>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className="hr-breaker" />
                    </Col>
                </Row>
            </Container>
            <NavButton />
        </Layout>
    </Styles>

)


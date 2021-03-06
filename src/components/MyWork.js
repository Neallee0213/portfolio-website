import React from 'react'
import styled from "styled-components";
import { NavButton } from "./NavButtom";
import { Container, Row, Col } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout } from "./Layout"
import weather_main from "../assets/imgs/weather/weather_main.png"
import weather_error from "../assets/imgs/weather/weather_error.png"
import weather_result from "../assets/imgs/weather/weather_result.png"
import weather_all from "../assets/imgs/weather/weather_all.gif"
import img_main from "../assets/imgs/ImageFinder/img_main.png"
import img_clicked from "../assets/imgs/ImageFinder/img_clicked.jpg"
import img_searched from "../assets/imgs/ImageFinder/img_searched.png"
import img_all from "../assets/imgs/ImageFinder/img_all.gif"
import findaplace_home from "../assets/imgs/findaplace/findaplace_home.png"
import findaplace_places from "../assets/imgs/findaplace/findaplace_places.png"
import findaplace_contact from "../assets/imgs/findaplace/findaplace_contact.png"
import nsbike_main from "../assets/imgs/nsbike/nsbike_main.png"
import nsbike_products from "../assets/imgs/nsbike/nsbike_products.png"
import nsbike_cart from "../assets/imgs/nsbike/nsbike_cart.png"
import nsApparel1 from '../assets/imgs/nsApparel/nsApparel1.webp'
import nsApparel2 from '../assets/imgs/nsApparel/nsApparel2.webp'
import nsApparel3 from '../assets/imgs/nsApparel/nsApparel3.webp'
import nsApparelTall from '../assets/imgs/nsApparel/nsApparelTall.webp'



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
    color: white;
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
.mmt-05{
    margin-top: 1rem;
}
.mmt-1{
    margin-top: -5%;
}
.mmt-4{
    margin-top:-43%;
}
.mmt-5{
    margin-top:-44%;
}
.mmt-6{
    margin-top:-70%;
}
.mmt-9{
    margin-top:-86%;
}
a.disable {
    pointer-events: none;
    cursor: default;
  }
.disable p{
    color:gray;
    text-decoration: line-through;

}
@media (max-width: 425px){
    .quote_text,
    .weather_text,
    img{
        margin-left:20px;
    }
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
                        <img src={nsApparelTall} alt="nsbike_products" fluid className="" />
                        <img src={nsApparel3} alt="nsbike_cart" fluid className="mmt-4" />
                        <img src={nsApparel2} alt="nsbike_cart" fluid />
                        <img src={nsApparel1} alt="nsbike_home" fluid className="mmt-9" />



                    </Col>
                    <Col className="mw-icon-link" md={3}>
                        <div className="quote_text">
                            <h5>NS apparel</h5>
                            <ul>
                                <li>HTML&SCSS</li>
                                <li>React & Redux</li>
                                <li>Stripe (payment)</li>
                                <li>Firebase</li>
                                <li>Styled-components</li>

                            </ul>
                        </div>
                        <a href={"https://github.com/Neallee0213/NS_apparel"} target="_blank" rel="noopener noreferrer" disabled="disabled" className="disabled">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>code</p>
                        </a>
                        <a href={"https://ns-apparel.herokuapp.com"} target="_blank" rel="noopener noreferrer">
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
                <Row>
                    <Col md={9}>
                        <img src={findaplace_places} alt="findaplace_places" fluid className="mb-5" />
                        <img src={findaplace_home} alt="findaplace_home" fluid className="mmt-05" />
                        <img src={findaplace_contact} alt="findaplace_contact" fluid className="mmt-1" />


                    </Col>
                    <Col className="mw-icon-link" md={3}>
                        <div className="quote_text">
                            <h5>Real Estate Website</h5>
                            <ul>
                                <li>HTML&CSS</li>
                                <li>React</li>
                                <li>Google API(No key)</li>
                                <li>Context API</li>

                            </ul>
                        </div>
                        <a href={"https://github.com/Neallee0213/findaplace"} target="_blank" rel="noopener noreferrer" disabled="disabled" className="disabled">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>code</p>
                        </a>
                        <a href={"https://findaplace.netlify.com"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                            <p>demo</p>
                        </a>

                    </Col>
                </Row>
                <Row>
                    <Col className="mywk">
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className="hr-breaker" />
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <img src={nsbike_products} alt="nsbike_products" fluid className="mmt-5" />
                        <img src={nsbike_main} alt="nsbike_home" fluid />
                        <img src={nsbike_cart} alt="nsbike_cart" fluid className="mmt-6" />
                        {/* <img src={nsbike} alt="quote_all" fluid /> */}

                    </Col>
                    <Col className="mw-icon-link" md={3}>
                        <div className="quote_text">
                            <h5>Bike Shop</h5>
                            <ul>
                                <li>HTML&CSS</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Context API</li>
                                <li>Google API(No Key)</li>
                                <li>Styled-components</li>
                            </ul>
                        </div>
                        <a href={"https://github.com/Neallee0213/N-s-Bike"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>code</p>
                        </a>
                        <a href={"https://nsbike.netlify.com"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                            <p>demo</p>
                        </a>

                    </Col>
                </Row>
                <Row>
                    <Col className="mywk">
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className="hr-breaker" />
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <img src={weather_main} alt="weather_main" fluid />
                        <img src={weather_error} alt="weather_error" fluid />
                        <img src={weather_result} alt="weather_result" fluid />
                        <img src={weather_all} alt="weather_all" fluid />

                    </Col>
                    <Col className="mw-icon-link" md={3}>
                        <div className="weather_text">
                            <h5>Weather Application </h5>
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>API</li>
                                <li>Responsive Web Design</li>
                            </ul>
                        </div>
                        <a href={"https://github.com/Neallee0213/weather_app_r_16days"} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>code</p>
                        </a>
                        <a href={"https://weather-16day.netlify.com"} target="_blank" rel="noopener noreferrer">
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
                <Row>
                    <Col md={9}>
                        <img src={img_main} alt="img_main" fluid />
                        <img src={img_clicked} alt="img_clicked" fluid />
                        <img src={img_searched} alt="img_searched" fluid />
                        <img src={img_all} alt="img_all" fluid />

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
        </Layout >
    </Styles >

)


import React, { Component } from 'react'
import NSapparel from '../../assets/imgs/pics/ns_apparel.png'
import findaplace from '../../assets/imgs/pics/findaplace.png'
import ns_bike from '../../assets/imgs/pics/ns_bike.png'
import cryptodash from '../../assets/imgs/pics/cryptodash.png'
import img from '../../assets/imgs/pics/img.png'
import weather from '../../assets/imgs/pics/weather.png'
import './MyWork.scss'
import Fade from 'react-reveal/Fade';


export class MyWork extends Component {
    render() {
        return (
            <div className="mywork section-tours">
                <div className="container">

                    <div className="row">
                        <div className="col title">
                            <h1>My Portfolio</h1>
                        </div>
                    </div>
                    <div className="parent box_row">
                        <Fade bottom>
                            <div className="div1 box">
                                <div className="overlay overlayTop">
                                    <div className="text">
                                        <h5>E-commerce website</h5>
                                        <h2>NS apperel</h2>
                                        <a href={"https://github.com/Neallee0213/NS_store"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://ns-apparel.netlify.com/"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="div2 box">
                                <div className="overlay overlayTop">

                                    <div className="text">
                                        <h5>E-commerce website</h5>
                                        <h2>Findaplace</h2>
                                        <a href={"https://github.com/Neallee0213/findaplace"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://findaplace.netlify.com"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="div3 box">
                                <div className="overlay overlayTop">

                                    <div className="text">
                                        <h5>E-commerce website</h5>
                                        <h2>NS Bike</h2>
                                        <a href={"https://github.com/Neallee0213/N-s-Bike"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://nsbike.netlify.com"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="div4 box">
                                <div className="overlay overlayTop">

                                    <div className="text">
                                        <h5>Web application</h5>
                                        <h2>ImageFinder App</h2>
                                        <a href={"https://github.com/Neallee0213/Image-Finder"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://image-finder-neal-hj-lee.netlify.com"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* </Fade>
                        <Fade bottom delay={500}> */}
                            <div className="div5 box">
                                <div className="overlay overlayTop">

                                    <div className="text">
                                        <h5>Web application</h5>
                                        <h2>Cryptocurrency App</h2>
                                        <a href={"https://github.com/Neallee0213/cryptodash"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://confident-elion-a450d6.netlify.com"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="div6 box">
                                <div className="overlay overlayTop">

                                    <div className="text">
                                        <h5>Web application</h5>
                                        <h2>Weather App</h2>
                                        <a href={"https://github.com/Neallee0213/weather_app_r_16days"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://weather-16day.netlify.com"} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div >
        )
    }
}

export default MyWork

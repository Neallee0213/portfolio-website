import React, { Component } from 'react'
import NSapparel from '../../assets/imgs/pics/ns_apparel.png'
import findaplace from '../../assets/imgs/pics/findaplace.png'
import ns_bike from '../../assets/imgs/pics/ns_bike.png'
import img from '../../assets/imgs/pics/img.png'
import weather from '../../assets/imgs/pics/weather.png'
import './MyWork.scss'
import Fade from 'react-reveal/Fade';


export class MyWork extends Component {
    render() {
        return (
            <div className="mywork">
                <div className="container">
                    <div className="row">
                        <div className="col title">
                            <h1>My Portfolio</h1>
                        </div>
                    </div>
                    <Fade bottom>
                        <div className="row justify-content-center">
                            <div className=" col-12 col-md-4 box">
                                <img className="imgbox" src={NSapparel} alt="" />
                                <div className="overlay overlayLeft">

                                    <div className="text">
                                        <h2>NS apperel</h2>
                                        <a href={"https://github.com/Neallee0213/NS_apparel"} target="_blank" rel="noopener noreferrer">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://ns-apparel.herokuapp.com"} target="_blank" rel="noopener noreferrer">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 box">
                                <img className="imgbox" src={findaplace} alt="" />
                                <div className="overlay overlayLeft">

                                    <div className="text">
                                        <h2>Findaplace</h2>
                                        <a href={"https://github.com/Neallee0213/findaplace"} target="_blank" rel="noopener noreferrer">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://findaplace.netlify.com"} target="_blank" rel="noopener noreferrer">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 box">
                                <img className="imgbox" src={ns_bike} alt="" />
                                <div className="overlay overlayLeft">

                                    <div className="text">
                                        <h2>NS Bike</h2>
                                        <a href={"https://github.com/Neallee0213/N-s-Bike"} target="_blank" rel="noopener noreferrer">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://nsbike.netlify.com"} target="_blank" rel="noopener noreferrer">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{ paddingTop: '10px' }}>
                            <div className="col-12 col-md-4 box">
                                <img className="imgbox" src={img} alt="" />
                                <div className="overlay overlayLeft">

                                    <div className="text">
                                        <h2>ImageFinder App</h2>
                                        <a href={"https://github.com/Neallee0213/Image-Finder"} target="_blank" rel="noopener noreferrer">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://image-finder-neal-hj-lee.netlify.com"} target="_blank" rel="noopener noreferrer">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 box">
                                <img className="imgbox" src={weather} alt="" />
                                <div className="overlay overlayLeft">

                                    <div className="text">
                                        <h2>Weather App</h2>
                                        <a href={"https://github.com/Neallee0213/weather_app_r_16days"} target="_blank" rel="noopener noreferrer">
                                            <p>code</p>
                                        </a>
                                        <a href={"https://weather-16day.netlify.com"} target="_blank" rel="noopener noreferrer">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div >
        )
    }
}

export default MyWork

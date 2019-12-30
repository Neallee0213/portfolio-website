import React from 'react'
import styled from "styled-components";
import Typed from 'react-typed';
import mountain from '../../assets/imgs/mountain1.jpg'
import video from '../../assets/imgs/video.webm'

const Styled = styled.div`
/* position:relative; */

height: 100vh;
    .bg{
        background-position:center center;
        background-size:cover;
        height: 100vh;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .overlay{
        width: 100%;
        height: 100%;
        background: #000;
        opacity: .6;
        position: absolute;
    }
    .container{
        /* height: 100vh; */
    }
    .title-text{
        padding-top: 20%;
        text-align:center;
        h1{
            font-size:4rem;
            font-weight:900;
            color:white;
        }
        h4{
            color: white;
            font-size: 3rem;
            font-weight:500;
            letter-spacing:5px;
        }
        .iam{
            font-weight:200;

        }    

    }
        .main-nav{
            
            h1{
                text-transform:uppercase;
            }
        }

    @media screen and (max-width: 576px) {
        .bg{
            
        }
        .title-text{
        padding-top: 20%;
        text-align:center;
        h1{
            font-size:1.5rem;
            font-weight:900;
            color:white;
        }
        
        h4{
            color: white;
            font-size: 1rem;
            font-weight:500;
            letter-spacing:5px;
        }
        p{
            font-size: 1rem;      
            letter-spacing:5px;
        }
        
    }
    @media screen and (max-width: 992px) {
        .bg{
            /* height:70%; */
        }
        .title-text{
        padding-top: 30%;
        text-align:center;
        h1{
            font-size:3rem;
            font-weight:900;
            color:white;
        }
        h4{
            color: white;
            font-size: 2rem;
            font-weight:500;
            letter-spacing:5px;
        }
        .iam{
            font-weight:200;

        }    

    }
        p{
            font-size: 1.5rem;      
            letter-spacing:5px;
        }
    }
    
    }
    /* .bg-video{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        overflow:hidden;
        .bg-video__content{    
            width:100%;
            height:100%;
            object-fit:cover;
        }
    } */
`;

const Home = () => {
    return (
        <>
            <Styled
            // style={{ height: `${window.innerHeight}px` }}
            >
                {/* <div className="container">
                    <div className="row">
                        <div className="bg-video">
                            <video src={video} className="bg-video__content" autoPlay muted loop>
                            </video>
                        </div>
                    </div>
                </div> */}
                <div className="bg"
                    style={{
                        background: `url(${mountain})`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    }}
                >

                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-12 title-text">
                                <h1>Hello</h1>
                                <h4>
                                    <span className="iam">I Am </span>
                                    <Typed
                                        strings={['Web developer', 'Creative', 'HyunJoon Lee']}
                                        typeSpeed={60}
                                        backSpeed={30}
                                        backDelay={2000}
                                        loop
                                        smartBackspace

                                    />
                                </h4>
                            </div>
                        </div>



                    </div>
                </div>
            </Styled>
        </>
    )
}

export default Home
import React from 'react'
import styled from "styled-components";
// import Typed from 'react-typed';
// import bag from '../../assets/imgs/bag.jpg'
import './Home.scss'
import Fade from 'react-reveal/Fade';

const Styled = styled.div`

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
        opacity: .3;
        position: absolute;
    }
    .container{
        /* height: 100vh; */
    }
    .title-text{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
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
            height:70%;
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
            {/* <Styled
            // style={{ height: `${window.innerHeight}px` }}
            >
                <div className="bg"
                    style={{
                        background: `url(${bag})`,
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
            </Styled> */}
            <section>
                {/* <div className="row"> */}
                <div className="content">
                    <Fade bottom duration={1800}>
                        <h2>Hyunjoon Lee</h2>
                    </Fade>
                    <Fade delay={800}>
                        <p>FRONT END SOFTWARE ENGINEER</p>
                    </Fade>
                </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default Home
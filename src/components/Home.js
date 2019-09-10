import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/imgs/Profile.png";
import styled from "styled-components";
import { NavButton } from "./NavButtom";
import { Layout } from "./Layout"




const Styles = styled.div`
*{
    color: white;
    box-sizing: border-box;
    padding: 0;
    
}

.profile{
    margin-top: 20%;
    width: 70%;
    margin-left: 8%;
}

.home-text{
    margin-top:30%;
    
}
.home-text h1,
.home-text h2,
.home-text p{
    
    margin-top:0;
    margin-left: 10%;
    color:white;
    
}
.home-text h1{
    font-size:9rem;
    letter-spacing: 20px;
}
.home-text h2{
    font-size: 1.8rem;
    font-weight: 200;
    letter-spacing: 6px;
}
.home-text  p{
    font-size: .9rem;
    font-weight: 100;
    letter-spacing:10px;
}
.hr-home{
    margin-left: 10%;
    background-color: white;
    float:left;
    width: 13.5rem;
}


@media (max-width: 992px){
    .profile{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }
    .home-text h1,
    .home-text h2,
    .home-text p{
        margin-left: 0;
    }
    .home-text{
        margin-top:5%;
        text-align: center;
    }
    .home-text h1{
        font-size:5rem;
        letter-spacing: 20px;
    }
    .home-text h2{
        font-size: .8rem;
        
    }
    .home-text  p{
        font-size: .6rem;
    }
    .hr-home{
        margin-left:0;
        width: 100%;
    }
    ~
}
@media (max-width: 425px){
    .home-text h1,
    .home-text h2,
    .home-text p{
        margin-left: 5%;
    }
    
    .home-text h1{
        font-size:2rem;
        letter-spacing: 10px;
    }
    .hr-home{
        margin-left:2%;
        width: 100%;
    }
    
}


`;
export const Home = () => (
  
    <Styles>
        <Layout>
        <Container fluid>
            <Row className="home-row">
                <Col className="home-img" lg={6}>
                    <img className="profile fluid" src={profile} alt={"profile"} />
                </Col>
                <Col className="home-text" lg={6}>
                    <h1>Hello,</h1>
                    <h2>My name is Hyun joon Lee</h2>
                    <p>Web developer</p>
                    <hr className="hr-home" />
                </Col>
            </Row>
        </Container>
        <NavButton />
        </Layout>
    </Styles>
 
)


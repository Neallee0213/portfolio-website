import React from "react";
import {Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import styled from "styled-components";


const Styles = styled.div`
*{
    color: white;
    
}

.navbar-brand {
    font-size: .8rem;
    border-bottom: 1px solid white;
}
.nav-item {
    font-size: .9rem ;
    font-weight: 300;
    text-transform: uppercase; 
    
}


.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover{
        color:white;
    }
}
@media only screen and (min-width: 1024px){
    Nav{
        font-size:80%;
    }
}
`;

export const NavBarh = () => (
    <Styles>
        <Navbar fixed="top" expand="lg" className="navbar-dark">
        <Navbar.Brand href="/">HJ.Lee</Navbar.Brand>
            <Navbar.Toggle
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse className="collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink
                        exact
                        to="/"
                        className="nav-item nav-link"
                        activeClassName="nav-item nav-link active"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        exact
                        to="/about"
                        className="nav-item nav-link"
                        activeClassName="nav-item nav-link active"
                    >
                        About
                    </NavLink>
                    <NavLink
                        exact
                        to="/mywork"
                        className="nav-item nav-link"
                        activeClassName="nav-item nav-link active"
                    >
                        MyWork
                    </NavLink>
    
                </div>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

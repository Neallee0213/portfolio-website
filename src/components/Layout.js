import React from 'react'

import { Container } from "react-bootstrap";

export const Layout = (props) => (

    <Container className ="position-absolute w-100">
        {props.children}
    </Container>

)

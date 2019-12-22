import React, { Component } from 'react';
import './Header.scss'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';
import { Container } from '@material-ui/core';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if (window.scrollY > 660) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <Container>
                <Grid container>
                    <AppBar
                        position="fixed"
                        style={{
                            backgroundColor: this.state.headerShow ? 'white' : 'transparent',
                            borderBottom: this.state.headerShow ? '1px solid #dadfe1' : 'none',
                            boxShadow: 'none',
                            padding: '10px 0px'
                        }}
                    >
                        <Toolbar >

                            <div className="header_logo">
                                <div className="header_logo_title"
                                    style={{
                                        color: this.state.headerShow ? 'black' : 'white'
                                    }}
                                >Hyunjoon Lee</div>
                            </div>

                            <IconButton
                                style={{
                                    color: this.state.headerShow ? 'black' : 'white'
                                }}
                                aria-label="Menu"
                                color="inherit"
                                onClick={() => this.toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>

                            <SideDrawer
                                open={this.state.drawerOpen}
                                onClose={(value) => this.toggleDrawer(value)}
                            />


                        </Toolbar>
                    </AppBar>
                </Grid>
            </Container>
        );
    }
}

export default Header;
import React from 'react';
import { scroller } from 'react-scroll';
import './Header.scss'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}

        >
            <List component="nav">
                <div className="lists">
                    <ListItem classname="nav_list" button onClick={() => scrollToElement('Home')}>
                        Home
                </ListItem>

                    <ListItem classname="nav_list" button onClick={() => scrollToElement('AboutMe')}>
                        About me
                </ListItem>

                    <ListItem classname="nav_list" button onClick={() => scrollToElement('Mywork')}>
                        My portfolio
                </ListItem>


                    <ListItem classname="nav_list" button onClick={() => scrollToElement('Footer')}>
                        Contact me
                </ListItem>

                    {/* <ListItem classname="nav_list" button onClick={() => scrollToElement('pricing')}>
                        Contact me
                </ListItem>

                    <ListItem classname="nav_list" button onClick={() => scrollToElement('location')}>
                        Location
                </ListItem> */}
                </div>
            </List>
        </Drawer>
    );
};

export default SideDrawer;
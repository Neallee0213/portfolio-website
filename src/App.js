import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe"
import { MyWork } from "./components/MyWork";
import { NoMatch } from "./components/NoMatch";
import { NavBarh } from "./components/NavBar"
import './App.css';
import { useTransition, animated } from "react-spring";

const App = () => {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }

  });
  return (
    <>
      <NavBarh />
      <Container>
        {transitions.map(({ item, props, key }) =>(
          <animated.div key = {key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/mywork" component={MyWork} />
              <Route component={NoMatch} />
            </Switch>
          </animated.div>



         ))}
      </Container>

    </>
  );

}
export default App;
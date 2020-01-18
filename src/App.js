import React, { Component } from 'react';
// import './resources/styles.css';
import { Element } from 'react-scroll';
import './App.css'
import Home from './component/Home/Home'
import Header from './component/Header/Header';
import AboutMe from './component/aboutMe/AboutMe';
import Skills from './component/aboutMe/Skills';
import Mywork from './component/mywork/MyWork'
import Footer from './component/Footer/Footer'
import MailMe from './component/mailMe/MailMe'
// import VunueNfo from './components/venueNfo';
// import Pricing from './components/pricing';
// import Location from './components/location';
// import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{}}>
        <Header />

        <Element name="Home">
          <Home />
        </Element>

        <Element name="AboutMe">
          <AboutMe />
          <Skills />
        </Element>

        <Element name="Mywork">
          <Mywork />
        </Element>

        {/* <Element name="MailMe">
          <MailMe />
        </Element> */}

        <Element name="Footer">
          <Footer />
        </Element>


        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;









// import React from 'react';
// import { Container } from "react-bootstrap";
// import { Home } from "./components/Home";
// import { AboutMe } from "./components/AboutMe"
// import { MyWork } from "./components/MyWork";
// import { NoMatch } from "./components/NoMatch";
// import { NavBarh } from "./components/NavBar"
// import './App.css';


// const App = () => {
//   return (
//     <>
//       <NavBarh />
//       <Container>

//         <Home />
//         <AboutMe />
//         {/* <MyWork /> */}


//       </Container>

//     </>
//   );

// }
// export default App;


// const App = () => {
//   const { location } = useContext(__RouterContext);

//   const transitions = useTransition(location, location => location.pathname, {
//     from: { opacity: 0, transform: 'translate3d(0,150px,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
//     leave: { opacity: 0, transform: 'translate3d(0,80px,0)' }

//   });
//   return (
//     <>
//       <NavBarh />
//       <Container>
//         {transitions.map(({ item, props, key }) =>(
//           <animated.div key = {key} style={props}>
//             <Switch location={item}>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/about" component={AboutMe} />
//               <Route exact path="/mywork" component={MyWork} />
//               <Route component={NoMatch} />
//             </Switch>
//           </animated.div>



//          ))}
//       </Container>

//     </>
//   );

// }
// export default App;
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Notfound from './Component/NotFound'
import About from './Component/About';
import WorkExperience from './Component/WorkExperience';
import Education from './Component/Education';
import Certification from './Component/Certification';
import Skills from './Component/Skills';
import Awards from './Component/Awards';
import Interests from './Component/Interests';
import Blogs from './Component/Blogs';
import Github from './Component/GitHub';

const routes = [
  {
    path: "/about",
    exact: true,
    sidebar: () => <div>About</div>,
    main: () => <About></About>
    
  },
  {
    path: "/experience",
    exact: true,
    sidebar: () => <div>Experience!</div>,
    main: () => <WorkExperience></WorkExperience>
  },
  {
    path: "/education",
    exact: true,
    sidebar: () => <div>Education</div>,
    main: () => <Education></Education>
  },
  {
    path: "/skills",
    exact: true,
    sidebar: () => <div>Skills</div>,
    main: () => <Skills></Skills>
  },
  {
    path: "/certification",
    exact: true,
    sidebar: () => <div>Certification</div>,
    main: () => <Certification></Certification>
  },
  {
    path: "/awards",
    exact: true,
    sidebar: () => <div>Awards</div>,
    main: () => <Awards></Awards>
  },
  {
    path: "/interests",
    exact: true,
    sidebar: () => <div>Interests</div>,
    main: () => <Interests></Interests>
  },
  {
    path: "/blogs",
    exact: true,
    sidebar: () => <div>Blogs</div>,
    main: () => <Blogs></Blogs>
  },
  {
    path: "/github",
    exact: true,
    sidebar: () => <div>Github</div>,
    main: () => <Github></Github>
  },
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <About></About>
  },
  {
    path: "*",
    exact: false,
    sidebar: () => <div>Not Found</div>,
    main: () => <Notfound></Notfound>
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Router >
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link className="navbar-brand js-scroll-trigger" to="/">
              <span className="d-block d-lg-none">Roshan Louhar</span>
              <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/IMG_8781.png" alt="" />
              </span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-left" id="navbarSupportedContent">

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about"><i className="fa fa-user"></i> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/experience"><i className="fa fa-tasks"></i> Experience</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/education"><i className="fa fa-university"></i> Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/skills"><i className="fa fa-toolbox"></i> Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/certification"><i className="fa fa-certificate"></i> Certifications</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/awards"><i className="fa fa-award"></i> Awards</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/interests"><i className="fa fa-skating"></i> Interests</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/blogs"><i className="fa fa-blog"></i> Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Github"><i className="fa fa-laptop-code"></i> Github</Link>
                </li>
              </ul>
            </div>
            <footer className="footer">
              <div className="container text-center">
                {/*<small className="copyright text-primary">Developed By <i className="fa fa-heart"></i> by 
    <Link className="text-dark" to="/" target="_blank">Roshan Louhar</Link></small> */}
              </div>
            </footer>
          </nav>

          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>

          {/* <Switch >
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/experience">
              <WorkExperience></WorkExperience>
            </Route>
            <Route exact path="/education">
              <Education></Education>
            </Route>
            <Route exact path="/skills">
              <Skills></Skills>
            </Route>
            <Route exact path="/certification">
              <Certification></Certification>
            </Route>
            <Route exact path="/awards">
              <Awards></Awards>
            </Route>
            <Route exact path="/interests">
              <Interests></Interests>
            </Route>
            <Route exact path="/github">
              <Github></Github>
            </Route>
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route exact path="/">
              <About></About>
            </Route>
            <Route path="*" component={Notfound} />
         </Switch> */}
        </Router>
      </div>
    );
  }
}
export default App;


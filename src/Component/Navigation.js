import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
class Navigation extends React.Component {
    render() {
        return (
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

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
            </nav>);
    }
}
export default Navigation;

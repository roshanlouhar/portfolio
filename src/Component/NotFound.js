import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About';

class NotFound extends React.Component {
  
  render() {
    return (
      <div className="resume-section p-3 p-lg-5 d-flex align-items-center text-center">
        <div className="w-100">
          <div className="col-md-12">
            <div className="error-template">
              <h1>
                Oops!</h1>
              <h2>
                404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
                </div>
              <div className="error-actions">
                <Router>
                  <Link to={About} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span> Take Me Home </Link>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default NotFound;
import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <section className ="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">Roshan<span className="text-primary">Louhar</span></h1>
                    <div className="subheading mb-5">
                        <i className="fa fa-map-marker"></i> Hyderabad · Telangana , India 500084 &nbsp;
                        <i className="fa fa-mobile"></i>(800) 364-4328  &nbsp;                        
                        <i className="fa fa-envelope"></i>  <a href="mailto:roshan.louhar@gmail.com">roshan.louhar@gmail.com</a>
                    </div>
                    <p className="lead mb-3">
                        I am experienced in leveraging Microsoft and open source frameworks to provide a robust synopsis for high level solutions using Agile methodology
                        in various domain.</p>

                    <p className="lead mb-3">
                        I specialize in building the large distributed applications specific to the business needs. I have done work in software development, front-end/back-end web, database/server management.</p>

                    <p className="lead mb-3">
                        I have special interest in exploring the Software architecture, system design, and competitive programming, hence still exploring the best practice in objects oriented concept, design pattern
                        and data structure/algorithm.</p>

                    <p className="lead mb-0">
                        ✔ Open to discuss the consulting, software web/windows development project. you are just a ping away for the best solution.</p>

                    <p className="lead mb-4">Click on the link to download my resume
                        <a target="_blank" rel="noopener noreferrer" href="~/Data/RoshanLouharSoftwareEngineerFullStack.pdf">pdf</a></p>

                    <div className="social-icons">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/roshanlouhar/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/roshanlouhar">
                            <i className="fab fa-github"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/roshanlouhar">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/roshan.louhar">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/9747843/roshan">
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                    </div>
                </div>
            </section>)
    }
}

export default About;

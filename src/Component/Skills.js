import React, { Component } from 'react';

class Skills extends Component {

    render() {
        
        return (<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-4">Skills</h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <i className="fab fa-docker"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-jira"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-jenkins"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-java"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-aws"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-react"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-npm"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-linux"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-windows"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-bitbucket"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-github"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-bootstrap"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-python"></i>
                    </li>
                </ul>

                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <i className="cbp-ig-icon devicon-csharp-plain"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-dot-net-plain-wordmark colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i><img src="https://img.icons8.com/color/48/000000/azure-1.png" alt='' /></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-typescript-plain colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-visualstudio-plain colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-mysql-plain-wordmark colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-redis-plain colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-visualstudio-plain colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-oracle-original colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-gitlab-plain-wordmark colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-jquery-plain colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-javascript-plain colored"></i>
                    </li>

                    <li className="list-inline-item">
                        <i className="devicon-grunt-line-wordmark colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-gulp-plain colored"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-java-plain-wordmark colored"></i>
                    </li>
                </ul>

                <div className="subheading mb-3">Workflow</div>

                <ul className="fa-ul mb-0">
                    <li><i className="fa-li fa fa-cloud"></i> Cloud Computing : Microsoft Azure PAAS & IAAS and AWS</li>
                    <li><i className="fa-li fa fa-code"></i> Continuous developement & intergration with Azure DevOps</li>
                    <li><i className="fa-li fa fa-check"></i> service fabric & kubernetes services</li>
                    <li> <i className="fa-li fa fa-atom"></i> artificial intelligence & machine learning</li>
                </ul>
            </div>
        </section>)
    }
}
export default Skills;
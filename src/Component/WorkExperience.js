import React, { Component } from 'react';

class WorkExperience extends Component {

    render() {
        return (<section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-4">Experience</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
                    <div className="resume-content">
                        <h3 className="mb-0">Associate Consultant</h3>
                        <div className="subheading mb-2">Microsoft</div>
                        <div>
                            Working on the large Enterprise application using latest Microsoft and open source Technologies.
                    <ul>
                                <li>Involved in Customer requirement gathering and estimation analysis.</li>
                                <li>Developing minor enhancement and writing code for the same.</li>
                                <li>Developing complex stored procedure and improving the existing application performance test.</li>
                                <li>Experienced in Microsoft Azure and Azure Iaas and Paas services.</li>
                                <li>Setting up the new environment in Azure and maintaining the VSTS build/release/sprint.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">January 2018 - Present</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
                    <div className="resume-content">
                        <h3 className="mb-0">Associate Consultant</h3>
                        <div className="subheading mb-2">Virtusa</div>
                        <div>
                            Worked on Banking pricing and decision-making tool project in agile.
                    <ul>
                                <li>Involved in requirement gathering with analyst/client in daily standup and sprint retrospective meetings.</li>
                                <li>Analyze the system and fixed existing bugs along with the new feature of pricing application.</li>
                                <li>Implemented the unit testing in the project and written all the test case.</li>
                                <li>Configured the Continues integration and deployment in Team city of the tool.</li>
                                <li>Prepared the troubleshooting document guide of the project for the production support.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">August 2016 - January 2018</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
                    <div className="resume-content">
                        <h3 className="mb-0">Senior Associate Programmer</h3>
                        <div className="subheading mb-2">Clavax llc.</div>
                        <div>
                            Worked as a senior programmer on E-commerce and data warehouse project in agile.
                    <ul>
                                <li>Upgraded the Asp.net WinForms to Angular(1.0) and database from on-premise to Azure cloud.</li>
                                <li>Integrated E-commerce API of Amazon, eBay, and Goodreads to fetch status and stock of Books.</li>
                                <li>Created windows app using selenium library to purchase books from various sources.</li>
                                <li>Integrated the PayPal and Cyber credit API for verifying credit card information for Online Payment.</li>
                                <li>Implemented Azure services like web Job, Redis Cache, Azure Search, Data factory.</li>
                                <li>Worked upon the Microsoft Business Intelligence tool (SSRS & SSIS), JIRA project management tool.</li>
                                <li>Prepared the knowledge transfer document of project architecture and flow.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">November 2015 - July 2016</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Software Developer</h3>
                        <div className="subheading mb-2">E-connect Solution Pvt Ltd</div>
                        <div>
                            Worked on state/central E-governance and payroll application for digital transformation journey of Inidan govt.
                    <ul>
                                <li>Developed Business tier /Data Access layer design for the web application from scratch.</li>
                                <li>Implemented user management for Role/ Rights reusable library.</li>
                                <li>Developed JS validation library, Exception Handling, SMTP utility.</li>
                                <li>Developed Search Custom Controls which can be used in any application for reducing time-effort.</li>
                                <li>Creating stored procedure, function and triggers for performance improvement in the database.</li>
                                <li>Prepared Project specification document while releasing the project.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">July 2014 -October 2015</span>
                    </div>
                </div>

            </div>
        </section>)
    }
}
export default WorkExperience;
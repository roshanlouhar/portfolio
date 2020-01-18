import React, { Component } from 'react';

class Education extends Component {

    render() {        
        return (<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-4">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
                    <div className="resume-content">
                        <h3 className="mb-0">Rajasthan Technical University</h3>
                        <div className="subheading mb-3">Bachelor of Technology</div>
                        <div>Computer Science Engineering</div>
                        <p>Percentage : 70%</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">August 2008 - May 2012</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
                    <div className="resume-content">
                        <h3 className="mb-0">Jyoti Shikshan Sansthan</h3>
                        <div className="subheading mb-3">Senior Secondary</div>
                        <div>Science Maths</div>
                        <p>Percentage : 76%</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">July 2006 - May 2008</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Govt. Higher Secondary School</h3>
                        <div className="subheading mb-3">Higher Secondary</div>
                        <div>All Subject</div>
                        <p>Percentage : 76%</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">July 2000 - May 2008</span>
                    </div>
                </div>
            </div>
        </section>)
    }
}
export default Education;
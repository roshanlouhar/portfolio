import React, { Component } from 'react';

class Github extends Component {
    
    render() {
        return (<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="Activity">
            <div className="w-100">
                <div className="mb-2">

                    <div id="github-graph" className="github-graph">
                    </div>

                    <div id="ghfeed" className="ghfeed">
                    </div>

                </div>
            </div>
        </section>)
    }
    componentDidMount() {
        window.GitHubActivityView();
        window.GitHubCalendarView();
    }
}
export default Github;



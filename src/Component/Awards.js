import React, { Component } from 'react';

class Awards extends Component {

    render() {
        return (<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
            <div className="w-100">
                <h2 className="mb-4">Awards </h2>
                <ul className="fa-ul mb-0">
                    <li><i className="fa-li fa fa-trophy text-warning"></i> Best Consultant at Virtusa(Jun 2017)</li>
                    <li><i className="fa-li fa fa-trophy text-warning"></i> Spot Award at Virtusa(Apr 2017) </li>
                    <li><i className="fa-li fa fa-trophy text-warning"></i> Society Award for Excellence -Jun 2013</li>
                    <li><i className="fa-li fa fa-trophy text-warning"></i> Winner of Debut&Essay writing competition</li>
                    <li><i className="fa-li fa fa-trophy text-warning"></i> District level Kho-Kho and Cricket player</li>
                    <li><i className="fa-li fa fa-trophy text-warning"></i> Hackthon winner at College Level</li>
                </ul>
            </div>
        </section>)
    }
}
export default Awards;
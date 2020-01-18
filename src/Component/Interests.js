import React, { Component } from 'react';

class Interests extends Component {

    render() {
        return (<section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div className="w-100">
                <h2 className="mb-4">Interests</h2>
                <p className="mb-2">Apart from being a web developer, I enjoy most of my time being outdoors. In the free time, I am an avid cricket player and Kho-Kho player. I enjoy mountain biking, free climbing, and love swimming. In office free time I enjoy the Table-tennis and foosball with friends.</p>
                <p className="mb-2">When forced indoors, I follow a number of sci-fi ,comedy and fantasy genre movies and television shows, I am a good chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                <p className="mb-2">I like solving the Maths ,puzzles and coding problem and spend time in exploring the facts related to world history and reading cartoons.</p>
                <div className="mb-3">
                    <ul className="list-unstyled">
                        <li className="item">
                            <span className="title"><strong> English : </strong> Professional Proficiency </span>
                        </li>
                        <li className="item">
                            <span className="title"><strong> Hindi : </strong> Native Speaker </span>
                        </li>
                        <li className="item">
                            <span className="title"><strong> Rajasthani : </strong> Native Speaker </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>)
    }
}
export default Interests;
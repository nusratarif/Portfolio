import React from 'react'
import img1 from './images/D1.png';
import img2 from './images/D3.png';
import img3 from './images/D2.png';
import img4 from './images/D4.jpeg';
import img5 from './images/D5.jpeg';
import img6 from './images/D6.jpeg';


const Project = () => {
    const [header] = React.useState
        ({
            mainHeader: "My Projects",
            text: "Here is my some demo projects of React JS and HTML CSS JS\
        with and without bootstrap and media query"
        });
    return (
        <div className="projects" id="projects">
            <div className="container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                <div className="projects__header">
                    <div className="common">
                        <h1 className="mainHeader">{header.mainHeader}</h1>
                        <p className="mainContent">{header.text}</p>
                    </div>
                    <div className="commonBorder"></div>

                    <div className="project-img" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="linear">

                        <div className="project-img-box">
                            <img className="img1" src={img1} alt="P2" height="160" width="160" />
                            <h4>HTML CSS</h4>
                            <h5><a target="_blank" href="https://responsive-html-website-e1e457.netlify.app">Live Preview</a></h5>
                        </div>

                        <div className="project-img-box">
                            <img className="img2" src={img2} alt="P2" height="160" width="160" />
                            <h4>HTML CSS</h4>
                            <h5><a target="_blank" href="https://my-html-demo-app-3f019c.netlify.app">Live Preview</a></h5>
                        </div>

                        <div className="project-img-box">
                            <img className="img3" src={img3} alt="P2" height="160" width="160" />
                            <h4>HTML CSS</h4>
                            <h5><a target="_blank" href="https://demo-html-app-74bede.netlify.app/">Live Preview</a></h5>
                        </div>

                        <div className="project-img-box">
                            <img className="img4" src={img4} alt="P1" height="160" width="160" />

                            <h4>Expense Tracker App</h4>
                            <h5><a target="_blank" href="https://expanse-tracker-661963.netlify.app/">Live Preview</a></h5>
                        </div>

                        <div className="project-img-box">
                            <img className="img6" src={img6} alt="P2" height="160" width="160" />
                            <h4>Shoe Store</h4>
                            <h5><a target="_blank" href="https://online-shoestore-2064ee.netlify.app">Live Preview</a></h5>
                        </div>

                        <div className="project-img-box">
                            <img className="img5" src={img5} alt="P4" height="160" width="160" />
                            <h4>React Quize</h4>
                            <h5><a target="_blank" href="https://project-quizapp-627188.netlify.app/">Live Preview</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;

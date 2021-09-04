import React from 'react'
import logo1 from './Logo/linux.png';
import logo2 from './Logo/kuber.png';
import logo3 from './Logo/docker.png';
import logo4 from './Logo/logo4.png';
import logo7 from './Logo/react.png';
import logo8 from './Logo/redux2.png';
import logo9 from './Logo/typescript2.png';
import logo10 from './Logo/AWS.png';

const Skills = () => {
    const [header] = React.useState
        ({
            mainHeader: "I am Good in!",
            subHeading: "Skills",

        });

    return (
        <div className="skills" id="skills">
            <div className="container">
                <div className="skills__header">
                    <div className="common" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                        <h3 className="heading">{header.subHeading}</h3>
                        <h1 className="mainHeader">{header.mainHeader}</h1>

                        <div className="commonBorder"></div>
                    </div>

                </div>
                <div className="logo-box" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="linear">
                    <div className="logo-img">
                        <img className="logo1" src={logo1} alt="" height="100" width="100" />

                    </div>
                    <div className="logo-img">
                        <img className="logo2" src={logo2} alt="" height="100" width="150" />

                    </div>
                    <div className="logo-img">
                        <img className="logo3" src={logo3} alt="" height="90" width="90" />

                    </div>
                    <div className="logo-img">
                        <img className="logo4" src={logo4} alt="" height="160" width="160" />
                        
                    </div>

                    <div className="logo-img">
                        <img className="logo7" src={logo7} alt="" height="90" width="110" />

                    </div>
                    <div className="logo-img">
                        <img className="logo8" src={logo8} alt="" height="120" width="120" />

                    </div>
                    <div className="logo-img">
                        <img className="logo9" src={logo9} alt="" height="100" width="100" />

                    </div>
                    <div className="logo-img">
                        <img className="logo10" src={logo10} alt="" height="90" width="90" />

                    </div>

                </div>


            </div>
        </div>


    )
}

export default Skills

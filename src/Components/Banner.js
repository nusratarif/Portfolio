import React from 'react';
import img from './images/Its me.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'


    AOS.init();  
const Banner = () => {
    
    
    
    return (
        <header className="header" id="home">
           <div className="container">
               <div className="row">
                   <div className="col-6">
                   <div className="header__content">
                       <div className="header__section">
                           <div className="type-heading">
                      <h1>I am Nusrat Arif</h1>
                      <p>I am  

                          <Typical
                          loop={Infinity}
                          wrapper="b"
                          steps={[
                            ' a Web developer',
                            2000, 
                            ' a Web designer',
                            2000, 
                            ' a DevOps Engineer',
                            2000, 
                            ' a Freelancer',
                            2000

                            ]}
                          />
                      </p>
                      </div>
                       
                    </div>
                </div>
           </div>
                   <div className="col-6">
                       <div className="banner__img" data-aos="fade-left" data-aos-duration="2000"  data-aos-easing="linear">
                       <img src={img} alt="My Pic" height="300" />
                       </div>
                       
                   </div>
               </div>
           </div> 


        </header>
    )
}

export default Banner;

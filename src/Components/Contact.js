import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="contactSection">

                    <div className="row justifyCenter">
                        <div className="col-6">
                            <div className="contactSection-heading">
                                <h3>HAVE ANY QUERY?</h3>
                                <h1>Contact Me</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus tempus ex a diam aliquam ornare. Donec feugiat,
                                urna ut finibus faucibus.</p>
                            <div className="commonBorder"></div>
                            <div className="adjust" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-easing="linear">
                                <div className="col-lg-4">
                                    <div className="address">
                                        <i className="fa-fw fa-map-marker"><FaMapMarkerAlt /></i>
                                        <span>Locate us</span>
                                        <p>Karachi, Pakistan</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="address">
                                        <i className="fa-fw fa-map-marker"><FaEnvelope /></i>
                                        <span>Get in online</span>
                                        <p>nusratarif02@gmail.com</p>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

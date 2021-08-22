import React from 'react'
// import { FaGithub, FaCircleNotch, } from 'react-icons/fa';
const Services = () => {
  const [header] = React.useState
    ({

      subHeading: "My Services",

    });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Web Development",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Simply dummy."
    },

    {
      id: 2,
      heading: "Web Designing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Simply dummy."
    },
    {
      id: 3,
      heading: "DevOps Engineer",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
      industry. Simply dummy."
    },


  ])
  return (
    <div className="services" id="services">
      <div className="container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            {state.map(info => (
              <div className="col-4 bgMain">
                <div className="services__box" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="linear">
                  <div className="commonIcons">{info.icon}</div>
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Services;

import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";



const Contact = () => {
  return (
    <section id="contact" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-black">Contact Me</span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <ul>
          <li>
            <div className="list_inner">
              <div className="icons orangeBackground">
                <MdLocationOn className="icon orangeText" />
              </div>
              <div className="short">
                <h3>Address</h3>
                <span>
                  #73, Sara,2nd Floor,12th Cross, 2nd Main, Telecom Layout,
                  Jakkur, Bangalore, 560064
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="icons greenBackground">
                <MdEmail className="icon greenText" />
              </div>
              <div className="short">
                <h3>Email</h3>
                <span>
                  <a href="mailto:krishnanova@gmail.com" target="_top">
                    krishnanova@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="icons purpleBackground">
              <FaMobileScreenButton className="icon purpleText" />
              </div>
              <div className="short">
                <h3>Phone</h3>
                <span>+91 8095485414</span>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default Contact;

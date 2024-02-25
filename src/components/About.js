import React from "react";
import kp from "../assets/images/kp-1.jpg";
import mongo from "../assets/images/mongo.png";
import express from "../assets/images/express.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import e01 from "../assets/images/e01.png";
import e02 from "../assets/images/e02.png";
import e03 from "../assets/images/e03.png";

const About = () => {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1>About me</h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span>
                <img className="profile" alt="Avatar placeholder" src={kp} />
                {/* icons */}
                <img className="icon" alt="MongoDB Icon" src={mongo} />
                <img className="icon" alt="Express Icon" src={express} />
                <img className="icon" alt="React Icon" src={react} />
                <img className="icon" alt="Node Icon" src={node} />

                {/* icons */}
              </span>
            </div>
          </div>
          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <img alt="" src={e01} />
                  <img alt="" src={e02} />
                  <img alt="" src={e03} />
                </div>
                <div className="card-body">
                  <span className="wave">Hi 👋,</span>
                  <p>
                    I'm Krishnaprasad.
                    <br />I have over 12+ years of experience of building
                    innovative products in small organizations as well as big
                    enterprises. Experience of working in small and large
                    distributed teams in Agile environment. Currently, I work as
                    the Lead Engineer at Nokia, where I lead a cross-functional
                    team of 5, building unique products called NAC (Nokia
                    Assurance Center). I'm deeply passionate about exploring new
                    technologies and skill sets that help the product and
                    achieve my career goals. A technology enthusiast with
                    ability to provide elegant, efficient and maintainable
                    solutions to complex problems that fit constraints of
                    business and long term vision.. <br />
                    Thank you 💜
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

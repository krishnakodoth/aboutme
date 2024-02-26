import React from "react";
import nac from "../assets/images/nac.jpg";
import aor from "../assets/images/aor.png";
import ims from "../assets/images/ims.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="col-md-12">
        <h1 className="section-title">
          <span>Projects</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {/* Projects*/}
            <div className="col-lg-4">
              <span className="portfolio-item d-block">
                <div className="foto">
                  <div>
                  <img 
                    src={nac} 
                    alt="projectImages" height="230" />
                    <span className="project-date">2019-present</span>
                    <br/>
                    <p className="project-title-settings mt-3">NAC</p>
                  </div>
                </div>
              </span>
            </div>
            {/* Projects*/}
            {/* Projects*/}
            <div className="col-lg-4">
              <span className="portfolio-item d-block">
                <div className="foto">
                  <div>
                  <img 
                    src={aor} 
                    alt="projectImages" height="230" />
                    <span className="project-date">2016-2019</span>
                    <br/>
                    <p className="project-title-settings mt-3">AOR</p>
                  </div>
                </div>
              </span>
            </div>
            {/* Projects*/}
            {/* Projects*/}
            <div className="col-lg-4">
              <span className="portfolio-item d-block">
                <div className="foto">
                  <div>
                  <img 
                    src={ims}
                    alt="projectImages" height="230" />
                    <span className="project-date">2013-2016</span>
                    <br/>
                    <p className="project-title-settings mt-3">IMS Mirror</p>
                  </div>
                </div>
              </span>
            </div>
            {/* Projects*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

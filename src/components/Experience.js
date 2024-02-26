import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";

const Experience = () => {
  const pageIcon = (className) => {
    return (
      <div className="experience-icon">
        <i className={className} />
      </div>
    );
  };
  return (
    <section id="experience" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-black">Experience</span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "solid 5px rgb(33, 150, 243)" }}
            date="2019 - present"
            dateStyle={{color:"red"}}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Nokia Pvt Ltd, Bangalore
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              — Techincal Lead
            </h4>
            <div>
              <ul>
                <li>Leading a feature team of size 8.</li>
                <li>Mentoring medium-sized development teams.</li>
                <li>Code Review, and FM UI Development with unit testing.</li>
                <li>Part of feature grooming and estimate.</li>
                <li>Skills Used: HTML5, CSS, JavaScript, React, Redux, Node JS, GIT and Docker.</li> 
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "solid 5px rgb(243 33 192)" }}
            date="2016 - 2019"
            dateStyle={{color:"red"}}
            iconStyle={{ background: "rgb(243 33 192)", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Nokia Pvt Ltd, Bangalore
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              — Scrum Lead
            </h4>
            <div>
              <ul>
                <li>Leading a feature team of size 5.</li>
                <li>Mentoring medium-sized development teams.</li>
                <li>Code Review,Pair Programming with unit testing</li>
                <li>Part of feature grooming and estimate.</li>
                <li>Skills Used: HTML5, CSS, JavaScript, React, Redux, Saga, GIT and Docker.</li> 
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "solid 5px rgb(243 169 33)" }}
            date="2013-2016"
            dateStyle={{color:"red"}}
            iconStyle={{ background: "rgb(243 169 33)", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Nokia Pvt Ltd, Bangalore
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              — Senior Software Engineer
            </h4>
            <div>
              <ul>
                <li>Leading a feature team of size 5.</li>
                <li>Mentoring medium-sized development teams.</li>
                <li>Code Review,Pair Programming with unit testing</li>
                <li>Part of feature grooming and estimate.</li>
                <li>Skills Used: HTML5, CSS, JavaScript, React, Redux, Saga, GIT and Docker.</li> 
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2011 - January 2013"
            contentStyle={{ borderTop: "solid 5px rgb(233 87 30)" }}
            iconStyle={{ background: "rgb(233 87 30)", color: "#fff" }}
            icon={pageIcon("devicon-codeigniter-plain")}
          >
            <h3 className="vertical-timeline-element-title">
              Azure End-to-End Solutions, Bangalore
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              — Software Engineer
            </h4>
            <div>
              <ul>
                <li>Development with unit testing.</li>
                <li>Good team player.</li>
                <li>Awarded Best Employee.</li>
                <li>
                  Proven ability to effectively plan and meet aggressive
                  deadlines
                </li>
                <li>
                  Web technologies used - HTML, CSS, JavaScript, JQuery,
                  PHP(CodeIgniter)
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2009 - March 2011"
            contentStyle={{ borderTop: "solid 5px rgb(125 94 236)" }}
            iconStyle={{ background: "rgb(125 94 236)", color: "#fff" }}
            icon={pageIcon("devicon-php-plain")}
          >
            <h3 className="vertical-timeline-element-title">
              Techies Networks Pvt Ltd, Bangalore
            </h3>
            <h4 className="vertical-timeline-element-subtitle">— Trainer</h4>
            <div>
              <ul>
                <li> Train the student interns for the academic project.</li>
                <li>
                  Web technologies used - HTML, CSS, JavaScript, JQuery, PHP
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            date="2005 - 2008"
            icon={<FaGraduationCap />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

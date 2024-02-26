import React from "react";
import { PiCertificateFill } from "react-icons/pi";

const Accomplishment = () => {
  return (
    <section id="accomplishment" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-black">Accomplishment</span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <ul>
          <li>
            PI Pilot Award (2020,2021)
          </li>
          <li>Nokia Bangalore Engineering Excellence (2016)</li>
          <li>Star of IMS (2015,2016)</li>
          <li>Nokia Quality Award (2013)</li>
        </ul>
      </div>
    </section>
  );
};

export default Accomplishment;

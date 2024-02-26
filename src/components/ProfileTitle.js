import React from "react";
import { TypeAnimation } from "react-type-animation";

const titleList = [
  "SENIOR MERN STACK DEVELOPER ",500,
  "DEV TECH LEAD ",500,
  "SENIOR FRONT-END DEVELOPER ",500
];

const ProfileTitle = () => {
  return (
    <h3 className="title-styles">
      <TypeAnimation
        sequence={titleList}
        repeat={Infinity}
      />
    </h3>
  );
};

export default ProfileTitle;

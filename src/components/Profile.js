import React from "react";
import profile from "../assets/images/kp.jpg";
import ProfileTitle from "./ProfileTitle";
import cv from "../assets/doc/Krishnaprasad.K.pdf"
import { MdDownloadForOffline } from "react-icons/md";

const Profile = () => {
  return (
    <header>
      <div className="profile-img">
        <img src={profile} alt="Krishnaprasad K" />
      </div>
      <h1>Krishnaprasad K</h1>
      <ProfileTitle />
      
      <a href={cv} download className="download">
      <MdDownloadForOffline />
        <span>Download CV</span>
        </a>
        
    </header>
  );
};

export default Profile;

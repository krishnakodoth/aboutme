import React from "react";
import profile from "../assets/images/kp.jpg";
import ProfileTitle from "./ProfileTitle";

const Profile = () => {
  return (
    <header>
      <div className="profile-img">
        <img src={profile} alt="Krishnaprasad K" />
      </div>
      <h1>Krishnaprasad K</h1>
      <ProfileTitle />
    </header>
  );
};

export default Profile;

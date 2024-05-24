import React from "react";
import Logo from "./Logo";
import photo from "../Assets/myImage.png";
import "./profile.css";
import Mid from './Mid'
import AboutMe from "./AboutMe";
import ContactUs from "./ContactUs";
import FindMe from "./FindMe";
import Fun from "./Fun";

const ProfileCard = () => {
  return (
    <div>
      <Logo />
      <div className="flex w-[29rem] h-[11.5rem] mt-20 rounded-xl" style={{backgroundColor: '#CED4FF'}}>
        <img
          src={photo}
          alt=""
          className="h-[185px] w-[132px] object-cover justify-center rounded-l-xl"
        />
        <div className="h-[185px] w-[100%] mt-12 ml-10 ">
           <span className="name">Aman Yadav</span>
          <p style={{color: "#061244"}}>@amxn.yadav</p>
          <p>
            <strong className="font">MERN Stack Developer</strong>
          </p>
        </div>
      </div>
      <Mid/>
      <AboutMe/>
      <ContactUs/>
      <Fun/>
      <FindMe/>
    </div>
  );
};

export default ProfileCard;

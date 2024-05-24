import React from "react";
import "./profile.css";
import { Card, Divider } from "@mui/material";
import call from "../Assets/contactus.png";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const Contactus = () => {
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "25rem",
          width: "29rem",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[25rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[3.5rem] w-[100%] ml-8 mt-5">
          <img src={call} alt="Contact icon" />
          <span className="heading2">Contact Us</span>
        </div>
        <Divider orientation="horizontal" sx={{ width: "90%", backgroundColor: "rgb(229, 231, 235)", marginTop:"8px" }}  />
        
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5">
          <p className="heading2">Call Me</p>
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5" >
          <a href="tel:+7517052003" className="small">+91 8707842015</a>
        </div>
        
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5">
          <p className="heading2">Email</p>
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5" >
          <a href="amxn.yadav@gmail.com" className="small">amxn.yadav@gmail.com</a>
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5">
          <p className="heading2">Address</p>
        </div>
        <div className="flex h-[2rem] w-[100%] ml-8 mt-5" >
          <span className="small">MSR Nagar New BEL Road, Bangalore - 560054</span>
        </div>
        <div className="flex h-[2rem] w-[100%] ml-8 mt-5">
            <a className="btn" href="https://www.google.com/maps/place/StackLab.in/@18.6089887,73.7674474,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb139f7d3f81:0xf990a3b9c6d80922!8m2!3d18.6089836!4d73.7700223!16s%2Fg%2F11jpj1b3bp?entry=tts"><NearMeOutlinedIcon/>Directions</a>
        </div>
      </Card>
    </div>
  );
};

export default Contactus;

import { Card,Divider } from '@mui/material'
import "./profile.css";
import React from 'react'
import insta from '../Assets/insta_icon@72x.png'
import linked from '../Assets/linkedin_icon@72x.png'
import link from '../Assets/weblink.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const FindMe = () => {
  
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
          height: "13rem",
          width: "29rem",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[20rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[3.5rem] w-[100%] ml-8 mt-8 justify-center">
           <p className='heading'>Find Me Here</p> 
        </div>
        <Divider orientation="horizontal" sx={{ width: "90%", backgroundColor: "rgb(229, 231, 235)", marginTop:"8px" }}  />
        <div className="flex h-[3rem] w-[100%]  ">
            <a href="https://www.linkedin.com/in/aman-yadav-ay/" className='flex h-[3rem] w-[100%] ml-8 mt-5'>
            <img src={linked} alt="Contact icon" className='w-[3rem] image'/>
            <span className="heading2">LinkedIn</span>
            <ArrowForwardIosOutlinedIcon className='arrow' />
            </a>
        </div>
      </Card>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "5.5rem",
          width: "29rem",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[10rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[3rem] w-[100%]  ">
            <a href="https://www.instagram.com/" className='flex h-[3rem] w-[100%] ml-8 mt-5'>
            <img src={insta} alt="Contact icon" className='w-[3rem] image'/>
            <span className="heading2">Instagram</span>
            <ArrowForwardIosOutlinedIcon className='arrow' />
            </a>
        </div>
      </Card>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "13rem",
          width: "29rem",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[20rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[1rem] w-[100%] ml-8 mt-8 justify-center">
           <p className='heading h-[2rem]'>Links</p> 
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5 justify-center">
        </div>
        <Divider orientation="horizontal" sx={{ width: "90%", backgroundColor: "rgb(229, 231, 235)", marginTop:"8px" }}  />
        <div className="flex h-[2rem] w-[100%]  ">
            <a href="https://linkedin.com/in/aman-yadav-ay/" className='flex h-[3rem] w-[100%] ml-8 mt-5'>
            <img src={link} alt="Contact icon" className='w-[3rem] image'/>
            <span className="head">Company Website</span>
            <ArrowForwardIosOutlinedIcon className='arrow2' />
            </a>
        </div>
      </Card>
    </div>
  )
}

export default FindMe

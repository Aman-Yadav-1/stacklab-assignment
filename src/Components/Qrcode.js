import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import pic from "../Assets/myImage.png";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import card1 from "../Assets/apple_wallet.svg";
import card2 from "../Assets/google_wallet.svg";

const Qrcode = () => {
  const navigate = useNavigate();
  const navigateback = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto px-4">
      <button
        onClick={navigateback}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
      >
        <CancelRoundedIcon />
      </button>
      <div className="flex justify-center mt-5">
        <img src={pic} alt="" className="rounded-full h-40 w-40" />
      </div>
      <div className="flex justify-center mt-5">
        <h2 className="heading">Aman Yadav</h2>
      </div>
      <div className="flex justify-center mt-2">
        <p className="heading2">MERN Stack Developer</p>
      </div>
      <div className="flex justify-center mt-5">
        <p className="h-[250px] w-[250px] bg-slate-400 ">qr code</p>
      </div>
      <div className="flex justify-center mt-5">
        <p className="font">Add your Digital Business Card to Wallet</p>
      </div>
      <div className="flex justify-center mt-5">
        <div className="fixed-button">
          <img src={card1} alt="" />
        </div>
        <div className="fixed-button ml-4">
          <img src={card2} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <p className="heading2">MERN Stack Developer</p>
      </div>
    </div>
  );
};

export default Qrcode;

import { Phone, Mail, WhatsApp, LocationOn } from "@mui/icons-material";
import "./profile.css";

const Mid = () => {
  return (
    <div className="flex justify-around items-center h-16 mt-5 mb-6 rounded-xl midpart">
      <div className="icon-container">
        <a href="tel:+91-8707841420"><Phone /></a>
      </div>
      <div className="icon-container">
        <a href="mailto:amxn.yadav@gmail.com"><Mail /></a>
      </div>
      <div className="icon-container">
        <a href="https://wa.me/8707841420"><WhatsApp /></a>
      </div>
      <div className="icon-container">
        <a href="https://www.google.com/maps/place/StackLab.in/@18.6089887,73.7674474,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb139f7d3f81:0xf990a3b9c6d80922!8m2!3d18.6089836!4d73.7700223!16s%2Fg%2F11jpj1b3bp?entry=tts"><LocationOn /></a>
      </div>
    </div>
  );
};

export default Mid;

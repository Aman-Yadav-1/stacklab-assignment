import React from "react";
import "./Buttons.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  const navigateQr = () => {
    navigate("/qr");
  };

  return (
    <div className="fixed-buttons-container">
      <div className="icon" onClick={navigateQr}>
        <QrCode2Icon style={{ fontSize: 25 }} />
      </div>
      <div className="icon">
        <UploadRoundedIcon style={{ fontSize: 25 }} />
      </div>
      <button
        type="button"
        className="fixed-button px-4 py-2.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to Contact
        <AddCircleIcon style={{ fontSize: 25 }} className="text-white me-2" />
      </button>
    </div>
  );
};

export default Buttons;

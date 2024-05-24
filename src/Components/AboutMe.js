import { Card } from "@mui/material";
import React from "react";
import "./profile.css";

const AboutMe = () => {
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "15.5rem",
          width: "29rem",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "center",
          padding: '3px'
        }}
      >
        <h2 className="heading">About Me</h2>
        <div className="paragraph">
          Hi, Myself Aman Yadav,
          <br />
          Experienced Software Developer with expertise in Java and JavaScript. Specializes in project development using MongoDB, Express.JS, React.JS, Node.JS, Redux, Bootstrap, and Material UI.
        </div>
      </Card>
    </div>
  );
};

export default AboutMe;

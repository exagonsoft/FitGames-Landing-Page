import React from "react";
import "./about.css";
import Header from "../../components/Shared/Header";
import abautImage from "../../Assets/images/header_bg_1.jpg";
import Story from "../../components/About/Story";
import Vision from "../../components/About/Vision";
import Mision from "../../components/About/Mision";

const About = () => {
  return (
    <>
      <Header title="About US" image={abautImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem libero
        sunt quam molestiae, velit blanditiis voluptates in at ipsa asperiores.
      </Header>
      <Story />
      <Vision />
      <Mision />
    </>
  );
};

export default About;

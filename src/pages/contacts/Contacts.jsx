import React from "react";
import "./contacts.css";
import Header from "../../components/Shared/Header";
import HeaderImage from "../../Assets/images/header_bg_2.jpg";
import Contact from "../../components/Contact/Contact";

const Contacts = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem libero
          sunt quam molestiae, velit blanditiis voluptates in at ipsa
          asperiores.
        </p>
      </Header>
      <Contact />
    </>
  );
};

export default Contacts;

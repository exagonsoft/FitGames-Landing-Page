import React from "react";
import "./galery.css";
import Header from "../../components/Shared/Header";
import HeaderImage from "../../Assets/images/header_bg_3.jpg";
import Gallery from "../../components/Gallery/Gallery";

const Galery = () => {
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat aut
          consequatur illo reprehenderit mollitia natus.
        </p>
      </Header>
      <Gallery />
    </>
  );
};

export default Galery;

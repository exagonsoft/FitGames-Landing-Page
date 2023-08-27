import React from "react";
import "./plans.css";
import HeaderImage from "../../Assets/images/header_bg_4.jpg";
import Header from "../../components/Shared/Header";
import PlansSection from "../../components/Plans/PlansSection";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, in!
          Fugiat tenetur repellat odit sunt?
        </p>
      </Header>
      <PlansSection />
    </>
  );
};

export default Plans;

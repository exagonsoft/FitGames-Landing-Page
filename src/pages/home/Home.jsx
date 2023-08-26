import React from "react";
import "./home.css";
import Header from "../../components/home/Header";
import Programs from "../../components/home/Programs";
import Values from "../../components/home/Values";
import FAQs from "../../components/home/FAQs";
import Testimonials from "../../components/home/Testimonials";
import Footer from "../../components/home/Footer";

const Home = () => {
  return (
    <div className="main-containner">
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import VisionImage from "../../Assets/images/about2.jpg";

const Vision = () => {
  return (
    <section className="about-vision">
      <div className="container about-vision-container">
        <div className="about-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit explicabo qui rem id modi harum ipsa voluptatem
            voluptatibus odio ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ipsa
            tempora quasi a accusantium nobis illum sapiente quod similique at
            blanditiis, laboriosam velit itaque, eaque dolor ad, sit dolores
            doloremque!
          </p>
        </div>
        <div className="about-image">
          <img src={VisionImage} alt="Vision Image" />
        </div>
      </div>
    </section>
  );
};

export default Vision;

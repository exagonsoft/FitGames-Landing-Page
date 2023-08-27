import React from "react";
import MissionImage from "../../Assets/images/about3.jpg";

const Mision = () => {
  return (
    <section className="about-mision">
      <div className="container about-mission-container">
        <div className="about-image">
          <img src={MissionImage} alt="Mission Image" />
        </div>
        <div className="about-content">
          <h1>Our Mission</h1>
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
      </div>
    </section>
  );
};

export default Mision;

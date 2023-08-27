import React from "react";
import StoryImage from "../../Assets/images/about1.jpg";

const Story = () => {
  return (
    <section className="about-story">
      <div className="container about-story-container">
        <div className="about-image">
          <img src={StoryImage} alt="Story Image" />
        </div>
        <div className="about-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            earum quis debitis dicta, aut molestiae et accusantium cumque
            architecto necessitatibus quos minus doloremque cum! Optio corrupti
            eveniet ad porro excepturi.
          </p>
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

export default Story;

import React from "react";

const Gallery = () => {
  const galleryImagesLenght = 15;
  const galleryImages = [];

  for (let index = 1; index <= galleryImagesLenght; index++) {
    galleryImages.push(require(`../../Assets/images/gallery${index}.jpg`));
  }
  return (
    <section className="gallery">
      <div className="container gallery-container">
        {galleryImages.map((_image, index) => {
          return (
            <article key={index}>
              <img src={_image} alt={`Gallery Image ${index}`} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;

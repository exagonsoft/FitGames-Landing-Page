import React from "react";
import { MdEmail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container contact-container">
        <div className="contact-wrapper">
          <a href="mailto:info@flexsport.de" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
          <a href="https://m.me/flexsport" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
          <a href="https://wa.me/+491789073259" target="_blank" rel="noreferrer noopener"><BsWhatsapp /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

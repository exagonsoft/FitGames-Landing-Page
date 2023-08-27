import React from "react";
import { trainers } from "../../Data/data";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Trainer from "./Trainer";

const TrainersSection = () => {
  return (
    <section className="trainers">
      <div className="container trainers-container">
        {trainers.map((_trainer) => {
          return (
            <Trainer
              key={_trainer.id}
              name={_trainer.name}
              image={_trainer.image}
              job={_trainer.job}
              socials={[
                {icon: <FaInstagram />, link: _trainer.socials[0]},
                {icon: <FaTwitter />, link: _trainer.socials[1]},
                {icon: <FaFacebook/>, link: _trainer.socials[2]},
                {icon: <FaLinkedin />, link: _trainer.socials[3]},
              ]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TrainersSection;

import React from "react";
import Card from "../../UI/Card";

const Trainer = (props) => {
  const { image, name, job, socials, _key } = props;
  return (
    <Card _key={_key} _class="trainer">
      <div className="trainer-image">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer-socials">
        {socials.map((_social, index) => {
          return (
            <a
              key={index}
              href={_social.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {_social.icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Trainer;

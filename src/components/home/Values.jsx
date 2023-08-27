import React from "react";
import Image from "../../Assets/images/values.jpg";
import SectionHeadder from "./SectionHeadder";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../Data/data";
import Card from "../../UI/Card";

const Values = () => {
  const inMobile = window.innerWidth <= 768 ? true : false;
  return (
    <section className="values">
      <div className="container values-container">
        {!inMobile ? (
          <div className="values-left">
            <div className="values-l-image">
              <img src={Image} alt="Value Logo" />
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="values-right">
          <SectionHeadder icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            dolore possimus minima consequuntur numquam minus omnis iure quidem
            soluta voluptate, nesciunt cum totam itaque eius recusandae, dolorem
            ratione, aut neque?
          </p>
          <div className="values-wrapper">
            {values.map((_value) => {
              return (
                <Card _class="value-card" key={_value.id}>
                  <span>{_value.icon}</span>
                  <h4>{_value.title}</h4>
                  <small>{_value.desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

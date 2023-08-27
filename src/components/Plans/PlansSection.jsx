import React from "react";
import { plans } from "../../Data/data";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";

const PlansSection = () => {
  return (
    <section className="plans">
      <div className="container plans-container">
        {plans.map((_plan) => {
          return (
            <Card _key={_plan.id} _class="plan">
              <h3>{_plan.name}</h3>
              <small>{_plan.desc}</small>
              <h1>{`$${_plan.price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {_plan.features.map((_feature, index) => {
                return (
                  <p
                    key={index}
                    className={!_feature.available ? "feature-disabled" : ""}
                  >
                    {_feature.feature}
                  </p>
                );
              })}
              <Link to={"/"} className="btn" target="_self" rel="noreferrer noopener">Choose Plan</Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default PlansSection;

import React from "react";
import { GiMuscleUp } from "react-icons/gi";
import { GetText } from "../../Languages/lang";
import SectionHeadder from "./SectionHeadder";
import { programs } from "../../Data/data";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionHeadder
          title={GetText("programs_tittle")}
          icon={<GiMuscleUp />}
        />
        <div className="programs-wrapper">
          {programs.map((_program, index) => {
            return (
              <Card _class="programs-card" key={_program.id}>
                <span>{_program.icon}</span>
                <h4>{_program.title}</h4>
                <small>{_program.info}</small>
                <Link to={_program.path} className="btn sm">
                  {GetText("learnMore")}
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;

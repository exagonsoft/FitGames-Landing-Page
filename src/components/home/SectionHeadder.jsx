import React from "react";

const SectionHeadder = (props) => {
  const { title, icon, _class } = props;
  return (
    <div className={`section-header ${_class}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeadder;

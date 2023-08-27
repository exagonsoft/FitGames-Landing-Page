import React from "react";

const Card = (props) => {
  const { _class, children} = props;
  return <article className={`card ${_class}`}>{children}</article>;
};

export default Card;

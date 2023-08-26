import React from "react";

const Card = (props) => {
  const { _class, children, _key } = props;
  return <article key={_key} className={`card ${_class}`}>{children}</article>;
};

export default Card;

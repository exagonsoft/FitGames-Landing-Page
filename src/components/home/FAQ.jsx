import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = (props) => {
  const { _key, question, answer } = props;
  const [showingAnswer, setShowingAnswer] = useState(false);

  return (
    <article key={_key} className="faq" onClick={() => {setShowingAnswer(prev => !prev)}}>
      <div className="">
        <h4>{question}</h4>
        <button className="faq-icon">
          {showingAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showingAnswer ? <p>{answer}</p> : <></>}
    </article>
  );
};

export default FAQ;

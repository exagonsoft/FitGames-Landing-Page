import React from "react";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../../Data/data";
import SectionHeadder from "./SectionHeadder";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs-container">
        <SectionHeadder icon={<FaQuestion />} title="FAQs" />
        <div className="faqs-wrapper">
          {faqs.map((_faq) => {
            return (
              <div key={_faq.id}>
                <FAQ
                  _key={_faq.id}
                  question={_faq.question}
                  answer={_faq.answer}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../../Data/data";
import SectionHeadder from "./SectionHeadder";
import Card from "../../UI/Card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const {id, name, avatar, quote, job} = testimonials[currentIndex]

  const nxtTestimonial = () => {
    if(currentIndex < testimonials.length - 1){
        setCurrentIndex(prev => prev + 1);
    }else{
        setCurrentIndex(0);
    }
  }

  const prevTestimonial = () => {
    if(currentIndex > 0){
        setCurrentIndex(prev => prev - 1);
    }else{
        setCurrentIndex(testimonials.length - 1)
    }
  }


  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <SectionHeadder icon={<ImQuotesLeft />} title="Testimonials" _class="testimonials-head"/>
        <Card _class="testimonial" >
            <div className="testimonial-avatar">
                <img src={avatar} alt={name} />
            </div>
            <p className="testimonial-quote">
                {`"${quote}"`}
            </p>
            <h5>{name}</h5>
            <small className="testimonial-job-title">{job}</small>
        </Card>
        <div className="testimonials-btn-container">
            <button className="testimonial-btn" onClick={prevTestimonial}>{<IoIosArrowDropleftCircle />}</button>
            <button className="testimonial-btn" onClick={nxtTestimonial}>{<IoIosArrowDroprightCircle />}</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react'
import { FaCrown } from "react-icons/fa";
import { GetText } from '../../Languages/lang';

const Programs = () => {
  return (
   <section className="programs">
    <div className="container programs-container">
        <div className="programs-head">
            <span>{<FaCrown />}</span>
            <h2>{GetText('programs_tittle')}</h2>
        </div>
    </div>
   </section>
  )
}

export default Programs
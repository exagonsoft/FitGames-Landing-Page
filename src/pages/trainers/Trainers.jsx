import React from 'react'
import "./trainers.css"
import HeaderImage from "../../Assets/images/header_bg_5.jpg"
import Header from '../../components/Shared/Header'
import TrainersSection from '../../components/Trainers/TrainersSection'

const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum laudantium odit ducimus minus exercitationem.
      </p>
    </Header>
    <TrainersSection />
    </>
  )
}

export default Trainers
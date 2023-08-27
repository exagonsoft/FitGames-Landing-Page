import React from 'react'
import "./error.css"
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="container error-container">
        <h2>Page Not Found</h2>
        <Link to="/#" className="btn">Back To Home</Link>
      </div>
    </section>
  )
}

export default ErrorPage
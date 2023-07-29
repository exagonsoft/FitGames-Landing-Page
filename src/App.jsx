import React, { Component } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Galery from "./pages/gallery/Galery";
import Trainers from "./pages/trainers/Trainers";
import Plans from "./pages/plans/Plans";
import Contacts from "./pages/contacts/Contacts";
import ErrorPage from "./pages/error/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Home />
          <About />
          <Galery />
          <Trainers />
          <Plans />
          <Contacts />
          <ErrorPage />
        </BrowserRouter>
      </>
    );
  }
}

export default App;

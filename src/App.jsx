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
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="gallery" element={<Galery />} />
            <Route path="plans" element={<Plans />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;

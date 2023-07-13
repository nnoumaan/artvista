import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigations from "./components/Navigations.jsx";
import "./style/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Artists from "./components/Artists.jsx";
import ArtistsTemplate from "./components/ArtistsTemplate.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
  return (
    <Router>
      <Navigations />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artists/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/artist/:id" element={<ArtistsTemplate/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

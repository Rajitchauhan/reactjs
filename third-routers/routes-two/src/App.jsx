import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome react-route-dom two</h1>
      {/* <Home />
      <About />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

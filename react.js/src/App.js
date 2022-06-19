// Utilities
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Surveys from "./components/Surveys";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surveys" element={<Surveys />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

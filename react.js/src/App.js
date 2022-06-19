// Utilities
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Surveys from "./components/Surveys";
import Footer from "./components/Footer";
import AddSurvey from "./components/AddSurvey";
import Login from "./components/Login";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/addSurvey" element={<AddSurvey />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

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
import SignUp from "./components/SignUp";
import AnswerSurvey from "./components/AnswerSurvey";
import Answers from "./components/Answers";
import "./App.css";

function App() {
  const [surveys, setSurveys] = useState("");
  const [token, setToken] = useState("");

  // Onload Get surveys and authenticate user
  useEffect(() => {
    const getSurveys = async () => {
      const res = await fetchSurveys();
      setSurveys(res);
      console.log(surveys);
    };
    getSurveys();
  }, []);

  // Api call to get all the surveys
  const fetchSurveys = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/surveys");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Api call to get all the surveys
  const authUser = async () => {
    const res = await fetch("http://localhost:8000/api/v1/user");
    const data = await res.json();
    return data;
  };

  return (
    <h2>Hello world</h2>
    // <>
    //   <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/surveys/*" element={<Surveys />} />
    //       <Route path="/addSurvey" element={<AddSurvey />} />
    //       <Route path="/AnswerSurvey/*" element={<AnswerSurvey />} />
    //       <Route path="/answers/*" element={<Answers />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<SignUp />} />
    //     </Routes>
    //     {/* <Footer /> */}
    //   </BrowserRouter>
    // </>
  );
}

export default App;

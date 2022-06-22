// Utilities
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

// Pages
import "./App.css";
import AddSurvey from "./Pages/AddSurvey";
import ViewSurveys from "./Pages/ViewSurveys";
import ViewSurvey from "./Pages/ViewSurvey";

function App() {
  const [surveys, setSurveys] = useState("");
  const [token, setToken] = useState("");

  // Onload Get surveys and authenticate user
  // useEffect(() => {
  //   const getSurveys = async () => {
  //     const res = await fetchSurveys();
  //     setSurveys(res.surveys);
  //     console.log(surveys);
  //   };
    // getSurveys();
    // authUser();
  // }, []);

  // // Api call to get all the surveys
  // const fetchSurveys = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8000/api/v1/surveys");
  //     const data = await res.json();
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Api call to get all the users
  // const authUser = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8000/api/v1/user");
  //     const data = await res.json();
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    // <h2>Hello world</h2>
    // <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addSurvey" element={<AddSurvey />} />
        <Route path="/viewSurveys" element={<ViewSurveys />} />
        <Route path="/viewSurvey/:id" element={<ViewSurvey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    // </>
  );
}

export default App;

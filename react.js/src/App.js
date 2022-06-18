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
  const [surveys, setSurveys] = useState("");

  // Function to fetch server data
  const fetchServerData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/surveys");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Hook to grab all data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchServerData();
      setSurveys(res);
      console.log(res);
    };
    fetchData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surveys" element={<Surveys />} />
          {/* {surveys ? JSON.stringify(surveys) : "Loading ..."} */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

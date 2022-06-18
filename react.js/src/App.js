import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

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
      <Navbar />
      {/* {surveys ? JSON.stringify(surveys) : "Loading ..."} */}

    </>
  );
}

export default App;

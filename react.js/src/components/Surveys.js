// Utilities
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";

const Surveys = () => {
  const [surveys, setSurveys] = useState("");
  const navigate = useNavigate();
  const hello = useParams();
  console.log(hello);
  // Function to fetch server data
  const fetchServerData = async (url) => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/surveys/",url);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Hook to grab all data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchServerData();
      setSurveys(res.surveys);
    };
    fetchData();
  }, []);

  return (
    <div className="surveys">
      <h2>
        Give your opinion regarding the planet's <span>FLAMING</span> topics !
      </h2>
      <div>
        {surveys
          ? surveys.map((survey) => (
              <div 
                key={survey.survey_name}
                onClick={()=> navigate(`/AnswerSurvey/${survey.survey_name}`)}
                className="survey">
                <h2>{survey.survey_name}</h2>
              </div>
            ))
          : console.log("hi")}
      </div>
    </div>
  );
};

export default Surveys;

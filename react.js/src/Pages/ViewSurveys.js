import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ViewSurvey = () => {
  const [surveys, setSurveys] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getSurveys = async () => {
      const res = await fetchSurveys();
      setSurveys(res.surveys);
    };
    getSurveys();
    setTimeout(() => {
      console.log(surveys);
    }, 2000);
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

  return (
    <div className={"surveys"}>
      <h1> Surveys </h1>
      {surveys.map((survey) => (
        <div
          className={"survey"}
          key={survey.id}
          onClick={() => navigate(`/viewSurvey/${survey.id}`)}
        >
          <h2>{survey.surveyTitle}</h2>
          <p>Number of questions{survey.questions.length}</p>
          {survey.questions.map((question) => (
            <div className="questions">
              <p key={question.id}>{question.label}</p>
              {question.choices.map((choice, index) => (
                <p key={index}>{choice.choice}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewSurvey;

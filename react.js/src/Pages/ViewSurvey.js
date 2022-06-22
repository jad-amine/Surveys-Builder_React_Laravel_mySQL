import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "../components/Question";

const ViewSurvey = () => {
  const [survey, setSurvey] = useState("");
  const [questions, setQuestions] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSurvey(id);
      setSurvey(res.survey);
      setQuestions(res.survey.questions);
    };
    fetchData();
  }, [id]);

  // Fetch data from the survey
  const getSurvey = async (id) => {
    const res = await fetch("http://localhost:8000/api/v1/surveys/" + id);
    const data = await res.json();
    return data;
  };
  return (
    <div className="survey">
      <h2>{survey.surveyTitle}</h2>
        {questions && questions.map((question)=>(
          <Question key={question.id} question={question}/>
        ))}
    </div>
  );
};

export default ViewSurvey;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";

const AnswerSurvey = () => {
  const [surveys, setSurveys] = useState([]);
  const [response, setResponse] = useState([]);
  let url = useParams();
  url = url["*"];

  // Function to fetch server data
  const fetchServerData = async (url) => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/surveys/${url}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Hook to grab all data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchServerData(url);
      setSurveys(res.surveys);
    };
    fetchData();
  }, []);

  return (
    <div className="user-answer">
      <h1>{url}</h1>
      {/* {surveys.map((question) => (
        <div key={question.id}>
          <h2>{question.content}</h2>
          <h4>{question.type}</h4>
        </div>
      ))} */}
      <form>
        {surveys.map((question) => (
          <Question question={question} response={response} setResponse={setResponse} />
        ))}
        {/* {JSON.stringify(surveys)} */}
      </form>
    </div>
  );
};

export default AnswerSurvey;

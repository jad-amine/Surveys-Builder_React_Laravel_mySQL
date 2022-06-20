import { useEffect, useState } from "react";

const Answers = () => {
  const [surveys, setSurveys] = useState("");
  const [answers, setAnswers] = useState("");

  // Function to fetch server data
  const fetchServerData = async (url) => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/surveys/", url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //Get specific answers
  const getData = async (url) => {
    const res = await fetch(
      `http://localhost:8000/api/v1/surveyAnswers/${url}`,
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    setAnswers(data.questions);
    console.log(answers);
    console.log(surveys)
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
      <h2>Check Surveys Answers !</h2>
      <div>
        {surveys ? (
          surveys.map((survey) => (
            <div
              key={survey.survey_name}
              onClick={() => getData(survey.survey_name)}
              className="survey"
            >
              <h2>{survey.survey_name}</h2>
            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
        {answers
          ? answers.map((answer) => (
              <div key={answer.id}>
                <h3>{answer.content}</h3>
                {answer.answers.map((e)=>(
                  <h2>{e.answer}</h2>
                ))}
              </div>
            ))
          : "Loading..."}
    </div>
  );
};

export default Answers;

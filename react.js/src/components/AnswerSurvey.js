import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";

const AnswerSurvey = () => {
  const [surveys, setSurveys] = useState([]);
  const [response, setResponse] = useState([]);
  let url = useParams();
  url = url["*"];
  let counter = 1;

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

  // Function to send response
  const sendData = async (data) => {
    let packet = new FormData();
    packet.append("response", data);
    try {
      const res = await fetch("http://localhost:8000/api/v1/answer", {
        method: "POST",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: packet,
      });
      const res1 = await res.json();
      console.log(res1);
      return res1;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(response);
    console.log("hi");
    sendData(JSON.stringify(response));
  };

  return (
    <div className="user-answer">
      <h1>{url}</h1>
      <hr />
      {/* {surveys.map((question) => (
        <div key={question.id}>
          <h2>{question.content}</h2>
          <h4>{question.type}</h4>
        </div>
      ))} */}
      <form onSubmit={handleSubmit}>
        <ul>
          {surveys.map((question) => (
            <li>
              <Question
                question={question}
                response={response}
                setResponse={setResponse}
                counter={counter++}
              />
            </li>
          ))}
        </ul>
        {/* {JSON.stringify(surveys)} */}
        <input id="answer_survey" type="submit" />
      </form>
    </div>
  );
};

export default AnswerSurvey;

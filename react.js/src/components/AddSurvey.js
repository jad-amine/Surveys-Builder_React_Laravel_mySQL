import { useState } from "react";
// import Question from "./Question";

const AddSurvey = () => {
  const [added, setAdded] = useState("");
  const [name, setName] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [questionType, setQuestionType] = useState("text");
  const [questionPossibleAnswers, setQuestionPossibleAnswers] = useState("");
  const [surveyQuestions, setSurveyQuestions] = useState("");
  let counter = 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("survey_name", name);
    data.append("content", questionContent);
    data.append("possible_answers", questionPossibleAnswers);
    data.append("type", questionType);
    addQuestion(data);

    // console.log(name, questionContent, questionType, questionPossibleAnswers);
    setQuestionContent("");
    setAdded(true);
    setTimeout(() => {
      getSurvey(name);
      setAdded(false);
    }, 2000);
    setQuestionPossibleAnswers("");
  };

  // Adding question
  const addQuestion = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/survey", {
        method: "POST",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: data,
      });
      const res1 = await res.json();
      console.log(res1);
      // setTasks([...tasks, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const getSurvey = async (survey_name) => {
    try {
      const res = await fetch(
        "http://localhost:8000/api/v1/surveys/" + survey_name
      );
      const data = await res.json();
      console.log(data.surveys);
      setSurveyQuestions(data.surveys);
    } catch (err) {
      console.log("error fetching survey");
    }
  };

  return (
    <div className="survey-page">
      <h1>Add Survey</h1>
      <form className="survey-form" onSubmit={handleSubmit}>
        {/* <label>Survey Name:</label> */}
        <h1>Survey Name</h1>
        <input
          type="text"
          placeholder={"Name"}
          required
          onChange={(e) => {
            setName(e.target.value);
            getSurvey(e.target.value);
          }}
          value={name}
        />
        <hr />
        <h2>Question</h2>
        Question Name
        <input
          type={"text"}
          required
          value={questionContent}
          placeholder={"Question Content"}
          onChange={(e) => {
            setQuestionContent(e.target.value);
          }}
        />
        Question Type
        {/* Question Type */}
        <select
          onChange={(e) => setQuestionType(e.target.value)}
          value={questionType}
          required
          selected="text"
        >
          <option value="text">Text</option>
          <option value="checkbox">Checkbox</option>
          <option value="number">Number</option>
          <option value="select">Drop-down</option>
        </select>
        Possible Answers
        {/* Question Content */}
        <input
          type={"text"}
          value={questionPossibleAnswers}
          placeholder={"Question Answers"}
          onChange={(e) => {
            setQuestionPossibleAnswers(e.target.value);
          }}
        />
        <input id="add_question" type="submit" value={"Add Question"} />
        {added && <p id="message">Question added</p>}
      </form>
      {surveyQuestions
        ? surveyQuestions.map((question) => (
            <div className="added-questions" key={counter}>
              <h2>Question {counter++}</h2>
              <p>Content: {question.content}</p>
              <p>Type: {question.type}</p>
              <p>Possible answers: {question.possible_answers}</p>
            </div>
          ))
        : console.log("hi")}
    </div>
  );
};

export default AddSurvey;

import { useState } from "react";
// import Question from "./Question";

const AddSurvey = () => {
  const [added, setAdded] = useState("");
  const [name, setName] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [questionType, setQuestionType] = useState("text");
  const [questionPossibleAnswers, setQuestionPossibleAnswers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, questionContent, questionType, questionPossibleAnswers);
    setQuestionContent("");
    setAdded(true);
    setTimeout(() => {
      setAdded(false)
    }, 3000);
    setQuestionType("");
    setQuestionPossibleAnswers("");
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
          onChange={(e) => setName(e.target.value)}
          value={name}
        /> 
        <hr />
        <h1>Question</h1>
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
        <input type="submit" value={"Add Question"} />
        {added && <p>Question added</p>}
      </form>
    </div>
  );
};

export default AddSurvey;

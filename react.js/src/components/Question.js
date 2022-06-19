import { useState } from "react";

const Question = () => {
  const [questionContent, setQuestionContent] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [questionPossibleAnswers, setQuestionPossibleAnswers] = useState("");

  return (
    <div className="add-question">
      {/* Question Content */}
      <input
        type={"text"}
        required
        value={questionContent}
        placeholder={"Question Content"}
        onChange={(e) => {
          setQuestionContent(e.target.value);
        }}
      />

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

      {/* Question Content */}
      <input
        type={"text"}
        value={questionPossibleAnswers}
        placeholder={"Question Answers"}
        onChange={(e) => {
          setQuestionPossibleAnswers(e.target.value);
        }}
      />
    </div>
  );
};

export default Question;

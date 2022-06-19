import { useState } from "react";
import Question from "./Question";

const AddSurvey = () => {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const [length, setLength] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, topic, author);
    setName("");
    setTopic("");
    setAuthor("");
  };
  
  return (
    <div className="survey-page">
      <h1>Add Survey</h1>
      <form className="survey-form" onSubmit={onSubmit}>
        {/* <label>Survey Name:</label> */}
        <input
          type="text"
          placeholder={"Name"}
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {/* <label>Topic:</label> */}
        <input
          type="text"
          required
          placeholder={"Topic"}
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
        />
        {/* <label>Author:</label> */}
        <input
          type="text"
          required
          placeholder={"Author"}
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <input
          type="number"
          placeholder="Number of Questions"
          min={1}
          required
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </form>
      <div className="question">
        {length > 0 ? <Question nbr={length}/> : <h1>Nbr of question ?</h1>}
      </div>
    </div>
  );
};

export default AddSurvey;

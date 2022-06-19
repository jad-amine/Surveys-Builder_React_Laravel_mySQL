import { useState } from "react";

const AddSurvey = () => {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  // const [name, setName] = useState("");

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
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {/* <label>Topic:</label> */}
        <input
          type="text"
          placeholder={"Topic"}
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
        />
        {/* <label>Author:</label> */}
        <input
          type="text"
          placeholder={"Author"}
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <input type={"submit"} value={"Add Survey"} />
      </form>
    </div>
  );
};

export default AddSurvey;

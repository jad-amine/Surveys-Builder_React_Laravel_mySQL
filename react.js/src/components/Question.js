const Question = ({ question }) => {
  console.log(question);
  if (question.type === "textBox") {
    return (
      <div className="question">
        <hr />
        <h2>{question.label}</h2>
        <input type="text" />
      </div>
    );
  };

  if(question.type === "checkBox"){
    return (
      
    )
  }
};

export default Question;

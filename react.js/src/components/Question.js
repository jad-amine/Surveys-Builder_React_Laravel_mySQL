const Question = ({ question, response, setResponse }) => {
  let counter = 0;
  return (
    <>
      <h2>{question.content}</h2>
      {question.type == 'text' ? <input 
      key={question.id} 
      type={"text"}
      value={question}
      onChange={(e)=> }
      ></input> : ""}
      {question.type == 'checkbox' ?  <input key={question.id} type={"checkbox"}></input> : ""}
      {false ? 'hell': ''}
      {/* <h2>Question component</h2> */}
    </>
  );
};

export default Question;
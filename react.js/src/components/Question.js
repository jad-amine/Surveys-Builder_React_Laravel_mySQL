const Question = ({ question, response, setResponse, counter }) => {
  return (
    <>
      <h2>Question {counter}</h2>
      <h3>{question.content}</h3>
      {question.type == "text" ? (
        <input
          key={question.id}
          type={"text"}
          // value={response[counter]}
          onChange={(e) => {
            let new_response = response;
            new_response[counter-1] = {content: e.target.value ,survey_name : question.survey_name, question_id: question.id};
            setResponse(new_response);
          }}
        ></input>
      ) : (
        ""
      )}
      {question.type == "checkbox" ? (
        <input key={question.id} type={"checkbox"}></input>
      ) : (
        ""
      )}
      {false ? "hell" : ""}
      {/* <h2>Question component</h2> */}
    </>
  );
};

export default Question;

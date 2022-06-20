const Question = ({ question, response, setResponse, counter }) => {
  return (
    <>
      <h1>Question {counter+1}</h1>
      <h2>{question.content}</h2>
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

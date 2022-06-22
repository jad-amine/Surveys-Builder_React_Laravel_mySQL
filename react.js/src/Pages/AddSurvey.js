import { useState } from "react";

const AddSurvey = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      label: "",
      type: "textBox",
      choices: [],
      currentChoice: "",
    },
  ]); 

  //Add a new question field
  const addFields = (e) => {
    e.preventDefault();
    let newField = {
      label: "",
      type: "textBox",
      choices: [],
      currentChoice: "",
    };
    setInputFields([...inputFields, newField]);
  };

  // Dynamically change and save Admin inputs
  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  // Add Choices to dropdown and radio questions
  const handelChoiceAdd = (index, newChoice) => {
    const data = [...inputFields];
    data[index].choices.push(newChoice);
    setInputFields(data);
  };

  // Send data to the backend
  const handelSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/v1/addSurvey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ surveyTitle: surveyTitle }),
    });
    const data = await res.json();
    console.log(data);
    const ID = data.survey.id;
    inputFields.forEach(async (inputField) => {
      const res2 = await fetch("http://localhost:8000/api/v1/addQuestion", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          label: inputField.label,
          type: inputField.type,
          survey_id: ID,
        }),
      });
      const data2 = await res2.json();
      console.log(data2)
      const question_id = data2.question.id;
      inputField.choices.forEach(async (choice) => {
        const res3 = await fetch("http://localhost:8000/api/v1/addChoice", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            'Authorization': "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            question_id: question_id,
            choice: choice,
          }),
        });
        const data3 = await res3.json();
        console.log(data3);
      });
    });
  };

  const types = ["checkBox", "dropDown", "textBox", "radio"];

  return (
    <form onSubmit={handelSubmit} className={"add-survey"}>
      <fieldset>
        <h2>Survey Title</h2>
        <input
          type="text"
          value={surveyTitle}
          onChange={(e) => setSurveyTitle(e.target.value)}
        />
        {inputFields.map((input, index) => (
          <div key={index}>
            {/* Question Label */}
            <label>
              {'Question label:  '}
              <input
                type="text"
                name="label"
                value={input.label}
                onChange={(e) => handleFormChange(index, e)}
              />
            </label>
            {/* Question Type */}
            <label>
              {'Question type:  '}
              <select
                value={input.type}
                name="type"
                onChange={(e) => handleFormChange(index, e)}
              >
                {types.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </label>
            <hr />
            {/* Question Choices */}
            {(input.type === "dropDown" || input.type === "radio") && (
              <div>
                <p>Choices:</p>
                <input
                  type={"text"}
                  name={"currentChoice"}
                  onChange={(e) => handleFormChange(index, e)}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    handelChoiceAdd(index, input.currentChoice);
                  }}
                >
                  Add Choice
                </button>
                {input.choices.map((choice) => {
                  return <div>{choice}</div>;
                })}
                <hr />
              </div>
            )}
          </div>
        ))}
        <button className="add-more-questions" type="button" onClick={addFields}>
          Add Question
        </button>
        <button id="green" type="submit"> Add Survey</button>
      </fieldset>
    </form>
  );
};

export default AddSurvey;

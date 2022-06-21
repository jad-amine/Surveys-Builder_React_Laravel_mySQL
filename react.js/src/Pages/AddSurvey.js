import { useState } from "react";

const AddSurvey = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [inputFields, setInputFields] = useState([
    {
      label: "",
      type: "textbox",
      choices: [],
      currentChoice: "",
    },
  ]);

  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const types = ["dropDown", "checkBox", "textBox", "radio"];
  return (
    <form>
      <h2>Survey Title</h2>
      <input
        type="text"
        value={surveyTitle}
        onChange={(e) => setSurveyTitle(e.target.value)}
      />
      {inputFields.map((input, index) => (
        <div>
          {/* Question Label */}
          <label>
            Question label
            <input
              type="text"
              name="label"
              value={input.label}
              onChange={(e) => handleFormChange(index, e)}
            />
          </label>
          {/* Question Type */}
          <label>
            Question type
            <select
              value={input.type}
              name="type"
              onChange={(e) => handleFormChange(index, e)}
            >
              {types.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </label>
          {/* Question Choices */}
          {(input.type === "dropDown" || input.type === "radio") && (
            <div>
            <p>Choices:</p>
              <input type="text" value={input.currentChoice}/>
            </div>
          )}
        </div>
      ))}
    </form>
  );
};

export default AddSurvey;

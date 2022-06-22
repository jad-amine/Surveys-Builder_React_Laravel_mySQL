import CheckBox from "./CheckBox";
import DropDown from "./DropDown";
import Radio from "./Radio";

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
  }

  if (question.type === "checkBox") {
    return (
      <>
        <h3>{question.label}</h3>
        <CheckBox question={question.choices} />
      </>
    );
  }

  if (question.type === "dropDown") {
    return (
      <>
        <h3>{question.label}</h3>
        <DropDown choices={question.choices} />
      </>
    );
  }

  if (question.type === "radio") {
    return (
      <>
        <h3>{question.label}</h3>
        <Radio choices={question.choices}/>
      </>
    );
  }
};

export default Question;

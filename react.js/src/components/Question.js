// import { useState } from "react";

// const Question = ({questions, setQuestions}) => {
//   // const [questionContent, setQuestionContent] = useState("");
//   // const [questionType, setQuestionType] = useState("");
//   // const [questionPossibleAnswers, setQuestionPossibleAnswers] = useState("");

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//     // let question = [{questionContent: questionContent, questionType: questionType, questionPossibleAnswers:questionPossibleAnswers}];
//     // setQuestions([...questions, question]);
//   //   console.log('hi')
//   // }

//   return (
//     <div className="add-question">
//       {/* Question Content */}
//       {/* <form onSubmit={handleSubmit}> */}
//       <input
//         type={"text"}
//         required
//         value={questionContent}
//         placeholder={"Question Content"}
//         onChange={(e) => {
//           setQuestionContent(e.target.value);
//         }}
//       />

//       {/* Question Type */}
//       <select
//         onChange={(e) => setQuestionType(e.target.value)}
//         value={questionType}
//         required
//       >
//         <option value="text">Text</option>
//         <option value="checkbox">Checkbox</option>
//         <option value="number">Number</option>
//         <option value="select">Drop-down</option>
//       </select>

//       {/* Question Content */}
//       <input
//         type={"text"}
//         value={questionPossibleAnswers}
//         placeholder={"Question Answers"}
//         onChange={(e) => {
//           setQuestionPossibleAnswers(e.target.value);
//         }}
//       />
//       {/* <input type="submit" value={"Save"}/>
//       </form> */}
//     </div>
//   );
// };

// export default Question;

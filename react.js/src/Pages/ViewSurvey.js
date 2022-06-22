import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ViewSurvey = () => {
  const [survey, setSurvey] = useState("");
  const { id } = useParams();

  const getSurvey = async (id) => {
    const res = await fetch('http://localhost:8000/api/v1/surveys');
  }
  return (
    <div className="survey">
      <h2>survey</h2>
      {String(id)}
    </div>
  );
};

export default ViewSurvey;

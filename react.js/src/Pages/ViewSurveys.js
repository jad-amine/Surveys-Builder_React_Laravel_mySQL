import { useEffect, useState } from "react";

const ViewSurvey = () => {
  const [surveys, setSurveys] = useState([]);

  // useEffect(() => {
  //   const getSurveys = async () => {
  //     const res = await fetchSurveys();
  //     setSurveys(res.surveys);
  //     console.log(surveys);
  //   };
    // getSurveys();
  // }, []);

   // Api call to get all the surveys
  const fetchSurveys = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/surveys");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return ( 
    <h2>surveys</h2>
  );
}

export default ViewSurvey;
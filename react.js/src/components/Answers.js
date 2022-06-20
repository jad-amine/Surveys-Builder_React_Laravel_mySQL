// Utilities
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

const Answers = () => {
  const [surveys, setSurveys] = useState("");
  const [users, setUsers] = useState("");
  const navigate = useNavigate();
  const hello = useParams();

  // Function to fetch server data
  const fetchServerData = async (url) => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/surveys/", url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Function to fetch users data
  const fetchUsersData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/users/", {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // Hook to grab all data
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetchUsersData();
      setUsers(res.users);
    };
    fetchUsers();
    const fetchData = async () => {
      const res = await fetchServerData();
      setSurveys(res.surveys);
    };
    fetchData();
  }, []);

  return (
    <div className="surveys">
      <h2>Check users answers!</h2>
      <div>
        {surveys ? (
          surveys.map((survey) => (
            <div
              key={survey.survey_name}
              onClick={() => navigate(`/AnswerSurvey/${survey.survey_name}`)}
              className="survey"
            >
              <h2>{survey.survey_name}</h2>
            </div>
          ))
        ) : (
          <h2>Loading..</h2>
        )}
      </div>
      <hr />
      <h2>Users</h2>
      {users ? (
        users.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/AnswerSurvey/${user.id}`)}
            className="user"
          >
            <h2>{user.name}</h2>
          </div>
        ))
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
};

export default Answers;
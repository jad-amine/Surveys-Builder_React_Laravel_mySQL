import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    let info = new FormData();
    info.append("email", email);
    info.append("password", password);
    try  {
    const res = await fetch("http://localhost:8000/api/v1/login", {
      method: "POST",
      body: info,
    });
    const data = await res.json();
    localStorage.setItem('token',data.authorisation.token);
    localStorage.setItem('name',data.user.name)
    navigate('/')
  } catch (err) {
    alert('Wrong Username or Password');
  }
}

  return (
    <div className="login-page">
      <form onSubmit={login}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;

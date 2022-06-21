import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    try{
      const res = await fetch("http://localhost:8000/api/v1/register", {
        method: "POST",
        body: data,
      });
      const response = await res.json();
      console.log(response);
    } catch(err) {console.log('err')};
  };

  return (
    <div className="signup">
      <form onSubmit={signup}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
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

export default SignUp;

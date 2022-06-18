import { FaUser } from "react-icons/fa";
import Vector from "../assets/Vector.png";

const Navbar = (props) => {
  return (
    <div className="container">
      <div>
        <img src={Vector} alt="" />
        <span id="logo">SURVEYS BUILDER</span>
      </div>
      <ul>
        <li>Surveys</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>FAQs</li>
      </ul>
      <ul>
        <li onClick={() => console.log("signin")}>
          <FaUser />
          <span id="signin">Login</span>
        </li>
        <li id="signup" onClick={() => console.log("signup")}>
          Signup
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

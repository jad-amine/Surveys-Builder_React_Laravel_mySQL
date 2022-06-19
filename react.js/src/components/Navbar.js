import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Pages
import Vector from "../assets/Vector.png";

const Navbar = ({user}) => {
  // Used to direct user to pages
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <div>
        <img src={Vector} alt="" />
        <span id="logo" onClick={() => navigate('/')}>SURVEYS BUILDER</span>
      </div>
      <ul>
        <li onClick={() => navigate('/surveys')}>Surveys</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li onClick={() => navigate('/addSurvey')}>Add Survey</li>
      </ul>
      <ul>
        <li onClick={() => navigate('/login')}>
          <FaUser />
          <span id="signin" >Login</span>
        </li>
        <li onClick={() => navigate('/signup')}>
          <button id="signup" >Signup</button> 
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

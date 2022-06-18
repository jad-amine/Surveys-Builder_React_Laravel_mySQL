
const Navbar = (props) => {
  return ( 
    <div className="container">
      <p>SURVEYS BUILDER</p>
      <ul>
        <li>Surveys</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>FAQs</li>
      </ul>
      <ul>
        <li id="signin" onClick={() => console.log('signin')}><i class="fa-solid fa-user"></i>Login</li>
        <li id="signup" onClick={() => console.log('signup')}>Signup</li>
      </ul>
    </div>
  );
}

export default Navbar;
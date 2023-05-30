import images from "../../../../assets/images/svg/login.svg";
import "../styles/login.css";
import image2 from "../../../../assets/images/svg/forgotPassword.svg";
import { LoginButton, TestInput } from "../styles/authentication.styled";

function Login() {
  return (
    <div className="page1">
      <div className="p1-left-side">
        <img src={images} alt="login" className="p1-img1" />
        
      </div>
      <div className="p1-right-side">
        <p className="welcome">Welcome Back</p> 
        <p className="log">Log in to your Dashboard</p>
        <TestInput placeholder="Email"/>
        <TestInput placeholder="Password"/>
        <TestInput placeholder="FirstName"/>
        <TestInput placeholder="LastName"/>
        <TestInput placeholder="Email"/>
        <TestInput placeholder="Password"/>

        <div className="p1-right-side-div1">
          <div className="remember-div">
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>
          <div className="forgot-div">
            <img src={image2} alt="logo" className="p1-img2" />
            <p>Forgot Password</p>
          </div>
        </div>
        <LoginButton type="button" value="Login"/>
        <div className="p1-right-side-div2">

          <p className="dont"> Dont have an account? </p>
          <a href="/signup" className="p1-a1">Sign Up</a>
        
        </div>
      </div>
    </div>
  );
}
export default Login;

import images from "../../../../assets/images/svg/signUp.svg";
import { LoginButton, TestInput } from "../styles/authentication.styled";
import "../styles/signup.css";

function SignUp(){
    return(
        <div className="page2">
<div className="p2-left-side">
    <img src = {images} alt= "signup" className="p2-img2" />
</div>
<div className="p2-right-side">
<p className="welcome2">Welcome!</p>
<p className="signupby">Sign up by entering the information below</p>
<TestInput type="input" value="FirstName:" />
<TestInput type="input" value="LastName:"/>
<TestInput type="input" value="Email:"/>
<TestInput type="input" value="Password:"/>
<div className="p1-right-side-div2">
<p className="dont"> Already have an Account </p>
<a href="/login" className="p1-a1">Login</a>
</div>
<LoginButton type="button" value="Sign Up"/>
</div>
        </div>
    );
}
export default SignUp;
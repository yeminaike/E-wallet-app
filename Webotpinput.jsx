import { useNavigate } from "react-router-dom";
import images from "../../../../assets/images/svg/signUp.svg"
import { LoginButton } from "../styles/authentication.styled";
import "../styles/webotpinput.css";



function WebOTPInput(){
    const navigate = useNavigate()
    return(
<div className="page4">
    <div className="left-side-OTP">  
    <img src={images} alt="wotp" className="WebOTP"/>
    </div>

<div className="right-side-OTP">
    <p className="OTP-number">Enter your OTP number</p>

    <div className="boxes">
        <input type="text" placeholder="-" className="four-boxes"/>
        <input type="text" placeholder="-" className="four-boxes"/>
        <input type="text" placeholder="-" className="four-boxes"/>
        <input type="text" placeholder="-" className="four-boxes"/>
    </div>

 <input type="button4"onClick={()=>navigate("/webverify")} value="Continue" className="continue-button"/> 
</div>

</div>

    )
};
export default WebOTPInput;
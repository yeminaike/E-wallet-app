import images from "../../../../assets/images/svg/webcompletewebpage.svg"
import { LoginButton2, TestInput, TestInput2 } from "../styles/authentication.styled";
import "../styles/webcompleteregpage.css";


function WebCompleteRegPage(){
    return(

        

        
<div className="page7">
    <div className="left-side-WebComplete">
        <img src= {images} alt="LSWCWP" className="WebCompleteregPage"/>
    </div>
    <div className="right-side-webcompelete">
      <div className="right-side-webcompeleteone">
        <div className="oneofthree">
    <LoginButton2 type="button5" value="1 of 3" className="tiny-button"/>
        </div >
        <div className="completeregone">
    <p className="CompleteReg">Kindly Complete Your Registration</p><br/>
        </div>
        </div>  
        <hr />
        <div className="KYC">
            <h1 className="kyc">KYC</h1>
        </div>
        <div className="formofidentification">
<p className="identificationform">Select a Form of Identification</p>
<input type="input" placeholder="NIN:" className="TextInput2" />
<input type="input" placeholder="Home Address:" className="TextInput2"/>
<hr className="hr2"/>

</div>
<div className="KYC">
    <h1 className="kyc">Add Cards</h1>
</div>
<div className="Card-info">
    <input type="text" placeholder="Card Name" className="Card-details"/>
        <input type="text" placeholder="Card Number" className="Card-details"/>
        <input type="text" placeholder="Exp.Date                                                                   mm/yr" className="Card-details"/>
        <input type="text" placeholder="CVV" className="Card-details"/>
        <a href="/SignUp" className="Next">Next</a>
    </div>
 </div>
</div>
    )
};
export default WebCompleteRegPage;
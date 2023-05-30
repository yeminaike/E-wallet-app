import images from "../../../../assets/images/svg/webforegetpasswordpage.svg"
import imagesPasswordChain3 from "../../../../assets/images/svg/ResetPasswordChain2.svg"
import"../styles/WebOTP3.css"


function WebOTP3() {
    return ( 
<div className="page12">

<img src={images} alt="webotp3" className='Webotp3' />

<div className='rightsidepasswordchainimageTwo'>
    <img src={imagesPasswordChain3} alt= "passwordChain" className='PasswordChainThree' />

    <p className="OTP-number2">Enter your OTP number</p>

    <div className='boxestwo'>
    <input type="text" placeholder="O" id = "circle" className="four-boxestwo"/>
        <input type="text" placeholder="O" className="four-boxestwo"/>
        <input type="text" placeholder="O" className="four-boxestwo"/>
        <input type="text" placeholder="O" className="four-boxestwo"/> 
    </div>

    <input type="button6" value="Continue" className='continue-button2' />
    <br/>
    <a href="/SignUp" className="Cancel1">
            Cancel
            </a>


</div>
</div>
     );
}

export default WebOTP3 ;
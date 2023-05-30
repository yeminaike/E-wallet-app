import React from 'react';
import images from "../../../../assets/images/svg/webforegetpasswordpage.svg"
import imagesPasswordChain2 from "../../../../assets/images/svg/ResetPasswordChain2.svg"
import "../styles/ForgetPasswordThree.css"



function ForgetPasswordThree(){

  return(
    <div className="page11">
 <img src={images} alt="webforgetpasswordpage" className='WebForgetPasswordthree' />

<div className='rightsidepasswordchainimage'>
    <img src={imagesPasswordChain2} alt= "passwordChain" className='PasswordChainTwo' />

    <p className="OTP-number1">Enter your OTP number</p>

    <div className='boxesone'>
    <input type="text" placeholder="-" className="four-boxesone"/>
        <input type="text" placeholder="-" className="four-boxesone"/>
        <input type="text" placeholder="-" className="four-boxesone"/>
        <input type="text" placeholder="-" className="four-boxesone"/> 
    </div>

    <input type="button5" value="Continue" className='continue-button1' />
    <br/>
    <a href="/SignUp" className="Cancel1">
            Cancel
            </a>


</div>
  </div>
)
};
export default ForgetPasswordThree;
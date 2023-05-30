import React from 'react';
import "../styles/WebForgetPasswordPage.css";
import imagesPasswordChain from "../../../../assets/images/svg/ResetPasswordChain.svg";
// import "@reach/dialog/styles.css";

function WebForgetPasswordPage() {
  const [showDialog, setShowDialog] = React.useState(false);

  // const close = () => setShowDialog(false);

  const open = () => {
    document.querySelector(".modalOverlay").style.display = "block";
  };
  const handleCloseEmailModal = () => {
    document.querySelector(".modalOverlay").style.display = "none";
  };

  return (
    <div className="page9">
      <div className="left-side-WebForgetPassword">
        {/* <img
          src={images}
          alt="webforgetpassword"
          className="WebForgetPassword"
        /> */}
      </div>
      <div>
        <div className="modalOverlay" onClick={handleCloseEmailModal}>
          <div className="modalWrapper">
            <div className="modalContent-card">
              <p>Check Your mail for your OTP number</p>
            </div>
          </div>
        </div>
        <div className="right-side-WebForgetPassword">
          <p className="ResetPassword">Reset Password</p>
          <img
            src={imagesPasswordChain}
            alt="linked resetPassword"
            className="PasswordChain"
          />
          <p className="EnterEmailAddressReset">
            Enter EmailAddress to reset Password
          </p>

          <input
            type="input"
            placeholder="EmailAddress:"
            className="TextInput3"
          />
          <input
            onClick={open}
            type="button"
            value="Next"
            className="next-button"
          />
          <a href="/SignUp" className="Cancel"> 
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
}
export default WebForgetPasswordPage;

import images from "../../../../assets/images/svg/webforegetpasswordpage.svg";
import imagesPasswordChain3a from "../../../../assets/images/svg/PasswordChain3.svg";
import imageseyeoff1 from "../../../../assets/images/svg/EyeOff1.svg";
import imagestick from "../../../../assets/images/svg/Mark.svg";
import "../styles/WebNewPasswordPage.css";
import React from "react";

function WebNewPassword() {
  const [showDialog, setShowDialog] = React.useState(false);
  // const close = () => setShowDialog(false);

  const open = () => {
    document.querySelector(".modalOverlay").style.display = "block";
  };

  const handleCloseEmailModal = () => {
    document.querySelector(".modalOverlay").style.display = "none";
  };

  return (
    <div className="page13">
      <img src={images} alt="newpassword" className="New-Password-Page" />

      <div className="rightsidepasswordchainimage">
        <img
          src={imagesPasswordChain3a}
          alt="passwordChain"
          className="PasswordChain3a"
        />

        <div className="modalOverlay" onClick={handleCloseEmailModal}>
          <div className="modalWrapper">
            <div className="modalContent-card">
              <p>Success</p>
              <img src={imagestick} alt="mark" className="mark" />
              <a href="#" className="CancelDashboard">
                Go to Dashboard
              </a>
            </div>
          </div>
        </div>
        <p className="NewPassword">Enter New Password</p>
        <div className="inputs1">
          <div className="inputs2">
            <div>
              <input
                type="input"
                placeholder="New Password"
                className="Passwordone"
              />
            </div>

            <div>
              <img
                src={imageseyeoff1}
                alt="eyeOfflogo"
                className="eyeoffpassword"
              />
            </div>
          </div>
          <div>
            <br />
            <br />
            <br />
            <input type="input" placeholder="Reset" className="Passwordone" />
          </div>
        </div>

        {/* <input
            onClick={open}
            type="button7"
            value="Reset"
            className="reset-button1"
          /> */}
      </div>
    </div>
  );
}

export default WebNewPassword;

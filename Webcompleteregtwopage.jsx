import images from "../../../../assets/images/svg/webcompletewebpage.svg";
import {
  LoginButton2,
  TestInput,
  TestInput2,
  LoginButton,
} from "../styles/authentication.styled";
import "../styles/webcompleteregtwopage.css";

function WebCompleteReg2Page() {
  return (
    <div className="page7">
      <div className="left-side-WebComplete">
        <img src={images} alt="LSWCWP" className="WebCompleteregPage" />
      </div>
      <div className="right-side-webcompelete">
        <div className="right-side-webcompeleteone">
          <div className="oneofthree">
            <LoginButton2
              type="button5"
              value="2 of 3"
              className="tiny-button"
            />
          </div>
          <div className="completeregone">
            <p className="CompleteReg">More Details About You</p>
            <br />
          </div>
        </div>
        <hr />
        <div className="KYC">
          <h1 className="kyc">Next of Kin</h1>
        </div>
        <div className="formofidentification">
          <input type="input" placeholder="Full Name:" className="TextInput2" />
          <input
            type="input"
            placeholder="Email Address:"
            className="TextInput2"
          />
          <input
            type="input"
            placeholder="Phone Number:"
            className="TextInput2"
          />
          <input
            type="input"
            placeholder="Realtionship:"
            className="TextInput2"
          />
          <hr className="hr2" />
        </div>
        <div className="KYC">
          <h1 className="kyc">BVN</h1>
        </div>
        <div className="Card-info">
          <input type="text" placeholder="BVN" className="Card-details" />
          <input type="button" value="Continue" className="continue-button" />

          <a href="/SignUp" className="Next">
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
export default WebCompleteReg2Page;

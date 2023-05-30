import React from "react";
import "../styles/CloseBalancePage.css";
import images from "../../../../assets/images/svg/decoration-left-curve.svg";
import images13 from "../../../../assets/images/svg/headface.svg";
import images14 from "../../../../assets/images/svg/notification.svg";
import images15 from "../../../../assets/images/svg/Card.svg";
import images16 from "../../../../assets/images/svg/spend.svg";
import images17 from "../../../../assets/images/svg/help.svg";
import images18 from "../../../../assets/images/svg/airtime.svg";
import images19 from "../../../../assets/images/svg/save.svg";
import images20 from "../../../../assets/images/svg/arrowright.svg";
import images21 from "../../../../assets/images/svg/eclipse.svg";
import images22 from "../../../../assets/images/svg/eyeicon.svg";
import images23 from "../../../../assets/images/svg/eclipse2.svg";
import images24 from "../../../../assets/images/svg/eclipse3.svg";
import images25 from "../../../../assets/images/svg/eclipse4.svg";
import images26 from "../../../../assets/images/svg/eyeoff2.svg";

function CloseBalancePage() {
  return (
    <div className="pg14">
      {/* <div>
        <img src={images} alt="decoration curve" className='decoration-left-curve' />
    </div> */}
      <div className="middle-card-dashboard2">
        <p className="Chibu">Hi Chibuzor,</p>
        <img src={images13} alt="head-face" className="head-face2" />

        <div className="balance_dashboard2">
          <div className="balance-top2">
            {" "}
            <p id="total-b-head2">Total Balance</p>
            <img src={images14} alt="notify dashoard" />
            
          </div>
          <div className="balance-bottom2">
            <p id="total-b-money2"><strong>* * * * *</strong></p>
            <img src={images26} alt="eyeofficon" />
           
          </div>
          {/* <img  src={images14} alt="notify" className='Notification'  />
        <img src={images22} alt="eye" className='one-eye'/>
          <p id='total-b'>Total Balance</p>
          <h3>#10,000</h3> */}

          {/* <img  src={images14} alt="notify" className='Notification' /> */}
        </div>

        <div className="ImagesStack">
          <img src={images15} alt="Card" />
          <img src={images16} alt="spend" />
          <img src={images17} alt="help" />
          <img src={images18} alt="airtime" />
          <img src={images19} alt="save" />
          <img src={images20} alt="arrowright" />
        </div>
        <div className="RecentTransactionDashboard">
          <p>
            <strong>Recent transactions</strong>
          </p>
          <div className="card-1a">
            <div className="payment_date2">
              <p>3-28-2022</p>
              <div className="recent_status_color2"></div>
            </div>
            <div className="payment_desc2">
              <strong>Water Payment</strong>
              <p>10:00 am</p>
            </div>
            <div className="payent_amount2">
              <p>-N1,000</p>
            </div>
          </div>

          <div className="card-2a">
            <div className="payment_date2">
              <p>3-28-2022</p>
              <div className="recent_status_color2"></div>
            </div>
            <div className="payment_desc2">
              {/* <p><strong>Airtime</strong></p> */}
              <strong>Airtime</strong>
              <p>10:00 am</p>
            </div>
            <div className="payent_amount2">
              <p>-N200</p>
            </div>
          </div>

          <div className="card-3a">
            <div className="payment_date3">
              <p>3-28-2022</p>
              <div className="recent_status_color3"></div>
            </div>
            <div className="payment_desc3">
              <strong>Pocket Moni</strong>
              <p>10:00 am</p>
            </div>
            <div className="payent_amount3">
              <p>-N5,000</p>
            </div>
          </div>

          <div className="card-4a">
            <div className="payment_date4">
              <p>3-28-2022</p>
              <div className="recent_status_color4"></div>
            </div>
            <div className="payment_desc4">
              <strong>Up-keep</strong>
              <p>10:00 am</p>
            </div>
            <div className="payent_amount2">
              <p>N5,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseBalancePage;

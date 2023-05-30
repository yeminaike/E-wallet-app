import React from "react";
import "../styles/webdashboardpage.css";
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

function Webdashboardpage() {
  return (
    <div className="pg13">
      {/* <div>
        <img src={images} alt="decoration curve" className='decoration-left-curve' />
    </div> */}
      <div className="middle-card-dashboard">
        <p className="Chi">Hi Chibuzor,</p>
        <img src={images13} alt="head-face" className="head-face" />

        <div className="balance_dashboard">
          <div className="balance-top">
            {" "}
            <p id="total-b-head">Total Balance</p>
            <img src={images14} alt="notify dashoard"/>
            {/* <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.31333 11.6559H4.23584V12.3766C4.23584 13.5706 5.14862 14.5385 6.27459 14.5385C7.40055 14.5385 8.31333 13.5706 8.31333 12.3766V11.6559Z"
                stroke="#726D6D"
                stroke-width="0.381074"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.3908 3.72885C12.3908 5.32086 11.1737 6.61144 9.67243 6.61144C8.17114 6.61144 6.9541 5.32086 6.9541 3.72885C6.9541 2.13683 8.17114 0.846252 9.67243 0.846252C11.1737 0.846252 12.3908 2.13683 12.3908 3.72885Z"
                fill="#F11305"
                fill-opacity="0.7"
              />
              <path
                d="M7.66554 1.78597C7.22555 1.64353 6.75849 1.56689 6.27455 1.56689C3.64728 1.56689 1.51747 3.82541 1.51747 6.61142V9.29396C1.51747 9.42209 1.46949 9.54489 1.38408 9.63548L1.03693 10.0036C0.909491 10.1388 0.837891 10.322 0.837891 10.5132V10.9353C0.837891 11.3333 1.14215 11.656 1.51747 11.656H11.0316C11.407 11.656 11.7112 11.3333 11.7112 10.9353V10.5132C11.7112 10.322 11.6396 10.1388 11.5122 10.0036L11.165 9.63548C11.0796 9.54489 11.0316 9.42209 11.0316 9.29396V6.61142C11.0316 6.48427 11.0272 6.35822 11.0182 6.23394"
                stroke="#726D6D"
                stroke-width="0.381074"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> */}
          </div>
          <div className="balance-bottom">
            <p id="total-b-money">#10,000</p>
            <img src={images22} alt="eyeicondashboard"/>
            {/* <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3476 6.16509C17.7582 6.70221 17.7582 7.42733 17.3476 7.9636C16.0541 9.65208 12.9509 13.1287 9.3279 13.1287C5.70489 13.1287 2.60168 9.65208 1.30825 7.9636C1.10845 7.70641 1 7.39001 1 7.06434C1 6.73867 1.10845 6.42227 1.30825 6.16509C2.60168 4.4766 5.70489 1 9.3279 1C12.9509 1 16.0541 4.4766 17.3476 6.16509V6.16509Z"
                stroke="#726D6D"
                stroke-opacity="0.5"
                stroke-width="1.0396"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.32801 9.6634C10.7634 9.6634 11.927 8.49979 11.927 7.0644C11.927 5.62901 10.7634 4.46539 9.32801 4.46539C7.89262 4.46539 6.729 5.62901 6.729 7.0644C6.729 8.49979 7.89262 9.6634 9.32801 9.6634Z"
                stroke="#726D6D"
                stroke-opacity="0.5"
                stroke-width="1.0396"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> */}
          </div>
          {/* <img  src={images14} alt="notify" className='Notification'  />
        <img src={images22} alt="eye" className='one-eye'/>
          <p id='total-b'>Total Balance</p>
          <h3>#10,000</h3> */}

          {/* <img  src={images14} alt="notify" className='Notification' /> */}
        </div>

        <div className="Images">
          <img src={images15} alt="Card" />
          <img src={images16} alt="spend" />
          <img src={images17} alt="help" />
          <img src={images18} alt="airtime" />
          <img src={images19} alt="save" />
          <img src={images20} alt="arrowright" />
        </div>
        <div className="RecentTransactionDash">
          <p>
            <strong>Recent transactions</strong>
          </p>
          <div className="card-1">
            <div className="payment_date">
              <p>3-28-2022</p>
              <div className="recent_status_color"></div>
            </div>
            <div className="payment_desc">
              <strong>Water Payment</strong>
              <p>10:00 am</p>
            </div>
            <div className="payent_amount">
              <p>-N1,000</p>
            </div>
          </div>

          <div className="card-2">
            <div className="payment_date">
              <p>3-28-2022</p>
              <div className="recent_status_color"></div>
            </div>
            <div className="payment_desc">
              {/* <p><strong>Airtime</strong></p> */}
              <strong>Airtime</strong><p>10:00 am</p>
            </div>
            <div className="payent_amount">
              <p>-N200</p>
            </div>
          </div>

          <div className="card-3">
            <div className="payment_date">
              <p>3-28-2022</p>
              <div className="recent_status_color"></div>
            </div>
            <div className="payment_desc">
              <strong>Pocket Moni</strong>
              <p>10:00 am</p>
            </div>
            <div className="payent_amount">
              <p>-N5,000</p>
            </div>
          </div>

          <div className="card-4">
            <div className="payment_date">
              <p>3-28-2022</p>
              <div className="recent_status_color"></div>
            </div>
            <div className="payment_desc">
              <strong>Up-keep</strong>
              <p>10:00 am</p>
            </div>
            <div className="payent_amount">
              <p>N5,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webdashboardpage;

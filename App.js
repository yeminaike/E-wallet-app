import logo from './logo.svg';
import './App.css';
import Login from './containers/pages/auth/components/Login';
import SignUp from './containers/pages/auth/components/Signup';
import WebVerify from './containers/pages/auth/components/Webverifyacctpage';
import WebOTPInput from './containers/pages/auth/components/Webotpinput';
import WebCompleteRegPage from './containers/pages/auth/components/Webcompleteregpage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SplashScreen from './containers/pages/auth/components/SplashScreen';
import WebIdentifier from './containers/pages/auth/components/Webidentifier';
import WebCompleteReg2Page from './containers/pages/auth/components/Webcompleteregtwopage';
import WebForgetPasswordPage from './containers/pages/auth/components/WebForgetPasswordPage';
import ForgetPasswordThree from './containers/pages/auth/components/ForgetPasswordThree';
import WebOTP3 from './containers/pages/auth/components/WebOTP3';
import WebNewPassword from './containers/pages/auth/components/WebNewPasswordPage';
import Webdashboardpage from './containers/pages/auth/components/webdashboardpage';
import CloseBalancePage from './containers/pages/auth/components/CloseBalance';
import NotifierBellPage from './containers/pages/auth/components/NotifierBellPage';
import CardScreens from './containers/pages/auth/components/CardScreens';

function App() {
  return (
    <div className='App'>

      <Router>

<Routes>
<Route path='signup' element={<SignUp/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/webverify'element={<WebVerify/>}/>
<Route path='/webotpinput' element= {<WebOTPInput/>}/>
<Route path='/webcompleteregpage' element= {<WebCompleteRegPage/>}/>
<Route path='/webidentifier' element={<WebIdentifier/>}/>
<Route path='/webcompleteregtwopage' element={<WebCompleteReg2Page/>}/>
<Route path='/webforgetpasswordpage' element={<WebForgetPasswordPage/>}/>
<Route path= '/forgetpasswordthree' element={<ForgetPasswordThree/>}/>
<Route path = '/webotp3' element= {<WebOTP3/>}/>
<Route path = '/webnewpasswordpage' element = {<WebNewPassword/>}/>
<Route path = '/webdashboardpage' element= {<Webdashboardpage/>}/>
<Route path = '/closebalancepage' element= {<CloseBalancePage/>}/>
<Route path = '/notifierbellpage' element= {<NotifierBellPage/>}/>
<Route path='/cardscreens' element= {<CardScreens/>}/>


</Routes>
      </Router>
      <SignUp/>
      {/* <Login/> */}
      {/* <WebVerify/> */}
      {/* <WebOTPInput/> */}
      {/* <WebCompleteRegPage/> */}
      {/* <SplashScreen/> */}
      {/* <WebIdentifier/> */}
       {/* <WebCompleteReg2Page/> */}
      {/* <WebForgetPasswordPage/>  */}
      {/* <ForgetPasswordThree/> */}
      {/* <WebOTP3/> */}
      {/* <WebNewPassword/> */}
      {/* <Webdashboardpage/> */}
      {/* <CloseBalancePage/> */}
      {/* <NotifierBellPage/> */}
      {/* <CardScreens/> */}
    </div>
  );
}

export default App;

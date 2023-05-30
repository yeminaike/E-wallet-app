import "../styles/SplashScreen.css"
import images from "../../../../assets/images/svg/firsticonchat.svg"




function SplashScreen(){
    return(
    <div className="firstPage">
        <img src={images} alt="FirstIconChat" className="ChatIcon" />

    </div>

    );
}
export default SplashScreen;

//as long as it returns html it is a react Component acting as a function.
// jsx is a combination of js and html
// it is in the app.js we render the components to the browser.
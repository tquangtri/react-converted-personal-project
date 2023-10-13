import { useEffect, useState } from "react";
import "./login.css";
import LoginDropdown from "./loginDropdown";
import SignupContainer from "./suContainter";
export default function LoginRegister(props) {
  const [isSignupContainerBeingShown, setShowSignupContainer] = useState(false);
  const [isLoginDropdownBeingShown, setShowLoginDropdown] = useState(false);

  function toggleSignupContainer() {
    let willShowOrNot = !isSignupContainerBeingShown;
    setShowSignupContainer(willShowOrNot);

    if(willShowOrNot){      
      setShowLoginDropdown(false);
    }

  }

  function toggleLoginDropdown() {
    setShowLoginDropdown(!isLoginDropdownBeingShown);
    console.log("toggleLoginDropdown: " + isLoginDropdownBeingShown);
  }

  function hideSignupShowLogin(){
    setShowSignupContainer(false);
    setShowLoginDropdown(true);
  }

  function hideSignup(){
    setShowSignupContainer(false);
  }

  return (
    <div className="login-register-group">
      <div className="register login-register">
        <div className="login-register-button" onClick={toggleSignupContainer}>
          Create Free Account
        </div>
        {isSignupContainerBeingShown 
        ? <SignupContainer hideSignupShowLogin = { hideSignupShowLogin } hideSignup={hideSignup} /> 
        : null}
      </div>
      <div className="inbetween">or</div>
      <div className="login login-register">
        <div className="login-register-button" onClick={toggleLoginDropdown}>
          Login
        </div>

        <div className="login-dropdown">
          {isLoginDropdownBeingShown 
          ? <LoginDropdown /> 
          : null}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./signup.css";

import { isFunction, reloadPage} from "../../../../util/utils";
import Authen from "../../../../util/Authen";

export default function SignupContainer(props) {
  const { hideSignupShowLogin, hideSignup } = props;

  const [ inputEmail, setInputEmail ] = useState("");
  const [ inputPassword, setInputPassword ] = useState("");
  const [ inputUsername, setInputUsername ] = useState("");

  const [ doesUserExist, setDoesUserExist ] = useState(false);
  const [ isEmailInvalid, setIsEmailInvalid ] = useState(false);
  const [ isPasswordInvalid, setIsPasswordInvalid ] = useState(false);


  function handleInputEmailChange(event) {
    setInputEmail(event.target.value);
  }  

  function handleInputPasswordChange(event) {
    setInputPassword(event.target.value);
  }

  function handleInputUsernameChange(event) {
    setInputUsername(event.target.value);
  }

  function signupSubmit(event){
    event.preventDefault();

    let authenResult = Authen.signupSubmit(inputEmail, inputPassword);

    if(authenResult.invalidEmail){
      setIsEmailInvalid(true);
    }else{
      setIsEmailInvalid(false);
    }

    if(authenResult.invalidPassword){
      setIsPasswordInvalid(true);
    }else{
      setIsPasswordInvalid(false);
    }

    if(authenResult.accountExisted){
      setDoesUserExist(true);
    }else{
      setDoesUserExist(false);
    }

    if(authenResult.isSignupPassed()){
      console.info("sign up success, CONGRAT !!!");
      reloadPage();
    }
  }

  function suContainerHideSignupShowLogin() {
    hideSignupShowLogin();
  }
  
  return (
    <div className="dim">
      <div className="signup-container">
        <div className="signup-promo">
          <div className="title">Create Free Account</div>
          <div className="subtitle">
            Join a vivid community of 3D artists
            <br />
            from around the world. Download free 3D models, engage in the
            community, share your works
          </div>
        </div>
        <div className="signup-form">
          <div className="x-delete" onClick={hideSignup}></div>
          <form id="signup" className="was-validated">
            <div className="regular-signup">
              {doesUserExist ? (
                <div className="alert alert-error">
                  User possibly existed, can't register sorry :(
                </div>
              ) : null}

              {isEmailInvalid ? (
                <div className="alert alert-error">
                  The email address is not valid!
                </div>
              ) : null}

              {isPasswordInvalid ? (
                <div className="alert alert-error">
                  The password must be 8 - 50 characters long.
                </div>
              ) : null}


              <p>
                <label htmlFor="su_email">Email</label>
                <br />
                <input
                  className="su_input"
                  id="su_email"
                  name="Email"
                  title="email"
                  tabIndex="1"
                  type="text"
                  placeholder=""
                  onChange={handleInputEmailChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="su_username">Username</label>
                <br />
                <input
                  className="su_input"
                  id="su_username"
                  name="Username"
                  title="username"
                  tabIndex="2"
                  type="text"
                  onChange={handleInputUsernameChange}
                  placeholder=""
                  required
                />
              </p>
              <p>
                <label htmlFor="su_password">Password</label>
                <br />
                <input
                  className="su_input"
                  id="su_password"
                  name="Password"
                  title="password"
                  tabIndex="3"
                  type="password"
                  onChange={handleInputPasswordChange}
                  placeholder=""
                  required
                />
              </p>
              <p className="agree">
                <input
                  id="su_agree"
                  className="agree-check"
                  name="agree"
                  title="agree"
                  defaultValue="1"
                  tabIndex="8"
                  type="checkbox"
                  placeholder=""
                  required
                />

                <label htmlFor="su_agree">I agree with terms of service</label>
              </p>
              <p className="agree">
                <input
                  id="su_subscribe"
                  className="agree-check"
                  name="Subscribe"
                  title="subscribe"
                  defaultValue="1"
                  tabIndex="8"
                  type="checkbox"
                  defaultChecked
                  placeholder=""
                  required
                />

                <label htmlFor="su_subscribe">
                  subscribe to receive news email
                </label>
              </p>
              <p className="agree">
                <button
                  onClick={signupSubmit}
                  className="btn-signup"
                  name="su_submit"
                >
                  Submit
                </button>
              </p>
              <div className="social-login-options">
                <span className="social-login-label">
                  Already have an account ?
                </span>
                <div className="social-buttons-container">
                  <a
                    className="btn-stock login-page-btn"
                    onClick={suContainerHideSignupShowLogin}
                  >
                    Login
                  </a>
                  <div className="social-login-btn google">Google</div>
                  <div className="social-login-btn facebook">Facebook</div>
                </div>
              </div>
            </div>
          </form>
          <div className="subtitle"></div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Authen from "../../../../util/Authen";
import { reloadPage } from "../../../../util/utils";

export default function LoginDropdown(props) {
  const [ doesUserExist, setDoesUserExist ] = useState(true);
  const [ isEmailInvalid, setIsEmailInvalid ] = useState(false);
  const [ isPasswordInvalid, setIsPasswordInvalid ] = useState(false);

  const [ inputEmail, setInputEmail ] = useState("");
  const [ inputPassword, setInputPassword ] = useState("");

  function handleInputEmailChange(event) {
    setInputEmail(event.target.value);
  }

  function handleInputPasswordChange(event) {
    setInputPassword(event.target.value);
  }

  function loginSubmit(event) {
    event.preventDefault();
    let authenResult = Authen.loginSubmit(inputEmail, inputPassword);

    if (authenResult.invalidEmail) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }

    if (authenResult.invalidPassword) {
      setIsPasswordInvalid(true);
    } else {
      setIsPasswordInvalid(false);
    }

    if (authenResult.accountExisted) {
      setDoesUserExist(true);
    } else {
      //don't display user not existed before both input email & password are valid first
      if(authenResult.invalidEmail === false
        && authenResult.invalidPassword === false)
          setDoesUserExist(false);
    }

    if (authenResult.isLoginPassed()) {
      reloadPage();
    }
  }

  return (
    <div id="login-container">
      <div id="login-root">
        <div className="notifier" id="notifier"></div>

        <div className="login-header"></div>
        <div className="login-main">
          <div className="dropdown">
            <div className="triangle"></div>
            <form>
              {doesUserExist === false ? (
                <div className="alert alert-error m10">
                  <strong>Wrong username or password!</strong>
                  Please try again.
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

              <div className="input-group">
                <label>Email</label>
                <br />
                <input
                  className="login-input text"
                  type="text"
                  onChange={handleInputEmailChange}
                  autoComplete="current-password"
                />

                <br />

                <label>Password</label>
                <br />
                <input
                  className="login-input text"
                  type="password"
                  onChange={handleInputPasswordChange}
                  autoComplete="current-password"
                  v-model="input_login_password"
                />
                <br />
              </div>
              <div className="button-group">
                <div className="login-remember-me">
                  <button
                    type="button"
                    onClick={loginSubmit}
                    className="login-input submit-button"
                  >
                    Login
                  </button>

                  <div className="remember">
                    <input
                      className="login-input remember-me-checkbox"
                      type="checkbox"
                      defaultChecked
                    />
                    <label>Remember me</label>
                  </div>
                </div>

                <div className="other-login">
                  <p>or login with</p>
                  <div className="other-login-button-group">
                    <div className="google-button">
                      <div className="google-icon-wrapper">
                        <img
                          alt=""
                          className="google-icon"
                          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        ></img>
                      </div>
                      <p className="btn-text">
                        <b>Google</b>
                      </p>
                    </div>
                    <div className="facebook-button">
                      <div className="facebook-icon-wrapper">
                        <img
                          alt=""
                          className="facebook-icon"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/F_icon_reversed.svg/1024px-F_icon_reversed.svg.png"
                        />
                      </div>
                      <p className="btn-text">
                        <b>Facebook</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </form>

            <p className="forgot">
              <a href="reset-password.html">Forgot password ?</a>
            </p>
          </div>
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  );
}

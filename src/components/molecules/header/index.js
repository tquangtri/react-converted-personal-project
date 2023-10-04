import React from "react";
import "./header.css";
import "./login.css";

export default function Header() {
    return (
        <div className="header">
            <div className="top-bar-inner">
                <a href="/" className="logo">Free 3D</a>

                <div className="nav-search-bar">
                    <input type="text" className="search-bar" placeholder="search 3d models ..." />
                </div>

                <div className="nav-links">
                    <a href="/free-3d-model" className="each-nav-link">Free 3D model</a>
                    <a href="/premium-3d-model" className="each-nav-link">Premium 3D model</a>
                </div>'

                <div className="login-register-group" id="login-signup">
                    <div className="register login-register">

                        <div className="login-register-button" id="hook-show-register">
                            Create Free Account
                        </div>
                        <div className="dim" id="signup-overlay" hidden style={{ display: 'none' }}>

                            <div className="signup-container">
                                <div className="signup-promo">
                                    <div className="title">Create Free Account</div>
                                    <div className="subtitle">
                                        Join a vivid community of 3D artists
                                        <br />
                                        from around the world. Download free 3D models, engage in the community, share your
                                        works
                                    </div>
                                </div>
                                <div className="signup-form">
                                    <div className="x-delete" id="close-dim"></div>
                                    <form id="signup" className="was-validated">
                                        <div className="regular-signup">
                                            <div className="alert alert-error" id="signup-failed-user-existed" style={{ display: 'none' }}>
                                                User
                                                possibly existed, can't register sorry :(
                                            </div>

                                            <div className="alert alert-error" id="signup-failed-invalid-email" style={{ display: 'none' }}>
                                                The email address is not valid!
                                            </div>

                                            <div className="alert alert-error" id="signup-failed-invalid-password" style={{ display: 'none' }}>
                                                The password must be 8 - 50 characters long.
                                            </div>
                                            <p>
                                                <label htmlFor="su_email">Email</label>
                                                <br />
                                                <input className="su_input" id="su_email" name="Email" title="email" tabIndex="1"
                                                    type="text" placeholder="" required />

                                            </p>
                                            <p>
                                                <label htmlFor="su_username">Username</label>
                                                <br />
                                                <input className="su_input" id="su_username" name="Username" title="username"
                                                    tabIndex="2" type="text" placeholder="" required />
                                            </p>
                                            <p>
                                                <label htmlFor="su_password">Password</label>
                                                <br />
                                                <input className="su_input" id="su_password" name="Password" title="password"
                                                    tabIndex="3" type="password" placeholder="" required />
                                            </p>
                                            <p className="agree">
                                                <input id="su_agree" className="agree-check" name="agree" title="agree" defaultValue="1"
                                                    tabIndex="8" type="checkbox" placeholder="" required />

                                                <label htmlFor="su_agree">I agree with terms of service</label>
                                            </p>
                                            <p className="agree">
                                                <input id="su_subscribe" className="agree-check" name="Subscribe" title="subscribe"
                                                    defaultValue="1" tabIndex="8" type="checkbox" defaultChecked placeholder="" required />

                                                <label htmlFor="su_subscribe">subscribe to receive news email</label>
                                            </p>
                                            <p className="agree">
                                                <button id="hook-signup" className="btn-signup" name="su_submit">
                                                    Submit
                                                </button>
                                            </p>
                                            <div className="social-login-options">
                                                <span className="social-login-label">Already have an account ?</span>
                                                <div className="social-buttons-container">
                                                    <a className="btn-stock login-page-btn" href="/">Login</a>
                                                    <div className="social-login-btn google">
                                                        Google
                                                    </div>
                                                    <div className="social-login-btn facebook">
                                                        Facebook
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="subtitle">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inbetween">
                        or
                    </div>
                    <div className="login login-register">
                        <div className="login-register-button" id="hook-show-login">
                            Login
                        </div>
                        <div className="login-dropdown">
                            <div hidden id="login-container">
                                <div id="login-root">
                                    <div className="notifier" id="notifier"></div>

                                    <div className="login-header">
                                    </div>
                                    <div className="login-main">
                                        <div className="dropdown">
                                            <div className="triangle"></div>

                                            <form>
                                                <div className="alert alert-error m10" id="alert-login-failed" style={{ display: 'none' }}>
                                                    <strong>Wrong username or password!</strong>
                                                    Please try again.
                                                </div>
                                                <div className="input-group">
                                                    <label>Email</label>
                                                    <br />
                                                    <input className="login-input text" type="text" id="input-login-email"
                                                        autoComplete="current-password" />

                                                    <br />

                                                    <label>Password</label>
                                                    <br />
                                                    <input className="login-input text" type="password" id="input-login-password"
                                                        autoComplete="current-password" v-model="input_login_password" />
                                                    <br />
                                                </div>
                                                <div className="button-group">
                                                    <div className="login-remember-me">
                                                        <button type="button" id="hook-submit-login"
                                                            className="login-input submit-button">
                                                            Login
                                                        </button>

                                                        <div className="remember">
                                                            <input className="login-input remember-me-checkbox" type="checkbox"
                                                                defaultChecked />
                                                            <label>Remember me</label>
                                                        </div>

                                                    </div>

                                                    <div className="other-login">
                                                        <p>or login with</p>
                                                        <div className="other-login-button-group">
                                                            <div className="google-button">
                                                                <div className="google-icon-wrapper">
                                                                    <img alt="" className="google-icon"
                                                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg">
                                                                    </img>
                                                                </div>
                                                                <p className="btn-text"><b>Google</b></p>
                                                            </div>
                                                            <div className="facebook-button">
                                                                <div className="facebook-icon-wrapper">
                                                                    <img alt="" className="facebook-icon"
                                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/F_icon_reversed.svg/1024px-F_icon_reversed.svg.png" />
                                                                </div>
                                                                <p className="btn-text"><b>Facebook</b></p>
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
                                    <div className="login-footer">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="account-hamburger loggedin userStuffs">
                    <div className="avatar-container" id="avatar-container">
                        <div className="account_avatar" id="account-avatar">t</div>
                        <div className="username" id="account-username">
                            terrordrone4
                        </div>
                    </div>

                    <div className="clearfix"></div>
                    <div className="user-panel-container absolute outside_panel_cont" id="user-panel-container"
                        style={{ display: 'none' }}>

                        <div className="top_triangle_back">
                            <div className="top_triangle"></div>
                        </div>
                        <div className="cleafix" style={{ clear: 'both' }}></div>
                        <div className="relative">
                            <div className="panel-menu">
                                <ul>
                                    <li><a href="/dashboard/inbox"><span className="ss-mail"></span>Inbox</a></li>
                                    <li><a href="/dashboard/send-message"><span className="ss-send"></span>Send Message</a></li>

                                    <li><a href="/dashboard/downloads"><span className="ss-downloadcloud"></span>Downloads</a>
                                    </li>
                                    <li><a href="/dashboard/settings"><span className="ss-settings"></span>Settings</a></li>
                                    <li><a href="/" id="log_out">Log out</a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
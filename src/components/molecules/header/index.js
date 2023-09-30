import React from "react";

export default function Header(){
    return (
        <div class="header"> 
    <div class="top-bar-inner">
        <a href="/" class="logo">Free 3D</a>

        <div class="nav-search-bar">
            <input type="text" class="search-bar" placeholder="search 3d models ..."/>
        </div>

        <div class="nav-links">
            <a href="/free-3d-model" class="each-nav-link">Free 3D model</a>
            <a href="/premium-3d-model" class="each-nav-link">Premium 3D model</a>
        </div>'

        <div class="login-register-group" id="login-signup">
            <div class="register login-register">

                <div class="login-register-button" id="hook-show-register">
                    Create Free Account
                </div>
                <div class="dim" id="signup-overlay" hidden style="display: none;">

                    <div class="signup-container">
                        <div class="signup-promo">
                            <div class="title">Create Free Account</div>
                            <div class="subtitle">
                                Join a vivid community of 3D artists
                                <br/>
                                from around the world. Download free 3D models, engage in the community, share your
                                works
                            </div>
                        </div>
                        <div class="signup-form">
                            <div class="x-delete" id="close-dim"></div>
                            <form id="signup" class="was-validated">
                                <div class="regular-signup">
                                    <div class="alert alert-error" id="signup-failed-user-existed" style="display: none;">
                                        User
                                        possibly existed, can't register sorry :(
                                    </div>
                                    
                                    <div class="alert alert-error" id="signup-failed-invalid-email" style="display: none;">
                                        The email address is not valid!
                                    </div>

                                    <div class="alert alert-error" id="signup-failed-invalid-password" style="display: none;">
                                        The password must be 8 - 50 characters long.
                                    </div>
                                    <p>
                                        <label for="su_email">Email</label>
                                        <br/>
                                        <input class="su_input" id="su_email" name="Email" title="email" tabindex="1"
                                            type="text" placeholder="" required/>

                                    </p>
                                    <p>
                                        <label for="su_username">Username</label>
                                        <br/>
                                        <input class="su_input" id="su_username" name="Username" title="username"
                                            tabindex="2" type="text" placeholder="" required/>
                                    </p>
                                    <p>
                                        <label for="su_password">Password</label>
                                        <br/>
                                        <input class="su_input" id="su_password" name="Password" title="password"
                                            tabindex="3" type="password" placeholder="" required/>
                                    </p>
                                    <p class="agree">
                                        <input id="su_agree" class="agree-check" name="agree" title="agree" value="1"
                                            tabindex="8" type="checkbox" placeholder="" required/>

                                        <label for="su_agree">I agree with terms of service</label>
                                    </p>
                                    <p class="agree">
                                        <input id="su_subscribe" class="agree-check" name="Subscribe" title="subscribe"
                                            value="1" tabindex="8" type="checkbox" checked placeholder="" required/>

                                        <label for="su_subscribe">subscribe to receive news email</label>
                                    </p>
                                    <p class="agree">
                                        <button id="hook-signup" class="btn-signup" name="su_submit">
                                            Submit
                                        </button>
                                    </p>
                                    <div class="social-login-options">
                                        <span class="social-login-label">Already have an account ?</span>
                                        <div class="social-buttons-container">
                                            <a class="btn-stock login-page-btn" href="/">Login</a>
                                            <div class="social-login-btn google">
                                                Google
                                            </div>
                                            <div class="social-login-btn facebook">
                                                Facebook
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="subtitle">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inbetween">
                or
            </div>
            <div class="login login-register">
                <div class="login-register-button" id="hook-show-login"> 
                    Login
                </div>
                <div class="login-dropdown">
                    <div hidden id="login-container">
                        <div id="login-root">
                            <div class="notifier" id="notifier"></div>

                            <div class="login-header">
                            </div>
                            <div class="login-main">
                                <div class="dropdown">
                                    <div class="triangle"></div>

                                    <form>
                                        <div class="alert alert-error m10" id="alert-login-failed"
                                            style="display: none;"><strong>Wrong username or password!</strong>
                                            Please try again.</div>
                                        <div class="input-group">
                                            <label>Email</label>
                                            <br/>
                                            <input class="login-input text" type="text" id="input-login-email"
                                                autocomplete="current-password" />

                                            <br/>

                                            <label>Password</label>
                                            <br/>
                                            <input class="login-input text" type="password" id="input-login-password"
                                                autocomplete="current-password" v-model="input_login_password"/>
                                            <br/>
                                        </div>
                                        <div class="button-group">
                                            <div class="login-remember-me">
                                                <button type="button" id="hook-submit-login"
                                                    class="login-input submit-button" v-on:click="submitLogin()">
                                                    Login
                                                </button>

                                                <div class="remember">
                                                    <input class="login-input remember-me-checkbox" type="checkbox"
                                                        checked/>
                                                    <label>Remember me</label>
                                                </div>

                                            </div>

                                            <div class="other-login">
                                                <p>or login with</p>
                                                <div class="other-login-button-group">
                                                    <div class="google-button">
                                                        <div class="google-icon-wrapper">
                                                            <img class="google-icon"
                                                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                                        </div>
                                                        <p class="btn-text"><b>Google</b></p>
                                                    </div>
                                                    <div class="facebook-button">
                                                        <div class="facebook-icon-wrapper">
                                                            <img class="facebook-icon"
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/F_icon_reversed.svg/1024px-F_icon_reversed.svg.png" />
                                                        </div>
                                                        <p class="btn-text"><b>Facebook</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                    </form>


                                    <p class="forgot">
                                        <a href="reset-password.html">Forgot password ?</a>
                                    </p>

                                </div>
                            </div>
                            <div class="login-footer">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="account-hamburger loggedin userStuffs">
            <div class="avatar-container" id="avatar-container">
                <div class="account_avatar" id="account-avatar">t</div>
                <div class="username" id="account-username">
                    terrordrone4
                </div>
            </div>

            <div class="clearfix"></div>
            <div class="user-panel-container absolute outside_panel_cont" id="user-panel-container"
                style="display: none;">

                <div class="top_triangle_back">
                    <div class="top_triangle"></div>
                </div>
                <div class="cleafix" style="clear:both"></div>
                <div class="relative">
                    <div class="panel-menu">
                        <ul>
                            <li><a href="/dashboard/inbox"><span class="ss-mail"></span>Inbox</a></li>
                            <li><a href="/dashboard/send-message"><span class="ss-send"></span>Send Message</a></li>
                            
                            <li><a href="/dashboard/downloads"><span class="ss-downloadcloud"></span>Downloads</a>
                            </li>
                            <li><a href="/dashboard/settings"><span class="ss-settings"></span>Settings</a></li>
                            <li><a href="/" id="log_out">Log out</a></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

        <div class="notf-icon notiff_top ss-mail msg_notiff userStuffs">
            <div class="absolute outside_message_cont" id="message-container">
                <div class="top_triangle_back">
                    <div class="top_triangle"></div>
                </div>

                <div class="relative">
                    <div class="top"></div>

                    <div class="alert m10"><strong>No notifications.</strong> You haven't received any messages.
                    </div>
                    <a class="btn-inbox" rel="nofollow" href="/dashboard/inbox">
                        <span class="ss-mail"></span>
                        Inbox </a>
                    <div class="clearfix"></div>
                </div>
            </div>
            <a href="/dashboard/inbox" class="mobile-link">Read Messages</a>
        </div>

        <div class="notf-icon notiff_top ss-notifications comm_notiff userStuffs">
            <div class="absolute outside_message_cont" id="comm-notiff-container">
                <div class="top_triangle_back">
                    <div class="top_triangle"></div>
                </div>

                <div class="relative" style="min-height:100px;">
                    <div class="top"></div>
                    <div class="alert m10"><strong>No notifications.</strong> You haven't received any messages.
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

        <div class="notf-icon notiff_top ss-basket basket_notiff userStuffs">

            <div class="absolute outside_message_cont" id="shopping-basket-container">
                <div class="top_triangle_back">
                    <div class="top_triangle"></div>
                </div>

                <div class="relative" style="min-height:100px;">
                    <div class="top"></div>
                    <div class="items-container">
                        <div class="sb-products-wrapper">
                            <div class="sb-product-dropdown clearfix">
                                <a href="/3d-model/intergalactic-spaceship-design-8562.html">
                                    <img src="https://preview.free3d.com/img/2016/05/2705008806873531721/re2rg2js.jpg"
                                        width="75"/>
                                </a>
                                <div class="det">
                                    <a class="title" href="/3d-model/intergalactic-spaceship-design-8562.html">
                                        Intergalactic Spaceship Design <span class="light"> 3d model</span>
                                    </a>
                                    <div class="auth">
                                        by
                                        <a href="/user/3DHaupt">
                                            3DHaupt </a>
                                    </div>
                                    <div class="price">
                                        <span class="dollar">$</span>63.0
                                    </div>
                                </div>
                                <div class="trash">
                                    <a href="/shopping-cart?remove=intergalactic-spaceship-design-8562"
                                        class="ss-trash"></a>
                                </div>
                            </div>

                            <div class="sb-product-dropdown clearfix">
                                <a href="/3d-model/ufo-4606.html">
                                    <img src="https://preview.free3d.com/img/2019/03/2705086495567382156/xrxwevb1.jpg"
                                        width="75"/>
                                </a>
                                <div class="det">
                                    <a class="title" href="/3d-model/ufo-4606.html">
                                        Ufo <span class="light"> 3d model</span>
                                    </a>
                                    <div class="auth">
                                        by
                                        <a href="/user/Deepocean02">
                                            Deepocean02 </a>
                                    </div>
                                    <div class="price">
                                        <span class="dollar">$</span>40.0
                                    </div>
                                </div>
                                <div class="trash">
                                    <a href="/shopping-cart?remove=ufo-4606" class="ss-trash"></a>
                                </div>
                            </div>

                            <div class="sb-product-dropdown clearfix">
                                <a href="/3d-model/ufo-8799.html">
                                    <img src="https://preview.free3d.com/img/2015/05/2202353477772904345/011t13d4.jpg"
                                        width="75"/>
                                </a>
                                <div class="det">
                                    <a class="title" href="/3d-model/ufo-8799.html">
                                        UFO <span class="light"> 3d model</span>
                                    </a>
                                    <div class="auth">
                                        by
                                        <a href="/user/3D LIVE">
                                            3D LIVE </a>
                                    </div>
                                    <div class="price">
                                        <span class="dollar">$</span>59.0
                                    </div>
                                </div>
                                <div class="trash">
                                    <a href="/shopping-cart?remove=ufo-8799" class="ss-trash"></a>
                                </div>
                            </div>

                            <div class="sb-product-dropdown clearfix">
                                <a href="/3d-model/4-low-res-spaceships-5563.html">
                                    <img src="https://preview.free3d.com/img/2016/06/2400302936954504552/1h2h9hix.jpg"
                                        width="75"/>
                                </a>
                                <div class="det">
                                    <a class="title" href="/3d-model/4-low-res-spaceships-5563.html">
                                        4 Low-Res Spaceships <span class="light"> 3d model</span>
                                    </a>
                                    <div class="auth">
                                        by
                                        <a href="/user/CGPitbull">
                                            CGPitbull </a>
                                    </div>
                                    <div class="price">
                                        <span class="dollar">$</span>115.0
                                    </div>
                                </div>
                                <div class="trash">
                                    <a href="/shopping-cart?remove=4-low-res-spaceships-5563" class="ss-trash"></a>
                                </div>
                            </div>
                        </div>
                        <div class="sb-bottom-dd">
                            <div>Total: <span class="price"><span class="dollar">$</span>277</span></div>
                            <a href="/shopping-cart" class="btn-stock filled"><span class="ss-cart"></span> Check
                                Out →</a>
                        </div>


                    </div>

                    <div class="clearfix"></div>
                </div>
            </div>
            <span class="notification-counter ">4</span>
            <a href="/shopping-cart" class="mobile-link">View cart</a>
        </div> 

    </div>
</div>
    )
}
import React, { useState } from "react";
import Authen from "../../../../util/Authen";

export default function AccountHambuger() {
  const [isShowingUserPanel, setShowUserPanel] = useState(false);

  function toggleUserPanel() {
    setShowUserPanel(!isShowingUserPanel);
  }

  return (
    <div className="account-hamburger loggedin userStuffs">
      <div className="avatar-container" onClick={toggleUserPanel}>
        <div className="account_avatar">
          {
            Authen.getCurrentUser().email.charAt(0)
          }
        </div>
        <div className="username">
          {
            Authen.getCurrentUser().email
          }
        </div>
      </div>

      <div className="clearfix"></div>
      {
        isShowingUserPanel
          ? (
            <div className="user-panel-container absolute outside_panel_cont">

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
                    <li>
                      <a onClick={Authen.logOut}>
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          )
          : null
      }

    </div>
  );
}
import React from "react";
import "./header.css";
import LoginRegister from "../account";
import { hadLoggedIn } from "../../../util/Authen";
import AccountHambuger from "../account/hambuger";

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

                {
                    hadLoggedIn() 
                    ? <AccountHambuger/>
                    : <LoginRegister />
                }             
            </div>
        </div>
    )
}
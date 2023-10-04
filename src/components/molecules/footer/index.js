import React from "react";
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="content-wrapper">
                <div className="footer-top">
                    <div className="slice">
                        <div className="awesome-logo">
                            Free3D
                        </div>
                        <p>Free 3D Models and Commercial Use 3D Models at great prices. free3d.com                </p>
                        <div className="change-region">
                            <div className="dropup">
                                <a href="/de/" hrefLang="de">Deutsch</a><span>English</span><a href="/es/" hrefLang="es">Español</a><a href="/fr/" hrefLang="fr">Français</a><a href="/it/" hrefLang="it">Italiano</a><a href="/nl/" hrefLang="nl">Nederlands</a><a href="/pl/" hrefLang="pl">Polski</a><a href="/pt/" hrefLang="pt">Português</a><a href="/sv/" hrefLang="sv">Svenska</a><a href="/tr/" hrefLang="tr">Türkçe</a><a href="/ru/" hrefLang="ru">Русский</a><a href="/ko/" hrefLang="ko">한국어</a><a href="/ja/" hrefLang="ja">日本語</a><a href="/zh/" hrefLang="zh-hans">简体中文</a>                    <div className="clearfix"></div>
                            </div>
                            <div className="change-region-button">
                                <span className="ss-earth"></span>
                                <span className="text">Change region</span>
                                <span className="ss-dropdown"></span>
                            </div>
                        </div>
                    </div>
                    <div className="slice">
                        <div className="middle-links">
                            <ul>
                                <li className="title navigate">Navigate</li>
                                <li><a href="/sell">Sell with us</a></li>                              
                                <li><a href="/3d-models/" rel="nofollow">Free 3D Models</a></li>
                                <li><a href="/premium-3d-models/" rel="nofollow">Premium 3D Models</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="slice">
                        <div className="middle-links">
                            <ul>
                                <li className="title search">Selections</li>
                                <li><a href="/3d-models/tree">trees <span className="dark">3d models</span></a></li>
                                <li><a href="/3d-models/plant">plants <span className="dark">3d models</span></a></li>
                                <li><a href="/3d-models/christmas">christmas <span className="dark">3d models</span></a></li>
                                <li><a href="/3d-models/mesh">mesh <span className="dark">3d models</span></a></li>
                                <li><a href="/3d-models/car">cars <span className="dark">3d models</span></a></li>
                                <li><a href="/3d-models/phone">phone <span className="dark">3d models</span></a></li>
                                <li><a href="/3d-models/coral">coral <span className="dark">3d models</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="slice">
                        <div className="middle-links">
                            <span className="ss-megaphone"></span>
                            <div className="talk">Talk to me</div>
                            <b>tquangtri1518@gmail.com</b>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>

            </div>
        </div>
    )
}
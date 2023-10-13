/* eslint-disable */
import React, { useEffect, useState } from "react";
import './productDetailRoot.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "../../atoms/ProductSlider";
import FakeData from "../../../util/FakeData";
import moment from "moment";
import { AuthorUtil, ProductUtil, StringUtil } from "../../../util/utils";
import ProductBreadcrumb from "../../atoms/ProductBreadcrumb";
import ProductFileInfo from "../../atoms/ProductFileInfo";
import { useParams } from "react-router-dom";
import LoginRegister from "../../molecules/account";
import { hadLoggedIn } from "../../../util/Authen";
import AccountHambuger from "../../molecules/account/hambuger";
import ShopBasket from "../../molecules/account/shopBasket";
import CartUtil from "../../../util/CartUtil";



export default function ProductDetail() {

    const [cart, setCart] = useState(null);
    const [isCartShowing, setCartShowing] = useState(false);

    const [addToCart_btn_className, setAddToCart_btn_className] = useState("");
    const [dateAdd, setDateAdd] = useState("");
    const [dateUpdated, setDateUpdated] = useState("");
    const [breadCrumbItems, setBreadCrumbItems] = useState([])
    const [productFileInfos, setProductFileInfos] = useState([])

    const [downloadAddToCartBtnClassName, setDownloadAddToCartBtnClassName] = useState("");
    const [downloadOrAddToCart, setDownloadOrAddToCart] = useState("download");

    const { id } = useParams();
    const [product, setProduct] = useState(FakeData.fakeProductDetailInfos[0]);

    useEffect(() => {
        if (!id) {
            let product = FakeData.fakeProductDetailInfos[0];
            setProduct(product);
        } else {
            console.log('reading product with id ' + id + '...')
            let product = FakeData.fakeProductDetailInfos[id];
            console.log('product: ', product);

            setProduct(product);
        }
    }, [id])

    function onClickAddToCart() {
        if (!hadLoggedIn()) {
            //TODO: show login...
            return;
        }
        setDownloadAddToCartBtnClassName("btn-disabled");

        let succeedAddingToCart = CartUtil.addToCart(CartUtil.getLoggedInUserCart(), product);

        if (succeedAddingToCart) {
            setDownloadAddToCartBtnClassName("btn-disabled");
            console.log("product page changing cart state...");
            setCart(CartUtil.getLoggedInUserCart());
        }
    }

    function onClickDownload() {
        console.log("NOT YET IMPLEMENT: downloading product");
        setDownloadAddToCartBtnClassName("btn-disabled");
    }

    useEffect(() => {
        if (product.price > 0.001) {
            setAddToCart_btn_className("premium-product-price");
        }
        else {
            setAddToCart_btn_className("free-product-price");
        }
        setDateAdd(moment(product.date_added, "DD-MM-YYYY").format("MMM D, YYYY"));
        setDateUpdated(moment(product.date_updated, "DD-MM-YYYY").format("MMM D, YYYY"));

        let categHieracy = retrieveCategoryHieracy(product);
        let breadCrumbItems = [...categHieracy];
        setBreadCrumbItems(breadCrumbItems);

        if (product.price > 0.001) {
            setDownloadAddToCartBtnClassName("btn-add-to-cart");
            setDownloadOrAddToCart("Add to cart");
        }
        else {
            setDownloadAddToCartBtnClassName("btn-download");
        }
    }, [product])

    return (
        <div>
            <div className="product-page">
                <div className="top-bar smaller_bar">
                    <div className="top-bar-inner">
                        <a href="/" className="awesome-logo">
                            Free3D
                        </a>
                        <div className="nav-search-bar">
                            <form id="searchForm">
                                <input type="text" className="search-bar" name="q" placeholder="search 3d models ..."
                                    readOnly value="intergalactic spaceship version  blender- eevee">
                                </input>
                                <button className="ss-search" id="search-button2" type="button">
                                </button>
                            </form>
                        </div>

                        <div className="nav-links">
                            <a href="/" className="nav-link free-search active"><span className="fader">Free
                                3D Models</span></a>
                            <a href="/" className="nav-link paid-search "><span className="fader">Premium 3D Models</span></a>
                        </div>
                        {
                            hadLoggedIn()
                                ? <AccountHambuger />
                                : <LoginRegister />
                        }
                        <ShopBasket isCartShowing={isCartShowing} setCartShowing={setCartShowing} 
                        cart = {cart}  setCart = {setCart} />
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="categories-bar free">
                    <div className="categories-bar-inner">
                        <a href="https://free3d.com/3d-models/architecture" className="category-link ss-building  "
                            alt="free 3D Architecture Models " title="free 3D Architecture Models "><span
                                className="label">Architecture</span></a>
                        <a href="https://free3d.com/3d-models/vehicles" className="category-link ss-car  "
                            alt="free 3D Vehicles Models " title="free 3D Vehicles Models "><span
                                className="label">Vehicles</span></a>
                        <a href="https://free3d.com/3d-models/characters" className="category-link ss-usergroup  "
                            alt="free 3D Characters Models " title="free 3D Characters Models "><span
                                className="label">Characters</span></a>
                        <a href="https://free3d.com/3d-models/aircraft" className="category-link ss-plane  "
                            alt="free 3D Aircraft Models " title="free 3D Aircraft Models "><span
                                className="label">Aircraft</span></a>
                        <a href="https://free3d.com/3d-models/furniture" className="category-link ss-lodging  "
                            alt="free 3D Furniture Models " title="free 3D Furniture Models "><span
                                className="label">Furniture</span></a>
                        <a href="https://free3d.com/3d-models/electronics" className="category-link ss-smartphone  "
                            alt="free 3D Electronics Models " title="free 3D Electronics Models "><span
                                className="label">Electronics</span></a>
                        <a href="https://free3d.com/3d-models/animals" className="category-link ss-tropicalfish  "
                            alt="free 3D Animals Models " title="free 3D Animals Models "><span className="label">Animals</span></a>
                        <a href="https://free3d.com/3d-models/plants" className="category-link ss-leaf  "
                            alt="free 3D Plants Models " title="free 3D Plants Models "><span className="label">Plants</span></a>
                        <a href="https://free3d.com/3d-models/weapons" className="category-link ss-knife  "
                            alt="free 3D Weapons Models " title="free 3D Weapons Models "><span className="label">Weapons</span></a>
                        <a href="https://free3d.com/3d-models/sports" className="category-link ss-football  "
                            alt="free 3D Sports Models " title="free 3D Sports Models "><span className="label">Sports</span></a>
                        <a href="https://free3d.com/3d-models/food" className="category-link ss-icecream  "
                            alt="free 3D Food Models " title="free 3D Food Models "><span className="label">Food</span></a>
                        <a href="https://free3d.com/3d-models/anatomy" className="category-link ss-anatomicalheart  "
                            alt="free 3D Anatomy Models " title="free 3D Anatomy Models "><span className="label">Anatomy</span></a>
                        <a href="https://free3d.com/add" className="category-link 
                            ss-plus" title="Submit Free 3D your model" rel="nofollow"></a>
                    </div>

                </div>

                <div className="product-page-container free-product similar-left has-clearfix">
                    <div className="similar-products-container left  has-clearfix">

                        <div id="product-similar-products" className="product-similar-products recommended-products">
                            <div className="search-result  premium">
                                <div className="search-result__content-wrapper">

                                    <a href="/" className="search-result__thumb-wrapper">
                                        <img style={{ maxWidth: "200px" }} className="search-result__thumb"
                                            src="https://preview.free3d.com/img/2016/05/2705008806873531721/re2rg2js.jpg"
                                            alt="Intergalactic Spaceship Design 3d model"
                                            title="Intergalactic Spaceship Design 3d model"
                                            rel="{&quot;pret&quot;:&quot;$63&quot;,&quot;type&quot;:&quot;.wrl .unitypackage .upk .tgo .stl .obj .fbx .blend&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/05\/2705008806873531721\/re2rg2js.jpg&quot;}">

                                        </img>
                                        <div className="standard ">
                                        </div>
                                    </a>
                                    <div className="search-result__info-wrapper">
                                        <div className="search-result__title"><a
                                            href="/3d-model/intergalactic-spaceship-design-8562.html"
                                            className="link product-page-link">Intergalactic Spaceship Design</a></div>
                                        <span className="search-result__format">.wrl .unitypackage .upk .tgo .stl .obj .fbx
                                            .blend</span>
                                        <div className="search-result__footer">
                                            <span data-price="63" className="search-result__price  product-page-link"><span
                                                className="dollar">$</span>63 </span>
                                            <span className="search-result__stats"><span className="stat-item views">0</span></span>

                                        </div>
                                    </div>

                                    <div className="sec_entry_group"></div>
                                    <a href="/3d-model/intergalactic-spaceship-design-8562.html"
                                        className="product-tools product-tools__premium product-page-link">
                                        <span
                                            className="product-tool product-tool__zoom">

                                        </span>
                                    </a>
                                </div>

                            </div>
                            <div className="search-result  premium">
                                <div className="search-result__content-wrapper">

                                    <a href="/3d-model/intergalactic-spaceship-design-8562.html"
                                        className="search-result__thumb-wrapper">
                                        <img style={{ maxWidth: "200px" }} className="search-result__thumb"
                                            src="https://preview.free3d.com/img/2016/05/2705008806873531721/re2rg2js.jpg"
                                            alt="Intergalactic Spaceship Design 3d model"
                                            title="Intergalactic Spaceship Design 3d model"
                                            rel="{&quot;pret&quot;:&quot;$63&quot;,&quot;type&quot;:&quot;.wrl .unitypackage .upk .tgo .stl .obj .fbx .blend&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/05\/2705008806873531721\/re2rg2js.jpg&quot;}">
                                        </img>
                                        <div className="standard ">
                                        </div>
                                    </a>
                                    <div className="search-result__info-wrapper">
                                        <div className="search-result__title"><a
                                            href="/3d-model/intergalactic-spaceship-design-8562.html"
                                            className="link product-page-link">Intergalactic Spaceship Design</a></div>
                                        <span className="search-result__format">.wrl .unitypackage .upk .tgo .stl .obj .fbx
                                            .blend</span>
                                        <div className="search-result__footer">
                                            <span data-price="63" className="search-result__price  product-page-link"><span
                                                className="dollar">$</span>63 </span>
                                            <span className="search-result__stats"><span className="stat-item views">0</span></span>

                                        </div>
                                    </div>

                                    <div className="sec_entry_group"></div>
                                    <a href="/3d-model/intergalactic-spaceship-design-8562.html"
                                        className="product-tools product-tools__premium product-page-link"><span
                                            className="product-tool product-tool__zoom">
                                        </span>
                                    </a>
                                </div>

                            </div>
                            <div className="search-result  premium">
                                <div className="search-result__content-wrapper">

                                    <a href="/3d-model/intergalactic-spaceship-design-8562.html"
                                        className="search-result__thumb-wrapper">
                                        <img style={{ maxWidth: "200px" }} className="search-result__thumb"
                                            src="https://preview.free3d.com/img/2016/05/2705008806873531721/re2rg2js.jpg"
                                            alt="Intergalactic Spaceship Design 3d model"
                                            title="Intergalactic Spaceship Design 3d model"
                                            rel="{&quot;pret&quot;:&quot;$63&quot;,&quot;type&quot;:&quot;.wrl .unitypackage .upk .tgo .stl .obj .fbx .blend&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/05\/2705008806873531721\/re2rg2js.jpg&quot;}">

                                        </img>
                                        <div className="standard ">
                                        </div>
                                    </a>
                                    <div className="search-result__info-wrapper">
                                        <div className="search-result__title"><a
                                            href="/3d-model/intergalactic-spaceship-design-8562.html"
                                            className="link product-page-link">Intergalactic Spaceship Design</a></div>
                                        <span className="search-result__format">.wrl .unitypackage .upk .tgo .stl .obj .fbx
                                            .blend</span>
                                        <div className="search-result__footer">
                                            <span data-price="63" className="search-result__price  product-page-link"><span
                                                className="dollar">$</span>63 </span>
                                            <span className="search-result__stats"><span className="stat-item views">0</span></span>

                                        </div>
                                    </div>

                                    <div className="sec_entry_group"></div>
                                    <a href="/3d-model/intergalactic-spaceship-design-8562.html"
                                        className="product-tools product-tools__premium product-page-link">
                                        <span className="product-tool product-tool__zoom">

                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="product-page-content-wrapper">
                        <div className="product-page-header has-clearfix">
                            <div className="page-breadcrumb">
                                <a href="https://free3d.com/3d-models/" className="home-link">3D Models</a>
                                {
                                    breadCrumbItems?.map(
                                        (eachItem, idx) => {
                                            if (!eachItemId) {
                                                var eachItemId = 0;
                                            }
                                            return <ProductBreadcrumb breadCrumbItem={eachItem} key={idx}></ProductBreadcrumb>
                                        }
                                    )
                                }
                                <span className="current-page-title" id="breadcrumb-product-title">
                                    {product.title_text}
                                </span>
                            </div>
                            <h1 className="product-page-header__title">
                                <span className="title_text" id="title_text">
                                    {product.title_text}
                                </span>
                                <span className="title_extra_info" id="title_extra_info">
                                    {product.title_extra_info}
                                </span>
                            </h1>

                            <div className="btn-action btn-bookmark-product " title="Bookmark">
                                <span className="count" id="likes-count">
                                    {product.likes_count}
                                </span>
                            </div>
                        </div>

                        <div className="product-main-info has-clearfix">
                            <ProductSlider imgs={product.imgs} product_title_text={product.title_text} ></ProductSlider>
                            <div className="product-main-details">
                                <div className="product-main-details__action-container">
                                    <div className=" product-action-bar product-main-details__action-bar">
                                        <div className={`single-product-price-container ${addToCart_btn_className}`}>
                                            <div className="single-product-price-container__digits" id="price">{product.price}</div>
                                            <div className="single-product-price-container__decimals">00</div>
                                        </div>
                                        <div className="action-buttons-container">
                                            <button rel="nofollow"
                                                className={`btn-action ${downloadAddToCartBtnClassName}`}
                                                onClick={
                                                    () => {
                                                        if (product.price > 0.001) {
                                                            onClickAddToCart();
                                                        }
                                                        else {
                                                            onClickDownload();
                                                        }
                                                    }
                                                }
                                            >
                                                {downloadOrAddToCart}
                                            </button>
                                        </div>
                                    </div>


                                    <div className="product-license-container product-main-details__license-container ">
                                        <div className="product-main-details__product-license">
                                            <div className="product-license__content"><span className="license-text">Personal Use
                                                License</span></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="product-main-details__meta-container product-meta-container">

                                    <div className="product-meta-public">
                                        <div className="product-stats-container">

                                            <div className="product-stats__block product-stats__public product-counters">
                                                <div className="product-stat-item stats-item stats-view left">
                                                    <span className="product-stat-item__content stat_content">
                                                        <span className="product-stat-item__value stat_value"
                                                            id="visit-count">{product.visit_count}</span>
                                                        <span className="product-stat-item__label stat_label">visits</span>
                                                    </span>
                                                </div>
                                                <div className="product-stat-item stats-item stats-analytics right">
                                                    <span className="product-stat-item__content stat_content">
                                                        <span className="product-stat-item__value stat_value"
                                                            id="download-count">{product.download_count}</span>
                                                        <span className="product-stat-item__label stat_label">downloads</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="author-container">
                                            <a className="avatar" href="https://free3d.com/user/3dhaupt">
                                                <img alt="" src="/">
                                                </img>
                                            </a>
                                            <div className="username-container">
                                                <span className="submitted-by">Submitted by</span>
                                                <a rel="nofollow" href="https://free3d.com/user/3dhaupt" className="username"
                                                    id="author-username">{AuthorUtil.select(product.authorId).username}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-additional-details">
                            <div className="product-page-box product-specifications">
                                <h3 className="product-page-box-title product-page-box-title__specifications">Specifications
                                </h3>
                                <ul className="product-specs-list">
                                    <li className="product-spec odd"><span className="spec-label">Geometry</span><span
                                        className="spec-value " id="geometry">{product.geometry}</span></li>

                                    <li className="product-spec even"><span className="spec-label">Polygons</span><span
                                        className="spec-value " id="polygon_count">{product.polygon_count}</span></li>

                                    <li className="product-spec odd"><span className="spec-label">Vertices</span><span
                                        className="spec-value " id="vertices_count">{product.vertices_count}</span></li>

                                    <li className="product-spec even"><span className="spec-label">Textures</span><span
                                        className="spec-value yes" id="has_textures">{(product.has_textures) ? "Yes" : "No"}</span></li>

                                    <li className="product-spec odd"><span className="spec-label">Materials</span><span
                                        className="spec-value yes" id="has_material">{(product.has_material) ? "Yes" : "No"}</span></li>

                                    <li className="product-spec even"><span className="spec-label">Rigged</span><span
                                        className="spec-value no" id="had_rigged">{(product.had_rigged) ? "Yes" : "No"}</span></li>

                                    <li className="product-spec odd"><span className="spec-label">Animated</span><span
                                        className="spec-value yes" id="had_animated">{(product.had_animated) ? "Yes" : "No"}</span></li>

                                    <li className="product-spec even"><span className="spec-label">3D Printable Ready</span><span
                                        className="spec-value no">No</span></li>

                                    <li className="product-spec odd"><span className="spec-label">Game Ready (low poly)</span><span
                                        className="spec-value yes" id="is_gameReady">{(product.is_gameReady) ? "Yes" : "No"}</span></li>

                                    <li className="product-spec even"><span className="spec-label">UV Mapped</span><span
                                        className="spec-value yes" id="had_UVMapped">{(product.had_UVMapped) ? "Yes" : "No"}</span></li>

                                    <li className="product-spec odd"><span className="spec-label">Unwrapped UVs</span><span
                                        className="spec-value ">- Unverpackte UVs -</span></li>
                                </ul>
                            </div>
                            <div className="product-files-tags">
                                <div className="product-page-box product-files-container">
                                    <h3 className="product-page-box-title product-page-box-title__formats">Formats &amp; Files
                                    </h3>
                                    {product.files?.map(
                                        (eachFileInfo, idx) => {
                                            if (!eachFileItemId) {
                                                var eachFileItemId = 0;
                                            }
                                            return <ProductFileInfo productFileInfo={eachFileInfo} key={idx}></ProductFileInfo>
                                        }
                                    )}
                                </div>
                                <div className="product-page-box product-tags-container">
                                    <h3 className="product-page-box-title product-page-box-title__tags">Tags</h3>
                                    <div className="tags-wrapper">
                                        {product.tags?.map(
                                            (eachProductTag, idx) => {
                                                return (
                                                    <a className="indiv-tag" id="indiv-tag" href="/" key={idx}>
                                                        {StringUtil.upperCaseFirst(eachProductTag)}
                                                    </a>
                                                )
                                            }
                                        )}
                                    </div>

                                </div>
                            </div>
                            <div className="product-description">
                                <div className="description-container">
                                    <h3 className="product-page-box-title product-page-box-title__description">Description</h3>
                                    <div className="product-description__text desc_english" id="desc_text">
                                        {product.desc_text}
                                    </div>

                                </div>
                                <div className="product-stats__public product-stats__block product-dates">
                                    <div className="product-stat-item stats-item stats-calendar right">
                                        <span className="product-stat-item__content">
                                            <span className="product-stat-item__value stat_value" id="date_added">
                                                {dateAdd}
                                            </span>
                                            <span className="product-stat-item__label stat_label">date added</span>
                                        </span>
                                    </div>
                                    <div className="product-stat-item stats-item stats-last-update right">
                                        <span className="product-stat-item__content">
                                            <span className="product-stat-item__value stat_value" id="date_updated">
                                                {dateUpdated}
                                            </span>
                                            <span className="product-stat-item__label stat_label">last update</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-page-section product-page-section--comments">
                            <h2 className="product-page-section__title">Comments</h2>
                            <div className="product-comments__container">
                                <div className="alert">To post your comment you'll have to <span
                                    className="comments-login-button btn-stock">Login</span></div>
                                <div className="product-comment__section product-comment__comments-list">
                                    <div className="product-comment__item  63c4642f0b73753d9c03077e"
                                        data-parent_id="63c4642f0b73753d9c03077e">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/haremcinema" title="haremcinema">
                                                <img alt="" className="product-comment__avatar-thumb" src="">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    Thanks for sharing this.
                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/haremcinema">haremcinema</a>
                                                    <span className="product-comment__creation-data">7 months ago</span>
                                                    <span className="product-comment__add-reply" title="haremcinema"
                                                        data-reply_id="63c4642f0b73753d9c03077e">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-comment__item  61c91c8a49fc2c06a17cf4d2"
                                        data-parent_id="61c91c8a49fc2c06a17cf4d2">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/ricarious" title="ricarious">
                                                <img alt="" className="product-comment__avatar-thumb" src="">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    Where are the textures?
                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/ricarious">ricarious</a>
                                                    <span className="product-comment__creation-data">2 years ago</span>
                                                    <span className="product-comment__add-reply" title="ricarious"
                                                        data-reply_id="61c91c8a49fc2c06a17cf4d2">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-comment__item reply 61c91c8a49fc2c06a17cf4d2"
                                        data-parent_id="61c91c8a49fc2c06a17cf4d2">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/3dhaupt" title="3dhaupt">
                                                <img alt="" className="product-comment__avatar-thumb" src="/">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    Thank ^^ ! The textures are packed in Blender! You have to unpack the
                                                    textures if you want to use them for other formats (Collada, DXF, FBX, OBJ)
                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/3dhaupt">3dhaupt</a>
                                                    <span className="product-comment__creation-data">2 years ago</span>
                                                    <span className="product-comment__add-reply" title="3dhaupt"
                                                        data-reply_id="61c91c8a49fc2c06a17cf4d2">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-comment__item reply 61c91c8a49fc2c06a17cf4d2"
                                        data-parent_id="61c91c8a49fc2c06a17cf4d2">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/ricarious" title="ricarious">
                                                <img alt="" className="product-comment__avatar-thumb" src="/">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    For Collada, DXF, FBX, , OBJ, STL download...

                                                    Very nice model, btw.
                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/ricarious">ricarious</a>
                                                    <span className="product-comment__creation-data">2 years ago</span>
                                                    <span className="product-comment__add-reply" title="ricarious"
                                                        data-reply_id="61c91c8a49fc2c06a17cf4d2">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-comment__item  619951e736eafc7ebf49a872"
                                        data-parent_id="619951e736eafc7ebf49a872">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/fzzfahad31" title="fzzfahad31">
                                                <img alt="" className="product-comment__avatar-thumb" src="">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    I hope you go to heaven my guy. this is perfect
                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/fzzfahad31">fzzfahad31</a>
                                                    <span className="product-comment__creation-data">2 years ago</span>
                                                    <span className="product-comment__add-reply" title="fzzfahad31"
                                                        data-reply_id="619951e736eafc7ebf49a872">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-comment__item reply 619951e736eafc7ebf49a872"
                                        data-parent_id="619951e736eafc7ebf49a872">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/3dhaupt" title="3dhaupt">
                                                <img alt="" className="product-comment__avatar-thumb" src="/">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    lol
                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/3dhaupt">3dhaupt</a>
                                                    <span className="product-comment__creation-data">2 years ago</span>
                                                    <span className="product-comment__add-reply" title="3dhaupt"
                                                        data-reply_id="619951e736eafc7ebf49a872">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-comment__item  6172dbfe1e57814a16763012"
                                        data-parent_id="6172dbfe1e57814a16763012">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/gh0ztdragon223"
                                                title="gh0ztdragon223">
                                                <img alt="" className="product-comment__avatar-thumb" src="">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    fire

                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/gh0ztdragon223">gh0ztdragon223</a>
                                                    <span className="product-comment__creation-data">2 years ago</span>
                                                    <span className="product-comment__add-reply" title="gh0ztdragon223"
                                                        data-reply_id="6172dbfe1e57814a16763012">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-comment__item reply 6172dbfe1e57814a16763012"
                                        data-parent_id="6172dbfe1e57814a16763012">
                                        <div>
                                            <a className="product-comment__avatar" href="/user/fzzfahad31" title="fzzfahad31">
                                                <img alt="" className="product-comment__avatar-thumb" src="">
                                                </img>
                                            </a>
                                        </div>
                                        <div className="product-comment--body">
                                            <div className="product-comment__content-container">
                                                <div className="product-comment__content">
                                                    ikr

                                                </div>
                                                <div className="product-comment__meta">
                                                    <a href="/user/fzzfahad31">fzzfahad31</a>
                                                    <span className="product-comment__creation-data">2 years ago</span>
                                                    <span className="product-comment__add-reply" title="fzzfahad31"
                                                        data-reply_id="6172dbfe1e57814a16763012">Reply2</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}


function retrieveCategoryHieracy(product) {
    let nextId = product.categoryId;
    let categHieracy = [];
    let currentCateg = null;
    while (true) {
        currentCateg = ProductUtil.selectCategory(nextId);
        if (!currentCateg || currentCateg.id == 0) {
            //can't find legit category or category is "3D model" (id = 0)
            break;
        }

        categHieracy.push(currentCateg);
        nextId = currentCateg.parent_category;

        if (!nextId
            || nextId == -1)
            break;
    }
    return categHieracy;
}
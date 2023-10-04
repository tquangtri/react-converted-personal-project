import React, { useEffect, useState } from "react";
import "./main.css"
import FakeData from "../../../util/FakeData";
import Category from "../../atoms/Category";

export default function MainBody() {
    const [showingCategs, setShowingCategs] = useState([]);

    useEffect(() => {
        let allCategs = FakeData.fakeProductCategories;

        let showingCategs = [];
        allCategs.forEach(
            each => {
                let isTopLevelCategory = each.parent_category === 0;

                if (isTopLevelCategory) {
                    showingCategs.push(each);
                }
            }
        )
        setShowingCategs(showingCategs);
    }, [])
    return (
        <div className="main">
            <div className="model-type-container">
                <div className="model-type-group">
                    <a href="3d-model/blender" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/blender3179.jpg" />
                        </div>
                        <div className="label-container">
                            <div className="label">Blender Models</div>
                        </div>
                    </a>
                    <a href="3d-model/fbx" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/fbx.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">FBX Models</div>
                        </div>
                    </a>
                    <a href="3d-model/cinema-4d" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/cinema-4d-512-icon.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">Cinema 4D Models</div>
                        </div>
                    </a>
                    <a href="3d-model/Maya" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/Maya.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">Maya Models</div>
                        </div>
                    </a>
                    <a href="3d-model/3d-max" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/3d-max.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">3D Max Models</div>
                        </div>
                    </a>
                    <a href="3d-model/obj" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/obj-icon.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">Obj Models</div>
                        </div>
                    </a>

                    <a href="3d-model/rigged" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/rigged.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">Rigged Models</div>
                        </div>
                    </a>

                    <a href="3d-model/animated" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/man-dancing.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">Animated Models</div>
                        </div>
                    </a>

                    <a href="3d-model/low-poly" className="small-icon">
                        <div className="image">
                            <img alt="" src="asset/image/2560px-LowPoly_Sphere_20.stl.png" />
                        </div>
                        <div className="label-container">
                            <div className="label">Lowpoly Models</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* showing item by category */}
            <div className="category-container">
                {
                    (showingCategs == null)
                        ? (<p>showingCategs failed to load</p>)
                        : (
                            showingCategs.map(
                                eachCateg => {
                                    return <Category eachCateg={eachCateg} key={eachCateg.id}></Category>
                                }
                            )
                        )
                }
            </div>

            {/* rating, best seller sections: */}
            <div className="h-title-container">
                <h3>Best Sellers</h3>
                <div className="subtitle">Our best selling 3d models</div>
                <a href="/premium-3d-models/?sort=date" className="see-all">See All <span className="  ss-right"></span></a>
            </div>
            <div className="h-fWidth-cont ">
                <div className="cont-wrapper homepage-product-listing">
                    <div className="search-result  premium" data-seo_url="low-poly-base-mesh-female-male-2229">
                        <div className="search-result__content-wrapper">

                            <a href="/3d-model/low-poly-base-mesh-female-male-2229.html" className="search-result__thumb-wrapper">
                                <img style={{ maxWidth: '200px' }} className="search-result__thumb"
                                    src="https://preview.free3d.com/img/2010/08/1688650058284664432/vn8lbyfq.jpg"
                                    alt="Low Poly Base Mesh-Female/Male 3d model" title="Low Poly Base Mesh-Female/Male 3d model"
                                    rel="{&quot;pret&quot;:&quot;$15&quot;,&quot;type&quot;:&quot;.lwo .obj&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2010\/08\/1688650058284664432\/vn8lbyfq.jpg&quot;}" />
                                <div className="standard ">
                                </div>
                            </a>
                            <div className="search-result__info-wrapper">
                                <div className="search-result__title"><a href="/3d-model/low-poly-base-mesh-female-male-2229.html"
                                    className="link product-page-link">Low Poly Base Mesh-Female/Male</a></div>
                                <span className="search-result__format">.lwo .obj</span>
                                <div className="search-result__footer">
                                    <span data-price="15" className="search-result__price  product-page-link"><span className="dollar">$</span>15
                                    </span>
                                    <span className="search-result__stats"><span className="stat-item views">183,431</span></span>

                                </div>
                            </div>

                            <div className="sec_entry_group"></div>
                            <a href="/3d-model/low-poly-base-mesh-female-male-2229.html"
                                className="product-tools product-tools__premium product-page-link"><span
                                    className="product-tool product-tool__zoom"></span></a>
                        </div>

                    </div>
                    <div className="search-result  premium" data-seo_url="male-sd-character-base-low-poly-model-3288">
                        <div className="search-result__content-wrapper">

                            <a href="/3d-model/male-sd-character-base-low-poly-model-3288.html" className="search-result__thumb-wrapper">
                                <img style={{ maxWidth: '200px' }} className="search-result__thumb"
                                    src="https://preview.free3d.com/img/2016/03/1688739995193444198/ef2eyila.jpg"
                                    alt="Male SD Character Base Low Poly Model 3d model"
                                    title="Male SD Character Base Low Poly Model 3d model"
                                    rel="{&quot;pret&quot;:&quot;$7&quot;,&quot;type&quot;:&quot;.fbx .ma .obj&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/03\/1688739995193444198\/ef2eyila.jpg&quot;}" />
                                <div className="standard ">
                                </div>
                            </a>
                            <div className="search-result__info-wrapper">
                                <div className="search-result__title"><a href="/3d-model/male-sd-character-base-low-poly-model-3288.html"
                                    className="link product-page-link">Male SD Character Base Low Poly Model</a></div>
                                <span className="search-result__format">.fbx .ma .obj</span>
                                <div className="search-result__footer">
                                    <span data-price="7" className="search-result__price  product-page-link"><span className="dollar">$</span>7
                                    </span>
                                    <span className="search-result__stats"><span className="stat-item views">77,324</span></span>

                                </div>
                            </div>

                            <div className="sec_entry_group"></div>
                            <a href="/3d-model/male-sd-character-base-low-poly-model-3288.html"
                                className="product-tools product-tools__premium product-page-link"><span
                                    className="product-tool product-tool__zoom"></span></a>
                        </div>

                    </div>
                    <div className="search-result  premium" data-seo_url="male-sd-character-base-low-poly-model-3288">
                        <div className="search-result__content-wrapper">

                            <a href="/3d-model/male-sd-character-base-low-poly-model-3288.html" className="search-result__thumb-wrapper">
                                <img style={{ maxWidth: '200px' }} className="search-result__thumb"
                                    src="https://preview.free3d.com/img/2016/03/1688739995193444198/ef2eyila.jpg"
                                    alt="Male SD Character Base Low Poly Model 3d model"
                                    title="Male SD Character Base Low Poly Model 3d model"
                                    rel="{&quot;pret&quot;:&quot;$7&quot;,&quot;type&quot;:&quot;.fbx .ma .obj&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/03\/1688739995193444198\/ef2eyila.jpg&quot;}" />
                                <div className="standard ">
                                </div>
                            </a>
                            <div className="search-result__info-wrapper">
                                <div className="search-result__title"><a href="/3d-model/male-sd-character-base-low-poly-model-3288.html"
                                    className="link product-page-link">Male SD Character Base Low Poly Model</a></div>
                                <span className="search-result__format">.fbx .ma .obj</span>
                                <div className="search-result__footer">
                                    <span data-price="7" className="search-result__price  product-page-link"><span className="dollar">$</span>7
                                    </span>
                                    <span className="search-result__stats"><span className="stat-item views">77,324</span></span>

                                </div>
                            </div>

                            <div className="sec_entry_group"></div>
                            <a href="/3d-model/male-sd-character-base-low-poly-model-3288.html"
                                className="product-tools product-tools__premium product-page-link"><span
                                    className="product-tool product-tool__zoom"></span></a>
                        </div>

                    </div>
                    <div className="search-result  premium" data-seo_url="male-sd-character-base-low-poly-model-3288">
                        <div className="search-result__content-wrapper">

                            <a href="/3d-model/male-sd-character-base-low-poly-model-3288.html" className="search-result__thumb-wrapper">
                                <img style={{ maxWidth: '200px' }} className="search-result__thumb"
                                    src="https://preview.free3d.com/img/2016/03/1688739995193444198/ef2eyila.jpg"
                                    alt="Male SD Character Base Low Poly Model 3d model"
                                    title="Male SD Character Base Low Poly Model 3d model"
                                    rel="{&quot;pret&quot;:&quot;$7&quot;,&quot;type&quot;:&quot;.fbx .ma .obj&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/03\/1688739995193444198\/ef2eyila.jpg&quot;}">
                                </img>
                                <div className="standard ">
                                </div>
                            </a>
                            <div className="search-result__info-wrapper">
                                <div className="search-result__title"><a href="/3d-model/male-sd-character-base-low-poly-model-3288.html"
                                    className="link product-page-link">Male SD Character Base Low Poly Model</a></div>
                                <span className="search-result__format">.fbx .ma .obj</span>
                                <div className="search-result__footer">
                                    <span data-price="7" className="search-result__price  product-page-link"><span className="dollar">$</span>7
                                    </span>
                                    <span className="search-result__stats"><span className="stat-item views">77,324</span></span>

                                </div>
                            </div>

                            <div className="sec_entry_group"></div>
                            <a href="/3d-model/male-sd-character-base-low-poly-model-3288.html"
                                className="product-tools product-tools__premium product-page-link"><span
                                    className="product-tool product-tool__zoom"></span></a>
                        </div>

                    </div>
                    <div className="search-result  premium" data-seo_url="city-2037">
                        <div className="search-result__content-wrapper">

                            <a href="/3d-model/city-2037.html" className="search-result__thumb-wrapper">
                                <img style={{ maxWidth: '200px' }} className="search-result__thumb" src="https://preview.free3d.com/img/2011/07/1688651875299100627/4yxeoawe.jpg" alt="City 3d model" title="City 3d model" rel="{&quot;pret&quot;:&quot;$6&quot;,&quot;type&quot;:&quot;.max .3ds&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2011\/07\/1688651875299100627\/4yxeoawe.jpg&quot;}">
                                </img>
                                <div className="standard ">
                                </div>
                            </a>
                            <div className="search-result__info-wrapper">
                                <div className="search-result__title"><a href="/3d-model/city-2037.html" className="link product-page-link">City</a></div>
                                <span className="search-result__format">.max .3ds</span>
                                <div className="search-result__footer">
                                    <span data-price="6" className="search-result__price  product-page-link"><span className="dollar">$</span>6 </span>
                                    <span className="search-result__stats"><span className="stat-item views">50,581</span></span>

                                </div>
                            </div>

                            <div className="sec_entry_group"></div>

                            <a href="/3d-model/city-2037.html" className="product-tools product-tools__premium product-page-link"><span className="product-tool product-tool__zoom"></span>
                            </a>
                        </div>

                    </div>
                    <div className="search-result  premium" data-seo_url="lowpoly-forest-pack-1418">
                        <div className="search-result__content-wrapper">

                            <a href="/3d-model/lowpoly-forest-pack-1418.html" className="search-result__thumb-wrapper">
                                <img style={{ maxWidth: '200px' }} className="search-result__thumb" src="https://preview.free3d.com/img/2016/07/1761804949458519296/1n8dcods.jpg" alt="LowPoly Forest Pack 3d model" title="LowPoly Forest Pack 3d model" rel="{&quot;pret&quot;:&quot;$1&quot;,&quot;type&quot;:&quot;.blend .fbx .obj&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/07\/1761804949458519296\/1n8dcods.jpg&quot;}">
                                </img>
                                <div className="standard ">
                                </div>
                            </a>
                            <div className="search-result__info-wrapper">
                                <div className="search-result__title"><a href="/3d-model/lowpoly-forest-pack-1418.html" className="link product-page-link">LowPoly Forest Pack</a></div>
                                <span className="search-result__format">.blend .fbx .obj</span>
                                <div className="search-result__footer">
                                    <span data-price="1" className="search-result__price  product-page-link"><span className="dollar">$</span>1 </span>
                                    <span className="search-result__stats"><span className="stat-item views">27,883</span></span>

                                </div>
                            </div>

                            <div className="sec_entry_group"></div>
                            <a href="/3d-model/lowpoly-forest-pack-1418.html" className="product-tools product-tools__premium product-page-link"><span className="product-tool product-tool__zoom"></span>
                            </a>
                        </div>

                    </div>
                    <div className="search-result  premium" data-seo_url="lowpoly-forest-pack-1418">
                        <div className="search-result__content-wrapper">

                            <a href="/3d-model/lowpoly-forest-pack-1418.html" className="search-result__thumb-wrapper">
                                <img style={{ maxWidth: '200px' }} className="search-result__thumb" src="https://preview.free3d.com/img/2016/07/1761804949458519296/1n8dcods.jpg" alt="LowPoly Forest Pack 3d model" title="LowPoly Forest Pack 3d model" rel="{&quot;pret&quot;:&quot;$1&quot;,&quot;type&quot;:&quot;.blend .fbx .obj&quot;,&quot;standard&quot;:null,&quot;imgd&quot;:&quot;https:\/\/preview.free3d.com\/img\/2016\/07\/1761804949458519296\/1n8dcods.jpg&quot;}">
                                </img>
                                <div className="standard ">
                                </div>
                            </a>
                            <div className="search-result__info-wrapper">
                                <div className="search-result__title"><a href="/3d-model/lowpoly-forest-pack-1418.html" className="link product-page-link">LowPoly Forest Pack</a></div>
                                <span className="search-result__format">.blend .fbx .obj</span>
                                <div className="search-result__footer">
                                    <span data-price="1" className="search-result__price  product-page-link"><span className="dollar">$</span>1 </span>
                                    <span className="search-result__stats"><span className="stat-item views">27,883</span></span>

                                </div>
                            </div>

                            <div className="sec_entry_group"></div>
                            <a href="/3d-model/lowpoly-forest-pack-1418.html" className="product-tools product-tools__premium product-page-link">
                            </a>
                            <span className="product-tool product-tool__zoom">

                            </span>
                        </div>

                    </div>
                    <div className="clearfix"></div>
                </div>

            </div>
        </div >
    )
}
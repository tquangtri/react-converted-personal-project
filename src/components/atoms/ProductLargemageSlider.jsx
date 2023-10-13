import React from "react";
import Slider from "react-slick";

export default function ProductLargemageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
    <div></div>
    // <Slider
    //   className="large-image-slider main-product-slider"
    //   id="large-slider"
    //   {...largeSliderSettings}
    //   asNavFor={thumbSlider}
    //   ref={(anySlider) => setThumbSlider(anySlider)}
    // >
    //   <div className="slide-item">
    //     <img alt="" src=""></img>
    //     <h1>WHAT</h1>
    //   </div>
    //   <div className="slide-item">
    //     <img alt="" src=""></img>
    //     <h1>WHAT</h1>
    //   </div>
    // </Slider>
  );
}

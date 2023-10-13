import React from "react";
import Slider from "react-slick";

export default function ProductThumbImageSlider() {
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
    //   className="thumbs-image-slider main-product-slider-nav"
    //   id="thumb-slider"
    //   {...thumbSliderSettings}
    //   asNavFor={largeSlider}
    //   ref={(anySlider) => setLargeSlider(anySlider)}
    // >
    //   <div className="thumb-item">
    //     <h1>WHAT</h1>
    //   </div>
    //   <div className="thumb-item">
    //     <h1>WHAT</h1>
    //   </div>
    // </Slider>
  );
}

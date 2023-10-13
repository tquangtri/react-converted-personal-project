import React, { Component } from "react";
import Slider from "react-slick";

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.nav1,
      nav2: this.nav2,
    });
  }
  render() {
    return (
      <div className="product-slider-container">
        <Slider
          className="large-image-slider main-product-slider"
          id="large-slider"
          // {...largeSliderSettings}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          fade={true}
          rows={1}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.nav2 = slider)}
        >
          {this.props.imgs?.map((eachImageFileName, idx) => {
            return (
              <div className="slide-item" key={idx}>
                <img
                  alt={this.props.product_title_text}
                  src={eachImageFileName}
                ></img>
              </div>
            );
          })}
        </Slider>
        <Slider
          className="thumbs-image-slider main-product-slider-nav"
          id="thumb-slider"
          //{...this.thumbSliderSettings}
          slidesToShow={4}
          slidesToScroll={1}
          dots={false}
          centerMode={true}
          focusOnSelect={true}
          vertical={true}
          verticalSwiping={true}
          swipeToSlide={true}
          //rows={4}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.nav1 = slider)}
        >
          {this.props.imgs?.map((eachImageFileName, idx) => {
            return (
              <div className="thumb-item" key={idx}>
                <img
                  alt={this.props.product_title_text}
                  src={eachImageFileName}
                ></img>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

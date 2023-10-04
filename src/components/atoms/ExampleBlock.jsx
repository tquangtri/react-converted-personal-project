import { useEffect, useState } from "react";

export default function ExampleBlock(props) {
  let pathToProductImage = "asset/image/productImage/";

  const {detailedProduct} = props;

  const [productFileFormats, setProductFileFormats] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    let productFileFormats = "";
    detailedProduct.files.forEach((each) => {
      productFileFormats += "." + each.file_format + " ";
    });    
    setProductFileFormats(productFileFormats);

  }, [detailedProduct]);

  useEffect(() => { 
    let productPrice =
      detailedProduct.price > 0 ? "" + detailedProduct.price : "Free";
    setProductPrice(productPrice);
  }, [detailedProduct]);

  return (
    <div className="example-block">
      <input type="text" className="product-id" hidden defaultValue="-1" />
      <div className="content-wrapper">
        <a href="/" className="link">
          <img
            alt=""
            className="item-img product-bigimg"
            src={pathToProductImage + detailedProduct.imgs[0]}
          />
        </a>
      </div>
      <div className="info-wrapper">
        <div className="title product-title">{detailedProduct.title_text}</div>
        <div className="format product-file-formats">{productFileFormats}</div>
        <div className="example-footer">
          <span className="price product-price">{productPrice}</span>
          <span className="stats">
            <span className="download-count product-download-count">
              {detailedProduct.download_count}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

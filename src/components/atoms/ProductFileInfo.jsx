import React from "react";
import { StringUtil } from "../../util/utils";

export default function ProductFileInfo(props) {
  const { productFileInfo } = props;

  return (
    <div className="product-file-info">
      <div className="file-header">
        <div className="file-formats-expanded" id="file-formats-expanded">
          {StringUtil.upperCaseFirst(productFileInfo.file_format)}
        </div>
        <div className="file-formats" id="file-formats">
          {"(." + productFileInfo.file_format + ")"}
        </div>
        <span className="file-size">16.08 MB</span>
      </div>
      <br></br>
      <div className="file-software"></div>
      <span className="file-renderer">Standard </span>
      <div className="file-name" id="file-name">
        {productFileInfo.file_name}
      </div>
    </div>
  );
}

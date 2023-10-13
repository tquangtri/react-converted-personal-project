import React from "react";

export default function ProductBreadcrumb(props) {
  const {breadCrumbItem} = props;

  return (
    <span className="current-page-title" id="breadcrumb-product-category">
      <a
        href="https://free3d.com/3d-models/aircraft"
        className="link-to-category"
      >
        {breadCrumbItem.name}
      </a>
    </span>
  );
}

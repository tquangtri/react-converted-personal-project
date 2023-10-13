import { useState } from "react";
import "./cart.css";
import { AuthorUtil, ProductUtil, reloadPage } from "../../../../util/utils";
import CartUtil from "../../../../util/CartUtil";

export default function ShopBasket(props) {
  const { isCartShowing, setCartShowing, cart, setCart } = props;

  function toggleCart() {
    if (isCartShowing) {
      setCartShowing(false);
    } else {
      let cart = CartUtil.getLoggedInUserCart();
      if (cart && cart.cartItems.length > 0) {
        setCartShowing(true);
      }
      setCart(cart);
    }
  }

  useState(() => {
    if (cart && cart.cartItems.length > 0) {
      setCartShowing(true);
    }
  }, [cart]);

  useState(() => {
    if(isCartShowing){
      let cart = CartUtil.getLoggedInUserCart();
      if (cart && cart.cartItems.length > 0) {
        setCartShowing(true);
      }    
      setCart(cart);
    }
  }, [isCartShowing]);

  return (
    <div
      className="notf-icon notiff_top ss-basket basket_notiff userStuffs"
      onClick={toggleCart}
    >
      {isCartShowing ? (
        <div className="absolute outside_message_cont">
          <div className="top_triangle_back">
            <div className="top_triangle"></div>
          </div>

          <div className="relative" style={{ minHeight: "100px " }}>
            <div className="top"></div>
            <div className="items-container">
              <div className="sb-products-wrapper">
                {cart?.cartItems?.map((eachCartItem, idx) => {
                  let product = ProductUtil.selectProduct(
                    eachCartItem.productId
                  );
                  if (!product) {
                    return (
                      <p>
                        {" "}
                        NO Product with id {eachCartItem.productId} given by
                        eachCartItem.productId
                      </p>
                    );
                  }

                  let author = AuthorUtil.select(product.authorId);
                  return (
                    <div
                      className="sb-product-dropdown clearfix cart-item"
                      key={idx}
                    >
                      <a href="/">
                        <img alt="" src={product.imgs[0]} width="75"></img>
                      </a>
                      <div className="det">
                        <a className="title" href="">
                          {product.title_text}
                          <span className="light">
                            {" "}
                            {product.title_extra_info}{" "}
                          </span>
                        </a>
                        <div className="auth">
                          by
                          <a href="">{author.username}</a>
                        </div>
                        <div className="price">
                          <span className="dollar">$</span>
                          {product.price}
                        </div>
                      </div>
                      <div className="trash">
                        <button
                          type="button"
                          className="ss-trash"
                          onClick={() => {
                            CartUtil.removeItemFromCart(eachCartItem, cart.id);
                            reloadPage();
                          }}
                        ></button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="sb-bottom-dd">
                <div>
                  Total:
                  <span className="price" id="cart-item-total-price">
                    <span className="dollar">$</span>
                    277
                  </span>
                </div>
                <a href="/" className="btn-stock filled">
                  <span className="ss-cart"></span>
                  Check Out →
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      ) : null}

      <span className="notification-counter " hidden>
        4
      </span>
      <a href="/shopping-cart" className="mobile-link" hidden>
        View cart
      </a>
    </div>
  );
}

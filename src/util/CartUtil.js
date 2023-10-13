import { hadLoggedIn } from "./Authen";
import FakeData from "./FakeData";
import { key_cart } from "./constants";
import { getCurrentUser, AccountUtil, load, save, ArrayUtil } from "./utils";

export default class CartUtil {

    static getLoggedInUserCart() {
        if (hadLoggedIn() === false) {
            return null;
        }

        let user = getCurrentUser();
        user = AccountUtil.select(user.id);
        if (user == null) {
            console.error("no user with id ", user.id);
            return null;
        }
        let userCart = null;

        let needToCreateCartForCurrentUser = !("cartId" in user) || CartUtil.select(user.cartId) == null;

        if (needToCreateCartForCurrentUser) {
            userCart = CartUtil.createNewCart();
            user.cartId = userCart.id;

            //save cart into this user object in userDB
            AccountUtil.saveUser(user);
        } else {
            userCart = CartUtil.select(user.cartId);
        }
        return userCart;
    }
    static selectAll() {
        let cartDB = load(key_cart);
        if(!cartDB){
            save(key_cart, FakeData.fakeUserCart);
            cartDB = load(key_cart);
        }
        return cartDB;
    }
    static select(id) {
        let cartDB = CartUtil.selectAll();

        if (id < 0 || id >= cartDB.length) {
            return null;
        }
        return cartDB[id];
    }

    static createNewCart() {
        let cartDB = CartUtil.selectAll();
        let nextId = cartDB.length;
        let newCart = {
            id: nextId,
            cartItems: []
        };
        cartDB.push(newCart);

        save(key_cart, cartDB);
        return newCart;
    }

    static addToCart(cart, product) {
        let accepted = false;
        if (!cart) return false;

        if (!Array.isArray(product)) {
            product = [product];
        }
        product.forEach(
            eachProduct => {
                let cartItem = CartUtil.findCartItemWithProduct(eachProduct, cart);
                //console.log('findCartItemWithProduct', product, cart, "cartItem", cartItem);
                if (cartItem) {
                    accepted = false;
                    //do nothing, no such thing as purchasing a single 3d-product multiple times                 
                }
                else {
                    cart.cartItems.push(
                        {
                            productId: eachProduct.id,
                        }
                    );
                    accepted = true;
                }
            }
        );

        this.saveCart(cart);
        return accepted;
    }
    static findCartItemWithProduct(product, cart) {
        if (!cart || !product) return null;
        if (!('cartItems' in cart)) return null;
        if (!(cart.cartItems) || cart.cartItems.length === 0) return null;

        let foundCartItem = null;
        cart.cartItems.every(
            eachCartItem => {
                if (!('productId' in eachCartItem)) {
                    return true; //continue loop
                }
                else if (eachCartItem.productId === product.id) {
                    foundCartItem = eachCartItem;
                    return false; // break loop
                }
                return true;
            }
        );
        return foundCartItem;
    }
    static saveCart(cart) {
        let cartDB = CartUtil.selectAll();

        if (cartDB.length <= cart.id) {
            return false;
        }

        cartDB[cart.id] = cart;
        save(key_cart, cartDB);
    }

    static removeItemFromCart(cartItem, cartId) {
        let foundCart = this.select(cartId);
        if (foundCart) {
            ArrayUtil.removeItemFrom(cartItem, foundCart.cartItems);
        }
        this.saveCart(foundCart);
    }
}

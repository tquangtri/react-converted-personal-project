/* eslint-disable */
const salt = 'tom'; //your arbitrary secret key

const key_usersDB = 'users';
const key_currentUser = 'currentUser';
const key_IdOfProductToDisplay = 'showing-product-detail-id';
const key_cart = "currentCart"

//unused: const emailRegex = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
const emailRegex = new RegExp("^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/g;

const app_context = Object.freeze({
    validate_signup: 'validate_signup',
    validate_login: 'validate_login',
})


const display_context = Object.freeze({
    nothing: '',
    warn_empty_password: 'Please input your password',
    warn_weak_password: 'Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ thường, một chữ in hoa và một số va` 1 ki tu dac biet',
    warn_not_an_email: 'Please enter a valid email',
})


export {
    app_context, display_context, emailRegex, passwordRegex,
    key_cart, key_IdOfProductToDisplay, key_currentUser, key_usersDB, salt
}
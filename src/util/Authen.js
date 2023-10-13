/* eslint-disable */
import { key_currentUser, key_usersDB } from "./constants";
import FakeData from "./FakeData";
import { AuthenResult, load, hash, AccountUtil, save, removeFromStorage, reloadPage } from "./utils";


export default class Authen {
    static logOut(){
        if(hadLoggedIn() === false)
            return;

        removeFromStorage(key_currentUser);
        reloadPage();
    }
    static getCurrentUser() {
        if(hadLoggedIn() === false)
            return null;


        let user = load(key_currentUser);
        return {
            email: user.email,
        }
    }

    static authenResult = new AuthenResult();

    /***
     * @param {string} inputEmail
     * @param {string} inputPassword
     * @returns {AuthenResult}
     */
    static loginSubmit(inputEmail, inputPassword) {
        let authenResult = Authen.#validate(inputEmail, inputPassword);

        if (authenResult.isInvalidInput()) {
            console.log("did NOT passed validation");
            return authenResult;
        }

        console.log("validate success, checking in with DB...");

        let hasAccountExisted = false;
        let userDB = load(key_usersDB);

        if (!userDB) {
            Authen.#createFakeUserDB();
            userDB = load(key_usersDB);
        }

        let userFound = null;
        userDB.every((user) => {
            let hashedInputPassword = hash(inputPassword);

            //user.password in DataBase is already hashed
            hasAccountExisted = inputEmail === user.email
                && hashedInputPassword === user.password;

            if (hasAccountExisted) {
                userFound = user;
                console.log("login-success, user found");

                return false; //break out of userDB.every;
            }
            return true; //continue userDB.every;
        });

        if (hasAccountExisted) {
            Authen.#onLoginSuccess(userFound.id, inputEmail, inputPassword);

            authenResult.accountExisted = true;
        } else {
            Authen.#onLoginFailure(inputEmail, inputPassword);

            authenResult.accountExisted = false;
        }
        return authenResult;
    }

    /***
     * @param {string} inputEmail
     * @param {string} inputPassword
     * @returns {AuthenResult}
     */
    static signupSubmit(inputEmail, inputPassword) {

        let authenResult = Authen.#validate(inputEmail, inputPassword);

        if (authenResult.isInvalidInput()) {
            console.log("did NOT passed validation");
            return authenResult;
        }

        console.log("validate success, checking in with DB...");


        let hasAccountExisted = false;
        let userDB = load(key_usersDB);

        if (!userDB) {
            Authen.#createFakeUserDB();
            userDB = load(key_usersDB);
        }

        userDB.every((user) => {
            let hashedInputPassword = hash(inputPassword);

            //user.password is already hashed
            hasAccountExisted = inputEmail === user.email
                && hashedInputPassword === user.password;

            if (hasAccountExisted) {
                console.log("signup-failed cuz user existed");
                return false; //break out of userDB.every;
            }
            return true; //continue userDB.every;
        });

        if (hasAccountExisted) {
            Authen.#onSignupFailure();

            authenResult.accountExisted = true;
        } else {
            Authen.#onSignupSuccess(inputEmail, inputPassword);

            authenResult.accountExisted = false;
        }
        return authenResult;
    };

    /***
     *
     * @param {string} inputEmail
     * @param {string} inputPassword
     * @returns {AuthenResult} validation result
     */
    static #validate(inputEmail, inputPassword) {
        return Authen.validateEmail(inputEmail) && Authen.validatePassword(inputPassword);
    }

    static validateEmail(inputEmail) {
        Authen.authenResult.invalidEmail = false;
        if (inputEmail === "") {
            console.info("empty email !");
            Authen.authenResult.invalidEmail = true;
        }
        else if (!inputEmail.toString().toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            Authen.authenResult.invalidEmail = true;
            console.info("email not matched with regex !");
        }
        else {
            console.info("VALID EMAIL, CONGRAT !!");
        }
        return Authen.authenResult;
    }

    static validatePassword(inputPassword) {
        Authen.authenResult.invalidPassword = false;
        if (inputPassword === "") {
            Authen.authenResult.invalidPassword = true;
            console.error("signup-failed cuz of empty password");
        }

        if (!inputPassword.toString().match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        )) {
            Authen.authenResult.invalidPassword = true;
            console.error("signup-failed-invalid-password");
        }
        return Authen.authenResult;
    }

    static #onSignupFailure = () => {
        console.log('onLoginFailure');
    };

    /***
     * @param {number} userId
     * @param {string} inputEmail
     * @param {string} hashedInputPassword
     */
    static #onLoginSuccess = (userId, inputEmail, hashedInputPassword) => {
        console.log('onLoginSuccess');
        let currentUser = { id: userId, email: inputEmail, password: hashedInputPassword };
        save(key_currentUser, currentUser);
    }


    static #onLoginFailure = () => {
        console.log("onSignupFailure");
    };

    static #onSignupSuccess = (inputEmail, inputPassword) => {
        console.log("onSignupSuccess");

        let hashedInputPassword = hash(inputPassword);
        let newUser = AccountUtil.createUserFrom(inputEmail, hashedInputPassword);
        let DB_users = load(key_usersDB);

        DB_users.push(newUser);
        save(key_usersDB, DB_users);

        //login too...
        save(key_currentUser, newUser);
    };

    static #createFakeUserDB() {
        let DB_users = FakeData.fakeUserData;
        DB_users.forEach(element => {
            element.password = hash(element.password);
        });
        save(key_usersDB, DB_users);
    }
}

export function hadLoggedIn() {
    return load(key_currentUser) != null;
};


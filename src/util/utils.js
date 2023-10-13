import md5 from "md5";
import { salt, key_currentUser, key_usersDB, passwordRegex } from "./constants";
import FakeData from "./FakeData";


let hash = (content) => {
    return md5(salt + content);
}

let toJson = (dataInJavascript) => {
    return JSON.stringify(dataInJavascript);
}
let fromJson = (dataAsJsonString) => {
    return JSON.parse(dataAsJsonString);
}

let save = (key, content) => {
    localStorage.setItem(key, toJson(content));
}

export let load = (key) => {
    return fromJson(localStorage.getItem(key));
}

let removeFromStorage = (key) => {
    localStorage.removeItem(key);
}


let getCurrentUser = () => {
    return load(key_currentUser);
}
let isUndefined = (someVar) => {
    return typeof someVar === 'undefined';
}


let arrayFromHTMLCollection = (targetHTMLCollection) => {
    let newArray = [];
    for (let i = 0; i < targetHTMLCollection.length; i++) {
        newArray.push(targetHTMLCollection[i]);
    }
    return newArray;
}

let fixUpId = (arrayOfObjs) => {
    let id = 0;
    arrayOfObjs.forEach(element => {
        element.id = id;
        id++;
    });
    return arrayOfObjs;
}

let convertToDate = (dayAsDDMMYYYY, splitString = "-") => {
    let dateParts = dayAsDDMMYYYY.split(splitString);

    // month is 0-based, that's why we need dataParts[1] - 1
    let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    return dateObject;
}

let cloneDOM = (source, keepSameParent = true) => {

    let newDOM = source.cloneNode(true);

    if (keepSameParent) {
        let sharedParentNode = source.parentNode;
        sharedParentNode.appendChild(newDOM);
    }
    //TODO: gen new id for newDOM
    return newDOM;
}


class StringUtil {
    static upperCaseFirst(targetString) {
        let firstLetterCapped = targetString.charAt(0).toUpperCase();
        let remainingLetters = targetString.slice(1);

        return firstLetterCapped + remainingLetters;
    }
}

class AccountUtil {
    static selectAll() {
        let userDB = load(key_usersDB);
        return userDB;
    }
    static select(id) {
        let userDB = load(key_usersDB);

        if (id < 0 || id >= userDB.length) {
            return null;
        }
        return userDB[id];
    }
    static createUserFrom(inputEmail, hashedInputPassword) {
        let userDB = load(key_usersDB);
        let nextId = (userDB) ? userDB.length : 0;
        return {id: nextId, email: inputEmail, password: hashedInputPassword }
    }
    static addUser(user) {
        let userDB = this.selectAll();
        user.id = userDB.length;
        userDB.push(user);
        save(key_usersDB, userDB);
        return userDB[user.id];
    }

    static saveUser(targetUser) {
        let foundUser = this.select(targetUser.id);
        if (!foundUser) {
            foundUser = this.addUser(targetUser);
        }
        let userDB = this.selectAll();
        userDB[foundUser.id] = targetUser;
        save(key_usersDB, userDB);
        return userDB[foundUser.id];
    }
}

class AuthorUtil {
    static select(id) {
        return FakeData.fakeAuthors[id];
    }
}
class ProductUtil {

    static selectProduct(productId) {
        return FakeData.fakeProductDetailInfos[productId];
    }

    static selectCategory(categoryId) {
        let allCategs = FakeData.fakeProductCategories;
        let resultCategory = null;
        // allCategs.every(
        //     each => {
        //         if(each.id = categoryId){
        //             resultCategory = each;
        //             return false;
        //         }
        //         return true;
        //     }
        // );
        if (categoryId <= allCategs.length - 1) {
            resultCategory = allCategs[categoryId];
        }
        return resultCategory;
    }

    static doesProductBelongToCategoryHierachy(topCategory, product, maxDepth = 4) {
        let nextCateg = ProductUtil.selectCategory(product.categoryId);

        let currentDepthCount = 1;
        while (nextCateg != null) {
            if (nextCateg.id === topCategory.id) {

                return true;
            }
            nextCateg = ProductUtil.selectCategory(nextCateg.parent_category);
            currentDepthCount++;
            if (currentDepthCount > maxDepth) {
                break;
            }
        }

        return false;
    }
}

class ArrayUtil {
    static removeItemFrom(item, array) {
        if (!array) {
            console.error("array param is null");
            return array;
        }
        let indexOf = array.indexOf(item);
        if (indexOf < 0 && indexOf >= array.length) {
            console.error("no such item ", item, " in ", array);
            return array;
        }
        array.splice(indexOf, 1);
        return array;
    }
}

export class AuthenResult {
    invalidEmail = false;
    invalidPassword = false;
    accountExisted = false;

    isInvalidInput = () => {
        return this.invalidEmail
            || this.invalidPassword;
    }
    isSignupPassed = () => {
        return !this.isInvalidInput()
            && !this.accountExisted;
    }
    isLoginPassed = () => {
        return !this.isInvalidInput()
            && this.accountExisted;
    }
}

export let matchRegexPassword = (target) => {
    return target.toString().match(passwordRegex) != null;
}

let reloadPage = () => {
    window.location.reload();
}

/***
 * @returns {boolean}
 */
let isFunction = (any) => {
    let tryCheck = any && {}.toString.call(any) === '[object Function]';

    //tryCheck can be 'undefined' yet we only want to return a boolean
    if (!tryCheck) {
        return false;
    }
    return true;
}

export {
    hash, arrayFromHTMLCollection, cloneDOM,
    convertToDate, fromJson, getCurrentUser,
    removeFromStorage, save, toJson,
    fixUpId, AccountUtil, ArrayUtil, AuthorUtil, ProductUtil, StringUtil,
    isUndefined, isFunction,
    reloadPage
}

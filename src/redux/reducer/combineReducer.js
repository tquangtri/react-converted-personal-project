import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({ 
        cartReducer: cartReducer,
        todoReducer: todoReducer
    }
)

export default rootReducer
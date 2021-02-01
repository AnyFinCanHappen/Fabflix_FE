import themeReducer from "./themeReducer";
import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";

const globalState = combineReducers({
    isTheme: themeReducer,
    isLogged: loggedReducer
});

export default globalState;
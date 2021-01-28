import themeChanger from "./themeChanger";
import {combineReducers} from "redux";

const globalState = combineReducers({
    isTheme: themeChanger
});

export default globalState;
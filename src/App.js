import React from "react";
import changeTheme from "./actions/changeTheme";
import {useSelector, useDispatch} from "react-redux";
import themeChanger from "./reducers/themeChanger";

function App() {
  const isTheme = useSelector(state => state.isTheme);
  console.log(isTheme);
  const dispatch = useDispatch();
  return (
    <div style = {{textAlign : "center"} }>
      dark mode
      <button onClick = {()=>dispatch(changeTheme(themeChanger))}> Click me!</button>
    </div>
  );
}

export default App;

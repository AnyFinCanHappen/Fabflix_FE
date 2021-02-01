/*
//React-Redux library
import {useSelector, useDispatch} from "react-redux";
//Redux Reducers

import changeTheme from "./actions/changeTheme";
import changeLogged from "./actions/changeLogged";
import themeReducer from "./reducers/themeReducer";
import loggedReducer from "./reducers/loggedReducer";
*/
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Row from "react-bootstrap/Row";
import NavBar from "./content/NavBar";

import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import LoginPage from "./content/LoginPage";
import RegisterPage from "./content/RegisterPage";

function App() {
    //const isTheme = useSelector(state => state.isTheme);
    //const isLogged = useSelector(state => state.isLogged);
    //const dispatch = useDispatch();
    return (
        <div>
            <Row>
                <NavBar></NavBar>
                <NotificationContainer/>
            </Row>
            <Row className = "align-items-center">
            <Router>
                <Switch>
                        <Route path="/login">
                            <LoginPage></LoginPage>
                        </Route>
                        <Route path = "/register">
                            <RegisterPage></RegisterPage>
                        </Route>
                </Switch>
            </Router>
            </Row>
        </div>
    );
}

export default App;

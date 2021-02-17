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
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import LoginPage from "./content/LoginPage";
import RegisterPage from "./content/RegisterPage";
import SearchPage from "./content/Search/SearchPage";

function App() {
    //const isTheme = useSelector(state => state.isTheme);
    //const isLogged = useSelector(state => state.isLogged);
    //const dispatch = useDispatch();
    return (
        <div style = {{overflowX:"hidden"}}>
            <Container fluid = "true">
                <Row>
                    <Col>
                        <NavBar></NavBar>
                    </Col>
                </Row>
                <NotificationContainer />
                <Row className="align-items-center" style = {{marginTop: "5vh"}}>
                    <Router>
                        <Switch>
                            <Route path="/login">
                                <LoginPage></LoginPage>
                            </Route>
                            <Route path="/register">
                                <RegisterPage></RegisterPage>
                            </Route>
                            <Route path = "/search">
                                <SearchPage></SearchPage>
                            </Route>
                        </Switch>
                    </Router>
                </Row>
            </Container>
        </div>
    );
}

export default App;

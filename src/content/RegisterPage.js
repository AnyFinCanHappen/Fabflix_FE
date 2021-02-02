import { Form, Col, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import registerEndpoint from "../util/IdmApi/RegisterEndpoint";
function LoginPage() {
    const [state, setState] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    useEffect(() => {
        return false;
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            email: state.email,
            password: state.password,
        };
        registerEndpoint(payload)
            .then((response) => {
                let { data } = response;
                if (data.resultCode === 110) {
                    NotificationManager.success("Registered Successfully");
                    history.push("/login");
                } else {
                    setIsError(true);
                    setErrorMessage(data.message);
                }
                setLoading(false);
            })
            .catch((error) => {
                let { data } = error.response;
                setIsError(true);
                setErrorMessage(data.message);
                setLoading(false);
            });
    };
    return (
        <>
            <Col xs={{ span: 8, offset: 2 }} sm={{ span: 4, offset: 4 }}>
                <div style={{ fontSize: "x-large" }}>Register Page</div>
                {!isLoading ? (
                    <div>
                        <Form
                            onSubmit={handleSubmit}
                            style={{ marginTop: "20px" }}
                        >
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    placeholder="Enter email."
                                    onChange={handleChange}
                                    name="email"
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    placeholder="Enter password."
                                    onChange={handleChange}
                                    name="password"
                                ></Form.Control>
                            </Form.Group>
                            {isError ? (
                                <div style={{ color: "red" }}>
                                    {"Error: " + errorMessage}
                                </div>
                            ) : (
                                <br></br>
                            )}
                            <div style={{ paddingTop: "10px" }}>
                                <Button type="submit">Register</Button>
                            </div>
                        </Form>
                        <br></br>
                        <Button
                            onClick={() => {
                                history.push("/login");
                            }}
                        >
                            Login Page
                        </Button>
                    </div>
                ) : (
                    <div style = {{marginTop:"20px"}}>
                        <Spinner animation="border"></Spinner>
                        Loading
                        <br></br>
                    </div>
                )}
            </Col>
        </>
    );
}
export default LoginPage;

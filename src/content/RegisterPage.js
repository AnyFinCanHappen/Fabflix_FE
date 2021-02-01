import { Form, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import registerEndpoint from "../util/IdmApi/RegisterEndpoint";
function LoginPage() {
    const [state, setState] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                }
            })
            .catch((error) => {
                let { data } = error.response;
                setIsError(true);
                setErrorMessage(data.message);
            });
    };
    return (
        <>
            <Col xs={{ span: 8, offset: 2 }} sm={{ span: 4, offset: 4 }}>
                <div>
                    Register Page
                    <Form onSubmit={handleSubmit}>
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
                            <div style={{ color: "red" }}>{errorMessage}</div>
                        ) : (
                            <br></br>
                        )}
                        <Button type="submit">Register</Button>
                    </Form>
                </div>
            </Col>
        </>
    );
}
export default LoginPage;

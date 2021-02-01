import { Form, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import loginEndpoint from "../util/IdmApi/LoginEndpoint";
function LoginPage() {
    const [state, setState] = useState({ email: "", password: "" });
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
        loginEndpoint(payload).then((response) => {
            let { data } = response;
            console.log(data);
        });
    };
    return (
        <>
            <Col xs={{ span: 8, offset: 2 }} sm={{ span: 4, offset: 4 }}>
                <div>
                    Login Page
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
                        <Button type="submit">Login</Button>
                    </Form>
                    <br></br>
                    <Button
                        onClick={() => {
                            history.push("/register");
                        }}
                    >
                        Sign Up
                    </Button>
                </div>
            </Col>
        </>
    );
}
export default LoginPage;

import { Form, Col, Button, Spinner } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import loginEndpoint from "../util/IdmApi/LoginEndpoint";
function LoginPage() {
    const [state, setState] = useState({ email: "", password: "" });
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(()=>{
        return false;
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            email: state.email,
            password: state.password,
        };
        loginEndpoint(payload)
            .then((response) => {
                let { data } = response;
                console.log(data);
                if (data.resultCode === 120) {
                    localStorage.setItem('email',state.email);
                    localStorage.setItem('session_id', data.session_id);
                    NotificationManager.success("Logged in successfully.");
                    history.push("/");
                } else {
                    setError(true);
                    setErrorMessage(data.message);
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                if(error.response !== undefined){
                    let { data } = error.response;
                    console.log(error);
                    setErrorMessage(data.message);
                }
                setLoading(false);
            });
    };
    return (
        <>
            <Col xs={{ span: 8, offset: 2 }} sm={{ span: 4, offset: 4 }}>
                <div style={{ fontSize: "x-large" }}>Login Page</div>
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
                                <Button type="submit">Login</Button>
                            </div>
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
                ) : (
                    <div>
                        <Spinner animation="border"></Spinner>
                        <br></br>
                        Loading
                    </div>
                )}
            </Col>
        </>
    );
}
export default LoginPage;

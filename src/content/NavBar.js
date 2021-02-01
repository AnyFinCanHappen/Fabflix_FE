import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function NavBar() {
    return (
        <>
            <Navbar>
                <Navbar.Brand>
                    <Nav.Link>Home</Nav.Link>
                </Navbar.Brand>
                <Nav.Link>Search</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Navbar>
        </>
    );
}

export default NavBar;

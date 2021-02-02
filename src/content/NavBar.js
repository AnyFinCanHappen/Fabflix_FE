import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/nav_bar.css"
function NavBar() {
    return (
        <>
            <Navbar className = "navbar-color">
                <Navbar.Brand>
                    <Nav.Link href = "/">Home</Nav.Link>
                </Navbar.Brand>
                <Nav.Link href = "/search">Search</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Navbar>
        </>
    );
}

export default NavBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavigationBar = ({brand}) => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">{brand}</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/services">Services</NavLink>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
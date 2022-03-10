import React from 'react';
import CartWidget from "./CartWidget";
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserLoggedIn from './UserLoggedIn';
import SignOut from './SignOut';

const NavBar = () => {
    return (
        <div style={{ fontSize: "1rem"}}>
            <Navbar expand="lg" style={{ backgroundColor: "#fff159" }} fixed="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Birrapp!</Navbar.Brand>
                    <div>
                        <Navbar.Collapse className="menuDesplegable" id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                            >
                            <Nav.Link as={NavLink} to="/category/Clásica">Clásicas</Nav.Link>
                            <Nav.Link as={NavLink} to="/category/Premium">Premium</Nav.Link>
                            <Nav.Link as={NavLink} to="/category/Artesanal">Artesanales</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav>
                        <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
                    </Nav>
                    <Nav>
                        <UserLoggedIn/>
                        <SignOut/>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar; 
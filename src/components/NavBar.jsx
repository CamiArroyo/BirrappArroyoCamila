import React from 'react';
import CartWidget from "./CartWidget";
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';

/* FUTURO DESPLEGABLE EN EL NAVBAR
    <NavDropdown title="Familias" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action1">Quilmes</NavDropdown.Item>
        <NavDropdown.Item href="#action2">Patagonia</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Andes Origen</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Stella Artois</NavDropdown.Item>
    </NavDropdown>
 */

const NavBar = () => {
    return (
        <div style={{ fontSize: "1rem"}}>
            <Navbar expand="lg" style={{ backgroundColor: "#fff159" }} fixed="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Birrapp</Navbar.Brand>
                    <div>
                        <Navbar.Collapse className="menuDesplegable" id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                            >
                            <Nav.Link as={NavLink} to="/category/1">Clásicas</Nav.Link>
                            <Nav.Link as={NavLink} to="/category/2">Premium</Nav.Link>
                            <Nav.Link as={NavLink} to="/category/3">Artesanales</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Busque un producto"
                        aria-label="Search"
                        />
                        <Button variant="secondary"><BsSearch size="1.5em" color="white"/></Button>
                    </Form>
                    <Nav>
                        <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
                    </Nav>
                
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar; 
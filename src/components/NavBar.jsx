import React from 'react';
import CartWidget from "./CartWidget";
import {Container, Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {BsSearch} from "react-icons/bs";
import {Link} from 'react-router-dom';

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
                            <Nav.Link href="#action1">Clásicas</Nav.Link>
                            <Nav.Link href="#action2">Premium</Nav.Link>
                            <Nav.Link href="#action3">Artesanales</Nav.Link>
                            <NavDropdown title="Familias" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action1">Quilmes</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">Patagonia</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Andes Origen</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Stella Artois</NavDropdown.Item>
                            </NavDropdown>
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
                    <Button variant="secondary"><CartWidget /></Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar; 
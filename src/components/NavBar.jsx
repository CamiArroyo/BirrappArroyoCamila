import React from 'react';
import {Container, Nav, Navbar, NavDropdown, Form, FormControl, Button, Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';

const Navegationbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">Birrapp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link href="#action2">Nosotros</Nav.Link>
                        <NavDropdown title="Nuestros productos" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action1">Todos los productos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action2">Clásicas</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Premium</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Artesanales</NavDropdown.Item>
                            <div className="mb-2">
                                {['end'].map((direction) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant={`Secondary`}
                                    title={`Familias`}
                                >
                                    <Dropdown.Item eventKey="1">Quilmes</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Patagonia</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Andes Origen</Dropdown.Item>
                                    <Dropdown.Item eventKey="4">Stella Artois</Dropdown.Item>
                                </DropdownButton>
                                ))}
                            </div>
                        </NavDropdown>
                        <Nav.Link href="#action1">Contacto</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Escriba aquí"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navegationbar; 
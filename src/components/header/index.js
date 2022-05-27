import React from "react";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Hoja de vida</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/about">Perfil personal</Nav.Link>
                    <Nav.Link href="/skills">Habilidades</Nav.Link>
                    <Nav.Link href="/education">Educacion</Nav.Link>
                    <Nav.Link href="/contact">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default header;
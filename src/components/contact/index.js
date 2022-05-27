import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function contact(){
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="Nombre completo" placeholder="Ingrese nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="Correo electronico" placeholder="Ingrese su correo electronico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Asunto</Form.Label>
                <Form.Control type="Asunto" placeholder="Ingrese el asunto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control type="Mensaje" placeholder="Ingrese el mensaje" />
            </Form.Group>
                <Button variant="primary" type="Enviar">
                Enviar
                </Button>
        </Form>

    )
    
}

export default contact;
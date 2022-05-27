import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function contact(props){
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="Nombre completo" placeholder={props.nameZero} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="Correo electronico" placeholder={props.nameOne} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Asunto</Form.Label>
                <Form.Control type="Asunto" placeholder={props.nameTwo} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control type="Mensaje" placeholder={props.nameThree} />
            </Form.Group>
                <Button variant="primary" type="Enviar">
                Enviar
                </Button>
        </Form>

    )
    
}

export default contact;
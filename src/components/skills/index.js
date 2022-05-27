import React from "react";
import { Card } from 'react-bootstrap';

function about(){
    return(
        <div className="card" style={{width:'40rem'}} >
            <Card >
                <Card.Body >
                <Card.Title>H A B I L I D A D E S</Card.Title>
                <Card.Text>
                    <li>Buena compañera y con capacidad de trabajo independiente</li>
                    <li>Facilidad para seguir instrucciones y generar resultados de calidad</li>
                    <li>Capaz de analizar información</li>
                    <li>Buen manejo de Redes sociales</li>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default about;
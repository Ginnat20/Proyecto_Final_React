import React from "react";
import { Card } from 'react-bootstrap';

function about(){
    return(
        <div className="card" style={{width:'40rem'}} >
            <Card >
                <Card.Body >
                <Card.Title>E D U C A C I O N </Card.Title>
                <Card.Text>
                    Bachiller tecnica comercial, certificado en tecnica de venta de productos y servicios y actualmente estoy en quinto semestre de Ingenieria en Sistemas y Telecomunicaciones en la Universidad de Manizales
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default about;
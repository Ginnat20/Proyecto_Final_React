import React from "react";
import { Card } from 'react-bootstrap';
import img from './img/holder.jpg'

function about(){
    return(
        <div className="card" style={{width:'40rem'}} >
            <Card >
                { <div className="img-fluid">
                    <Card.Img variant="top" src={img} style={{width:'20rem'}} />
                </div> }
                <Card.Body >
                    <Card.Title>P E R F I L  P E R S O N A L</Card.Title>
                    <Card.Text>
                        Gran motivación para seguir perfeccionando habilidades y crecer profesionalmente. Confio plenamente en mi capacidad de producir ideas interesantes para mi ámbito laboral que no pasaran desapercibidas.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default about;

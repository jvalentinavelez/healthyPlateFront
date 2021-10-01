import "./Receta.css";
import {Card} from 'react-bootstrap';



function Receta({name, image}){

    return(
    <Card style={{width:'12rem'}} className="Card sm-2">
        <Card.Img className="CardImage"variant="top" src={image} />
        <Card.Body className="CardBody">
            <Card.Subtitle className="CardSubtitle mb-2 text-muted">{name}</Card.Subtitle> 
        </Card.Body>
    </Card>
    );
}

export default Receta;
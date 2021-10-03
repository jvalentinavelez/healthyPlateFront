import "./Receta.css";
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";



function Receta({name, image, id}){

    return(
        <Card style={{width:'12rem'}} className="Card sm-2">
        <Link to={`/${id}`} className="Cardlink">
        <Card.Img className="CardImage"variant="top" src={image} />
        <Card.Body className="CardBody">
            <Card.Subtitle className="CardSubtitle mb-2 text-muted">{name}</Card.Subtitle> 
        </Card.Body>
        </Link>
    </Card>
    );
}

export default Receta;
import "./Receta.css";
import {Card} from 'react-bootstrap';



function Receta(){
/* 
    const [receta, setReceta] = useState(undefined);

    useEffect(() => {
    fetch(`http://localhost:3000/json/${id}.json`)
        .then((response) => response.json())
        .then((data) => setPelicula(data));
    }, [id]); */


    return(
    <Card style={{width:'12rem'}} className="Card sm-2">
        <Card.Img className="CardImage"variant="top" src="/img/teriyaki.jpg" />
        <Card.Body className="CardBody">
            <Card.Subtitle className="CardSubtitle mb-2 text-muted">Pollo Teriyaki</Card.Subtitle> 
        </Card.Body>
    </Card>
    );
}

export default Receta;
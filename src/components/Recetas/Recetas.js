import "./Recetas.css";
import Receta from "../Receta/Receta.js";

function Recetas(){

    return(
        <>
            <section className="carousel">
                <div className="carousel__container">
                <Receta></Receta>
                <Receta></Receta>
                <Receta></Receta>
                <Receta></Receta>
                </div>
            </section>
            

        </>
    );
}
export default Recetas;
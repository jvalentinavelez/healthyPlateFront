import "./Recetas.css";
import { useState, useEffect } from "react";
import Receta from "../Receta/Receta.js";

function Recetas(){

    const [Recetas, setRecetas] = useState([]);

    useEffect(()=>{
        fetch("./json/Recetas.json")
        .then((response)=>response.json())
        .then((data)=>setRecetas(data));
    },[]);

    
    return(
        <>
            <section className="carousel">
                <div className="carousel__container">
                    {Recetas.map((receta)=>{
                        if (receta.dayTime==='Almuerzo') {
                            return(
                                <Receta
                                    name={receta.name}
                                    image={receta.image}
                                />
                            ); 
                        }
                    })}
                </div>
            </section>
            

        </>
    );
}
export default Recetas;
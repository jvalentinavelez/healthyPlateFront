import "./Recetas.css";

function Recetas(){

    return(
        <>
            <section className="carousel">
                <div className="carousel__container">
                    <div className="carousel-item">
                        <img className="carousel-item__img" src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="console"/>
                        <div className="carousel-item__details">
                            <div>
                                <img src="./img/icons/play-icon.png" alt="play"/>
                                <img src="./img/icons/plus-icon.png" alt="plus"/>
                            </div>
                        </div>
                        <p className="carousel-item_details--title">Titulo descriptivo</p>
                        <p className="carousel-item_details--subtitle">2019 16+ 114vies</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Recetas;
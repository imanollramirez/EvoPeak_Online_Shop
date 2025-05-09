import rectangleDer from "../../assets/Rectangle Der.png"
import rectangleIzq from "../../assets/Rectangle Izq.png"
import "./Welcome.css"


const Welcome = () => {
    return (
        <>

        <div className="products-container">
            <h1 className="title-welcome">Bienvenido/a</h1>
            <h2 className="subtitle">Usuario</h2>
            <img src={rectangleIzq} className="left-t" />
            <img src={rectangleDer} className="right-t"/>
        </div>

        </>


    );
};





export default Welcome;

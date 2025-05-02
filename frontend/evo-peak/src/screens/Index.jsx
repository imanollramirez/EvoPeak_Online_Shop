import info1 from "../assets/info_1.png"
import info2 from "../assets/info_2.png"
import info3 from "../assets/info_3.png"
import info4 from "../assets/info_4.png"

import shape1 from "../assets/shape_1.png"
import shape2 from "../assets/shape_2.png"

import image1 from "../assets/img1.png"
import "./index.css"

const Index = () => {
    return (
     <>
     <div className="top-container d-block">
     <h1 className="title ms-5">Bienvenidos a<br /> EvoPeak</h1>
     <p className="description ms-5">Somos una tienda línea de artículos para Gimnasio, <br/>
     ubicados en El Salvador.</p>
     <a href="/products"><button className="go-to-products ms-5">Ver Artículos</button></a>
     </div>
     <div className="question text-center"><h1>¿Porqué elegirnos?</h1></div>
     <div className="why-choose-us position-relative">
        
        <img src={shape1} className="rec-index"/>

        <h3 className="text-center mb-5">Somos una tienda en línea que ofrece amplia variedad de productos.</h3>
        <div className="benefit">
        <div className="info">
            <img src={info1}/>
            <h4>Entrega sin costo</h4>
            <p>Las entregas de los productos se realizan sin ningún costo adicional al total del pedido.</p>
        </div>

        <div className="info">
        <img src={info2}/>
            <h4>Amplia variedad</h4>
            <p>Contamos con una amplia variedad de artículos de GYM de diferentes proveedores.</p>
        </div>

        <div className="info">
        <img src={info3}/>
            <h4>Compra fácil</h4>
            <p>Puedes realizar las compra desde el sitio web, desde tu teléfono y sin necesidad de visitar una tienda física.</p>
        </div>

        <div className="info">
        <img src={info4}/>
            <h4>Sin Límites</h4>
            <p>Las entregas se realizan a todo el País de El Salvador.</p>
        </div>  
        </div>
                

        <img className="img position-absolute bottom-0 end-0" src={image1}/>
        <img src={shape2} className="rec-index position-absolute bottom-0 end-0"/>
     </div>
     <div className="background">
             <h1 className="title2 text-center">Redes sociales</h1>
             <p className="description text-center">Puedes encontarnos en las diferentes redes <br /> sociales como <span className="at">@EvoPeak_SV</span>.</p>
         </div>
     </>   
    );
    }

export default Index;
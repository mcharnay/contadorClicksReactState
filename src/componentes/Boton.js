import React from "react";
import '../hoja-de-estilo/Boton.css';

//el props, acá está usándose como objeto de desestructuración
//dentro de la clase del botón hay un operador ternario, si es true, una clase, si no, otra clase. Si es un botón de clic o un botón de reiniciar.
//manejarClic usará un addEventListener al clickear.
function Boton({ texto, esBotonDeClic, manejarClic }){
    return(
        <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
         onClick={manejarClic}> 
            {texto}
        </button>
    );
}

export default Boton;
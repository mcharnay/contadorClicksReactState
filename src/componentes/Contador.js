import React from "react";
import '../hoja-de-estilo/Contador.css'

function Contador ( {numclics} ){
    return(

        <div className="contador">
            {numclics}
        </div>
    );
}

export default Contador;
import './App.css';
import lynchLogo from './imagenes/lynch-programming-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = () => {
    setNumClics(numClics  + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
        <Contador numclics={numClics}/>

        <div className='contenedor-principal'> 
            <br></br>
            <Boton 
              texto = 'Clic'
              esBotonDeClic={true}
              manejarClic={manejarClic} />
            <Boton 
             texto = 'Reiniciar'
             esBotonDeClic={false}
             manejarClic={reiniciarContador}/>
        </div>
    </div>
  );
}

export default App;

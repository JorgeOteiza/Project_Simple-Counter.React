import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './App.css';

let interval = null;

function SecondsCounter() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    interval = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente
  
  useEffect(() => {
    if(segundos == 999999){
      clearInterval(interval)
    }
  }, [segundos])

  // Limita el contador a 6 dígitos y agrega un símbolo de reloj
  const formattedSeconds = segundos.toString().padStart(6, '0');
console.log(segundos)
  return (
    <section style={{display: "flex"}}>
      <div className="col col-2">
            <div className="card">
              <div className="card-body">
                <i className="fa fa-clock-o"></i>
              </div>
            </div>
      </div>
    <div className='row'>
       {formattedSeconds.toString().split('').map((digito, index) => (
          <div className="col col-2" key={digito + index}>
            <div className="card">
              <div className="card-body">
                {digito}
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <SecondsCounter />
    </div>
  );
}

export default App;
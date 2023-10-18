import React, { useState, useEffect } from 'react'
import './App.css';

function SecondsCounter() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval (() => {
      setSegundos(segundos => segundos +1);
    }, 1000)
  }, []);
  return (
    <div>
      <h1>Contador de segundos</h1>
      <p>Segundos: {segundos}</p>
    </div>
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
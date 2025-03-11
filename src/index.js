import React from 'react';
import ReactDOM from 'react-dom/client';  // Asegúrate de importar desde 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear el root utilizando ReactDOM.createRoot() en lugar de ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById('root'));  // Crear el root
root.render(  // Usar .render() para renderizar la aplicación
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas empezar a medir el rendimiento en tu app, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
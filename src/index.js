import React from 'react';
import ReactDOM from 'react-dom/client';// bootstrap debe aparecer encima de los estilos, si hay estilos privados que sobreescriban bootstrap se puedan escribir bien
import 'bootstrap/dist/css/bootstrap.css';
// importante, los estilos propios deben ir debajo de boostrap para que no los pisen
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

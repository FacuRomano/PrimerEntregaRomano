//se importan los archivos necesarios para nuestro proyecto
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//el DOM es una representaicon que el navegador entiende de nuestra pagina web. Este se suele representar en forma de arbol estilo genealogico.

//el VIRTUAL DOM es una representación del "real" DOM guardada en memoria, que actúa de intermediario entre los estados de la app y los estados del real DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el real DOM para que renderice la menor cantidad de cambios posibles.

//se complementa con la tecnologia "Fiber"

//el root crea el DOM de nuestro proyecto

//el flujo de datos es unidireccional, arriba para abajo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

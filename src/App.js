//Se importan todos los componentes creados para complementar la app

import { useState } from 'react';
import  { ItemListContainer } from './components/ItemListContainer';
import Navbar from './components/Navbar/navBar';

//la funciones conforman a los componentes. Es decir, un componente es un conjunto de una o mas funciones que cumplen un objetivo.

//App es el componente principal al que se le van a agregar los demas componentes y esta app se va a ubicar en el root del html.
function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer  texto='PRODUCTO MAS VENIDO'/>
    </>
  );
}

export default App;

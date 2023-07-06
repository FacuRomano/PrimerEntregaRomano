import React,{useEffect, useState} from 'react'
import '../Navbar/navBar.css';

export const ItemCount = ({initial, stock, onAdd}) => {
    //useState y funciones del carrito
    const [contador, setContador] = useState(initial);

    const handleReducir = () => {
    setContador(contador - 1);
    }

    const handleIncrementar = () =>{
    setContador(contador + 1);
    }

    //useEffect, utilizo el hook para establecer el contador con el valor inicial: 'initial'
    useEffect(() => {
        setContador(parseInt(initial));
    }, [initial])

  return (
    <div className='agregarCarrito'>
        <button className='buttonCart' disabled={contador <=1 } onClick={handleReducir}>-</button>
        <span>{contador}</span>
        <button className='buttonCart' disabled={contador >= stock } onClick={handleIncrementar}>+</button>
        <div>
            <button className='buttonAdd' disabled={stock <= 0} onClick={() => onAdd(contador)}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;

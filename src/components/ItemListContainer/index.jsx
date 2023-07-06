import React from 'react'
import Title from '../Title';
import ItemCount from '../ItemCount';
import '../Navbar/navBar.css';

export const ItemListContainer = ({texto}) => {

    const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} unidades al carrito`)
    }

  return (
    <div className='producto'>
    <Title greeting = {texto} />
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
    
  );
}

export default ItemListContainer;

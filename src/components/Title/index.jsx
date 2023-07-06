import React from "react";
import '../Navbar/navBar.css';

export const Title = ({greeting}) =>{

    return(
        <h2 className="tituloProducto">{greeting}</h2>
    );
}

export default Title;
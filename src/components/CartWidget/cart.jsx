import React from "react";
import '../Navbar/navBar.css';

export const CartWidget = () => {

    return(
        <i className=" iconCart bi bi-bag-plus-fill" style={{ fontSize: '32px' }}><span>{0}</span></i>
    );
        
}
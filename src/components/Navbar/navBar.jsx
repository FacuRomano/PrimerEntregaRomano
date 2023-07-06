import React from "react"
import { CartWidget } from "../CartWidget/cart";
import './navBar.css'

const Navbar = () => {
    return(
        <nav className="navBar">
            <a href="#" className="logo"><h1>DecoGlass</h1></a>
            <ul className="listNav">
                <li className="listItem"><a href="#" className="menu-link">Inicio</a></li>
                <li className="listItem"><a href="#" className="menu-link">Nosotros</a></li>
                <li className="listItem"><a href="#" className="menu-link">Productos</a></li>
                <li className="listItem"><a href="#" className="menu-link">
                    <CartWidget /></a></li>
            </ul>
        </nav>
    );
}

export default Navbar
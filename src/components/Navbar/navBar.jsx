import React from "react"
import { CartWidget } from "../CartWidget/cart";
import LogoDeco from "../Logo/index";
import '../Navbar/navBar.css';

export const Navbar = () => {
    return(
        <nav className="navBar">
            <a href="#" className="logo">
                <LogoDeco /></a>
            <ul className="listNav">
                <li className="listItem"><a href="#" className="menu-link">Inicio</a></li>
                <li className="listItem"><a href="#" className="menu-link">Nosotros</a></li>
                <li className="listItem"><a href="#" className="menu-link">Galeria</a></li>
                <li className="listItem2"><a href="#" className="menu-link">
                    <CartWidget /></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
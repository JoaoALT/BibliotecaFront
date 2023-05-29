import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";
import logo from "./book.png";

export const NavBar = () => {
    return(
        <nav>
            <a href="index.html" title="book icons"><img src={logo} alt="logo" id="bibliogo"/></a>
            <ul id ="navbar">
                <li>
                    <a href="index.html" className="active">
                    <Link to ="/Lobby">Información general</Link>
                    </a>
                </li>
                <li>
                    <a href="index.html" className="active">
                        <Link to ="/Menu">Libros</Link>
                    </a>
                    
                </li>
                <li>
                    <a href="index.html" className="active">
                        <Link to ="/Reservas">Reservas</Link>
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}
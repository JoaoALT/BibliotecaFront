import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";
import logo from "./book.png";

export const NavBar = () => {
    return(
        <nav>
            <a href="https://www.flaticon.com/free-icons/book" title="book icons"><img src={logo} alt="logo" id="bibliogo"/></a>
            <ul id ="navbar">
                <li>
                    <a href="index.html" className="active">
                    <Link to ="/Lobby">About</Link>
                    </a>
                </li>
                <li>
                    <a href="index.html" className="active">
                        <Link to ="/Menu">Menu</Link>
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
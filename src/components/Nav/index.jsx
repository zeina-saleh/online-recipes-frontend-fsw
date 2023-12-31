import React from "react";
import "./style.css";

const Nav = ({handleOpenModal, handleOpenCalendarModal}) => {

    return (
        <>
        <nav className="navbar">
            <div className="navbar-brand">Foody Recipe</div>
            <ul className="navbar-list">
                <li className="navbar-item" onClick={handleOpenModal}>Add Recipe</li>
                <li className="navbar-item" onClick={handleOpenCalendarModal}>Calendar</li>
                <li className="navbar-item">Logout</li>
            </ul>
        </nav>
        </>
    );
};

export default Nav;
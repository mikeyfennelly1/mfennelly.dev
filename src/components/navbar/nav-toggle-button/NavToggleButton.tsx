"use client"

import './nav-toggle-button.css'
import {useContext} from "react";
import {NavContext} from "../Navbar";

const NavToggleButton = () => {
    const navContext = useContext(NavContext)

    if (!navContext) {
        throw new Error("NavToggleButton must be used within a NavContext.Provider");
    }

    const {isOpen} = navContext;

    return (
        <>
            <div id="toggle-button" onClick={navContext.toggleMenu}>
                <div id="menu-container">
                    <span className={`line ${isOpen ? "top-line-rotated" : ""}`} id="top-line"></span>
                    <span className={`line ${isOpen ? "bottom-line-rotated" : ""}`} id="bottom-line"></span>
                </div>
            </div>
        </>
    )
};

export default NavToggleButton;
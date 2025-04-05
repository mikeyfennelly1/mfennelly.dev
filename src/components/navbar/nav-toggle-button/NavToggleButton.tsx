"use client"

import './nav-toggle-button.css'
import {useContext} from "react";
import {NavContext} from "../Navbar";

const NavToggleButton = () => {
    const navContext = useContext(NavContext)

    if (!navContext) {
        throw new Error("NavBarComputer must be used within a NavContext.Provider");
    }

    const {menuActive} = navContext;

    return (
        <>
            <div id="menu-container">
                <span className={`line ${menuActive ? "top-line-rotated" : ""}`} id="top-line"></span>
                <span className={`line ${menuActive ? "bottom-line-rotated" : ""}`} id="bottom-line"></span>
            </div>
        </>
    )
};

export default NavToggleButton;
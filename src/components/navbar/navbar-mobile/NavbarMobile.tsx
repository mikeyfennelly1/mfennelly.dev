import "./nav-bar-mobile.css"

import NavToggleButton from "../nav-toggle-button/NavToggleButton";
import React, {useContext} from "react";
import {NavContext} from "../Navbar";

interface NavbarProps {
    logo: React.ReactNode
}

const NavBarMobile: React.FC<NavbarProps> = ({logo}) => {
    const navContext = useContext(NavContext)

    if (!navContext) {
        throw new Error("NavBarComputer must be used within a NavContext.Provider");
    }

    const {menuActive, setMenuActive} = navContext;

    const toggleMenuActive = (): void => {
        setMenuActive(!menuActive)
    }

    return (
        <>
            <nav>
                <div className="nav-items-container">
                    <div className={`logo-container ${menuActive ? "black-logo" : ""}`}>
                        {logo}
                    </div>
                    <div className="btn" id="toggle-btn" onClick={toggleMenuActive}>
                        <NavToggleButton></NavToggleButton>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBarMobile;
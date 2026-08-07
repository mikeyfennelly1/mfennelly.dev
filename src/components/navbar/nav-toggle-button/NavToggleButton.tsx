"use client"

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
            <div className="absolute right-[30px] z-[100] min-h-[40px] min-w-[40px]" onClick={navContext.toggleMenu}>
                <div className="absolute mx-[10px] mb-[10px] flex h-[5px] w-[20px] cursor-pointer justify-start">
                    <span
                        className={`absolute top-0 left-0 inline-block h-[1.25px] self-start bg-black transition-all duration-[250ms] ease-in-out ${
                            isOpen ? "ml-0 w-full translate-y-[2px] rotate-45 scale-110" : "ml-[20%] w-4/5"
                        }`}></span>
                    <span
                        className={`absolute top-[5px] left-0 inline-block h-[1.25px] w-[20px] self-end bg-black transition-all duration-[250ms] ease-in-out ${
                            isOpen ? "-translate-y-[2px] -rotate-45 scale-110" : ""
                        }`}></span>
                </div>
            </div>
        </>
    )
};

export default NavToggleButton;

"use client"

import './navbar.css'
import MFLogo from "@/components/mf-logo/MFLogo";
import {createContext, useEffect, useState} from "react";
import Link from "next/link";
import NavToggleButton from "@/components/navbar/nav-toggle-button/NavToggleButton";
import NavSlideout from "@/components/navbar/nav-slideout/NavSlideout";
import {NavigationMenuDemo} from "@/components/navbar/nav-menu/nav-menu";

export type link = {
    href: string;
    text: string;
    target?: "_blank" | "_self" | "_parent" | "_top"; // Optional property
}

interface NavContextType {
    isOpen: boolean;
    toggleMenu: () => void;
}

interface NavbarInterface {
    links: link[];
}

export const NavContext = createContext<NavContextType | undefined>(undefined);

export default function Navbar({links}: NavbarInterface) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        // Set initially
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav id={"parent-nav"} className={isAtTop ? "" : "navbar-backdrop"}>
                <div className={"mikey-logo"}>
                    <Link href={'/'}>
                        <MFLogo></MFLogo>
                    </Link>
                </div>
                <div id={"mobile-slideout"}>
                    <NavContext.Provider value={{ isOpen, toggleMenu }}>
                        <NavToggleButton></NavToggleButton>
                        <NavSlideout links={links}></NavSlideout>
                    </NavContext.Provider>
                </div>
                <div id="navbar-center">
                    <NavigationMenuDemo />
                </div>
            </nav>
        </>
    )
}

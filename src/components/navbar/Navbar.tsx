"use client"

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
            <nav
                className={`fixed top-0 z-[100] mx-auto flex max-w-[1200px] min-w-[100vw] items-center justify-center px-[30px] py-[25px] transition-all duration-1000 ${
                    isAtTop ? "" : "max-h-[75px] bg-white/10 shadow-[0_2px_5px_rgba(0,0,0,0.1)] backdrop-blur-[5px]"
                }`}>
                <div className={"absolute left-[30px] flex items-center"}>
                    <Link href={'/'}>
                        <MFLogo></MFLogo>
                    </Link>
                </div>
                <div className={"hidden max-[768px]:flex"}>
                    <NavContext.Provider value={{ isOpen, toggleMenu }}>
                        <NavToggleButton></NavToggleButton>
                        <NavSlideout links={links}></NavSlideout>
                    </NavContext.Provider>
                </div>
                <div className="flex items-center rounded-[5px] bg-white/50 max-[768px]:hidden">
                    <NavigationMenuDemo />
                </div>
            </nav>
        </>
    )
}

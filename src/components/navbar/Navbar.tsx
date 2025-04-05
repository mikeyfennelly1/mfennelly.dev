"use client"

import './navbar.css'
import MFLogo from "@/components/mf-logo/MFLogo";
import {createContext} from "react";
import Link from "next/link";

type link = {
    href: string;
    text: string;
    target?: "_blank" | "_self" | "_parent" | "_top"; // Optional property
}

interface NavContextType {
    menuActive: boolean;
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type filePath = string;

interface NavbarInterface {
    centerItems: link[];
}

export const NavContext = createContext<NavContextType | undefined>(undefined);

export default function Navbar({centerItems}: NavbarInterface) {
    return (
        <>
            <nav>
                <div>
                    <Link href={'/'}>
                        <MFLogo></MFLogo>
                    </Link>
                </div>
                <div className="navbar-center">
                    {centerItems.map((link, index) => (
                        <a href={link.href} target={link.target} key={index} className="navbar-item">
                        {link.text}
                    </a>
                    ))}
                </div>
            </nav>
        </>
    )
}

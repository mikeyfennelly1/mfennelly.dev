import "./nav-slideout.css"

import {useContext} from "react";
import {link, NavContext} from "@/components/navbar/Navbar";
import Link from "next/link";

interface NavSlideoutProps {
    links: link[];
}

export default function NavSlideout({links}: NavSlideoutProps) {
    const navContext = useContext(NavContext)

    if (!navContext) {
        throw new Error("NavSlideout must be used within a NavContext.Provider");
    }

    const {isOpen} = navContext;

    return (
        <>
            <div className={`slideout-menu ${isOpen ? "slideout-menu-active" : ""}`} id="nav-slideout">
                {links.map((link) => (
                    <Link
                        onClick={navContext.toggleMenu}
                        className={"nav-slideout-link"}
                        key={link.text}
                        href={link.href}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </>
    )
}
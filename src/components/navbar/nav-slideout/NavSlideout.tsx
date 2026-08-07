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
            <div
                id="nav-slideout"
                className={`fixed top-0 min-h-screen min-w-[100vw] bg-white px-[30px] py-[100px] transition-all duration-500 ease-in-out [&>*]:block [&>*]:text-[1.75rem] [&>*]:leading-[3.5rem] [&>*]:font-light ${
                    isOpen ? "right-0 opacity-100 pointer-events-auto" : "left-0 opacity-0 pointer-events-none"
                }`}>
                {links.map((link) => (
                    <Link
                        onClick={navContext.toggleMenu}
                        className={`transition-opacity delay-[250ms] duration-500 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
                        key={link.text}
                        href={link.href}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </>
    )
}

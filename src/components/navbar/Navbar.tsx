import './navbar.css'
import MFLogo from "@/components/mf-logo/MFLogo";

type link = {
    href: string;
    text: string;
    target?: "_blank" | "_self" | "_parent" | "_top"; // Optional property
}

type filePath = string;

interface NavbarInterface {
    centerItems: link[];
}

export default function Navbar({centerItems}: NavbarInterface) {
    return (
        <>
            <nav>
                <div>
                    <MFLogo></MFLogo>
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

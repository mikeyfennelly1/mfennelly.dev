import './navbar.css'

type link = {
    href: string;
    text: string;
    target?: "_blank" | "_self" | "_parent" | "_top"; // Optional property
}

type filePath = string;

interface NavbarInterface {
    centerItems: link[];
    topLeftImage: filePath;
}

export default function Navbar({centerItems, topLeftImage}: NavbarInterface) {
    return (
        <>
            <div>
                <div>
                    <img src={topLeftImage} alt=""/>
                </div>
                <div className="navbar-center">
                    {centerItems.map((link, index) => (
                        <a href={link.href} target={link.target} key={index} className="navbar-item">
                        {link.text}
                    </a>
                    ))}
                </div>
            </div>
        </>
    )
}

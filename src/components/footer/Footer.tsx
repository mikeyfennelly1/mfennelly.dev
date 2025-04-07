import "./footer.css"
import {GeistMono} from "geist/font/mono";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className={"large-separator medium-bottom-separator medium-padding-x"}>
                <div className={"footer-main"}>
                    <h1>Let's Work Together</h1>
                    <h3
                        id={"email-address"}
                        className={GeistMono.className} style={{fontWeight: 300}}>mikeyp.fennelly@gmail.com</h3>
                </div>
                <span className={"small-padding-bottom"}>
                    <Link href="https://www.linkedin.com/in/mikeyfennelly/" target={"_blank"} className={"link-text-separation"}>LinkedIn</Link>
                    <Link href="https://github.com/mikeyfennelly1" target={"_blank"} className={"link-text-separation"}>GitHub</Link>
                </span>
                <div className={"medium-separator light-border-top"}>
                    <p className={"small-separator"}>An eefenn website.</p>
                </div>
            </footer>
        </>
    )
}

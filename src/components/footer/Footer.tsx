import "./footer.css"
import {GeistMono} from "geist/font/mono";

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
                <span>
                    <a href="" className={"link-text-separation"}>LinkedIn</a>
                    <a href="" className={"link-text-separation"}>GitHub</a>
                </span>
                <div className={"medium-separator light-border-top"}>
                    <p className={"small-separator"}>An eefenn website.</p>
                </div>
            </footer>
        </>
    )
}

import {GeistMono} from "geist/font/mono";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className={"absolute bottom-0 mt-[60px] mb-[30px] w-full px-[50px] max-[799px]:mt-[50px]"}>
                <div className={"flex flex-wrap justify-between"}>
                    <h1>Let's Work Together</h1>
                    <h3
                        id={"email-address"}
                        className={`${GeistMono.className} max-[800px]:text-base`} style={{fontWeight: 300}}>mikeyp.fennelly@gmail.com</h3>
                </div>
                <span className={"pt-[50px]"}>
                    <Link href="https://www.linkedin.com/in/mikeyfennelly/" target={"_blank"} className={"mr-[10px]"}>LinkedIn</Link>
                    &nbsp;
                    <Link href="https://github.com/mikeyfennelly1" target={"_blank"} className={"mr-[10px]"}>GitHub</Link>
                </span>
                <div className={"border-t border-[#929292] py-[15px]"}>
                    <p className={"mt-[10px]"}>An eefenn website.</p>
                </div>
            </footer>
        </>
    )
}

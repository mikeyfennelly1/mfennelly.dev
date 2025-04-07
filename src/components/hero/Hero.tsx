import './hero.css'

import {GeistSans} from "geist/font/sans";
import ArrowLink from "@/components/arrow-link/ArrowLink";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className={"large-separator"}>
                <h1 className={GeistSans.className} style={{fontSize: "5rem"}}>Mikey Fennelly</h1>
                <div className={"small-separator"}>
                    <p>I am currently studying <span className={"bold"}>Immersive Software Engineering [ISE]</span> at the University of Limerick. I am a passionate technologist with a keen interest in Software Engineering, Artificial Intelligence and video creation and graphics.</p>
                    <p className={"medium-separator"}>When I'm not doing these things, I'm thinking about them!</p>
                </div>
                <Link href={"/about-me"}>
                    <ArrowLink href={'/about-me'} label={'About Me'}></ArrowLink>
                </Link>
            </div>
        </>
    )
}
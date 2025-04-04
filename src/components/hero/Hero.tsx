import './hero.css'

import {GeistSans} from "geist/font/sans";

export default function Hero() {
    return (
        <>
            <div className={"large-separator"}>
                <h1 className={GeistSans.className}>Mikey Fennelly</h1>
                <div className={"small-separator"}>
                    <p>I am currently studying <span className={"p-bold"}>Immersive Software Engineering [ISE]</span> at the University of Limerick. I am a passionate technologist with a keen interest in Software Engineering, Artificial Intelligence and video creation and graphics.</p>
                    <p>When I'm not doing these things, I'm thinking about them!</p>
                </div>
            </div>
        </>
    )
}
